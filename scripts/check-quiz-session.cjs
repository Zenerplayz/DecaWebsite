const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

function loadSource(file, scope = {}) {
  const output = ts.transpileModule(
    fs.readFileSync(path.join(__dirname, "..", file), "utf8"),
    { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } },
  ).outputText;
  const exports = {};
  new Function("exports", ...Object.keys(scope), output)(exports, ...Object.values(scope));
  return exports;
}

const { parseQuizAttempt, serializeQuizAttempt } = loadSource("src/lib/quiz-session.ts");
const question = {
  id: 7, clusterId: "marketing", category: "Research", difficulty: "easy",
  prompt: "Which method gathers primary data?", choices: ["Survey", "Archive", "Report", "Index"],
  correctIndex: 0, explanation: "Surveys gather new data.",
};
const second = { ...question, id: 12, prompt: "Second question" };
const bank = [question, second];
const shuffled = { ...question, choices: ["Report", "Index", "Survey", "Archive"], correctIndex: 2 };
const attempt = { deck: [second, shuffled], answers: { 7: 2 }, current: 1 };
const raw = serializeQuizAttempt(attempt);
assert.deepEqual(parseQuizAttempt(raw, bank), attempt);
assert.equal(parseQuizAttempt(raw, bank).deck[1].correctIndex, 2);
assert.equal(JSON.parse(raw).deck[0].explanation, undefined);

const invalid = (edit) => {
  const saved = JSON.parse(raw);
  edit(saved);
  assert.equal(parseQuizAttempt(JSON.stringify(saved), bank), null);
};
for (const input of [null, "{", "null", "[]", "{}", '"text"']) {
  assert.equal(parseQuizAttempt(input, bank), null);
}
invalid((s) => { s.version = 2; });
invalid((s) => { s.deck = []; });
invalid((s) => { s.deck[0].id = 999; });
invalid((s) => { s.deck[1].id = s.deck[0].id; });
invalid((s) => { s.deck[1].prompt = "Outdated question"; });
invalid((s) => { s.deck[1].choices[0] = "Changed option"; });
invalid((s) => { s.deck[1].choices = ["Survey", "Survey", "Survey", "Survey"]; });
invalid((s) => { s.current = 2; });
invalid((s) => { s.current = -1; });
invalid((s) => { s.current = 0.5; });
invalid((s) => { s.answers = { 999: 0 }; });
invalid((s) => { s.answers = { 7: 4 }; });
invalid((s) => { s.answers = { 7: -1 }; });
invalid((s) => { s.answers = { 7: "2" }; });
invalid((s) => { s.answers = { "07": 2 }; });

function permutations(values) {
  return values.length ? values.flatMap((value, index) =>
    permutations(values.filter((_, i) => i !== index)).map((tail) => [value, ...tail]),
  ) : [[]];
}
for (const choices of permutations(question.choices)) {
  const correctIndex = choices.indexOf("Survey");
  const saved = serializeQuizAttempt({ deck: [{ ...question, choices, correctIndex }], answers: { 7: correctIndex }, current: 0 });
  const restored = parseQuizAttempt(saved, bank);
  assert.equal(restored.deck[0].correctIndex, restored.answers[7]);
}

const data = new Map();
const listeners = new Map();
const windowStub = {
  sessionStorage: {
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => data.set(key, value),
    removeItem: (key) => data.delete(key),
  },
  addEventListener: (name, handler) => listeners.set(name, handler),
  removeEventListener: (name) => listeners.delete(name),
  dispatchEvent: (event) => listeners.get(event.type)?.(),
};
const store = loadSource("src/lib/quiz-session-store.ts", { window: windowStub, Event });
let notifications = 0;
const unsubscribe = store.subscribeToSavedQuiz(() => notifications++);
assert.equal(store.getServerQuiz(), null);
store.saveQuiz(raw);
assert.equal(store.getSavedQuiz(), raw);
assert.equal(notifications, 1);
store.saveQuiz(null);
assert.equal(store.getSavedQuiz(), null);
unsubscribe();
assert.equal(listeners.size, 0);
windowStub.sessionStorage.getItem = () => { throw new Error("Storage blocked"); };
windowStub.sessionStorage.setItem = () => { throw new Error("Quota exceeded"); };
windowStub.sessionStorage.removeItem = () => { throw new Error("Storage blocked"); };
assert.equal(store.getSavedQuiz(), null);
assert.doesNotThrow(() => store.saveQuiz(raw));
assert.doesNotThrow(() => store.saveQuiz(null));
console.log("Quiz session checks passed: shuffled grading, restored progress, stale/malformed data rejection, notifications, and blocked storage.");
