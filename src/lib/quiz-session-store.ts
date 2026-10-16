"use client";

const storageKey = "sycamore-deca:quiz:v1";
const changeEvent = "sycamore-deca:quiz-change";

export function getSavedQuiz(): string | null {
  try {
    return window.sessionStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

export function getServerQuiz(): null {
  return null;
}

export function subscribeToSavedQuiz(onChange: () => void): () => void {
  window.addEventListener(changeEvent, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function saveQuiz(raw: string | null): void {
  try {
    if (raw === null) window.sessionStorage.removeItem(storageKey);
    else window.sessionStorage.setItem(storageKey, raw);
    window.dispatchEvent(new Event(changeEvent));
  } catch {
    // Storage can be blocked or full. The test remains usable without saving.
  }
}
