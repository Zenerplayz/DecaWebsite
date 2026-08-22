import type { PracticeQuestion } from "@/data/types";

export const financeQuestions: PracticeQuestion[] = [
  {
    id: 3101,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "A bookkeeper records a cash sale by entering an amount in the debit column of the Cash account. What effect does a debit have on an asset account such as Cash?",
    choices: [
      "It decreases the account",
      "It has no effect on the account",
      "It converts the account into a liability",
      "It increases the account",
    ],
    correctIndex: 3,
    explanation:
      "Debits increase asset accounts and decrease liability and owner’s equity accounts. Since Cash is an asset, a debit entry increases its balance.",
  },
  {
    id: 3102,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "Which equation represents the fundamental accounting relationship that must always balance?",
    choices: [
      "Assets = Liabilities + Owner’s Equity",
      "Assets + Liabilities = Owner’s Equity",
      "Revenue = Expenses + Net Income",
      "Liabilities = Assets + Owner’s Equity",
    ],
    correctIndex: 0,
    explanation:
      "The accounting equation states that Assets = Liabilities + Owner’s Equity. Every transaction keeps this equation in balance.",
  },
  {
    id: 3103,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "When a business buys office supplies on account, both Supplies and Accounts Payable are affected. Recording both sides of this event reflects which accounting concept?",
    choices: [
      "The matching principle",
      "Double-entry bookkeeping",
      "Depreciation accounting",
      "Cash-basis reporting",
    ],
    correctIndex: 1,
    explanation:
      "Double-entry bookkeeping requires every transaction to affect at least two accounts, with total debits equaling total credits.",
  },
  {
    id: 3104,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "A delivery company spread the $40,000 cost of a new truck over the eight years it expects to use the truck, rather than expensing it all at once. This practice is called:",
    choices: [
      "Amortization of liabilities",
      "Inventory valuation",
      "Depreciation",
      "Accrued revenue",
    ],
    correctIndex: 2,
    explanation:
      "Depreciation allocates the cost of a long-term tangible asset, such as a truck, over its useful life instead of charging the entire cost to one period.",
  },
  {
    id: 3105,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "A graphic design firm completed work for a client who will pay the invoice in 30 days. How should the amount the client owes be classified?",
    choices: [
      "A current liability",
      "Owner’s equity",
      "A current asset (Accounts Receivable)",
      "A long-term investment",
    ],
    correctIndex: 2,
    explanation:
      "Amounts owed to a business by customers for sales made on credit are recorded as Accounts Receivable, a current asset expected to convert to cash within a year.",
  },
  {
    id: 3106,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "hard",
    prompt:
      "Under the accrual basis of accounting, when should a company record revenue?",
    choices: [
      "Only when the revenue is received in cash",
      "At the end of the fiscal year, regardless of activity",
      "When the revenue is earned, even if cash has not yet been received",
      "Only after the customer’s account has been audited",
    ],
    correctIndex: 2,
    explanation:
      "Accrual accounting recognizes revenue when it is earned and expenses when they are incurred, regardless of when cash changes hands.",
  },
  {
    id: 3107,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "Which type of account normally carries a credit balance?",
    choices: [
      "Accounts Payable",
      "Cash",
      "Prepaid Insurance",
      "Equipment",
    ],
    correctIndex: 0,
    explanation:
      "Liability accounts, such as Accounts Payable, normally have credit balances. Asset accounts like Cash, Prepaid Insurance, and Equipment normally carry debit balances.",
  },
  {
    id: 3108,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "hard",
    prompt:
      "At the end of the month, an accountant lists every ledger account with its balance to verify that total debits equal total credits. This report is called a:",
    choices: [
      "Statement of cash flows",
      "Chart of accounts",
      "Trial balance",
      "Ledger summary sheet",
    ],
    correctIndex: 2,
    explanation:
      "A trial balance lists all accounts and their balances to prove that total debits equal total credits before financial statements are prepared.",
  },
  {
    id: 3109,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "hard",
    prompt:
      "A business pays $3,600 in December for an insurance policy covering the next 12 months. At the end of December, how should the $3,600 be classified?",
    choices: [
      "As an expense, because cash was paid out",
      "As an asset (Prepaid Insurance)",
      "As accrued revenue",
      "As a current liability",
    ],
    correctIndex: 1,
    explanation:
      "Because the policy provides future benefit, the payment is recorded as an asset called Prepaid Insurance and expensed gradually as coverage is used up.",
  },
  {
    id: 3110,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "hard",
    prompt:
      "An accountant records the cost of goods sold in the same period as the related sales revenue rather than in the period the inventory was purchased. This follows the:",
    choices: [
      "Consistency principle",
      "Objectivity principle",
      "Full-disclosure principle",
      "Matching principle",
    ],
    correctIndex: 3,
    explanation:
      "The matching principle requires expenses to be recorded in the same period as the revenues they help generate, allowing accurate measurement of net income.",
  },
  {
    id: 3111,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "Under the 50/30/20 budgeting guideline, what portion of after-tax income should go toward savings and debt repayment?",
    choices: [
      "50 percent",
      "30 percent",
      "20 percent",
      "10 percent",
    ],
    correctIndex: 2,
    explanation:
      "The 50/30/20 rule allocates about 50 percent of after-tax income to needs, 30 percent to wants, and 20 percent to savings and debt repayment.",
  },
  {
    id: 3112,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "Most financial advisors recommend that an emergency fund contain enough money to cover approximately how long of living expenses?",
    choices: [
      "One week",
      "Three to six months",
      "Two years",
      "One month of gross salary only",
    ],
    correctIndex: 1,
    explanation:
      "An emergency fund should typically hold three to six months of essential living expenses to cover job loss or unexpected costs without going into debt.",
  },
  {
    id: 3113,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "Maria owns household items worth $18,000, a car worth $12,000, and has $9,000 in savings. She owes $21,000 in student loans and $3,000 on a credit card. What is Maria’s net worth?",
    choices: [
      "$63,000",
      "$39,000",
      "$15,000",
      "$24,000",
    ],
    correctIndex: 2,
    explanation:
      "Net worth equals total assets minus total liabilities: ($18,000 + $12,000 + $9,000) − ($21,000 + $3,000) = $39,000 − $24,000 = $15,000.",
  },
  {
    id: 3114,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "Jordan sets up an automatic transfer that moves $100 from checking to savings every payday before any bills are paid. This strategy is best described as:",
    choices: [
      "Paying yourself first",
      "Dollar-cost averaging into stocks",
      "Debt consolidation",
      "Reconciling an account",
    ],
    correctIndex: 0,
    explanation:
      "Paying yourself first means treating savings as a priority by setting aside money automatically before spending on anything else.",
  },
  {
    id: 3115,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "Which of the following is an example of a fixed expense in a personal budget?",
    choices: [
      "Monthly rent",
      "Groceries",
      "Entertainment",
      "Gasoline",
    ],
    correctIndex: 0,
    explanation:
      "A fixed expense stays the same each period, such as monthly rent. Groceries, gasoline, and entertainment fluctuate and are variable expenses.",
  },
  {
    id: 3116,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "How does compound interest differ from simple interest?",
    choices: [
      "Compound interest is paid only once per decade",
      "Compound interest is earned only on the original principal",
      "Compound interest is earned on principal plus previously earned interest",
      "Simple interest always produces a larger balance than compound interest",
    ],
    correctIndex: 2,
    explanation:
      "Simple interest is calculated only on the original principal, while compound interest is calculated on principal plus accumulated interest, causing balances to grow faster.",
  },
  {
    id: 3117,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "If the overall price level rises while Taylor’s income stays the same, the most direct effect on Taylor’s finances is that:",
    choices: [
      "Taylor’s purchasing power decreases",
      "Taylor’s net worth automatically increases",
      "Taylor’s tax bracket falls",
      "Taylor’s savings earn higher returns",
    ],
    correctIndex: 0,
    explanation:
      "Inflation raises the cost of goods and services. With unchanged income, each dollar buys less, so purchasing power declines.",
  },
  {
    id: 3118,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "Alex turns down a full-time job paying $38,000 a year to attend college full time. The $38,000 in forgone wages best illustrates which economic concept?",
    choices: [
      "Discretionary income",
      "Opportunity cost",
      "Collateral",
      "Liquidity preference",
    ],
    correctIndex: 1,
    explanation:
      "Opportunity cost is the value of the next-best alternative given up when a choice is made — here, the wages Alex sacrifices by attending college.",
  },
  {
    id: 3119,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "hard",
    prompt:
      "Priya needs cash quickly and wants to sell whichever of her holdings is the most liquid. Which asset should she choose?",
    choices: [
      "Her rental condominium",
      "Her checking account balance",
      "Her retirement account, which charges penalties for early withdrawal",
      "Her collectible coin collection",
    ],
    correctIndex: 1,
    explanation:
      "Liquidity measures how quickly an asset converts to cash without losing value. A checking account is essentially cash itself, making it the most liquid option listed.",
  },
  {
    id: 3120,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "After paying taxes and covering necessities such as housing, food, and transportation, Carmen has money left over each month for hobbies and travel. This leftover amount is called:",
    choices: [
      "Gross income",
      "Earned income credit",
      "Principal balance",
      "Discretionary income",
    ],
    correctIndex: 3,
    explanation:
      "Discretionary income is what remains after taxes and essential living expenses, available for saving, investing, or personal spending.",
  },
  {
    id: 3121,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "easy",
    prompt:
      "Devon is deciding whether his deposits at a commercial bank are safe. Under FDIC insurance, how much of his money is protected per depositor, per insured bank, per ownership category?",
    choices: [
      "$50,000",
      "$500,000",
      "$100,000",
      "$250,000",
    ],
    correctIndex: 3,
    explanation:
      "The Federal Deposit Insurance Corporation insures deposits up to $250,000 per depositor, per insured bank, per ownership category if the bank fails.",
  },
  {
    id: 3122,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "easy",
    prompt:
      "Which type of account is specifically designed for frequent day-to-day transactions such as writing checks and using a debit card?",
    choices: [
      "Certificate of deposit",
      "Money market fund",
      "Checking account",
      "Savings account",
    ],
    correctIndex: 2,
    explanation:
      "A checking account is built for regular transactions through checks, debit cards, and electronic transfers, while savings accounts are intended to hold money longer term.",
  },
  {
    id: 3123,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "easy",
    prompt:
      "When comparing two auto loans, the dealer points to each loan’s APR. APR stands for:",
    choices: [
      "Annual Percentage Rate",
      "Average Principal Return",
      "Applied Payment Reduction",
      "Adjusted Principal Ratio",
    ],
    correctIndex: 0,
    explanation:
      "APR stands for Annual Percentage Rate, which expresses the yearly cost of borrowing as a percentage so consumers can compare loan offers.",
  },
  {
    id: 3124,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "Nia wants to raise her credit score. Which factor generally carries the greatest weight in calculating the score?",
    choices: [
      "Length of credit history",
      "Types of credit used",
      "Recent credit inquiries",
      "Payment history",
    ],
    correctIndex: 3,
    explanation:
      "Payment history is typically the single largest factor in a credit score (about 35 percent), which is why paying bills on time matters most.",
  },
  {
    id: 3125,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "A bank agrees to lend Rosa money to buy a delivery van, with the agreement that the bank can repossess the van if she defaults. The van serves as:",
    choices: [
      "Equity capital",
      "Unsecured credit",
      "Collateral",
      "A line of credit",
    ],
    correctIndex: 2,
    explanation:
      "Collateral is property pledged to secure a loan. If the borrower defaults, the lender can seize the pledged asset to recover its loss.",
  },
  {
    id: 3126,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "Compared with a secured loan, an unsecured loan such as most credit card debt usually has:",
    choices: [
      "No approval requirements whatsoever",
      "Lower interest rates because the lender bears no risk",
      "Interest rates set directly by the federal government",
      "Higher interest rates because no collateral backs the debt",
    ],
    correctIndex: 3,
    explanation:
      "Without collateral, the lender has less protection if the borrower defaults, so unsecured loans typically charge higher interest rates than secured loans.",
  },
  {
    id: 3127,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "hard",
    prompt:
      "Marcus has a credit card with a $10,000 limit and currently carries a $2,800 balance. Why might a financial advisor tell him his situation is acceptable but warn against charging much more?",
    choices: [
      "Balances above $3,000 trigger federal penalties",
      "Card issuers cancel accounts whenever utilization exceeds 50 percent of one month’s spending",
      "Credit limits shrink automatically every time a balance is carried",
      "Keeping credit utilization below roughly 30 percent helps protect his credit score",
    ],
    correctIndex: 3,
    explanation:
      "Credit utilization — the share of available credit being used — strongly affects credit scores. Staying below about 30 percent of the limit is generally advised.",
  },
  {
    id: 3128,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "Lena pays only the minimum payment on her credit card each month. What is the most likely long-term consequence of this habit?",
    choices: [
      "She avoids all interest charges on the remaining balance",
      "She will pay significantly more interest and take much longer to pay off the debt",
      "Her creditor is required to forgive the remaining balance after one year",
      "Her credit score automatically improves regardless of her balance",
    ],
    correctIndex: 1,
    explanation:
      "Minimum payments mostly cover interest and fees, so the principal shrinks slowly, extending repayment and increasing total interest paid.",
  },
  {
    id: 3129,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "Omar pays his entire credit card statement balance by the due date listed on his bill each month. As a result, he typically:",
    choices: [
      "Pays interest only on new purchases",
      "Must pay a penalty fee for early payment",
      "Pays no interest on purchases because he uses the card’s grace period",
      "Earns reward points equal to the interest he avoided",
    ],
    correctIndex: 2,
    explanation:
      "The grace period is the window between the billing statement and the due date. Paying the full balance within it means no interest is charged on purchases.",
  },
  {
    id: 3130,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "hard",
    prompt:
      "Two savings accounts pay the same nominal annual rate. Account A credits simple interest while Account B credits interest compounded annually. After several years without withdrawals, which statement is true?",
    choices: [
      "Both accounts will have identical balances",
      "Account A will grow faster because simple interest avoids fees",
      "Neither account will earn anything after the first year",
      "Account B will have a higher balance because interest earns interest",
    ],
    correctIndex: 3,
    explanation:
      "With compounding, each period’s interest is added to the balance and then earns interest itself, so Account B pulls ahead of the simple-interest account over time.",
  },
  {
    id: 3131,
    clusterId: "finance",
    category: "Investments",
    difficulty: "easy",
    prompt:
      "When Isabelle buys shares of common stock in a technology company, what has she purchased?",
    choices: [
      "A loan to the company that matures on a set date",
      "An insurance contract on the company’s assets",
      "Partial ownership in the company",
      "A guaranteed dividend from the federal government",
    ],
    correctIndex: 2,
    explanation:
      "A share of common stock represents an ownership stake in a corporation, giving the holder a claim on part of the company’s assets and profits.",
  },
  {
    id: 3132,
    clusterId: "finance",
    category: "Investments",
    difficulty: "easy",
    prompt:
      "A corporate bond is best described as:",
    choices: [
      "A share of ownership in the issuing corporation",
      "A pooled fund managed by an investment company",
      "A short-term savings account at a commercial bank",
      "A loan to the issuer that pays interest and repays principal at maturity",
    ],
    correctIndex: 3,
    explanation:
      "When investors buy bonds, they lend money to the issuer — a corporation or government — which pays periodic interest and returns the principal at maturity.",
  },
  {
    id: 3133,
    clusterId: "finance",
    category: "Investments",
    difficulty: "easy",
    prompt:
      "A first-time investor with only $500 wants exposure to hundreds of different companies at once. Which investment best fits this goal?",
    choices: [
      "Shares of a single blue-chip company",
      "Corporate bonds from one issuer",
      "Certificates of deposit",
      "A mutual fund",
    ],
    correctIndex: 3,
    explanation:
      "A mutual fund pools money from many investors to buy a diversified portfolio of securities, giving small investors broad exposure with modest amounts.",
  },
  {
    id: 3134,
    clusterId: "finance",
    category: "Investments",
    difficulty: "easy",
    prompt:
      "Which statement best describes the general relationship between risk and potential return on investments?",
    choices: [
      "Risk and return are completely unrelated",
      "Higher potential returns generally come with higher risk",
      "Higher risk guarantees higher returns in every case",
      "Lower-risk investments always outperform over any time period",
    ],
    correctIndex: 1,
    explanation:
      "Investors generally demand greater potential rewards for accepting greater uncertainty, so higher-risk investments offer higher potential returns — with no guarantee of results.",
  },
  {
    id: 3135,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "Instead of putting all of his money into airline stocks, Theo spreads his investments across airlines, health care, software, and utilities. The main benefit of this strategy is that it:",
    choices: [
      "Guarantees his portfolio will never lose value",
      "Reduces the impact of any single industry performing poorly",
      "Eliminates the need to research his investments",
      "Ensures he earns the highest possible return each year",
    ],
    correctIndex: 1,
    explanation:
      "Diversification spreads risk across different industries and asset types, so losses in one holding may be offset by stability or gains in others.",
  },
  {
    id: 3136,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "A news anchor reports that the stock market has experienced a prolonged period of falling prices and widespread investor pessimism. This condition is known as a:",
    choices: [
      "Bull market",
      "Margin call",
      "Market correction fund",
      "Bear market",
    ],
    correctIndex: 3,
    explanation:
      "A bear market describes extended declining prices and pessimism, while a bull market refers to rising prices and optimism.",
  },
  {
    id: 3137,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "At the end of a profitable year, a corporation’s board votes to send each shareholder $0.75 for every share owned. This payment is called a:",
    choices: [
      "Dividend",
      "Capital gain",
      "Coupon payment",
      "Stock split",
    ],
    correctIndex: 0,
    explanation:
      "A dividend is a distribution of a company’s profits to its shareholders, usually in cash, as decided by the board of directors.",
  },
  {
    id: 3138,
    clusterId: "finance",
    category: "Investments",
    difficulty: "hard",
    prompt:
      "Maya begins investing $200 a month at age 22, while Devon invests the same amount monthly but waits until age 32. Assuming identical average returns, why will Maya’s account likely be far larger at age 62?",
    choices: [
      "Younger investors are exempt from taxes on investment gains",
      "Her money has ten extra years to compound and generate earnings on earnings",
      "Monthly contributions buy more shares for younger investors",
      "Investment firms charge older investors higher management fees",
    ],
    correctIndex: 1,
    explanation:
      "Time is a powerful force in compounding. Because Maya starts earlier, her contributions have more years to produce earnings, and those earnings compound as well.",
  },
  {
    id: 3139,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "Which of the following investments is generally the LEAST liquid?",
    choices: [
      "A rental property",
      "Shares of a large-company mutual fund redeemable daily",
      "A high-yield savings account",
      "Stock traded on the New York Stock Exchange",
    ],
    correctIndex: 0,
    explanation:
      "Real estate can take months to sell and involves significant transaction costs, making it far less liquid than publicly traded securities or savings accounts.",
  },
  {
    id: 3140,
    clusterId: "finance",
    category: "Investments",
    difficulty: "hard",
    prompt:
      "Sofia holds a bond paying 4 percent interest. Market interest rates then rise, so newly issued comparable bonds pay 6 percent. What is the most likely effect on the resale value of Sofia’s bond?",
    choices: [
      "Its value falls, because buyers can get a better rate from new bonds",
      "Its value doubles, because older bonds are rarer",
      "Its value rises, because its coupon payments increase immediately",
      "Its value is unaffected by market interest rates",
    ],
    correctIndex: 0,
    explanation:
      "Existing bonds with lower coupons become less attractive when new bonds pay higher rates, so their market prices decline to offer competitive effective yields.",
  },
  {
    id: 3141,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "easy",
    prompt:
      "Which financial statement shows a company’s assets, liabilities, and owner’s equity at a specific point in time?",
    choices: [
      "Income statement",
      "Balance sheet",
      "Statement of cash flows",
      "Statement of retained dividends",
    ],
    correctIndex: 1,
    explanation:
      "The balance sheet is a snapshot of financial position on a given date, listing what the company owns and owes and showing that assets equal liabilities plus equity.",
  },
  {
    id: 3142,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "easy",
    prompt:
      "A manager wants to see whether the business earned a profit during the past quarter. Which financial statement should she review?",
    choices: [
      "Income statement",
      "Balance sheet",
      "Trial balance worksheet",
      "Bank reconciliation statement",
    ],
    correctIndex: 0,
    explanation:
      "The income statement reports revenue and expenses over a period of time and reveals whether the company generated a net income or a net loss.",
  },
  {
    id: 3143,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "medium",
    prompt:
      "Which financial statement explains how a company’s cash position changed during the year, grouped into operating, investing, and financing activities?",
    choices: [
      "The statement of owner’s equity",
      "The statement of cash flows",
      "The balance sheet",
      "The income statement",
    ],
    correctIndex: 1,
    explanation:
      "The statement of cash flows tracks cash received and paid in operating, investing, and financing activities, showing why cash increased or decreased during the period.",
  },
  {
    id: 3144,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "easy",
    prompt:
      "During its first year, a bakery earned $85,000 in revenue and incurred $61,000 in expenses. What was the bakery’s net income?",
    choices: [
      "$146,000",
      "$24,000",
      "$61,000",
      "$85,000",
    ],
    correctIndex: 1,
    explanation:
      "Net income equals revenue minus expenses: $85,000 − $61,000 = $24,000.",
  },
  {
    id: 3145,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "hard",
    prompt:
      "A retailer reported sales of $120,000 and cost of goods sold of $74,000 for the year. Its gross profit was:",
    choices: [
      "$46,000",
      "$120,000",
      "$74,000",
      "$194,000",
    ],
    correctIndex: 0,
    explanation:
      "Gross profit equals net sales minus cost of goods sold: $120,000 − $74,000 = $46,000, before deducting operating expenses.",
  },
  {
    id: 3146,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "medium",
    prompt:
      "On a company’s balance sheet, total assets are $250,000 and total liabilities are $95,000. What is the owner’s equity?",
    choices: [
      "$345,000",
      "$95,000",
      "$155,000",
      "$250,000",
    ],
    correctIndex: 2,
    explanation:
      "Rearranging the accounting equation, Owner’s Equity = Assets − Liabilities: $250,000 − $95,000 = $155,000.",
  },
  {
    id: 3147,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "hard",
    prompt:
      "A firm has current assets of $60,000 and current liabilities of $40,000, giving a current ratio of 1.5. What does this ratio indicate?",
    choices: [
      "The firm cannot meet any of its obligations",
      "The firm has $1.50 of current assets for every $1.00 of current liabilities",
      "The firm’s liabilities exceed its assets by 50 percent",
      "The firm earns a 150 percent return on sales",
    ],
    correctIndex: 1,
    explanation:
      "The current ratio divides current assets by current liabilities. A ratio of 1.5 means the firm has $1.50 of short-term resources for every dollar of short-term debts, suggesting adequate near-term solvency.",
  },
  {
    id: 3148,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "hard",
    prompt:
      "Where does accumulated depreciation appear in a company’s financial statements?",
    choices: [
      "As revenue on the income statement",
      "As a current liability owed to the government",
      "As a deduction from equipment’s value on the balance sheet",
      "As cash inflow on the statement of cash flows",
    ],
    correctIndex: 2,
    explanation:
      "Accumulated depreciation is a contra-asset account shown on the balance sheet, subtracted from the equipment’s original cost to report its book value.",
  },
  {
    id: 3149,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "Ari promises to sell his laptop to Ben for $400, and Ben agrees to pay. The $400 and the laptop represent which required element of a valid contract?",
    choices: [
      "Capacity",
      "Legality",
      "Consideration",
      "Counteroffer",
    ],
    correctIndex: 2,
    explanation:
      "Consideration is the exchange of something of value between the parties — Ari’s laptop for Ben’s $400 — and is required for an enforceable contract.",
  },
  {
    id: 3150,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "A shareholder invests $5,000 in a corporation that later fails with heavy unpaid debts. Because of the corporate form of organization, the shareholder generally:",
    choices: [
      "Is liable for all of the corporation’s debts",
      "Must appear in court on behalf of the failed corporation",
      "Can lose only the amount invested in the company",
      "Assumes the debts personally unless a judge intervenes",
    ],
    correctIndex: 2,
    explanation:
      "Limited liability means shareholders are not personally responsible for corporate debts beyond the amount they invested in their shares.",
  },
  {
    id: 3151,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "hard",
    prompt:
      "Kai operates a landscaping business as a sole proprietorship. The business is sued successfully for $80,000, but the business has only $20,000 in assets. What is the legal consequence for Kai?",
    choices: [
      "Kai’s liability is capped at the business’s $20,000 in assets",
      "The judgment is discharged because sole proprietors cannot be sued personally",
      "Kai’s personal assets, such as savings and his home, can be reached to satisfy the debt",
      "Kai must reorganize as a partnership before the judgment can be enforced",
    ],
    correctIndex: 2,
    explanation:
      "A sole proprietor has unlimited personal liability — there is no legal separation between the owner and the business, so personal assets can satisfy business judgments.",
  },
  {
    id: 3152,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "hard",
    prompt:
      "Seventeen-year-old Riley signs a contract to purchase a car from a dealership. Under contract law, this agreement is generally considered:",
    choices: [
      "Voidable at Riley’s option, because minors lack full contractual capacity",
      "Void from the beginning and unenforceable by either party under all circumstances",
      "Fully binding, because signing a contract creates capacity",
      "Binding on Riley but voidable by the dealer",
    ],
    correctIndex: 0,
    explanation:
      "Minors generally lack full contractual capacity, so contracts they sign are voidable by the minor, protecting young people from improvident agreements.",
  },
  {
    id: 3153,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A beverage company registers its distinctive logo and slogan with the government so competitors cannot copy them. Which form of intellectual property protection applies?",
    choices: [
      "Patent",
      "Copyright",
      "Trade embargo",
      "Trademark",
    ],
    correctIndex: 3,
    explanation:
      "A trademark protects brand identifiers such as names, logos, and slogans. Patents cover inventions, and copyrights protect original creative works.",
  },
  {
    id: 3154,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A supplier fails to deliver materials promised under a signed agreement, forcing a manufacturer to buy substitutes at a higher price. The manufacturer’s proper legal response is to sue for:",
    choices: [
      "Bankruptcy protection",
      "Specific performance of a warranty",
      "Rescission of the statute of limitations",
      "Breach of contract and damages",
    ],
    correctIndex: 3,
    explanation:
      "Failing to perform contractual duties is a breach of contract, entitling the non-breaching party to seek damages, such as the extra cost of replacement materials.",
  },
  {
    id: 3155,
    clusterId: "finance",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "Consumers want unlimited goods and services, but society has finite land, labor, and capital. This fundamental condition is called:",
    choices: [
      "Scarcity",
      "Deflation",
      "Monopoly",
      "Surplus",
    ],
    correctIndex: 0,
    explanation:
      "Scarcity exists because human wants exceed the resources available to satisfy them, forcing individuals and societies to make choices.",
  },
  {
    id: 3156,
    clusterId: "finance",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "Inflation is best defined as:",
    choices: [
      "A sustained increase in the general level of prices over time",
      "A decline in the unemployment rate",
      "An increase in the value of currency relative to other currencies",
      "A rise in the stock market averages",
    ],
    correctIndex: 0,
    explanation:
      "Inflation refers to a persistent rise in the overall price level, which reduces the purchasing power of money.",
  },
  {
    id: 3157,
    clusterId: "finance",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "The current market price of a product sits well ABOVE its equilibrium price. Sellers find themselves with unsold inventory piling up. According to supply and demand theory, what will tend to happen?",
    choices: [
      "Buyers will bid the price further upward to secure scarce units",
      "The government must impose a price floor to clear the market",
      "Sellers will reduce output until demand disappears entirely",
      "Sellers will lower prices toward equilibrium until the surplus is eliminated",
    ],
    correctIndex: 3,
    explanation:
      "When price exceeds equilibrium, quantity supplied exceeds quantity demanded, creating a surplus. Competition among sellers pushes the price down toward equilibrium.",
  },
  {
    id: 3158,
    clusterId: "finance",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "To combat rising inflation, the Federal Reserve would most likely take which action?",
    choices: [
      "Raise interest rates to discourage borrowing and spending",
      "Lower reserve requirements to expand bank lending",
      "Print additional currency to stabilize prices directly",
      "Set maximum prices on consumer goods nationwide",
    ],
    correctIndex: 0,
    explanation:
      "By raising interest rates, the Fed makes borrowing more expensive, which slows spending and investment and helps restrain inflation.",
  },
  {
    id: 3159,
    clusterId: "finance",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "News reports state that real gross domestic product has declined for two consecutive quarters. Economists would commonly describe the economy as being in:",
    choices: [
      "Stagflation caused by monetary expansion",
      "A recovery phase driven by fiscal stimulus",
      "Full employment equilibrium",
      "A recession",
    ],
    correctIndex: 3,
    explanation:
      "A recession is a significant, broad decline in economic activity, often identified in practice by real GDP falling for two consecutive quarters.",
  },
  {
    id: 3160,
    clusterId: "finance",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Gross domestic product (GDP) measures:",
    choices: [
      "The total value of goods and services produced within a country during a given period",
      "The combined profits of a nation’s fifty largest corporations",
      "The total wealth held by a country’s households",
      "The number of workers employed by national manufacturers",
    ],
    correctIndex: 0,
    explanation:
      "GDP is the market value of all final goods and services produced within a country’s borders during a specific period, serving as the primary gauge of economic output.",
  },
  {
    id: 3161,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "Which document provides written evidence that a business transaction occurred and supports the entry made in the journal?",
    choices: [
      "A source document, such as an invoice or receipt",
      "The trial balance",
      "The statement of owner’s equity",
      "A ledger posting reference",
    ],
    correctIndex: 0,
    explanation:
      "Source documents — invoices, receipts, checks, purchase orders — provide objective proof that a transaction took place and justify each journal entry.",
  },
  {
    id: 3162,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "In double-entry accounting, what must always be true about every recorded transaction?",
    choices: [
      "Total debits must equal total credits",
      "Every account involved must increase",
      "Cash must be affected in every entry",
      "Revenue must exceed expenses",
    ],
    correctIndex: 0,
    explanation:
      "Double-entry accounting requires that for every transaction, total debits equal total credits, keeping the accounting equation in balance.",
  },
  {
    id: 3163,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "Transferring information from the general journal to the individual accounts in the general ledger is called:",
    choices: [
      "Reconciling",
      "Posting",
      "Closing",
      "Amortizing",
    ],
    correctIndex: 1,
    explanation:
      "Posting is the process of copying debit and credit amounts from the journal into the corresponding ledger accounts.",
  },
  {
    id: 3164,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "What is the purpose of a chart of accounts?",
    choices: [
      "To record daily transactions in chronological order",
      "To list all accounts used by a business with their assigned numbers",
      "To prove debits equal credits at period end",
      "To calculate depreciation on fixed assets",
    ],
    correctIndex: 1,
    explanation:
      "A chart of accounts is an organized listing of every account a business uses — assets, liabilities, equity, revenue, and expenses — usually with numbering for easy identification.",
  },
  {
    id: 3165,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "An owner withdraws $500 cash from the business for personal use. Which account is debited?",
    choices: [
      "Cash",
      "Sales",
      "Owner’s Drawing (Withdrawals)",
      "Accounts Payable",
    ],
    correctIndex: 2,
    explanation:
      "Withdrawals reduce owner’s equity, and the drawing account is debited to track them; Cash is credited because it decreases.",
  },
  {
    id: 3166,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "Unearned revenue appears on the balance sheet as a(n):",
    choices: [
      "Asset, because cash was received",
      "Expense, because it will be earned later",
      "Liability, because the business owes goods or services",
      "Contra-revenue account",
    ],
    correctIndex: 2,
    explanation:
      "When a customer pays before goods or services are delivered, the business has an obligation to perform, so unearned revenue is recorded as a liability until it is earned.",
  },
  {
    id: 3167,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "A company pays its employees every Friday for the week worked. The fiscal month ends on Wednesday, but wages through Wednesday have not yet been paid or recorded. What adjusting entry is required?",
    choices: [
      "Debit Wages Payable; credit Wages Expense",
      "Debit Wages Expense; credit Wages Payable",
      "Debit Cash; credit Wages Expense",
      "No entry is needed until payday",
    ],
    correctIndex: 1,
    explanation:
      "Wages earned but unpaid at period end are an accrued expense: debit Wages Expense to match costs to the period, and credit Wages Payable to record the obligation.",
  },
  {
    id: 3168,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "Which sequence correctly orders the steps of the accounting cycle?",
    choices: [
      "Post transactions → Analyze transactions → Prepare financial statements → Journalize transactions",
      "Analyze transactions → Journalize → Post → Prepare trial balance → Prepare financial statements",
      "Prepare financial statements → Journalize → Post → Close the books",
      "Journalize → Prepare trial balance → Analyze transactions → Post",
    ],
    correctIndex: 1,
    explanation:
      "The accounting cycle runs: analyze transactions, journalize them, post to the ledger, prepare a trial balance, make adjustments, then prepare financial statements and close the books.",
  },
  {
    id: 3169,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "A machine costs $24,000, has an estimated salvage value of $4,000, and a useful life of five years. Using straight-line depreciation, what is the annual depreciation expense?",
    choices: [
      "$4,800",
      "$4,000",
      "$5,600",
      "$24,000",
    ],
    correctIndex: 1,
    explanation:
      "Straight-line depreciation = (Cost − Salvage Value) ÷ Useful Life = ($24,000 − $4,000) ÷ 5 = $4,000 per year. Choosing $4,800 incorrectly ignores salvage value.",
  },
  {
    id: 3170,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "During bank reconciliation, which item is added to the bank statement balance?",
    choices: [
      "Outstanding checks",
      "Deposits in transit",
      "Bank service charges",
      "NSF checks returned",
    ],
    correctIndex: 1,
    explanation:
      "Deposits in transit have been recorded by the company but not yet by the bank, so they are added to the bank balance. Outstanding checks are subtracted from it.",
  },
  {
    id: 3171,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "A company uses FIFO inventory costing. It buys 10 units at $5 each, then 10 units at $7 each, and sells 12 units. What is cost of goods sold?",
    choices: [
      "$84",
      "$60",
      "$64",
      "$70",
    ],
    correctIndex: 2,
    explanation:
      "FIFO assumes the oldest units sell first: 10 units × $5 = $50 plus 2 units × $7 = $14, giving COGS of $64. LIFO would instead use the newest ($7) units first.",
  },
  {
    id: 3172,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "hard",
    prompt:
      "Same purchases as before — 10 units at $5 and 10 units at $7 — with 12 units sold, but under LIFO costing. What is cost of goods sold?",
    choices: [
      "$64",
      "$80",
      "$60",
      "$74",
    ],
    correctIndex: 1,
    explanation:
      "LIFO assumes the most recent purchases sell first: 10 units × $7 = $70 plus 2 units × $5 = $10, so COGS is $80. In periods of rising prices, LIFO yields higher COGS and lower net income than FIFO.",
  },
  {
    id: 3173,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "At the end of the accounting period, revenues and expenses are transferred to which temporary account before closing to capital?",
    choices: [
      "Retained earnings ledger",
      "Income Summary",
      "Owner’s Drawing account",
      "Accumulated Depreciation",
    ],
    correctIndex: 1,
    explanation:
      "Closing entries first move revenue and expense balances into Income Summary, whose resulting net income or loss is then closed to the owner’s capital or retained earnings.",
  },
  {
    id: 3174,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "Which of the following is considered a permanent (real) account that is NOT closed at the end of the period?",
    choices: [
      "Rent Expense",
      "Service Revenue",
      "Accumulated Depreciation",
      "Income Summary",
    ],
    correctIndex: 2,
    explanation:
      "Permanent accounts — assets, liabilities, and equity accounts such as Accumulated Depreciation — carry their balances forward. Revenue, expense, drawing, and Income Summary accounts are temporary and closed each period.",
  },
  {
    id: 3175,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "A customer pays $1,200 in advance for a six-month service contract. One month of service has now been provided. What adjustment recognizes the earned portion?",
    choices: [
      "Debit Unearned Revenue $200; credit Service Revenue $200",
      "Debit Cash $200; credit Unearned Revenue $200",
      "Debit Service Revenue $1,200; credit Accounts Receivable $1,200",
      "Debit Unearned Revenue $1,200; credit Service Revenue $1,200",
    ],
    correctIndex: 0,
    explanation:
      "One month of the six-month contract equals $1,200 ÷ 6 = $200 earned. The entry reduces the liability (debit Unearned Revenue) and recognizes revenue (credit Service Revenue).",
  },
  {
    id: 3176,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "hard",
    prompt:
      "An accountant finds the trial balance is out of balance by exactly $270. The difference is evenly divisible by 9. This most strongly suggests which type of error?",
    choices: [
      "A transposition error, such as recording $930 as $390",
      "An omitted journal entry",
      "A journal entry posted twice",
      "An entry recorded in the wrong account but correct amount",
    ],
    correctIndex: 0,
    explanation:
      "Out-of-balance differences divisible by 9 typically indicate transposed digits. Omitted entries throw off both sides equally, and misclassifications don’t affect the trial balance totals at all.",
  },
  {
    id: 3177,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "Under the allowance method, writing off a specific customer’s uncollectible account has what effect?",
    choices: [
      "It decreases total assets and decreases net income",
      "It increases expenses immediately when written off",
      "It has no effect on total assets or net income",
      "It increases the Allowance for Doubtful Accounts",
    ],
    correctIndex: 2,
    explanation:
      "Writing off an account reduces Accounts Receivable and reduces the Allowance by the same amount, leaving net realizable value, total assets, and net income unchanged — the expense was already estimated earlier.",
  },
  {
    id: 3178,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "Purchase terms of “2/10, n/30” mean the buyer may take:",
    choices: [
      "A 2 percent discount if payment is made within 10 days, otherwise full payment in 30 days",
      "A 10 percent discount if paid within 2 days",
      "30 days to pay plus 2 percent interest per month",
      "Delivery within 10 days and payment within 30 days",
    ],
    correctIndex: 0,
    explanation:
      "The notation means a 2 percent cash discount is available if the invoice is paid within 10 days; otherwise the full amount is due within 30 days.",
  },
  {
    id: 3179,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "Goods are shipped FOB shipping point. Who legally pays the transportation costs, and when does the buyer record the inventory purchase?",
    choices: [
      "Seller pays freight; buyer records when goods arrive",
      "Buyer pays freight; buyer records when goods are delivered",
      "Buyer pays freight; buyer records ownership when goods leave the seller",
      "Seller pays freight; buyer records when the invoice is paid",
    ],
    correctIndex: 2,
    explanation:
      "FOB shipping point transfers title to the buyer when the carrier takes possession, so the buyer owns the goods (and pays freight) while they are in transit.",
  },
  {
    id: 3180,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "hard",
    prompt:
      "Equipment purchased for $18,000 has accumulated depreciation of $11,000. If it is sold for $9,000 cash, what is the result?",
    choices: [
      "A $2,000 gain on disposal",
      "A $2,000 loss on disposal",
      "A $9,000 gain on disposal",
      "No gain or loss, since book value is recovered",
    ],
    correctIndex: 0,
    explanation:
      "Book value is $18,000 − $11,000 = $7,000. Selling for $9,000 produces a gain of $2,000 over book value.",
  },
  {
    id: 3181,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "Which internal control principle is violated when one employee both handles cash receipts and records them in the ledger?",
    choices: [
      "Establishment of responsibility for a single task",
      "Segregation of duties",
      "Bonding of employees",
      "Use of prenumbered documents",
    ],
    correctIndex: 1,
    explanation:
      "Segregation of duties requires that custody of assets be separated from recordkeeping, reducing the opportunity for theft to be concealed.",
  },
  {
    id: 3182,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "A note payable of $10,000 is signed at 6 percent annual interest for 90 days. How much interest accrues? (Use a 360-day year.)",
    choices: [
      "$600",
      "$150",
      "$60",
      "$450",
    ],
    correctIndex: 1,
    explanation:
      "Interest = Principal × Rate × Time = $10,000 × 0.06 × (90/360) = $150.",
  },
  {
    id: 3183,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "hard",
    prompt:
      "A physical count shows merchandise inventory of $41,000, but the perpetual inventory records show $43,500. The $2,500 difference is recorded as:",
    choices: [
      "A reduction of sales revenue",
      "Inventory shrinkage, debited to Cost of Goods Sold (or Shrinkage Expense)",
      "An increase to Accounts Payable",
      "A deferred charge amortized over the next year",
    ],
    correctIndex: 1,
    explanation:
      "When physical inventory falls below book records, the shortage — from theft, damage, or miscounting — is charged as shrinkage, typically debited to Cost of Goods Sold.",
  },
  {
    id: 3184,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "Which of the following would appear as a current liability on a classified balance sheet?",
    choices: [
      "Mortgage payable due over 20 years",
      "The portion of long-term debt due within the coming year",
      "Accumulated depreciation on delivery vehicles",
      "Land held for future expansion",
    ],
    correctIndex: 1,
    explanation:
      "Current liabilities are obligations due within one year, including the current portion of long-term debt. Long-dated mortgages and land are noncurrent items, and accumulated depreciation is a contra asset.",
  },
  {
    id: 3185,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "hard",
    prompt:
      "A retailer sells extended warranties that cover repairs during the year after sale. Under accrual accounting and the matching principle, when should warranty repair costs be expensed?",
    choices: [
      "In the period the products are sold, using a reasonable estimate",
      "Only when each repair actually occurs",
      "Evenly over the store’s fiscal years regardless of sales",
      "When customers pay for the warranties in cash",
    ],
    correctIndex: 0,
    explanation:
      "The matching principle requires estimated warranty expense to be recognized in the same period as the related sales, even though actual repairs happen later.",
  },
  {
    id: 3186,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "A company records a $900 utility bill received in December, to be paid in January. Under accrual accounting, this entry is an example of recording a(n):",
    choices: [
      "Prepaid expense",
      "Accrued expense",
      "Deferred revenue",
      "Contra asset",
    ],
    correctIndex: 1,
    explanation:
      "An accrued expense is one incurred but not yet paid — the utility was used in December, so the expense and payable are recorded then, not when cash is paid.",
  },
  {
    id: 3187,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "In a T-account for Accounts Receivable, on which side are collections from customers recorded?",
    choices: [
      "The debit (left) side",
      "The credit (right) side",
      "Both sides equally",
      "Neither side; collections go only to Cash",
    ],
    correctIndex: 1,
    explanation:
      "Accounts Receivable is an asset with a normal debit balance. Collections reduce the receivable, so they are credited.",
  },
  {
    id: 3188,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "Which statement about cash-basis and accrual-basis accounting is correct?",
    choices: [
      "Both methods always report identical net income",
      "Cash basis recognizes revenue when earned; accrual basis when received",
      "Accrual basis matches revenues with related expenses better than cash basis",
      "GAAP requires small businesses to use cash-basis reporting",
    ],
    correctIndex: 2,
    explanation:
      "Accrual accounting aligns revenues with the expenses that generated them in the same period, giving a truer picture of performance than simply tracking cash movement.",
  },
  {
    id: 3189,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "hard",
    prompt:
      "A firm’s net credit sales are $500,000 and average accounts receivable are $50,000. What is its accounts receivable turnover, and roughly what does it imply?",
    choices: [
      "5 times; customers take about 73 days to pay",
      "10 times; customers take about 36–37 days to pay",
      "10 times; customers take about 10 days to pay",
      "0.1 times; most sales are uncollectible",
    ],
    correctIndex: 1,
    explanation:
      "Turnover = Net Credit Sales ÷ Average AR = $500,000 ÷ $50,000 = 10 times per year, meaning receivables convert to cash about every 365 ÷ 10 ≈ 36.5 days.",
  },
  {
    id: 3190,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "Paying this month’s rent in cash has what effect on the expanded accounting equation?",
    choices: [
      "Assets decrease and expenses increase, reducing owner’s equity",
      "Assets stay the same because cash becomes rent",
      "Liabilities increase and equity increases",
      "Revenue decreases and assets increase",
    ],
    correctIndex: 0,
    explanation:
      "Cash (an asset) falls while rent expense rises; expenses reduce owner’s equity, so both sides of the equation decrease equally and remain balanced.",
  },
  {
    id: 3191,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "A well-written financial goal should be specific, measurable, achievable, relevant, and time-bound. These criteria form which planning framework?",
    choices: [
      "SMART goals",
      "The Rule of 72",
      "The debt snowball method",
      "The 80/20 principle",
    ],
    correctIndex: 0,
    explanation:
      "SMART is the standard framework for goal setting: Specific, Measurable, Achievable, Relevant, and Time-bound objectives are far easier to plan and track.",
  },
  {
    id: 3192,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "On Elena’s paycheck, gross pay is $2,400 but her direct deposit is only $1,860. The difference is best explained by:",
    choices: [
      "Employer retirement matching contributions",
      "Payroll deductions such as taxes and insurance premiums",
      "Her employer’s profit-sharing distribution",
      "Interest earned on her checking account",
    ],
    correctIndex: 1,
    explanation:
      "Net pay equals gross pay minus mandatory and voluntary deductions — federal and state income tax, FICA, health premiums, and similar withholdings.",
  },
  {
    id: 3193,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "FICA taxes withheld from most U.S. paychecks primarily fund which programs?",
    choices: [
      "Unemployment insurance and workers’ compensation",
      "Social Security and Medicare",
      "Federal income tax refunds",
      "Public education and highways",
    ],
    correctIndex: 1,
    explanation:
      "The Federal Insurance Contributions Act tax funds Social Security retirement benefits and Medicare health coverage for older and disabled Americans.",
  },
  {
    id: 3194,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "hard",
    prompt:
      "A taxpayer in the 22 percent marginal bracket can choose between a $1,000 tax credit or a $1,000 above-the-line deduction. Which saves more tax, and by how much?",
    choices: [
      "They save identical amounts — $220 each",
      "The deduction saves more — $1,000 versus $220",
      "The credit saves more — $1,000 versus $220",
      "Neither affects tax owed unless itemizing",
    ],
    correctIndex: 2,
    explanation:
      "A credit reduces tax owed dollar-for-dollar ($1,000), while a $1,000 deduction only reduces taxable income, saving $1,000 × 22% = $220.",
  },
  {
    id: 3195,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "A tax system in which higher income levels are taxed at progressively higher rates is called:",
    choices: [
      "A regressive tax system",
      "A progressive tax system",
      "A proportional flat tax",
      "An excise-based system",
    ],
    correctIndex: 1,
    explanation:
      "Progressive taxation applies increasing rates as income rises, so higher earners pay a larger share of income in tax — the structure of the U.S. federal income tax.",
  },
  {
    id: 3196,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "Why do many workers contribute to a 401(k) at least up to their employer’s full match?",
    choices: [
      "Matching contributions are exempt from required minimum distributions",
      "The match is essentially free compensation that immediately boosts retirement savings",
      "Matched funds avoid all future taxation permanently",
      "Unmatched contributions are penalized by the IRS",
    ],
    correctIndex: 1,
    explanation:
      "An employer match adds money you would otherwise never receive — an instant return on your contribution. Taxes are merely deferred, not eliminated.",
  },
  {
    id: 3197,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "How does a Roth retirement account differ from a traditional IRA?",
    choices: [
      "Roth contributions are taxed now, but qualified withdrawals are tax-free later",
      "Roth contributions are deductible today and taxed at withdrawal",
      "Roth accounts have no contribution limits",
      "Roth accounts may only hold bonds and savings deposits",
    ],
    correctIndex: 0,
    explanation:
      "Roth accounts use after-tax dollars, so growth and qualified withdrawals are tax-free; traditional accounts defer tax until withdrawal.",
  },
  {
    id: 3198,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "hard",
    prompt:
      "Jordan pays $1,200 per year for renters insurance with a $500 deductible. A fire destroys $6,500 of personal property. How much will the insurer pay?",
    choices: [
      "$6,500",
      "$6,000",
      "$7,000",
      "$5,500",
    ],
    correctIndex: 1,
    explanation:
      "The insurer pays the loss minus the deductible: $6,500 − $500 = $6,000. Premiums already paid are the cost of coverage, not subtracted from claims.",
  },
  {
    id: 3199,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "Which type of auto insurance pays for damage you cause to another person’s vehicle or property?",
    choices: [
      "Collision coverage",
      "Comprehensive coverage",
      "Liability coverage",
      "Gap insurance",
    ],
    correctIndex: 2,
    explanation:
      "Liability coverage pays others when you are at fault. Collision covers your own car in accidents, comprehensive covers theft/weather damage, and gap insurance covers loan shortfalls.",
  },
  {
    id: 3200,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "Term life insurance differs from whole life insurance primarily because term life:",
    choices: [
      "Builds cash value that the policyholder can borrow against",
      "Provides pure death benefit protection for a set period at lower cost",
      "Covers medical expenses during hospitalization",
      "Guarantees coverage for the insured’s entire lifetime",
    ],
    correctIndex: 1,
    explanation:
      "Term life covers a fixed period with no savings component, making it much cheaper; whole life lasts a lifetime and builds cash value but costs far more.",
  },
  {
    id: 3201,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "hard",
    prompt:
      "$2,000 is deposited in an account paying 5 percent simple interest. What will the balance be after 3 years?",
    choices: [
      "$2,315.25",
      "$2,300.00",
      "$2,150.00",
      "$2,102.50",
    ],
    correctIndex: 1,
    explanation:
      "Simple interest = $2,000 × 0.05 × 3 = $300, so the balance is $2,300. Compounding would yield slightly more ($2,315.25), but simple interest earns nothing on interest.",
  },
  {
    id: 3202,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "A health insurance plan has a $1,500 deductible and 20 percent coinsurance after that. Maya incurs $5,500 in covered medical bills. How much does she pay out of pocket (before premiums)?",
    choices: [
      "$1,500",
      "$2,300",
      "$800",
      "$3,500",
    ],
    correctIndex: 1,
    explanation:
      "Maya pays the first $1,500 deductible, then 20 percent of the remaining $4,000 = $800, for a total of $2,300.",
  },
  {
    id: 3203,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "Which action best protects against identity theft?",
    choices: [
      "Carrying your Social Security card in your wallet daily",
      "Sharing account passwords with close friends for safekeeping",
      "Reviewing bank and credit card statements regularly and using strong unique passwords",
      "Answering calls from your “bank” to verify account numbers",
    ],
    correctIndex: 2,
    explanation:
      "Monitoring statements catches fraud early, and strong unique passwords limit account access. Carrying sensitive documents, sharing passwords, and disclosing information to callers all increase risk.",
  },
  {
    id: 3204,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "A friend asks you to co-sign a $15,000 loan. What is the most important financial consequence you should understand before agreeing?",
    choices: [
      "You earn interest on the loan as a co-lender",
      "You become legally responsible for the full debt if the borrower fails to pay",
      "Your liability is limited to half the loan balance",
      "Co-signing improves your credit score automatically",
    ],
    correctIndex: 1,
    explanation:
      "A co-signer guarantees repayment — missed payments damage your credit and the lender can pursue you for the entire balance, not a partial share.",
  },
  {
    id: 3205,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "Renting a home rather than buying one offers which main advantage?",
    choices: [
      "Payments build equity in the property over time",
      "Greater flexibility to move and fewer maintenance responsibilities",
      "Guaranteed fixed housing costs forever",
      "Automatic property tax deductions on federal returns",
    ],
    correctIndex: 1,
    explanation:
      "Leases offer mobility and landlords typically handle repairs. Renters build no equity, and rent can rise at renewal.",
  },
  {
    id: 3206,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "hard",
    prompt:
      "Using the Rule of 72, approximately how many years will it take an investment earning 8 percent annually to double in value?",
    choices: [
      "About 8 years",
      "About 9 years",
      "About 12 years",
      "About 16 years",
    ],
    correctIndex: 1,
    explanation:
      "Rule of 72: doubling time ≈ 72 ÷ annual return = 72 ÷ 8 = 9 years.",
  },
  {
    id: 3207,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "Which document summarizes what you own and what you owe, used to measure overall financial position?",
    choices: [
      "A personal net worth statement (balance sheet)",
      "A pay stub",
      "A monthly budget worksheet",
      "An insurance declaration page",
    ],
    correctIndex: 0,
    explanation:
      "A personal balance sheet lists assets and liabilities; their difference is net worth, the key measure of financial position at a point in time.",
  },
  {
    id: 3208,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "Sam already spent $40 on a concert ticket but decides the event no longer appeals to him. A rational financial decision about attending should:",
    choices: [
      "Force him to attend so the $40 is not wasted",
      "Ignore the $40 as a sunk cost and decide based on whether tonight’s experience is worth it",
      "Count the $40 twice to discourage future ticket purchases",
      "Require him to resell the ticket regardless of price offered",
    ],
    correctIndex: 1,
    explanation:
      "The $40 is already spent and unrecoverable — a sunk cost. Rational decisions weigh only future benefits against future costs.",
  },
  {
    id: 3209,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "Which three national credit bureaus compile consumer credit reports in the United States?",
    choices: [
      "Visa, Mastercard, and American Express",
      "Equifax, Experian, and TransUnion",
      "FICO, FDIC, and FTC",
      "Wells Fargo, Chase, and Citibank",
    ],
    correctIndex: 1,
    explanation:
      "Equifax, Experian, and TransUnion collect credit data and sell reports to lenders. FICO creates scoring models, while Visa/Mastercard are payment networks.",
  },
  {
    id: 3210,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "hard",
    prompt:
      "A payday lender offers $400 for two weeks with a $60 fee. Expressed as an annualized rate, this borrowing cost is closest to:",
    choices: [
      "15 percent APR",
      "60 percent APR",
      "195 percent APR",
      "390 percent APR",
    ],
    correctIndex: 3,
    explanation:
      "The fee is 15% for two weeks; annualized: 15% × (52 ÷ 2) = 390% APR — which is why payday loans are considered predatory.",
  },
  {
    id: 3211,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "easy",
    prompt:
      "A certificate of deposit (CD) typically pays a higher interest rate than a regular savings account because:",
    choices: [
      "The government subsidizes CD rates",
      "Funds must be left on deposit for a fixed term, giving the bank predictable money to lend",
      "CDs are insured by a different federal agency",
      "CD rates float daily with the stock market",
    ],
    correctIndex: 1,
    explanation:
      "In exchange for locking up funds until maturity, the bank rewards savers with higher rates. Early withdrawal usually triggers a penalty.",
  },
  {
    id: 3212,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "easy",
    prompt:
      "Writing a check for more money than is in your checking account will most likely result in:",
    choices: [
      "An automatic loan approval from the bank",
      "An overdraft fee or the item being returned unpaid",
      "A higher credit score for handling credit flexibly",
      "No consequence if the check is deposited within a week",
    ],
    correctIndex: 1,
    explanation:
      "Banks either cover the shortfall and charge an overdraft fee, or bounce the check — both costly outcomes that can also trigger merchant fees.",
  },
  {
    id: 3213,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "Compared with commercial banks, credit unions are distinctive because they:",
    choices: [
      "Are owned by depositors who share a common bond and are nonprofit cooperatives",
      "Offer no checking accounts or loans",
      "Are regulated by the stock exchange rather than federal agencies",
      "Pay no interest on any account type",
    ],
    correctIndex: 0,
    explanation:
      "Credit unions are member-owned nonprofits, often letting them charge lower loan rates and pay slightly better deposit rates than shareholder-owned banks.",
  },
  {
    id: 3214,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "Which payment method guarantees the recipient that the bank itself has already set aside the funds?",
    choices: [
      "A personal check",
      "A cashier’s check",
      "An ACH transfer initiated next week",
      "A postdated personal check",
    ],
    correctIndex: 1,
    explanation:
      "With a cashier’s check, the bank withdraws funds from the purchaser immediately and guarantees payment from its own account, unlike a personal check that can bounce.",
  },
  {
    id: 3215,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "An installment loan differs from revolving credit because an installment loan:",
    choices: [
      "Has no fixed end date and allows repeated borrowing up to a limit",
      "Provides a one-time amount repaid through fixed payments over a set schedule",
      "Charges interest only when the balance is unused",
      "Can never be secured by collateral",
    ],
    correctIndex: 1,
    explanation:
      "Installment loans (car loans, mortgages) disburse a lump sum repaid in equal payments; revolving credit like credit cards renews as balances are paid down.",
  },
  {
    id: 3216,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "hard",
    prompt:
      "With a fixed-rate mortgage, what happens to the borrower’s monthly principal-and-interest payment if market interest rates rise sharply after closing?",
    choices: [
      "The payment rises with the market rate",
      "The payment stays the same for the life of the loan",
      "The payment falls because the loan is worth less",
      "The borrower must refinance immediately at the new rate",
    ],
    correctIndex: 1,
    explanation:
      "Fixed-rate loans lock the rate at origination, so payments are immune to later market swings — the key advantage over adjustable-rate mortgages.",
  },
  {
    id: 3217,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "A lender evaluates a mortgage application using the debt-to-income ratio. A household earns $6,500 gross monthly and owes $1,950 in monthly debt payments. What is its DTI ratio?",
    choices: [
      "About 15 percent",
      "About 30 percent",
      "About 45 percent",
      "About 65 percent",
    ],
    correctIndex: 1,
    explanation:
      "DTI = $1,950 ÷ $6,500 ≈ 30 percent. Most lenders prefer total DTI below roughly 36–43 percent.",
  },
  {
    id: 3218,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "Refinancing a home loan makes financial sense primarily when:",
    choices: [
      "Current market rates are significantly lower than the original loan rate",
      "The homeowner wants to skip several monthly payments",
      "Home values have fallen below the mortgage balance",
      "The lender raises fees without changing any terms",
    ],
    correctIndex: 0,
    explanation:
      "Refinancing replaces the old loan with a new one; it lowers costs only when the new rate or terms beat the old ones by enough to cover closing costs.",
  },
  {
    id: 3219,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "easy",
    prompt:
      "Under U.S. law, consumers are entitled to a free credit report from each of the three bureaus how often?",
    choices: [
      "Once every ten years",
      "Only after being denied credit",
      "At least once per year from each bureau",
      "Every time a credit card is swiped",
    ],
    correctIndex: 2,
    explanation:
      "AnnualCreditReport.com provides a free report from each bureau yearly (and more often after adverse actions), though scores themselves may cost extra.",
  },
  {
    id: 3220,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "Chapter 7 bankruptcy differs from Chapter 13 bankruptcy mainly because Chapter 7:",
    choices: [
      "Requires a court-approved repayment plan lasting three to five years",
      "Involves liquidating nonexempt assets to discharge most debts quickly",
      "Is available only to corporations",
      "Erases student loan debt automatically",
    ],
    correctIndex: 1,
    explanation:
      "Chapter 7 liquidates qualifying assets to wipe out many debts, while Chapter 13 lets wage earners keep property and repay debts under a multi-year plan.",
  },
  {
    id: 3221,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "A subsidized student loan is more favorable than an unsubsidized loan because while the borrower is enrolled at least half-time:",
    choices: [
      "No payments are due AND the government pays the accruing interest",
      "The principal balance is forgiven upon graduation",
      "Interest accrues but is charged at half the normal rate",
      "The loan converts into a scholarship automatically",
    ],
    correctIndex: 0,
    explanation:
      "Subsidized loans pause both payments and interest during school; unsubsidized loans accrue interest from day one, increasing the balance before repayment begins.",
  },
  {
    id: 3222,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "hard",
    prompt:
      "Trevor’s FICO score is 580. Based on standard scoring ranges, how will lenders most likely view his application?",
    choices: [
      "Excellent — he qualifies for the lowest advertised rates",
      "Good — standard terms apply with no pricing adjustment",
      "Poor/subprime — he faces higher rates or denial until the score improves",
      "Unscorable — lenders must ignore FICO below 600",
    ],
    correctIndex: 2,
    explanation:
      "Scores near 580 fall in the poor/subprime band (roughly 300–579–629), signaling elevated default risk and resulting in costlier credit offers.",
  },
  {
    id: 3223,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "easy",
    prompt:
      "Endorsing the back of a check with “For deposit only” plus your account number creates which kind of endorsement?",
    choices: [
      "A blank endorsement, payable to anyone holding it",
      "A restrictive endorsement, limiting how the check can be processed",
      "A special endorsement transferring it to a third party",
      "A qualified endorsement requiring notarization",
    ],
    correctIndex: 1,
    explanation:
      "“For deposit only” restricts the check to being deposited into the named account, protecting you if the check is lost or stolen after endorsement.",
  },
  {
    id: 3224,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "Taking a cash advance on a credit card is usually expensive because issuers typically:",
    choices: [
      "Charge a transaction fee with interest accruing immediately and no grace period",
      "Apply the same grace period as purchases but double the reward points",
      "Report cash advances as income to the IRS",
      "Waive all fees if the balance is repaid within a year",
    ],
    correctIndex: 0,
    explanation:
      "Cash advances carry upfront fees and start accruing interest immediately — there is no grace period, making them among the priciest ways to obtain cash.",
  },
  {
    id: 3225,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "hard",
    prompt:
      "A card advertises “0 percent APR for 12 months, then 22.99 percent variable.” What is the biggest trap for a cardholder who carries a balance past the promotional period?",
    choices: [
      "All prior interest is retroactively refunded",
      "Deferred or backdated interest may be charged on the original balance once the promo ends",
      "The APR drops permanently after month twelve",
      "The issuer must forgive remaining interest-free balances by law",
    ],
    correctIndex: 1,
    explanation:
      "Many promo cards use deferred interest: if any balance remains when the promotion expires, interest is charged retroactively from the purchase date at the full rate.",
  },
  {
    id: 3226,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "easy",
    prompt:
      "A debit card purchase differs from a credit card purchase because a debit card:",
    choices: [
      "Borrows money from the issuer that must be repaid next month",
      "Draws funds immediately from your linked checking account",
      "Builds your credit score with every swipe regardless of usage",
      "Offers federally mandated purchase protections identical to credit cards",
    ],
    correctIndex: 1,
    explanation:
      "Debit cards spend your own deposited money instantly; credit cards borrow from the issuer. Debit transactions generally offer weaker dispute protections than credit.",
  },
  {
    id: 3227,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "Adding a teenager as an authorized user on a parent’s long-standing, well-paid credit card will most likely:",
    choices: [
      "Obligate the teen to repay the parent’s entire balance",
      "Help build the teen’s credit history through the account’s positive record",
      "Freeze the parent’s credit score during the arrangement",
      "Convert the account into a joint business account",
    ],
    correctIndex: 1,
    explanation:
      "Authorized users inherit the account’s payment history on their credit reports, a common way to establish credit — without legal responsibility for the debt.",
  },
  {
    id: 3228,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "hard",
    prompt:
      "A collection account appears on Devon’s credit report in error. What is the proper first step to fix it?",
    choices: [
      "File a dispute with the credit bureau reporting the inaccurate information",
      "Pay the collection agency immediately to make the entry vanish",
      "Wait seven years for the error to age off automatically",
      "Open several new credit accounts to dilute the error’s impact",
    ],
    correctIndex: 0,
    explanation:
      "The Fair Credit Reporting Act entitles consumers to dispute inaccuracies; bureaus must investigate, typically within 30 days, and remove unverifiable information.",
  },
  {
    id: 3229,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "Why do banks sometimes require a cosigner on a young adult’s first car loan?",
    choices: [
      "To reduce the lender’s risk given the borrower’s thin credit history",
      "Because federal law prohibits lending to anyone under 25 alone",
      "To increase the interest rate the bank can legally charge",
      "To transfer the loan title into the cosigner’s name",
    ],
    correctIndex: 0,
    explanation:
      "A cosigner with strong credit guarantees repayment, offsetting the primary borrower’s lack of history and enabling approval or better pricing.",
  },
  {
    id: 3230,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "easy",
    prompt:
      "A stop-payment order submitted to your bank instructs it to:",
    choices: [
      "Freeze all activity on your account indefinitely",
      "Refuse to honor a specific check you previously wrote",
      "Automatically invest idle balances into savings",
      "Cancel recurring deposits from your employer",
    ],
    correctIndex: 1,
    explanation:
      "A stop-payment order blocks one identified check or preauthorized debit; banks charge a small fee and the order typically lasts six months to a year unless renewed.",
  },
  {
    id: 3231,
    clusterId: "finance",
    category: "Investments",
    difficulty: "easy",
    prompt:
      "An exchange-traded fund (ETF) differs from a traditional mutual fund mainly because an ETF:",
    choices: [
      "Trades on an exchange throughout the day like a stock",
      "Can hold only government bonds",
      "Guarantees returns that beat the market index",
      "Requires a minimum investment of $100,000",
    ],
    correctIndex: 0,
    explanation:
      "ETF shares trade intraday at market prices, while mutual funds transact once daily at net asset value after markets close.",
  },
  {
    id: 3232,
    clusterId: "finance",
    category: "Investments",
    difficulty: "easy",
    prompt:
      "An index fund seeks to:",
    choices: [
      "Beat the market through active stock picking by managers",
      "Match the performance of a specific market benchmark, such as the S&P 500",
      "Insure investors against all losses in a downturn",
      "Invest exclusively in foreign currencies",
    ],
    correctIndex: 1,
    explanation:
      "Index funds passively replicate a benchmark’s holdings, delivering market returns with very low fees instead of trying to outperform.",
  },
  {
    id: 3233,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "Fund A charges a 0.05 percent annual expense ratio; Fund B holds similar assets but charges 1.10 percent. Over decades of investing, the most likely outcome is that:",
    choices: [
      "Both funds produce identical ending balances because holdings match",
      "Fund B outperforms because higher fees buy better management",
      "The fee difference compounds, leaving Fund A’s investor with substantially more money",
      "Fees only matter during years when markets decline",
    ],
    correctIndex: 2,
    explanation:
      "Fees are deducted every year and compound against the investor. A one-percentage-point annual gap can consume tens of thousands of dollars over a long horizon.",
  },
  {
    id: 3234,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "Dana invests $300 into the same mutual fund every month regardless of whether prices rise or fall. This disciplined approach is called:",
    choices: [
      "Market timing",
      "Dollar-cost averaging",
      "Margin investing",
      "Lump-sum rebalancing",
    ],
    correctIndex: 1,
    explanation:
      "Dollar-cost averaging buys more shares when prices are low and fewer when high, smoothing the average purchase cost and removing emotion from timing decisions.",
  },
  {
    id: 3235,
    clusterId: "finance",
    category: "Investments",
    difficulty: "hard",
    prompt:
      "A stock trades at $50 per share and earned $2.50 per share over the past year. Its price-to-earnings (P/E) ratio is:",
    choices: [
      "12.5",
      "20",
      "25",
      "47.50",
    ],
    correctIndex: 1,
    explanation:
      "P/E = Price ÷ Earnings per Share = $50 ÷ $2.50 = 20, meaning investors pay $20 for each dollar of annual earnings.",
  },
  {
    id: 3236,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "A company sells shares to the public for the very first time through a regulated offering. This event is known as a(n):",
    choices: [
      "Initial public offering (IPO)",
      "Stock split",
      "Secondary market repurchase",
      "Leveraged buyout",
    ],
    correctIndex: 0,
    explanation:
      "An IPO is a company’s first sale of stock to public investors, converting it from private to publicly traded ownership.",
  },
  {
    id: 3237,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "Nathan bought stock at $40 per share and sold it a year later at $52, collecting $1 in dividends along the way. What was his total return per share?",
    choices: [
      "$11, or 27.5 percent",
      "$13, or 32.5 percent",
      "$12, or 30 percent",
      "$1, or 2.5 percent",
    ],
    correctIndex: 1,
    explanation:
      "Total return combines price appreciation ($52 − $40 = $12) plus the $1 dividend for $13 per share, or $13 ÷ $40 = 32.5 percent.",
  },
  {
    id: 3238,
    clusterId: "finance",
    category: "Investments",
    difficulty: "easy",
    prompt:
      "Municipal bonds are often attractive to investors in high tax brackets because their interest income is generally:",
    choices: [
      "Exempt from federal income tax (and often state tax for in-state residents)",
      "Guaranteed to double every ten years",
      "Paid only when the issuer earns a profit",
      "Convertible into common stock at any time",
    ],
    correctIndex: 0,
    explanation:
      "Interest on most municipal bonds escapes federal taxation, letting them deliver competitive after-tax yields compared with taxable bonds of similar risk.",
  },
  {
    id: 3239,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "Which investment carries the LEAST default risk?",
    choices: [
      "Corporate junk bonds rated below investment grade",
      "U.S. Treasury bills",
      "Stock of a startup technology firm",
      "High-yield corporate bond funds",
    ],
    correctIndex: 1,
    explanation:
      "Treasury bills are backed by the full faith and credit of the U.S. government, making them the benchmark for minimal default risk.",
  },
  {
    id: 3240,
    clusterId: "finance",
    category: "Investments",
    difficulty: "easy",
    prompt:
      "Moody’s, S&P Global, and Fitch are best known as organizations that:",
    choices: [
      "Insure investors against stock market losses",
      "Assign credit ratings to bond issuers and their debt",
      "Set the federal funds rate",
      "Audit public company financial statements",
    ],
    correctIndex: 1,
    explanation:
      "These agencies rate the creditworthiness of bond issuers; lower ratings signal higher default risk and force issuers to pay higher interest.",
  },
  {
    id: 3241,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "A bond rated BB by S&P — below investment grade — is commonly called a:",
    choices: [
      "Blue-chip bond",
      "Junk bond (high-yield bond)",
      "Treasury note",
      "Zero-coupon municipal bond",
    ],
    correctIndex: 1,
    explanation:
      "Bonds below investment grade (BB+/Ba1 and lower) are “junk” or high-yield bonds: they pay higher coupons to compensate for meaningful default risk.",
  },
  {
    id: 3242,
    clusterId: "finance",
    category: "Investments",
    difficulty: "hard",
    prompt:
      "A stock’s beta is 1.6. If the overall market rises 10 percent, this stock would historically be expected to:",
    choices: [
      "Rise about 16 percent",
      "Rise about 6 percent",
      "Fall about 16 percent",
      "Remain unchanged",
    ],
    correctIndex: 0,
    explanation:
      "Beta measures sensitivity to market moves: 1.6 × 10% = 16% expected move in the same direction. Betas above 1 indicate amplified volatility.",
  },
  {
    id: 3243,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "A portfolio drifted to 85 percent stocks after a strong bull run versus a 60 percent target. Selling stocks to restore 60 percent is called:",
    choices: [
      "Dollar-cost averaging",
      "Short selling",
      "Rebalancing",
      "Laddering",
    ],
    correctIndex: 2,
    explanation:
      "Rebalancing sells overweighted assets and buys underweighted ones, restoring target allocation and systematically taking profits from winners.",
  },
  {
    id: 3244,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "A young investor with decades until retirement should generally hold a MORE aggressive portfolio than a retiree because:",
    choices: [
      "Younger investors legally face lower tax rates",
      "A long time horizon allows recovery from short-term losses while pursuing growth",
      "Aggressive portfolios eliminate volatility entirely",
      "Retirees are barred from owning stocks by regulation",
    ],
    correctIndex: 1,
    explanation:
      "Long horizons let investors ride out downturns and capture compounding growth, so higher equity allocations suit youth; retirees need stability and liquidity.",
  },
  {
    id: 3245,
    clusterId: "finance",
    category: "Investments",
    difficulty: "hard",
    prompt:
      "Under current U.S. tax law, profits from selling an asset held for more than one year are typically taxed at:",
    choices: [
      "The same rates as ordinary wages",
      "Lower long-term capital gains rates than ordinary income",
      "A flat 50 percent penalty rate",
      "No tax whatsoever, regardless of income",
    ],
    correctIndex: 1,
    explanation:
      "Long-term capital gains enjoy preferential rates (0/15/20 percent), rewarding longer holding periods relative to ordinary income tax rates on short-term gains.",
  },
  {
    id: 3246,
    clusterId: "finance",
    category: "Investments",
    difficulty: "easy",
    prompt:
      "Before investing in a mutual fund, investors can review its objectives, fees, risks, and past performance in which document?",
    choices: [
      "The prospectus",
      "The certificate of incorporation",
      "The FDIC disclosure form",
      "The payroll register",
    ],
    correctIndex: 0,
    explanation:
      "A fund’s prospectus is the required disclosure document describing strategy, fees, risks, and historical results.",
  },
  {
    id: 3247,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "Placing an order to buy a stock only if it reaches $45 or less submits what type of order?",
    choices: [
      "A market order",
      "A limit order",
      "A stop-loss order to sell",
      "A margin call",
    ],
    correctIndex: 1,
    explanation:
      "Limit orders execute only at the specified price or better, giving price control but no guarantee of execution; market orders fill immediately at prevailing prices.",
  },
  {
    id: 3248,
    clusterId: "finance",
    category: "Investments",
    difficulty: "hard",
    prompt:
      "An investor sells borrowed shares hoping to buy them back cheaper later. If the stock surges instead, this investor faces:",
    choices: [
      "Unlimited potential losses, since share prices have no ceiling",
      "Losses capped at the original sale proceeds",
      "Automatic forgiveness of the position after 30 days",
      "Guaranteed profit from the lender’s dividend",
    ],
    correctIndex: 0,
    explanation:
      "Short sellers lose when prices rise, and because a price can climb indefinitely, short selling exposes them to theoretically unlimited losses.",
  },
  {
    id: 3249,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "Buying securities partly with money borrowed from a brokerage is called buying on:",
    choices: [
      "Margin",
      "Speculation",
      "Contango",
      "Escrow",
    ],
    correctIndex: 0,
    explanation:
      "Margin borrowing amplifies both gains and losses, and falling values can trigger a margin call requiring immediate repayment or additional collateral.",
  },
  {
    id: 3250,
    clusterId: "finance",
    category: "Investments",
    difficulty: "hard",
    prompt:
      "Inflation runs at 4 percent while a CD pays 3 percent annually. What is the investor’s approximate REAL return?",
    choices: [
      "+7 percent",
      "+1 percent",
      "−1 percent",
      "−4 percent",
    ],
    correctIndex: 2,
    explanation:
      "Real return ≈ nominal return − inflation = 3% − 4% = −1 percent: purchasing power actually erodes despite positive nominal interest.",
  },
  {
    id: 3251,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "medium",
    prompt:
      "A company earns $200,000 in net income on $2,000,000 of sales. Its net profit margin is:",
    choices: [
      "1 percent",
      "10 percent",
      "20 percent",
      "100 percent",
    ],
    correctIndex: 1,
    explanation:
      "Net profit margin = Net Income ÷ Net Sales = $200,000 ÷ $2,000,000 = 10 cents of profit per dollar of revenue.",
  },
  {
    id: 3252,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "hard",
    prompt:
      "A firm has net income of $80,000 and total assets of $400,000. Its return on assets (ROA) is:",
    choices: [
      "5 percent",
      "20 percent",
      "50 percent",
      "320 percent",
    ],
    correctIndex: 1,
    explanation:
      "ROA = Net Income ÷ Total Assets = $80,000 ÷ $400,000 = 20 percent, showing how efficiently assets generate profit.",
  },
  {
    id: 3253,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "hard",
    prompt:
      "Return on equity (ROE) is calculated as net income divided by:",
    choices: [
      "Total liabilities",
      "Owner’s (shareholders’) equity",
      "Cost of goods sold",
      "Total current assets",
    ],
    correctIndex: 1,
    explanation:
      "ROE measures the return generated on owners’ invested capital — net income ÷ average equity — and is a favorite gauge of management effectiveness.",
  },
  {
    id: 3254,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "hard",
    prompt:
      "A company has total liabilities of $300,000 and owner’s equity of $150,000. Its debt-to-equity ratio is:",
    choices: [
      "0.5 to 1",
      "2 to 1",
      "3 to 1",
      "4.5 to 1",
    ],
    correctIndex: 1,
 explanation:
      "Debt-to-equity = Liabilities ÷ Equity = $300,000 ÷ $150,000 = 2.0, meaning the firm uses two dollars of debt for every dollar of owner investment.",
  },
  {
    id: 3255,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "hard",
    prompt:
      "The quick ratio improves on the current ratio by excluding which asset from the numerator?",
    choices: [
      "Cash and cash equivalents",
      "Marketable securities",
      "Inventory, which may be hard to convert quickly",
      "Accounts receivable under 90 days old",
    ],
    correctIndex: 2,
    explanation:
      "The quick (acid-test) ratio counts only the most liquid current assets — cash, equivalents, marketable securities, receivables — excluding inventory that might not sell quickly.",
  },
  {
    id: 3256,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "medium",
    prompt:
      "A company reports cost of goods sold of $480,000 and average inventory of $120,000. Its inventory turnover is:",
    choices: [
      "0.25 times per year",
      "4 times per year",
      "48 times per year",
      "600 times per year",
    ],
    correctIndex: 1,
    explanation:
      "Inventory turnover = COGS ÷ Average Inventory = $480,000 ÷ $120,000 = 4 times annually, meaning stock sells through roughly every 91 days.",
  },
  {
    id: 3257,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "easy",
    prompt:
      "Working capital is defined as:",
    choices: [
      "Total assets minus intangible assets",
      "Current assets minus current liabilities",
      "Revenue minus all expenses for the year",
      "Long-term debt minus equity",
    ],
    correctIndex: 1,
    explanation:
      "Working capital measures short-term financial cushion: current assets minus current liabilities. Positive amounts suggest the firm can cover near-term obligations.",
  },
  {
    id: 3258,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "medium",
    prompt:
      "Comparing each line item on an income statement as a percentage of net sales is an example of:",
    choices: [
      "Horizontal analysis",
      "Vertical analysis (common-size statements)",
      "Ratio decomposition",
      "Consolidation accounting",
    ],
    correctIndex: 1,
    explanation:
      "Vertical analysis expresses statement items as percentages of a base figure (sales for the income statement), enabling comparison across companies of different sizes.",
  },
  {
    id: 3259,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "medium",
    prompt:
      "Comparing this year’s sales to last year’s sales to spot growth trends is called:",
    choices: [
      "Vertical analysis",
      "Horizontal (trend) analysis",
      "Accrual adjustment",
      "Segment reporting",
    ],
    correctIndex: 1,
    explanation:
      "Horizontal analysis examines changes across reporting periods — dollar or percentage differences over time — revealing growth or decline trends.",
  },
  {
    id: 3260,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "medium",
    prompt:
      "Paying a cash dividend to shareholders affects the balance sheet by:",
    choices: [
      "Increasing assets and increasing equity",
      "Decreasing assets (cash) and decreasing retained earnings within equity",
      "Increasing liabilities and decreasing assets",
      "Leaving both sides unchanged because dividends are an expense",
    ],
    correctIndex: 1,
    explanation:
      "Dividends are distributions, not expenses: they reduce cash and reduce retained earnings, shrinking the balance sheet equally on both sides.",
  },
  {
    id: 3261,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "hard",
    prompt:
      "Earnings per share (EPS) is computed as:",
    choices: [
      "(Net income − preferred dividends) ÷ average common shares outstanding",
      "Total revenue ÷ number of employees",
      "Market price per share ÷ book value per share",
      "Net income ÷ total liabilities",
    ],
    correctIndex: 0,
    explanation:
      "EPS allocates profit available to common shareholders across each share outstanding, letting investors compare profitability on a per-share basis.",
  },
  {
    id: 3262,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "hard",
    prompt:
      "A company reports positive net income of $50,000 but its cash balance fell sharply during the year. The most plausible explanation is that:",
    choices: [
      "The income statement is required to equal the cash balance",
      "Profits were tied up in receivables and inventory rather than collected as cash",
      "Cash decreases are prohibited when net income is positive",
      "Depreciation must be paid in cash immediately",
    ],
    correctIndex: 1,
    explanation:
      "Accrual income counts sales made on credit and inventory buildup; cash flow statements reveal money trapped in working capital even during profitable periods.",
  },
  {
    id: 3263,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "easy",
    prompt:
      "On a classified balance sheet, which pair correctly matches account to classification?",
    choices: [
      "Prepaid insurance — current asset; wages payable — current liability",
      "Goodwill — current asset; unearned revenue — long-term debt",
      "Land — current asset; notes due in 90 days — equity",
      "Merchandise inventory — liability; mortgage payable — asset",
    ],
    correctIndex: 0,
    explanation:
      "Prepaid insurance is a short-term prepaid asset, and wages payable is an obligation due within a year — both current items.",
  },
  {
    id: 3264,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "medium",
    prompt:
      "Which item appears on the income statement but NOT on the balance sheet?",
    choices: [
      "Accounts receivable",
      "Sales returns and allowances",
      "Accumulated depreciation",
      "Retained earnings",
    ],
    correctIndex: 1,
    explanation:
      "Sales returns and allowances is a temporary contra-revenue account closed each period; the other three are permanent accounts reported on the balance sheet.",
  },
  {
    id: 3265,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "Which element of a valid contract involves a genuine meeting of the minds between the parties?",
    choices: [
      "Consideration",
      "Mutual assent (offer and acceptance)",
      "Legality of purpose",
      "Written form",
    ],
    correctIndex: 1,
    explanation:
      "Mutual assent means one party makes an offer and the other accepts it knowingly — the “meeting of the minds” at the heart of contract formation.",
  },
  {
    id: 3266,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A car dealer advertises a price, Tanya accepts, but the dealer then refuses to sell, claiming the ad was “just an invitation.” In general, a clear advertisement of specific terms may constitute:",
    choices: [
      "A revocation, ending any deal automatically",
      "A counteroffer requiring new negotiation",
      "An offer that acceptance can turn into a binding contract",
      "An illegal bait-and-switch in every circumstance",
    ],
    correctIndex: 2,
    explanation:
      "Courts sometimes treat definite advertisements as offers; if accepted on exact terms, a binding contract can form, exposing the dealer to breach claims.",
  },
  {
    id: 3267,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A business counterfeits a competitor’s trademarked packaging to confuse consumers. Beyond trademark infringement, this deception may also constitute:",
    choices: [
      "Unfair competition under consumer protection laws",
      "A valid licensing arrangement",
      "Secured transaction financing",
      "A negotiable instrument violation",
    ],
    correctIndex: 0,
    explanation:
      "Passing off goods as another’s is unfair competition, actionable under trademark law and consumer protection statutes like the Lanham Act and FTC rules.",
  },
  {
    id: 3268,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "Which business structure combines limited liability for all owners with pass-through taxation?",
    choices: [
      "General partnership",
      "Sole proprietorship",
      "Limited liability company (LLC)",
      "C corporation taxed at entity level",
    ],
    correctIndex: 2,
    explanation:
      "An LLC shields members from personal liability while profits flow through to owners’ personal returns without entity-level tax — unlike C corporations.",
  },
  {
    id: 3269,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "In a limited partnership, the limited partners generally:",
    choices: [
      "Manage daily operations and bear unlimited liability",
      "Invest capital but do not manage, risking only their investment",
      "Are liable for all partnership debts equally with generals",
      "Must be corporations themselves by law",
    ],
    correctIndex: 1,
    explanation:
      "Limited partners supply capital and share profits while avoiding personal liability — provided they stay out of management control.",
  },
  {
    id: 3270,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "hard",
    prompt:
      "A lender requires a small business owner to sign a personal guarantee on a corporate loan. What does this change?",
    choices: [
      "The corporation’s limited liability shield extends to cover the owner personally",
      "The owner becomes personally liable for the debt despite the corporate form",
      "The loan converts into equity ownership for the bank",
      "Nothing changes, since shareholders are always liable anyway",
    ],
    correctIndex: 1,
    explanation:
      "A personal guarantee voluntarily pierces the corporate veil for that debt, putting the owner’s personal assets at risk if the business defaults.",
  },
  {
    id: 3271,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A finance company obtains a security interest in a borrower’s equipment by filing the proper financing statement. This arrangement is governed primarily by:",
    choices: [
      "The Uniform Commercial Code (UCC) Article 9 on secured transactions",
      "The Federal Reserve’s Regulation Z",
      "The Sherman Antitrust Act",
      "The Securities Act of 1933",
    ],
    correctIndex: 0,
    explanation:
      "UCC Article 9 standardizes secured lending — attachment, perfection, and priority of security interests in personal property across all states.",
  },
  {
    id: 3272,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "Truth in Lending laws require lenders to disclose credit terms clearly. The single most important standardized disclosure for comparing loan costs is:",
    choices: [
      "The monthly payment amount alone",
      "The annual percentage rate (APR) and total finance charge",
      "The lender’s stock ticker symbol",
      "The borrower’s credit score",
    ],
    correctIndex: 1,
    explanation:
      "APR standardizes interest plus certain fees into one yearly rate, letting consumers compare offers on equal footing as required by the Truth in Lending Act.",
  },
  {
    id: 3273,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "hard",
    prompt:
      "An investor receives confidential, nonpublic information about an upcoming merger and buys stock before the announcement. This is:",
    choices: [
      "Legal insider trading, since executives may trade freely",
      "Illegal insider trading under securities law",
      "Permitted if the profit is donated to charity",
      "A margin violation handled only by the broker",
    ],
    correctIndex: 1,
    explanation:
      "Trading on material nonpublic information violates SEC insider trading rules — even for outsiders tipped with the information (“tippees”).",
  },
  {
    id: 3274,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "Which federal agency primarily enforces consumer protection in financial advertising and lending practices?",
    choices: [
      "The Consumer Financial Protection Bureau (CFPB)",
      "The National Labor Relations Board",
      "The Environmental Protection Agency",
      "The Federal Aviation Administration",
    ],
    correctIndex: 0,
    explanation:
      "The CFPB supervises and enforces federal consumer financial laws covering mortgages, credit cards, debt collection, and deceptive financial marketing.",
  },
  {
    id: 3275,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A promissory note differs from a simple IOU because a promissory note:",
    choices: [
      "Is a negotiable instrument containing an unconditional promise to pay a definite sum",
      "Can never be transferred to another party",
      "Requires a court judgment before it becomes enforceable",
      "Must always be secured by real estate",
    ],
    correctIndex: 0,
    explanation:
      "Promissory notes meet negotiability requirements — unconditional promise, definite amount, payable to order or bearer — making them transferable and widely used in lending.",
  },
  {
    id: 3276,
    clusterId: "finance",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "A nation can produce either 100 cars or 200 computers using all its resources. The trade-off between these outputs is illustrated by the:",
    choices: [
      "Production possibilities curve",
      "Demand curve",
      "Laffer curve",
      "Phillips curve",
    ],
    correctIndex: 0,
    explanation:
      "The production possibilities curve shows maximum combinations of two goods an economy can produce, illustrating scarcity, trade-offs, and opportunity cost.",
  },
  {
    id: 3277,
    clusterId: "finance",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "When the price of coffee rises sharply, consumers buy more tea instead. The increased demand for tea reflects which concept?",
    choices: [
      "Complementary goods",
      "Substitute goods",
      "Inferior accounting",
      "Price flooring",
    ],
    correctIndex: 1,
    explanation:
      "Substitutes satisfy the same need; when one good’s price climbs, demand shifts toward its substitute — coffee and tea are classic examples.",
  },
  {
    id: 3278,
    clusterId: "finance",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Hot dog buns and hot dogs are complements. If the price of hot dogs falls significantly, what happens in the market for hot dog buns?",
    choices: [
      "Demand for buns decreases along with hot dog sales",
      "Demand for buns increases because more hot dogs are being consumed",
      "Supply of buns shifts left permanently",
      "Nothing changes; complement prices never interact",
    ],
    correctIndex: 1,
    explanation:
      "Cheaper hot dogs raise quantity of hot dogs bought, pulling demand for their complement — buns — to the right, raising bun price and quantity.",
  },
  {
    id: 3279,
    clusterId: "finance",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Gasoline demand barely changes when prices spike because commuters still need fuel. Economists would describe gasoline demand as:",
    choices: [
      "Highly elastic",
      "Relatively inelastic",
      "Perfectly competitive",
      "Derived from fiscal policy",
    ],
    correctIndex: 1,
    explanation:
      "Inelastic demand means quantity responds weakly to price changes — typical for necessities with few short-run substitutes like gasoline.",
  },
  {
    id: 3280,
    clusterId: "finance",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A government sets a legal minimum price for milk ABOVE the market equilibrium. The predictable result is:",
    choices: [
      "A shortage, as buyers want more than sellers offer",
      "A surplus of milk, since quantity supplied exceeds quantity demanded",
      "No change, because markets ignore legal prices",
      "Immediate equilibrium at the new floor",
    ],
    correctIndex: 1,
    explanation:
      "Price floors set above equilibrium encourage extra production while discouraging purchases, creating persistent surpluses — governments often end up buying the excess.",
  },
  {
    id: 3281,
    clusterId: "finance",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Simultaneous high inflation AND stagnant economic growth with elevated unemployment is called:",
    choices: [
      "Reflation",
      "Stagflation",
      "Disinflation",
      "Hyperdeflation",
    ],
    correctIndex: 1,
    explanation:
      "Stagflation combines stagnation (weak growth, high joblessness) with inflation, posing a policy dilemma since fighting one worsens the other.",
  },
  {
    id: 3282,
    clusterId: "finance",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "The unemployment rate measures the percentage of the labor force that is:",
    choices: [
      "Not working at all, including retirees and young children",
      "Actively seeking work but without a job",
      "Employed part-time against their wishes only",
      "Working in government positions",
    ],
    correctIndex: 1,
    explanation:
      "Only people in the labor force who are actively looking for work count as unemployed; retirees, students not seeking work, and discouraged dropouts are excluded.",
  },
  {
    id: 3283,
    clusterId: "finance",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Expansionary fiscal policy to fight a recession typically involves:",
    choices: [
      "Raising taxes and cutting government spending",
      "Increasing government spending and/or cutting taxes to boost aggregate demand",
      "Selling bonds exclusively to foreign governments",
      "Fixing exchange rates permanently",
    ],
    correctIndex: 1,
    explanation:
      "Fiscal stimulus injects spending power through bigger budgets or lower taxes, raising aggregate demand to pull the economy out of recession.",
  },
  {
    id: 3284,
    clusterId: "finance",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A country can produce wheat more efficiently relative to other goods than its trading partners can. This country should specialize in wheat because of the principle of:",
    choices: [
      "Absolute advantage",
      "Comparative advantage",
      "Purchasing power parity",
      "Crowding out",
    ],
    correctIndex: 1,
    explanation:
      "Comparative advantage — producing at the lowest opportunity cost — is the basis for mutually beneficial trade, even if a partner holds absolute advantage in everything.",
  },
  {
    id: 3285,
    clusterId: "finance",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "A tariff imposed on imported steel will most directly:",
    choices: [
      "Lower domestic steel prices for manufacturers",
      "Raise imported steel prices, protecting domestic producers but raising costs for steel-using industries",
      "Eliminate the domestic steel industry entirely",
      "Have no effect on any prices or producers",
    ],
    correctIndex: 1,
    explanation:
      "Tariffs tax imports, raising their price; domestic steelmakers gain breathing room while downstream industries (autos, construction) pay more.",
  },
  {
    id: 3286,
    clusterId: "finance",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "The Federal Reserve’s three main monetary policy tools are the reserve requirement, the discount rate, and:",
    choices: [
      "Federal income tax rates",
      "Open market operations (buying and selling government securities)",
      "Setting the minimum wage",
      "Approving corporate mergers",
    ],
    correctIndex: 1,
    explanation:
      "The Fed’s classic toolkit: reserve requirements, the discount rate, and open market operations — buying or selling Treasuries to expand or contract the money supply.",
  },
  {
    id: 3287,
    clusterId: "finance",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "If the money supply grows far faster than the economy’s output of goods and services, the long-run result predicted by monetary theory is:",
    choices: [
      "Deflation as savings accumulate",
      "Inflation, because more money chases roughly the same quantity of goods",
      "A permanent increase in real output proportional to the money supply",
      "Automatic exchange-rate appreciation with no price effects",
    ],
    correctIndex: 1,
    explanation:
      "Quantity theory logic: when money growth outpaces real output, prices absorb the difference — “too much money chasing too few goods” produces inflation.",
  },
  {
    id: 3288,
    clusterId: "finance",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Which situation best illustrates the economic problem of scarcity at the business level?",
    choices: [
      "A bakery must choose between spending its limited cash on a second oven or a delivery van",
      "A bakery bakes extra bread and donates it to charity",
      "A bakery raises prices after demand increases",
      "A bakery hires more workers during holiday season",
    ],
    correctIndex: 0,
    explanation:
      "Scarcity forces choice among competing uses of limited resources; the oven-versus-van decision captures that trade-off directly.",
  },
  {
    id: 3289,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "A company prepays $12,000 for one year of rent on July 1. At December 31, what adjusting entry is needed?",
    choices: [
      "Debit Rent Expense $12,000; credit Prepaid Rent $12,000",
      "Debit Prepaid Rent $6,000; credit Rent Expense $6,000",
      "Debit Rent Expense $6,000; credit Prepaid Rent $6,000",
      "No adjustment is required until the lease renews",
    ],
    correctIndex: 2,
    explanation:
      "Six months have expired (July–December), so half the prepayment is now an expense: debit Rent Expense and reduce Prepaid Rent by $6,000.",
  },
  {
    id: 3290,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "Under the percentage of sales method, a firm estimates 2 percent of $400,000 in credit sales will be uncollectible. The adjusting entry debits:",
    choices: [
      "Accounts Receivable for $8,000",
      "Bad Debt Expense for $8,000",
      "Allowance for Doubtful Accounts for $8,000",
      "Cash for $8,000",
    ],
    correctIndex: 1,
    explanation:
      "Estimated uncollectibles ($400,000 × 2% = $8,000) are recorded as Bad Debt Expense, credited to the Allowance for Doubtful Accounts.",
  },
  {
    id: 3291,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "hard",
    prompt:
      "A retailer’s merchandise inventory at cost is $90,000; its net sales are $150,000 and estimated gross profit rate is 40 percent. Using the gross profit method, estimated cost of goods sold is:",
    choices: [
      "$60,000",
      "$90,000",
      "$100,000",
      "$110,000",
    ],
    correctIndex: 1,
    explanation:
      "If gross profit is 40 percent of sales, COGS must be 60 percent: $150,000 × 0.60 = $90,000. This method estimates inventory losses between physical counts.",
  },
  {
    id: 3292,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "Which account normally carries a DEBIT balance?",
    choices: [
      "Sales Revenue",
      "Owner’s Capital",
      "Cost of Goods Sold",
      "Unearned Service Revenue",
    ],
    correctIndex: 2,
    explanation:
      "Expenses like Cost of Goods Sold carry debit balances. Revenue, capital, and unearned revenue accounts normally carry credits.",
  },
  {
    id: 3293,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "Disability insurance primarily protects against which financial risk?",
    choices: [
      "Medical bills from routine doctor visits",
      "Loss of income if illness or injury prevents you from working",
      "Damage to your home from natural disasters",
      "Market losses in your investment portfolio",
    ],
    correctIndex: 1,
    explanation:
      "Disability coverage replaces a portion of earnings when you cannot work — often considered more critical than life insurance for working-age adults, since income loss threatens everything.",
  },
  {
    id: 3294,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "hard",
    prompt:
      "A car loan of $20,000 at 6 percent APR for 5 years has a monthly payment near $387. Roughly how much total interest will be paid over the loan’s life?",
    choices: [
      "About $600",
      "About $1,200",
      "About $3,200",
      "About $6,000",
    ],
    correctIndex: 2,
    explanation:
      "Total paid ≈ $387 × 60 = $23,220, so interest ≈ $3,200 over the original $20,000 principal.",
  },
  {
    id: 3295,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "Which expense is typically the LARGEST category in most household budgets?",
    choices: [
      "Entertainment subscriptions",
      "Housing",
      "Clothing",
      "Pet care",
    ],
    correctIndex: 1,
    explanation:
      "Housing usually consumes the biggest share of household spending — commonly 25–35 percent of income — which is why the 50/30/20 rule groups it under needs.",
  },
  {
    id: 3296,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "An adjustable-rate mortgage (ARM) with “5/1” terms means:",
    choices: [
      "The rate adjusts every 5 months after a 1-year fixed period",
      "The rate is fixed for 5 years, then adjusts once per year",
      "The borrower pays 5 points and 1 percent origination fee",
      "The loan matures in 51 months",
    ],
    correctIndex: 1,
    explanation:
      "In a 5/1 ARM, the initial rate holds for five years; afterward it resets annually based on a market index plus a margin.",
  },
  {
    id: 3297,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "hard",
    prompt:
      "A bank pays 2 percent APY compounded monthly on savings. Which statement about the effective annual yield is accurate?",
    choices: [
      "It equals exactly 2 percent regardless of compounding frequency",
      "It slightly exceeds 2 percent because intra-year interest earns interest too",
      "It falls below 2 percent due to compounding penalties",
      "Compounding frequency never affects yields in any circumstance",
    ],
    correctIndex: 1,
    explanation:
      "More frequent compounding raises effective yield above the nominal rate: (1 + 0.02/12)^12 − 1 ≈ 2.018 percent annually.",
  },
  {
    id: 3298,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "easy",
    prompt:
      "Mobile check deposit through a banking app works by:",
    choices: [
      "Mailing the physical check to the bank afterward",
      "Capturing images of the check’s front and back for electronic processing",
      "Transferring funds directly from the check writer’s wallet app",
      "Converting the check into a cashier’s check instantly",
    ],
    correctIndex: 1,
    explanation:
      "Apps process photos of both check sides using remote deposit capture technology; banks may require writing “for mobile deposit only” and holding the check briefly.",
  },
  {
    id: 3299,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "A bond’s coupon rate is 5 percent, but market yields for similar bonds rise to 5 percent... then keep climbing. An investor holding this bond to maturity will:",
    choices: [
      "Receive less than the promised coupons because market rates rose",
      "Receive all promised coupons and full face value at maturity, though resale value meanwhile fell",
      "Lose principal automatically when rates rise",
      "See coupons increase to match new market rates",
    ],
    correctIndex: 1,
    explanation:
      "Held to maturity, the issuer owes every coupon and par value regardless of market swings — rate changes affect only interim market price if sold early.",
  },
  {
    id: 3300,
    clusterId: "finance",
    category: "Investments",
    difficulty: "easy",
    prompt:
      "Capital gain is best defined as:",
    choices: [
      "Interest paid periodically on a bond",
      "Profit from selling an asset for more than its purchase price",
      "Fees charged by mutual fund managers",
      "Dividends reinvested automatically",
    ],
    correctIndex: 1,
    explanation:
      "A capital gain is the appreciation realized when selling an investment above its cost basis; selling below basis creates a capital loss.",
  },
  {
    id: 3301,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "medium",
    prompt:
      "A company’s gross profit is $90,000 on net sales of $300,000. Its gross margin percentage is:",
    choices: [
      "30 percent",
      "33 percent",
      "70 percent",
      "270 percent",
    ],
    correctIndex: 0,
    explanation:
      "Gross margin = Gross Profit ÷ Net Sales = $90,000 ÷ $300,000 = 30 percent of every sales dollar remains after covering product costs.",
  },
  {
    id: 3302,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "hard",
    prompt:
      "Two companies report identical net income. Company A’s income includes a large one-time gain on land sales; Company B’s comes entirely from operations. Which analytical conclusion is most defensible?",
    choices: [
      "Both companies are equally healthy since net income matches",
      "Company B’s earnings quality is higher because its profits are recurring and operational",
      "Company A is stronger because asset sales signal growth",
      "Net income comparisons are meaningless under any circumstances",
    ],
    correctIndex: 1,
    explanation:
      "Earnings quality analysis favors sustainable operating income over one-time gains that will not repeat when forecasting future performance.",
  },
  {
    id: 3303,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "easy",
    prompt:
      "The statement of owner’s equity explains changes in:",
    choices: [
      "Cash from operating activities",
      "The owner’s capital account due to investments, withdrawals, and net income",
      "Total liabilities across the fiscal year",
      "Inventory levels month to month",
    ],
    correctIndex: 1,
    explanation:
      "This statement reconciles beginning capital to ending capital by adding investments and net income and subtracting withdrawals or dividends.",
  },
  {
    id: 3304,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "hard",
    prompt:
      "A firm’s current ratio is 3.0 while its quick ratio is only 0.8. What does this gap most likely indicate?",
    choices: [
      "The firm holds almost no current assets",
      "A large share of current assets is tied up in slow-moving inventory",
      "The firm has excessive cash reserves",
      "Current liabilities were miscalculated on one ratio",
    ],
    correctIndex: 1,
    explanation:
      "A big spread between current and quick ratios signals heavy inventory reliance — liquidity looks fine on paper but depends on selling that stock.",
  },
  {
    id: 3305,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "medium",
    prompt:
      "Which activity section of the statement of cash flows would include the purchase of a new delivery truck?",
    choices: [
      "Operating activities",
      "Investing activities",
      "Financing activities",
      "Supplemental equity disclosures",
    ],
    correctIndex: 1,
    explanation:
      "Purchases and sales of long-term assets like vehicles, buildings, and equipment fall under investing activities.",
  },
  {
    id: 3306,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "An investor wants steady quarterly income from her portfolio. Which holding best fits that objective?",
    choices: [
      "Growth stocks that reinvest all profits",
      "Investment-grade corporate bonds paying fixed coupons",
      "Cryptocurrency tokens",
      "Raw land held for appreciation",
    ],
    correctIndex: 1,
    explanation:
      "Bonds pay predictable coupon income on set dates; growth stocks, crypto, and raw land generate returns mainly through price appreciation, not income.",
  },
  {
    id: 3307,
    clusterId: "finance",
    category: "Investments",
    difficulty: "hard",
    prompt:
      "An investor holds bonds maturing in 1, 3, 5, 7, and 10 years, reinvesting each as it matures into the longest rung. This strategy is called:",
    choices: [
      "Bond laddering",
      "Barbell speculation",
      "Margin averaging",
      "Index tracking",
    ],
    correctIndex: 0,
    explanation:
      "Laddering staggers maturities to balance yield and liquidity, reducing interest-rate risk since only part of the portfolio reprices at any time.",
  },
  {
    id: 3308,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "Why might an investor choose preferred stock over common stock?",
    choices: [
      "Preferred shares offer greater voting power at shareholder meetings",
      "Preferred shares pay fixed dividends with priority over common dividends",
      "Preferred shares guarantee unlimited capital appreciation",
      "Preferred shareholders select the company’s auditors",
    ],
    correctIndex: 1,
    explanation:
      "Preferred stock behaves like a hybrid: fixed dividends paid before common dividends, but typically without voting rights and with limited growth upside.",
  },
  {
    id: 3309,
    clusterId: "finance",
    category: "Investments",
    difficulty: "easy",
    prompt:
      "A stock dividend yield of 4 percent means:",
    choices: [
      "The stock rose 4 percent in market price this year",
      "Annual dividends equal about 4 percent of the current share price",
      "The company keeps 4 percent of sales as profit",
      "Shareholders receive 4 additional shares yearly",
    ],
    correctIndex: 1,
    explanation:
      "Dividend yield = annual dividends per share ÷ price per share, expressing cash return relative to what you pay for the stock.",
  },
  {
    id: 3310,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "A secured credit card requires the user to:",
    choices: [
      "Provide a cash deposit that serves as collateral for the credit line",
      "Maintain a minimum stock portfolio at the issuing bank",
      "Have a FICO score above 780",
      "Pay off the balance through payroll deduction only",
    ],
    correctIndex: 0,
    explanation:
      "Secured cards hold a refundable deposit (often equal to the limit), letting people with poor or no credit build history with minimal issuer risk.",
  },
  {
    id: 3311,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "hard",
    prompt:
      "Debt snowball and debt avalanche are two payoff strategies. How do they differ?",
    choices: [
      "Snowball pays smallest balances first for motivation; avalanche pays highest interest rates first to minimize cost",
      "Snowball targets highest rates first; avalanche targets smallest balances first",
      "Both are identical strategies with different marketing names",
      "Snowball requires consolidation loans; avalanche forbids them",
    ],
    correctIndex: 0,
    explanation:
      "Snowball builds momentum via quick wins (smallest debts first); avalanche is mathematically cheapest (highest APR first). Both work — psychology versus math.",
  },
  {
    id: 3312,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "easy",
    prompt:
      "A money market deposit account differs from a money market MUTUAL FUND because the deposit account:",
    choices: [
      "Is FDIC-insured and held at a bank",
      "Invests directly in foreign equities",
      "Guarantees returns tied to the S&P 500",
      "Cannot ever earn interest",
    ],
    correctIndex: 0,
    explanation:
      "Bank money market accounts carry FDIC insurance; mutual fund versions invest in short-term securities and can lose value with no federal guarantee.",
  },
  {
    id: 3313,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "Which insurance principle explains why spreading many policyholders’ premiums covers the rare large losses of a few?",
    choices: [
      "Risk pooling",
      "Adverse selection reversal",
      "Compounding",
      "Leverage",
    ],
    correctIndex: 0,
    explanation:
      "Insurance pools premiums from many to pay claims of the unlucky few — the law of large numbers makes losses predictable for the insurer.",
  },
  {
    id: 3314,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "hard",
    prompt:
      "At age 30, Riley can invest a lump sum. Using the Rule of 72 at an 8 percent average return, roughly how many doublings occur by age 66?",
    choices: [
      "About 3 doublings",
      "About 4 doublings",
      "About 6 doublings",
      "About 9 doublings",
    ],
    correctIndex: 1,
    explanation:
      "Money doubles every 72 ÷ 8 = 9 years; over 36 years that allows 36 ÷ 9 = 4 doublings — turning $10,000 into roughly $160,000.",
  },
  {
    id: 3315,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "A flexible spending account (FSA) lets employees:",
    choices: [
      "Invest contributions in mutual funds tax-free forever",
      "Set aside pre-tax dollars for qualified medical expenses, though unused amounts may be forfeited",
      "Borrow against future paychecks at low rates",
      "Avoid Social Security taxes on all wages",
    ],
    correctIndex: 1,
    explanation:
      "FSAs reduce taxable income for healthcare costs, but the “use it or lose it” rule penalizes overfunding beyond expected expenses.",
  },
  {
    id: 3316,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "A firm uses straight-line depreciation. Equipment costing $50,000 has a $5,000 salvage value and a 9-year life. What is its book value after 5 full years of use?",
    choices: [
      "$25,000",
      "$27,500",
      "$22,500",
      "$20,000",
    ],
    correctIndex: 0,
    explanation:
      "Annual depreciation = ($50,000 − $5,000) ÷ 9 = $5,000. After 5 years, accumulated depreciation is $25,000, leaving book value of $50,000 − $25,000 = $25,000.",
  },
  {
    id: 3317,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "A company borrows $20,000 from a bank, signing a one-year note. What is the immediate effect on the accounting equation?",
    choices: [
      "Assets increase and liabilities increase by $20,000",
      "Assets increase and equity increases by $20,000",
      "Assets stay level while liabilities rise",
      "Equity increases and liabilities decrease",
    ],
    correctIndex: 0,
    explanation:
      "Cash (asset) rises $20,000 while Notes Payable (liability) rises $20,000 — both sides grow equally and the equation stays balanced.",
  },
  {
    id: 3318,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "hard",
    prompt:
      "A merchandiser’s beginning inventory is $40,000, purchases total $130,000, purchase returns are $10,000, freight-in is $5,000, and ending inventory is $35,000. What is cost of goods sold?",
    choices: [
      "$125,000",
      "$130,000",
      "$120,000",
      "$140,000",
    ],
    correctIndex: 1,
    explanation:
      "COGS = Beginning inventory + Net purchases + Freight-in − Ending inventory = $40,000 + ($130,000 − $10,000) + $5,000 − $35,000 = $130,000.",
  },
  {
    id: 3319,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "Which of these errors will cause a trial balance to be out of balance?",
    choices: [
      "Posting a debit to the wrong expense account",
      "Recording a $500 receipt as only $50 in BOTH cash and revenue",
      "Omitting the credit side of an entry entirely",
      "Journalizing a transaction twice with equal debits and credits",
    ],
    correctIndex: 2,
    explanation:
      "Only one-sided omissions break debit-credit equality. Wrong-account postings and duplicated balanced entries keep totals equal.",
  },
  {
    id: 3320,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A bank advertises “no fees ever” but buries a $12 monthly maintenance charge in fine print. This practice may violate laws against:",
    choices: [
      "Deceptive advertising and unfair or deceptive acts",
      "Secured transaction perfection rules",
      "Insider trading statutes",
      "Antitrust price fixing",
    ],
    correctIndex: 0,
    explanation:
      "Advertising claims that mislead reasonable consumers — including material omissions in fine print — constitute deceptive practices under FTC Act Section 5 and similar laws.",
  },
  {
    id: 3321,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "A copyright protects which type of property?",
    choices: [
      "Inventions and manufacturing processes",
      "Brand names and logos",
      "Original works of authorship such as books, music, and software",
      "Secret recipes regardless of publication",
    ],
    correctIndex: 2,
    explanation:
      "Copyrights cover creative expression fixed in tangible form. Inventions get patents; brand identifiers get trademarks; secret formulas rely on trade secret law.",
  },
  {
    id: 3322,
    clusterId: "finance",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "During a severe recession, a worker gives up job searching after months without success. Official unemployment statistics will:",
    choices: [
      "Count her as unemployed since she has no job",
      "Exclude her from the labor force as a discouraged worker, lowering the measured rate",
      "Reclassify her as employed part-time automatically",
      "Trigger immediate federal retraining enrollment",
    ],
    correctIndex: 1,
    explanation:
      "Discouraged workers who stop actively searching exit the labor force, so the headline unemployment rate can fall even though joblessness hasn’t truly improved.",
  },
  {
    id: 3323,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "Which strategy best balances liquidity, growth, and safety for a family emergency fund?",
    choices: [
      "All funds in individual growth stocks",
      "Three to six months of expenses in a high-yield savings account or money market fund",
      "Everything in a 10-year certificate of deposit",
      "Cash hidden at home in large amounts",
    ],
    correctIndex: 1,
    explanation:
      "Emergency money must be safe and instantly accessible; high-yield savings and money market accounts deliver modest interest without market risk or withdrawal penalties.",
  },
  {
    id: 3324,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "When comparing two credit card offers, Card A charges 18 percent APR with no annual fee; Card B charges 14 percent APR with a $95 annual fee. For whom is Card B clearly better?",
    choices: [
      "Someone who pays the balance in full every month",
      "Someone carrying a very large revolving balance year-round",
      "Both cards cost identical amounts for every user",
      "Neither — annual fees always outweigh interest differences",
    ],
    correctIndex: 1,
    explanation:
      "On large persistent balances, the 4-point rate saving (e.g., $400 yearly per $10,000 owed) exceeds the $95 fee. Full-balance payers avoid interest entirely, favoring Card A.",
  },
  {
    id: 3325,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "An investor’s employer offers 401(k) matching up to 4 percent of salary. The investor should generally contribute:",
    choices: [
      "Nothing until retirement age approaches",
      "At least 4 percent to capture the full match before other investing priorities",
      "100 percent of salary to maximize tax deferral immediately",
      "Only after maxing out taxable brokerage accounts",
    ],
    correctIndex: 1,
    explanation:
      "The match is a guaranteed 100 percent return on matched dollars — conventional advice ranks capturing it above nearly every other financial move.",
  },
  {
    id: 3326,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "medium",
    prompt:
      "Interest paid on a business loan appears in which section of the statement of cash flows?",
    choices: [
      "Operating activities",
      "Investing activities",
      "Financing activities",
      "It is never reported as a cash flow",
    ],
    correctIndex: 0,
    explanation:
      "Under U.S. GAAP, interest paid is classified within operating activities, while principal repayments fall under financing activities.",
  },
  {
    id: 3327,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "easy",
    prompt:
      "Net sales are calculated as:",
    choices: [
      "Gross sales minus sales returns, allowances, and discounts",
      "Gross sales plus cost of goods sold",
      "Total assets minus current liabilities",
      "Revenue plus unearned revenue",
    ],
    correctIndex: 0,
    explanation:
      "Contra-revenue items — returns, allowances, and cash discounts — reduce gross sales to net sales, the figure used in margin calculations.",
  },
  {
    id: 3328,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "Which adjusting entry applies to a situation where services were performed but not yet billed or recorded?",
    choices: [
      "Debit Accounts Receivable; credit Service Revenue",
      "Debit Unearned Revenue; credit Cash",
      "Debit Service Revenue; credit Accounts Receivable",
      "No entry is permitted until an invoice exists",
    ],
    correctIndex: 0,
    explanation:
      "Accrued revenue must be recognized when earned under accrual accounting, so unbilled work creates a receivable and corresponding revenue.",
  },
  {
    id: 3329,
    clusterId: "finance",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "The central bank cuts interest rates toward zero during a deep slump, yet businesses still won’t borrow and consumers keep saving. Economists describe this trapped condition as:",
    choices: [
      "A liquidity trap limiting monetary policy’s power",
      "Cost-push inflation",
      "Fiscal drag",
      "The accelerator effect",
    ],
    correctIndex: 0,
    explanation:
      "In a liquidity trap, near-zero rates fail to stimulate borrowing or spending, so monetary policy loses traction and fiscal measures gain appeal.",
  },
  {
    id: 3330,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "hard",
    prompt:
      "A lender denies Maria’s mortgage application after pulling her credit report. Under the Fair Credit Reporting Act, the lender must:",
    choices: [
      "Take no action unless Maria files a lawsuit first",
      "Send an adverse action notice explaining the denial and identifying the bureau used",
      "Delete her credit file upon request",
      "Guarantee approval once her score improves by ten points",
    ],
    correctIndex: 1,
    explanation:
      "Adverse action notices must state the reason, name the credit bureau supplying the report, and explain the consumer’s right to a free copy and dispute process.",
  },
  {
    id: 3331,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "Which of the following is a WANT rather than a need in household budgeting?",
    choices: [
      "Basic groceries",
      "Renters or homeowners insurance",
      "A premium streaming bundle with five services",
      "Prescription medications",
    ],
    correctIndex: 2,
    explanation:
      "Needs are essentials for living and earning income; entertainment subscriptions are discretionary wants, even though modest ones.",
  },
  {
    id: 3332,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "hard",
    prompt:
      "Two friends each save $200 monthly. Ava saves in an account earning 6 percent APY; Ben keeps cash in a shoebox. After 10 years, the biggest driver of their wealth gap is:",
    choices: [
      "Ben’s superior liquidity",
      "Compound growth on Ava’s deposits plus interest on interest",
      "Inflation affecting only shoebox cash equally in both accounts",
      "Tax penalties applied exclusively to savings accounts",
    ],
    correctIndex: 1,
    explanation:
      "Ava’s balance compounds — contributions earn interest and that interest earns interest — producing roughly $32,800 versus Ben’s $24,000.",
  },
  {
    id: 3333,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "easy",
    prompt:
      "An ACH transfer is best described as:",
    choices: [
      "An electronic bank-to-bank network transfer used for payroll and bill payments",
      "A physical check mailed between banks for clearing",
      "A cryptocurrency transaction recorded on a blockchain",
      "An in-person cash deposit at a branch",
    ],
    correctIndex: 0,
    explanation:
      "The Automated Clearing House network batches electronic transfers cheaply — powering direct deposits, autopay bills, and peer payments like Venmo withdrawals.",
  },
  {
    id: 3334,
    clusterId: "finance",
    category: "Investments",
    difficulty: "hard",
    prompt:
      "A retiree needs predictable income and capital preservation; a 25-year-old seeks maximum long-term growth. Which allocation pairing fits them respectively?",
    choices: [
      "Both should hold 90 percent equities regardless of age",
      "Retiree: bond-heavy with dividend stocks; young investor: equity-heavy index funds",
      "Retiree: aggressive tech stock concentration; young investor: Treasury-only ladder",
      "Both should hold only money market funds until markets stabilize",
    ],
    correctIndex: 1,
    explanation:
      "Allocation should match time horizon and income needs: retirees prioritize stability and income; young investors can tolerate volatility for compounding growth.",
  },
  {
    id: 3335,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "hard",
    prompt:
      "Company X has net income of $120,000, interest expense of $30,000, and taxes of $40,000. Its times-interest-earned (interest coverage) ratio is:",
    choices: [
      "4 times",
      "3 times",
      "6.33 times",
      "1.71 times",
    ],
    correctIndex: 2,
    explanation:
      "Coverage = (Net Income + Interest + Taxes) ÷ Interest = ($120,000 + $30,000 + $40,000) ÷ $30,000 ≈ 6.33, showing earnings cover interest over six times.",
  },
  {
    id: 3336,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "A business’s bank statement shows $9,800 while its book balance is $9,700. Deposits in transit total $450, outstanding checks total $600, and the bank charged a $50 service fee not yet recorded by the company. What is the true adjusted cash balance?",
    choices: [
      "$9,650",
      "$10,100",
      "$9,750",
      "$10,250",
    ],
    correctIndex: 0,
    explanation:
      "Bank side: $9,800 + $450 deposits in transit − $600 outstanding checks = $9,650. Book side: $9,700 − $50 service charge = $9,650 — both now reconcile.",
  },
  {
    id: 3337,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "Which factor most directly determines how much interest a borrower pays over the life of a fixed-rate loan?",
    choices: [
      "The borrower’s favorite lender’s brand reputation",
      "Principal amount, interest rate, and length of the repayment term",
      "The color of the loan paperwork",
      "Whether the loan was applied for online or in person",
    ],
    correctIndex: 1,
    explanation:
      "Total interest grows with principal, rate, and time — longer terms lower monthly payments but dramatically raise lifetime interest cost.",
  },
  {
    id: 3338,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "A checking account pays 0.05 percent APY while inflation runs 3 percent annually. Keeping large idle balances there means:",
    choices: [
      "Real purchasing power of those funds slowly erodes",
      "The balance automatically compounds above inflation",
      "The account is exempt from inflation effects because it is FDIC-insured",
      "Purchasing power rises as long as no withdrawals occur",
    ],
    correctIndex: 0,
    explanation:
      "FDIC insurance protects against bank failure, not inflation. Earning far less than inflation means real value shrinks — excess cash belongs in higher-yield options.",
  },
  {
    id: 3339,
    clusterId: "finance",
    category: "Investments",
    difficulty: "easy",
    prompt:
      "Market capitalization of a public company equals:",
    choices: [
      "Total shares outstanding multiplied by the current share price",
      "Annual revenue minus expenses",
      "Book value of all factories and equipment",
      "Cash held in corporate bank accounts",
    ],
    correctIndex: 0,
    explanation:
      "Market cap prices the entire equity: share price × shares outstanding. It classifies firms as small-, mid-, or large-cap.",
  },
  {
    id: 3340,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "medium",
    prompt:
      "Repayment of a long-term loan’s principal appears in which cash flow section?",
    choices: [
      "Operating activities",
      "Investing activities",
      "Financing activities",
      "Disclosed only in footnotes",
    ],
    correctIndex: 2,
    explanation:
      "Financing activities cover borrowing, principal repayments, dividends, and stock transactions with owners and creditors.",
  },
  {
    id: 3341,
    clusterId: "finance",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "A budget deficit occurs when a government:",
    choices: [
      "Collects more in taxes than it spends",
      "Spends more than it collects in revenue during a fiscal period",
      "Repays national debt ahead of schedule",
      "Balances spending exactly to receipts",
    ],
    correctIndex: 1,
    explanation:
      "Deficits are financed by borrowing, adding to the national debt; surpluses occur when revenue exceeds spending.",
  },
  {
    id: 3342,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "easy",
    prompt:
      "Depreciation expense differs from most other expenses because recording it:",
    choices: [
      "Requires an immediate cash outlay each period",
      "Allocates a past cash purchase over future periods without new cash leaving the business",
      "Increases both assets and liabilities simultaneously",
      "Applies only to inventory held for resale",
    ],
    correctIndex: 1,
    explanation:
      "Depreciation is a non-cash expense: cash left at purchase time, and the entry simply spreads that historical cost across useful years.",
  },
  {
    id: 3343,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "Under usury laws, lenders may not:",
    choices: [
      "Charge interest rates exceeding statutory maximums",
      "Lend money to any business borrower",
      "Require collateral on loans above $10,000",
      "Report borrower payment history to credit bureaus",
    ],
    correctIndex: 0,
    explanation:
      "Usury laws cap allowable interest rates by state; rates beyond the cap can make loans unenforceable or trigger penalties.",
  },
  {
    id: 3344,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "medium",
    prompt:
      "Which sequence reflects the commonly recommended priority order for personal financial goals?",
    choices: [
      "Invest in crypto → buy a house → build emergency fund → pay off credit cards",
      "Build small emergency fund → pay off high-interest debt → full emergency fund → retirement investing",
      "Max retirement accounts → take payday loans for emergencies → save last",
      "Buy insurance for everything → invest everything remaining → borrow as needed",
    ],
    correctIndex: 1,
    explanation:
      "Standard advice: starter savings first, then eliminate high-interest debt (guaranteed “return”), then complete the emergency fund, then long-term investing.",
  },
  {
    id: 3345,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "hard",
    prompt:
      "Cardholders who carry balances should compare cards primarily using APR, while transactors who pay in full should prioritize:",
    choices: [
      "APR alone, since all other terms are irrelevant",
      "Rewards, grace periods, and absence of annual fees",
      "The card’s artwork design and metal weight",
      "Cash advance limits above all else",
    ],
    correctIndex: 1,
    explanation:
      "Full-balance payers dodge interest entirely via grace periods, so rewards value and fee structure matter most; APR mainly matters to revolvers.",
  },
  {
    id: 3346,
    clusterId: "finance",
    category: "Investments",
    difficulty: "medium",
    prompt:
      "Reinvestment risk for a bondholder is greatest when:",
    choices: [
      "Interest rates rise sharply after purchase",
      "Coupons must be reinvested at lower prevailing rates than the bond originally paid",
      "The issuer’s rating improves mid-life",
      "The bond trades above par in secondary markets",
    ],
    correctIndex: 1,
    explanation:
      "Falling rates mean coupon payments get redeployed at weaker yields, shrinking total return — the mirror image of price risk from rising rates.",
  },
  {
    id: 3347,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "easy",
    prompt:
      "Which users rely MOST directly on audited financial statements to decide whether to extend trade credit?",
    choices: [
      "Suppliers and commercial lenders",
      "The company’s line-level employees scheduling shifts",
      "Customers buying retail merchandise",
      "Social media followers of the brand",
    ],
    correctIndex: 0,
    explanation:
      "Creditors and suppliers analyze statements — liquidity, leverage, coverage ratios — to judge repayment capacity before granting credit terms.",
  },
  {
    id: 3348,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "hard",
    prompt:
      "Switching from FIFO to LIFO during rising prices will most likely:",
    choices: [
      "Raise reported net income and ending inventory",
      "Lower reported net income and ending inventory while reducing income taxes",
      "Leave all figures identical since methods are cosmetic",
      "Increase cash sales immediately",
    ],
    correctIndex: 1,
    explanation:
      "LIFO charges newer, pricier goods against revenue: COGS rises, profit falls, taxes drop, and older cheaper costs remain in ending inventory.",
  },
  {
    id: 3349,
    clusterId: "finance",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Minimum wage laws are an example of government intervention that creates:",
    choices: [
      "A price ceiling in the labor market",
      "A price floor in the labor market",
      "A subsidy for employers",
      "A pure market equilibrium wage",
    ],
    correctIndex: 1,
    explanation:
      "A binding minimum wage sits above equilibrium wage, potentially creating surplus labor (unemployment) among low-skill workers — textbook price floor effects.",
  },
  {
    id: 3350,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "A contract formed through one party’s fraudulent misrepresentation is generally:",
    choices: [
      "Fully enforceable because signatures exist",
      "Voidable by the deceived party, who may rescind and seek damages",
      "Automatically criminal in every instance",
      "Valid unless written below a certain dollar amount",
    ],
    correctIndex: 1,
    explanation:
      "Fraud destroys genuine assent, letting the victim void the contract and pursue damages — though the defrauder cannot simply walk away.",
  },
  {
    id: 3351,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "easy",
    prompt:
      "Which document directs how your assets pass at death and names an executor?",
    choices: [
      "A will",
      "A lease agreement",
      "An insurance binder",
      "A paycheck stub",
    ],
    correctIndex: 0,
    explanation:
      "A will specifies asset distribution and appoints an executor; without one, state intestacy laws decide who inherits.",
  },
  {
    id: 3352,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "easy",
    prompt:
      "Overdraft protection linked to a savings account works by:",
    choices: [
      "Forgiving overdrafts permanently without any transfer",
      "Automatically transferring funds from savings to cover checking shortfalls, often for a small fee",
      "Reporting shortfalls to the IRS as taxable gifts",
      "Doubling the checking limit every month",
    ],
    correctIndex: 1,
    explanation:
      "Linked-account protection sweeps savings into checking when needed, avoiding bounced items — usually cheaper than standard overdraft fees but not free.",
  },
  {
    id: 3353,
    clusterId: "finance",
    category: "Investments",
    difficulty: "hard",
    prompt:
      "An index fund returned 10 percent while its benchmark returned 10.2 percent. The gap most plausibly reflects:",
    choices: [
      "The fund’s expense ratio and tracking error",
      "Guaranteed manager skill shortfall under securities law",
      "Benchmark fraud requiring SEC investigation",
      "Dividends being illegal inside index vehicles",
    ],
    correctIndex: 0,
    explanation:
      "Fees plus imperfect replication (tracking error) cause passive funds to lag their benchmarks slightly — exactly why low expense ratios matter.",
  },
  {
    id: 3354,
    clusterId: "finance",
    category: "Financial Statements",
    difficulty: "hard",
    prompt:
      "Inventory turnover falls from 6.0 to 3.5 while sales stay flat. The most reasonable management concern is:",
    choices: [
      "Sales are growing too quickly to fulfill",
      "Capital is increasingly tied up in slow-moving stock, risking obsolescence and markdowns",
      "The company has stopped paying suppliers",
      "Gross margin has mathematically doubled",
    ],
    correctIndex: 1,
    explanation:
      "Slower turnover with flat sales signals overstocking or weakening demand — tying up working capital and inviting write-downs.",
  },
  {
    id: 3355,
    clusterId: "finance",
    category: "Accounting",
    difficulty: "medium",
    prompt:
      "A petty cash fund of $200 is replenished after $170 in documented spending remains... the custodian holds $30 cash plus $170 in receipts. The replenishment entry debits:",
    choices: [
      "Petty Cash for $200",
      "Various expense accounts for $170",
      "Cash Short and Over for $200",
      "Accounts Payable for $170",
    ],
    correctIndex: 1,
    explanation:
      "Replenishment restores the fund by crediting Cash and debiting the specific expense accounts evidenced by the receipts — Petty Cash itself stays at $200.",
  },
  {
    id: 3356,
    clusterId: "finance",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A new technology lets factories produce twice as much output per worker. Holding other factors equal, the most likely macroeconomic effect is:",
    choices: [
      "A leftward shift of the production possibilities curve",
      "Economic growth as productive capacity expands",
      "Automatic hyperinflation within one quarter",
      "Permanent structural unemployment of all workers",
    ],
    correctIndex: 1,
    explanation:
      "Productivity gains expand what the economy can produce, shifting the PPC outward — the primary engine of long-run growth and rising living standards.",
  },
  {
    id: 3357,
    clusterId: "finance",
    category: "Business Law",
    difficulty: "hard",
    prompt:
      "A creditor wins a judgment against a debtor who then refuses to pay despite having wages and assets. The creditor may pursue:",
    choices: [
      "Wage garnishment or liens on property, subject to state exemption limits",
      "Immediate imprisonment of the debtor for civil debt",
      "Seizure of the debtor’s voting rights",
      "Automatic transfer of the debtor’s citizenship records",
    ],
    correctIndex: 0,
    explanation:
      "Civil judgments enable garnishment, levies, and liens within statutory exemptions; debtors’ prisons are unconstitutional in the U.S.",
  },
  {
    id: 3358,
    clusterId: "finance",
    category: "Personal Finance",
    difficulty: "hard",
    prompt:
      "Lea can either pay $25,000 cash for a car or finance it at 3 percent APR while her investments earn 7 percent. Ignoring risk differences, the financially stronger move is generally to:",
    choices: [
      "Pay cash, since debt is always bad regardless of rates",
      "Finance the car, since her money earns 4 points more than the loan costs",
      "Lease instead, because leases never involve interest",
      "Borrow extra at 3 percent to invest even more aggressively in lottery tickets",
    ],
    correctIndex: 1,
    explanation:
      "When the investment return reliably exceeds the borrowing rate, keeping money invested beats draining cash — though real decisions must weigh risk and job security.",
  },
  {
    id: 3359,
    clusterId: "finance",
    category: "Banking & Credit",
    difficulty: "medium",
    prompt:
      "Why do lenders check debt-to-income ratio in addition to credit score?",
    choices: [
      "DTI reveals current capacity to absorb another payment, complementing the score’s repayment history",
      "DTI replaces the need for any income verification",
      "Credit scores legally cannot exceed DTI percentages",
      "DTI measures only willingness, never ability, to repay",
    ],
    correctIndex: 0,
    explanation:
      "A score shows past behavior; DTI shows whether today’s income can carry the proposed payment on top of existing obligations — both sides of repayment risk.",
  },
  {
    id: 3360,
    clusterId: "finance",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "A coffee shop raises prices 10 percent and total revenue falls. This outcome implies demand for its coffee is:",
    choices: [
      "Inelastic, since quantity barely moved",
      "Elastic, since quantity dropped proportionally more than price rose",
      "Perfectly inelastic",
      "Unrelated to price by definition",
    ],
    correctIndex: 1,
    explanation:
      "Revenue falls after a price increase only when customers cut back more than proportionally — the signature of elastic demand.",
  },
];
