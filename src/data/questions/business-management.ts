import type { PracticeQuestion } from "@/data/types";

export const businessManagementQuestions: PracticeQuestion[] = [
  {
    id: 1101,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "A restaurant owner spends a weekend mapping out where she wants her business to be in five years and what steps are needed to get there. Which management function is she performing?",
    choices: [
      "Controlling",
      "Planning",
      "Staffing",
      "Directing",
    ],
    correctIndex: 1,
    explanation:
      "Planning involves defining goals and deciding in advance the actions needed to achieve them, which is exactly what a long-term strategy session accomplishes.",
  },
  {
    id: 1102,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "A manager who delegates authority to a department head is practicing which management function?",
    choices: [
      "Organizing",
      "Controlling",
      "Budgeting",
      "Forecasting",
    ],
    correctIndex: 0,
    explanation:
      "Organizing includes arranging people and resources into a structure and assigning authority so work can be carried out efficiently.",
  },
  {
    id: 1103,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "Each month, a store manager compares actual sales to the sales targets set at the beginning of the year and takes corrective action when results fall short. This is an example of which management function?",
    choices: [
      "Planning",
      "Leading",
      "Controlling",
      "Staffing",
    ],
    correctIndex: 2,
    explanation:
      "Controlling means measuring performance against established standards and correcting deviations, which is what comparing actual sales to targets does.",
  },
  {
    id: 1104,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt: "Span of control refers to the number of:",
    choices: [
      "levels in an organization’s hierarchy",
      "employees one manager directly supervises",
      "departments within a company",
      "hours a manager works each week",
    ],
    correctIndex: 1,
    explanation:
      "Span of control is defined as the number of subordinates reporting directly to a single manager; a wide span means many direct reports.",
  },
  {
    id: 1105,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "A supervisor notices that two team members are in conflict over project responsibilities and steps in to resolve the disagreement and re-energize the group. Which management function is being demonstrated?",
    choices: [
      "Organizing",
      "Controlling",
      "Planning",
      "Leading",
    ],
    correctIndex: 3,
    explanation:
      "Leading (directing) involves influencing, motivating, and guiding employees, including resolving conflicts and building morale.",
  },
  {
    id: 1106,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "In a retail chain, a sales associate reports to the shift supervisor, who reports to the store manager, who reports to the district manager. This clear line of authority is known as:",
    choices: [
      "span of control",
      "departmentalization",
      "chain of command",
      "job enrichment",
    ],
    correctIndex: 2,
    explanation:
      "Chain of command is the unbroken line of authority running from top management down to the lowest level, showing who reports to whom.",
  },
  {
    id: 1107,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "An employee receives conflicting instructions from both the production manager and the marketing manager. According to the unity of command principle, what is the underlying problem?",
    choices: [
      "The employee’s span of control is too wide",
      "The company lacks a mission statement",
      "The company has too many levels of management",
      "The employee reports to more than one supervisor",
    ],
    correctIndex: 3,
    explanation:
      "Unity of command holds that each employee should receive orders from only one superior to avoid confusion and divided accountability.",
  },
  {
    id: 1108,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A middle manager creates quarterly departmental action plans that support the CEO’s three-year strategic plan. These shorter-range plans are best classified as:",
    choices: [
      "tactical plans",
      "contingency plans",
      "standing policies",
      "vision statements",
    ],
    correctIndex: 0,
    explanation:
      "Tactical plans translate broad strategic goals into specific short-to-medium-term actions, typically developed by middle managers.",
  },
  {
    id: 1109,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "During a SWOT analysis, a company lists its aging manufacturing equipment under weaknesses and new government regulations under threats. This illustrates that SWOT analysis separates factors into:",
    choices: [
      "financial and non-financial categories",
      "short-term and long-term categories",
      "internal and external categories",
      "quantitative and qualitative categories",
    ],
    correctIndex: 2,
    explanation:
      "Strengths and weaknesses are internal to the organization, while opportunities and threats come from the external environment.",
  },
  {
    id: 1110,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A company’s rule that every customer complaint must be answered within 24 hours applies continuously to all situations of its type. This type of plan is best described as a:",
    choices: [
      "single-use plan",
      "program budget",
      "standing plan",
      "project charter",
    ],
    correctIndex: 2,
    explanation:
      "Standing plans, such as policies, procedures, and rules, are designed to be used repeatedly for recurring situations.",
  },
  {
    id: 1111,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "What is the correct logical sequence of the basic steps in the control process?",
    choices: [
      "Take corrective action, set standards, measure performance",
      "Measure performance, take corrective action, set standards",
      "Set standards, measure performance, compare to standards and take corrective action",
      "Compare results to competitors, set standards, reward employees",
    ],
    correctIndex: 2,
    explanation:
      "Effective control begins by establishing standards, then measuring actual performance against those standards, and finally taking corrective action when gaps exist.",
  },
  {
    id: 1112,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "Under management by objectives (MBO), a manager and each employee jointly set specific measurable goals and then periodically review progress toward them. The primary purpose of MBO is to:",
    choices: [
      "eliminate the need for performance appraisals entirely",
      "align individual employee goals with overall organizational goals",
      "replace formal strategic planning with daily decision making",
      "standardize pay increases across all departments",
    ],
    correctIndex: 1,
    explanation:
      "MBO, popularized by Peter Drucker, links each employee’s objectives to the organization’s broader goals so everyone works toward the same outcomes.",
  },
  {
    id: 1113,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "A plant manager only investigates quality reports when defect rates exceed 3%, ignoring minor variations below that threshold. This control technique is known as management by:",
    choices: [
      "objectives",
      "exception",
      "walking around",
      "delegation",
    ],
    correctIndex: 1,
    explanation:
      "Management by exception lets managers concentrate attention on significant deviations from standards rather than reviewing every result.",
  },
  {
    id: 1114,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "A manufacturer groups its workforce into divisions for kitchen appliances, laundry equipment, and air conditioners, each with its own sales and service staff. This is an example of departmentalization by:",
    choices: [
      "product",
      "geography",
      "function",
      "customer type",
    ],
    correctIndex: 0,
    explanation:
      "Product departmentalization organizes units around distinct product lines so each division can focus on its own market and operations.",
  },
  {
    id: 1115,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "easy",
    prompt:
      "Which document outlines a position’s duties, responsibilities, working conditions, and reporting relationships?",
    choices: [
      "Job specification",
      "Job description",
      "Employment contract",
      "Performance appraisal",
    ],
    correctIndex: 1,
    explanation:
      "A job description describes what the job entails, while a job specification lists the qualifications and skills a person needs to fill it.",
  },
  {
    id: 1116,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "easy",
    prompt:
      "On a new employee’s first day, the company introduces her to coworkers, explains company policies, and tours her through the facility. This process is called:",
    choices: [
      "orientation",
      "recruitment",
      "separation",
      "collective bargaining",
    ],
    correctIndex: 0,
    explanation:
      "Orientation familiarizes new hires with the organization, its policies, culture, and coworkers, helping them become productive sooner.",
  },
  {
    id: 1117,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "easy",
    prompt:
      "Once a year, a supervisor formally rates each employee’s job performance against written standards and discusses the results with them. This activity is known as:",
    choices: [
      "a performance appraisal",
      "orientation",
      "a job analysis",
      "succession planning",
    ],
    correctIndex: 0,
    explanation:
      "A performance appraisal systematically evaluates an employee’s performance against predetermined criteria and provides feedback for development.",
  },
  {
    id: 1118,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "A warehouse trains each employee to perform several different jobs on the line so workers can rotate positions during absences. This practice is called:",
    choices: [
      "outsourcing",
      "downsizing",
      "cross-training",
      "affirmative action",
    ],
    correctIndex: 2,
    explanation:
      "Cross-training gives employees skills in multiple roles, increasing flexibility and coverage when staffing needs change.",
  },
  {
    id: 1119,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "When an employee voluntarily leaves a company, the human resources manager conducts a meeting asking why she is leaving and how the workplace could improve. This meeting is known as an:",
    choices: [
      "orientation session",
      "arbitration hearing",
      "exit interview",
      "assessment center",
    ],
    correctIndex: 2,
    explanation:
      "Exit interviews gather honest feedback from departing employees to help the company reduce future turnover.",
  },
  {
    id: 1120,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "What is a primary advantage of filling a vacant position with an internal candidate rather than hiring externally?",
    choices: [
      "Internal candidates always accept lower salaries",
      "Internal recruitment eliminates the need for training",
      "The company already knows the candidate’s abilities and work ethic",
      "Internal candidates require no performance reviews",
    ],
    correctIndex: 2,
    explanation:
      "Promoting from inside gives the employer a proven track record of the employee’s performance and boosts morale among current staff.",
  },
  {
    id: 1121,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "A company allows employees to choose their start and end times as long as they work core hours from 10 a.m. to 2 p.m. This flexible arrangement is commonly called:",
    choices: [
      "telecommuting",
      "job sharing",
      "compressed workweek",
      "flextime",
    ],
    correctIndex: 3,
    explanation:
      "Flextime lets employees vary their schedules around required core hours, improving work-life balance while maintaining coverage.",
  },
  {
    id: 1122,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "According to Frederick Herzberg’s two-factor theory, improving which of the following would most likely reduce dissatisfaction but NOT by itself create lasting motivation?",
    choices: [
      "Recognition for achievement",
      "Opportunity for advancement",
      "Salary and working conditions",
      "Sense of responsibility",
    ],
    correctIndex: 2,
    explanation:
      "Herzberg classified salary, working conditions, and company policy as hygiene factors that prevent dissatisfaction, while true motivators are achievement, recognition, and growth.",
  },
  {
    id: 1123,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "According to Maslow’s hierarchy of needs, which correctly ranks needs from lowest to highest?",
    choices: [
      "Esteem → Safety → Physiological → Self-actualization → Social",
      "Physiological → Safety → Social → Esteem → Self-actualization",
      "Safety → Physiological → Esteem → Social → Self-actualization",
      "Social → Safety → Physiological → Self-actualization → Esteem",
    ],
    correctIndex: 1,
    explanation:
      "Maslow ordered needs from physiological and safety at the base, up through social belonging and esteem, to self-actualization at the peak.",
  },
  {
    id: 1124,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "A manager receives performance feedback about herself from supervisors, peers, subordinates, and customers. This comprehensive evaluation method is known as:",
    choices: [
      "management by objectives",
      "360-degree feedback",
      "graphic rating scale",
      "random sampling appraisal",
    ],
    correctIndex: 1,
    explanation:
      "360-degree feedback collects evaluations from all directions around the employee, providing a fuller picture than a single rater can offer.",
  },
  {
    id: 1125,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "easy",
    prompt:
      "A bakery pays $4,000 per month in rent whether it sells 100 loaves or 10,000 loaves. Rent is an example of a:",
    choices: [
      "variable cost",
      "fixed cost",
      "marginal cost",
      "opportunity cost",
    ],
    correctIndex: 1,
    explanation:
      "Fixed costs remain constant regardless of output volume, whereas variable costs rise and fall with the level of production.",
  },
  {
    id: 1126,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "easy",
    prompt:
      "A company has $50,000 in fixed costs, sells its product for $25 per unit, and incurs variable costs of $15 per unit. What is its break-even point?",
    choices: [
      "2,000 units",
      "3,334 units",
      "5,000 units",
      "10,000 units",
    ],
    correctIndex: 2,
    explanation:
      "Break-even equals fixed costs divided by contribution margin per unit: $50,000 ÷ ($25 − $15) = 5,000 units.",
  },
  {
    id: 1127,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "easy",
    prompt:
      "Inspecting finished products to detect defects before they reach customers is an example of:",
    choices: [
      "quality control",
      "inventory turnover",
      "capacity planning",
      "vertical integration",
    ],
    correctIndex: 0,
    explanation:
      "Quality control involves monitoring outputs and processes to ensure products meet established standards before delivery.",
  },
  {
    id: 1128,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "An automaker coordinates deliveries of parts to arrive exactly when needed on the assembly line, keeping almost no parts in storage. This inventory strategy is called:",
    choices: [
      "economic order quantity",
      "perpetual inventory",
      "safety stock buffering",
      "just-in-time (JIT) inventory",
    ],
    correctIndex: 3,
    explanation:
      "JIT minimizes holding costs by receiving materials only as they are needed in production, though it leaves little cushion for supplier delays.",
  },
  {
    id: 1129,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "As a factory doubles its output, its cost per unit falls because machinery and overhead are spread across more products. This cost advantage is known as:",
    choices: [
      "diseconomies of scale",
      "diminishing marginal returns",
      "price discrimination",
      "economies of scale",
    ],
    correctIndex: 3,
    explanation:
      "Economies of scale occur when larger production volume lowers the average cost per unit due to spreading fixed costs and gaining purchasing power.",
  },
  {
    id: 1130,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A grocery store sells its oldest stock first so perishable goods do not expire on the shelf. This inventory valuation method is called:",
    choices: [
      "LIFO (last-in, first-out)",
      "weighted average cost",
      "FIFO (first-in, first-out)",
      "specific identification",
    ],
    correctIndex: 2,
    explanation:
      "FIFO assumes the oldest inventory is sold first, which suits perishable goods and keeps stock fresh.",
  },
  {
    id: 1131,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A software firm hires an outside company to handle its payroll processing instead of doing it internally. This practice is best described as:",
    choices: [
      "insourcing",
      "licensing",
      "outsourcing",
      "franchising",
    ],
    correctIndex: 2,
    explanation:
      "Outsourcing contracts outside specialists to perform business functions, often reducing costs and letting the firm focus on core activities.",
  },
  {
    id: 1132,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "hard",
    prompt:
      "Total quality management (TQM) differs from traditional inspection-based quality control primarily because TQM:",
    choices: [
      "relies solely on end-of-line product inspections by specialists",
      "focuses only on reducing material costs throughout the supply chain",
      "engages every employee in continuous improvement of all processes",
      "sets quality standards once and never revises them",
    ],
    correctIndex: 2,
    explanation:
      "TQM embeds quality into every process and makes continuous improvement everyone’s responsibility rather than relying on final inspections alone.",
  },
  {
    id: 1133,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "hard",
    prompt:
      "A project manager uses a bar chart that displays each task as a horizontal bar spanning its scheduled start and finish dates. This scheduling tool is called a:",
    choices: [
      "Gantt chart",
      "Pareto chart",
      "control chart",
      "scatter diagram",
    ],
    correctIndex: 0,
    explanation:
      "A Gantt chart visually maps tasks against a timeline, making it easy to track schedules, durations, and overlaps in a project.",
  },
  {
    id: 1134,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "If the price of concert tickets rises sharply while all other factors stay constant, the quantity demanded will generally:",
    choices: [
      "increase according to the law of demand",
      "remain unchanged because demand is fixed",
      "decrease according to the law of demand",
      "shift the entire demand curve to the right",
    ],
    correctIndex: 2,
    explanation:
      "The law of demand states that as price rises, quantity demanded falls, producing movement along a downward-sloping demand curve.",
  },
  {
    id: 1135,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "A bumper coffee bean harvest greatly increases the supply of beans. Holding demand constant, the equilibrium price of coffee beans will most likely:",
    choices: [
      "fall",
      "rise",
      "stay exactly the same",
      "become impossible to determine",
    ],
    correctIndex: 0,
    explanation:
      "When supply increases and demand is unchanged, the surplus pressure pushes the equilibrium price downward.",
  },
  {
    id: 1136,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "In a market economy, prices are determined primarily by:",
    choices: [
      "government planning agencies",
      "labor union negotiations",
      "individual company charters",
      "the interaction of supply and demand",
    ],
    correctIndex: 3,
    explanation:
      "In market economies, buyers and sellers interacting through supply and demand determine prices with limited government intervention.",
  },
  {
    id: 1137,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "A single utility company controls the entire market for water service in a city because duplicating the pipe infrastructure is impractical. This market structure is best described as a:",
    choices: [
      "perfectly competitive market",
      "monopolistic competition",
      "oligopoly",
      "natural monopoly",
    ],
    correctIndex: 3,
    explanation:
      "A natural monopoly exists when one firm can serve the whole market at lower cost than multiple firms, typically due to enormous infrastructure costs.",
  },
  {
    id: 1138,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Gross domestic product (GDP) is best defined as the total value of:",
    choices: [
      "all goods and services produced within a country during a given period",
      "all goods imported into a country during a given period",
      "all wages paid to workers in a country during a given period",
      "all corporate profits earned worldwide by a country’s firms",
    ],
    correctIndex: 0,
    explanation:
      "GDP measures the total market value of all final goods and services produced within a country’s borders in a specific time period.",
  },
  {
    id: 1139,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "If inflation rises faster than an employee’s wages, the employee’s real purchasing power will:",
    choices: [
      "increase, because nominal income rises",
      "become impossible to calculate",
      "decrease, because money buys fewer goods",
      "stay the same, because wages adjust automatically",
    ],
    correctIndex: 2,
    explanation:
      "Purchasing power depends on real income; when prices climb faster than pay, each dollar buys less, effectively lowering living standards.",
  },
  {
    id: 1140,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A 20% price increase on designer handbags causes quantity demanded to fall by 40%. Economists would describe demand for these handbags as:",
    choices: [
      "inelastic, because revenue stays constant",
      "elastic, because quantity responds more than proportionally to price",
      "unitary elastic, because percentages match",
      "perfectly inelastic, because demand still exists",
    ],
    correctIndex: 1,
    explanation:
      "Demand is elastic when the percentage change in quantity demanded exceeds the percentage change in price; luxuries like designer goods tend to be highly elastic.",
  },
  {
    id: 1141,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "An economy is generally considered to be in a recession when:",
    choices: [
      "the unemployment rate reaches zero",
      "real GDP declines for two consecutive quarters",
      "the stock market falls on any given trading day",
      "inflation exceeds wage growth for one month",
    ],
    correctIndex: 1,
    explanation:
      "The widely used rule of thumb defines recession as a sustained contraction in real GDP lasting six months or more.",
  },
  {
    id: 1142,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "Maria runs a landscaping business as a sole proprietorship and the business is sued for damages exceeding its insurance. What is Maria’s personal financial exposure?",
    choices: [
      "She loses only the amount invested in the business",
      "Her personal assets may be used to satisfy business debts",
      "She owes nothing because sole proprietors have limited liability",
      "Only the state government can sue a sole proprietorship",
    ],
    correctIndex: 1,
    explanation:
      "Sole proprietors face unlimited personal liability, meaning courts can reach personal assets such as homes and savings to cover business obligations.",
  },
  {
    id: 1143,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "For a contract to be legally binding, each party must exchange something of value. This required element is called:",
    choices: [
      "consideration",
      "ratification",
      "adjudication",
      "novation",
    ],
    correctIndex: 0,
    explanation:
      "Consideration is the bargained-for value each party gives and receives; without it, an agreement is generally not enforceable as a contract.",
  },
  {
    id: 1144,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A major advantage of forming a corporation instead of operating as a partnership is that shareholders:",
    choices: [
      "avoid paying any taxes on dividends",
      "can operate without filing any legal documents",
      "keep complete control over daily management decisions",
      "are not personally liable for corporate debts beyond their investment",
    ],
    correctIndex: 3,
    explanation:
      "Corporations provide limited liability, shielding shareholders’ personal assets so they can lose only what they invested in shares.",
  },
  {
    id: 1145,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "Why might small-business owners choose to form a limited liability company (LLC) rather than a corporation?",
    choices: [
      "LLCs are exempt from all federal regulations",
      "LLCs allow owners to avoid signing any formation paperwork",
      "LLCs prohibit members from participating in management",
      "LLCs combine liability protection with simpler pass-through taxation",
    ],
    correctIndex: 3,
    explanation:
      "An LLC shields members’ personal assets like a corporation while profits pass directly to members’ tax returns, avoiding double taxation and reducing formalities.",
  },
  {
    id: 1146,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A supplier fails to deliver goods promised in a signed contract, causing the buyer to lose expected profit. The buyer’s claim that the contract was violated is based on:",
    choices: [
      "bankruptcy",
      "respondeat superior",
      "breach of contract",
      "eminent domain",
    ],
    correctIndex: 2,
    explanation:
      "Breach of contract occurs when one party fails to perform its obligations, entitling the injured party to seek remedies such as damages.",
  },
  {
    id: 1147,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A 16-year-old signs a contract to buy a car and later decides he no longer wants it. Under general contract law principles, the contract is likely:",
    choices: [
      "fully binding because he signed it willingly",
      "automatically illegal and criminally enforceable",
      "valid only if a court approves the purchase price",
      "voidable at his option because he is a minor",
    ],
    correctIndex: 3,
    explanation:
      "Contracts made by minors are generally voidable at the minor’s discretion, since the law protects young people from their own contractual commitments.",
  },
  {
    id: 1148,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "hard",
    prompt:
      "A beverage company registers its distinctive logo name with the U.S. Patent and Trademark Office to stop competitors from using confusingly similar marks. What form of intellectual property protection has it obtained?",
    choices: [
      "Patent",
      "Copyright",
      "Trademark registration",
      "Trade secret status",
    ],
    correctIndex: 2,
    explanation:
      "Trademarks protect brand names, logos, and slogans that identify the source of goods; patents cover inventions and copyrights protect original creative works.",
  },
  {
    id: 1149,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "easy",
    prompt:
      "A purchasing manager owns stock in a vendor bidding on a large contract but does not disclose this to his employer. His failure to disclose creates a:",
    choices: [
      "conflict of interest",
      "hostile takeover",
      "joint venture",
      "limited partnership",
    ],
    correctIndex: 0,
    explanation:
      "A conflict of interest arises when personal financial interests could improperly influence professional judgment or decisions.",
  },
  {
    id: 1150,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "easy",
    prompt:
      "Business ethics is best defined as:",
    choices: [
      "the legal minimum required to avoid lawsuits",
      "principles of right and wrong that guide business conduct",
      "strategies for maximizing shareholder returns",
      "rules issued only by government regulatory agencies",
    ],
    correctIndex: 1,
    explanation:
      "Business ethics concerns moral principles applied to business decisions, going beyond mere compliance with the letter of the law.",
  },
  {
    id: 1151,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "medium",
    prompt:
      "An accountant discovers her employer is falsifying expense reports and reports the wrongdoing to government regulators. Her action is best described as:",
    choices: [
      "greenwashing",
      "collusion",
      "whistleblowing",
      "insider trading",
    ],
    correctIndex: 2,
    explanation:
      "Whistleblowing is exposing an organization’s unethical or illegal conduct to parties who can address it, often protected by laws such as Sarbanes-Oxley.",
  },
  {
    id: 1152,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "medium",
    prompt:
      "The triple bottom line evaluates a company’s performance using which three dimensions?",
    choices: [
      "Sales, expenses, and debt",
      "Profit, people, and planet",
      "Price, promotion, and place",
      "Productivity, payroll, and procurement",
    ],
    correctIndex: 1,
    explanation:
      "The triple bottom line measures economic, social, and environmental performance, reflecting corporate social responsibility beyond profit alone.",
  },
  {
    id: 1153,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "hard",
    prompt:
      "A manager facing a difficult decision asks whether the choice will produce the greatest good for the greatest number of affected people. She is applying which ethical framework?",
    choices: [
      "Utilitarianism",
      "Deontology based on absolute rules",
      "Egoism focused on self-benefit",
      "Relativism based on local custom",
    ],
    correctIndex: 0,
    explanation:
      "Utilitarian ethics judges actions by their consequences, choosing whichever alternative maximizes overall well-being for the most stakeholders.",
  },
  {
    id: 1154,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "hard",
    prompt:
      "A company advertises its products as “environmentally friendly” while its factories actually violate pollution standards. This deceptive practice is known as:",
    choices: [
      "greenwashing",
      "dumping",
      "boycotting",
      "redlining",
    ],
    correctIndex: 0,
    explanation:
      "Greenwashing misleads consumers into believing a company is more environmentally responsible than it truly is, which is both deceptive and potentially unlawful.",
  },
  {
    id: 1155,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "easy",
    prompt:
      "Attending industry conferences and joining professional associations primarily helps a person build:",
    choices: [
      "a professional network",
      "a credit history",
      "an employment contract",
      "an investment portfolio",
    ],
    correctIndex: 0,
    explanation:
      "Networking builds relationships with contacts who can share advice, information, referrals, and career opportunities.",
  },
  {
    id: 1156,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "easy",
    prompt:
      "In the SMART goal-setting framework, what does the “M” stand for?",
    choices: [
      "Manageable",
      "Motivational",
      "Measurable",
      "Monetary",
    ],
    correctIndex: 2,
    explanation:
      "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound, and measurability lets you track concrete progress.",
  },
  {
    id: 1157,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "medium",
    prompt:
      "During a client meeting, an employee paraphrases the client’s concerns and asks clarifying questions before responding. This communication technique demonstrates:",
    choices: [
      "passive listening",
      "selective perception",
      "one-way communication",
      "active listening",
    ],
    correctIndex: 3,
    explanation:
      "Active listening involves fully concentrating on the speaker, confirming understanding through paraphrasing, and responding thoughtfully.",
  },
  {
    id: 1158,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "medium",
    prompt:
      "After receiving critical feedback on a presentation, an employee thanks the reviewer, identifies two specific improvements, and applies them to the next presentation. This response shows:",
    choices: [
      "defensiveness toward evaluation",
      "avoidance of professional growth",
      "receptiveness to constructive criticism",
      "dependence on external validation",
    ],
    correctIndex: 2,
    explanation:
      "Accepting constructive criticism professionally and acting on it accelerates skill development and signals maturity to employers.",
  },
  {
    id: 1159,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "hard",
    prompt:
      "Emotional intelligence (EQ) in the workplace refers to the ability to:",
    choices: [
      "perform complex mathematical analysis quickly",
      "recognize and manage your own emotions and understand others’ emotions",
      "memorize company policies and procedures accurately",
      "negotiate salary packages without assistance",
    ],
    correctIndex: 1,
    explanation:
      "EQ encompasses self-awareness, self-regulation, motivation, empathy, and social skills, which strongly predict leadership effectiveness.",
  },
  {
    id: 1160,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "hard",
    prompt:
      "A junior analyst is paired with a senior executive who provides ongoing career guidance, honest feedback, and introductions to key contacts. This developmental relationship is called:",
    choices: [
      "mentorship",
      "sponsorship advertising",
      "peer review",
      "succession audit",
    ],
    correctIndex: 0,
    explanation:
      "A mentor shares experience and opens doors for a less experienced protégé, accelerating professional growth beyond what formal training provides.",
  },
  {
    id: 1161,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "Which management function involves arranging tasks, people, and resources into a working structure?",
    choices: [
      "Organizing",
      "Controlling",
      "Planning",
      "Budgeting",
    ],
    correctIndex: 0,
    explanation:
      "Organizing is the function of designing the structure of jobs, departments, and reporting relationships so plans can be executed.",
  },
  {
    id: 1162,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "A hotel manager interviews candidates and selects a new front-desk clerk. Which management function does this represent?",
    choices: [
      "Staffing",
      "Controlling",
      "Organizing",
      "Directing",
    ],
    correctIndex: 0,
    explanation:
      "Staffing covers recruiting, selecting, and placing qualified people into positions so the organization has the talent it needs.",
  },
  {
    id: 1163,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "A broad statement of an organization’s purpose and long-term direction is called its:",
    choices: [
      "organizational chart",
      "mission statement",
      "standard operating procedure",
      "job description",
    ],
    correctIndex: 1,
    explanation:
      "A mission statement communicates why the organization exists and guides decision making at every level.",
  },
  {
    id: 1164,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "Plans designed to respond to unexpected events such as supply disruptions or natural disasters are called:",
    choices: [
      "strategic plans",
      "operational budgets",
      "contingency plans",
      "standing policies",
    ],
    correctIndex: 2,
    explanation:
      "Contingency (backup) plans are prepared in advance so managers can respond quickly if anticipated risks actually occur.",
  },
  {
    id: 1165,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "In a SWOT analysis, a competitor opening a new location across the street would be listed as a:",
    choices: [
      "strength",
      "weakness",
      "opportunity",
      "threat",
    ],
    correctIndex: 3,
    explanation:
      "Threats are external factors that could harm the business; a new direct competitor is outside the firm’s control.",
  },
  {
    id: 1166,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "Which level of management is most responsible for setting long-range strategic goals for the entire organization?",
    choices: [
      "First-line supervisors",
      "Top management",
      "Middle managers",
      "Team leaders",
    ],
    correctIndex: 1,
    explanation:
      "Top management, such as CEOs and vice presidents, develops strategic plans covering the whole organization over multiple years.",
  },
  {
    id: 1167,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "An organizational structure in which decisions are made by top executives rather than lower-level employees is described as:",
    choices: [
      "decentralized",
      "centralized",
      "matrix-based",
      "flat",
    ],
    correctIndex: 1,
    explanation:
      "In centralized structures, authority for major decisions stays at the top; decentralization pushes decisions down to lower levels.",
  },
  {
    id: 1168,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A manager gives an employee the authority to complete a task but retains full accountability for the outcome. This practice best illustrates:",
    choices: [
      "abdication of responsibility",
      "delegation",
      "departmentalization",
      "micromanagement",
    ],
    correctIndex: 1,
    explanation:
      "Delegation transfers authority to perform work while the manager remains answerable for results; abdication would mean giving up accountability entirely.",
  },
  {
    id: 1169,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A company organizes departments into marketing, finance, human resources, and production. This is departmentalization by:",
    choices: [
      "function",
      "geography",
      "product",
      "customer type",
    ],
    correctIndex: 0,
    explanation:
      "Functional departmentalization groups employees by the specialized activity they perform, such as marketing or finance.",
  },
  {
    id: 1170,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A bank assigns regional managers to oversee branches in the Northeast, South, Midwest, and West. This structure reflects departmentalization by:",
    choices: [
      "process",
      "function",
      "geography",
      "product line",
    ],
    correctIndex: 2,
    explanation:
      "Geographic departmentalization organizes units by territory so each region can adapt to local markets and regulations.",
  },
  {
    id: 1171,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A company with few management levels and many employees reporting to each supervisor has a:",
    choices: [
      "tall structure with narrow spans of control",
      "tall structure with wide spans of control",
      "flat structure with narrow spans of control",
      "flat structure with wide spans of control",
    ],
    correctIndex: 3,
    explanation:
      "Few hierarchy levels mean a flat structure, and many direct reports per manager means a wide span of control.",
  },
  {
    id: 1172,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "Which type of plan would a company create specifically to launch one new product next spring?",
    choices: [
      "A standing plan",
      "A policy manual",
      "A single-use plan",
      "A code of ethics",
    ],
    correctIndex: 2,
    explanation:
      "Single-use plans such as programs, projects, and budgets are developed for one-time situations and are not repeated.",
  },
  {
    id: 1173,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A SWOT analysis reveals that a firm’s highly trained workforce gives it an advantage rivals cannot copy quickly. This belongs in which quadrant?",
    choices: [
      "Opportunities",
      "Strengths",
      "Threats",
      "Weaknesses",
    ],
    correctIndex: 1,
    explanation:
      "Internal capabilities that benefit the firm are strengths; opportunities and threats come from the external environment.",
  },
  {
    id: 1174,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A first-line supervisor creates daily work schedules and task assignments for the coming week. These plans are best classified as:",
    choices: [
      "strategic plans",
      "tactical plans",
      "operational plans",
      "contingency plans",
    ],
    correctIndex: 2,
    explanation:
      "Operational plans cover short time horizons and day-to-day activities, typically created by first-line supervisors.",
  },
  {
    id: 1175,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "An employee bypasses her immediate supervisor to present an idea directly to the vice president. Which principle of organizational structure has been violated?",
    choices: [
      "Division of labor",
      "Chain of command",
      "Span of control",
      "Departmentalization",
    ],
    correctIndex: 1,
    explanation:
      "The chain-of-command principle requires employees to communicate up through their direct supervisor rather than skipping levels.",
  },
  {
    id: 1176,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "Staff positions differ from line positions because staff personnel:",
    choices: [
      "have direct authority over production workers",
      "advise and support line managers without direct command authority",
      "are always paid less than line employees",
      "report directly to customers instead of managers",
    ],
    correctIndex: 1,
    explanation:
      "Line positions hold direct authority in the chain of command, while staff positions provide specialized advice and support.",
  },
  {
    id: 1177,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A retail chain’s written guideline that returns are accepted within 30 days with a receipt is an example of a:",
    choices: [
      "procedure",
      "policy",
      "budget",
      "rule of thumb forecast",
    ],
    correctIndex: 1,
    explanation:
      "Policies are general guidelines for decision making; procedures specify the exact step-by-step sequence for carrying out a policy.",
  },
  {
    id: 1178,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "A matrix organizational structure is characterized by employees reporting to:",
    choices: [
      "only one functional manager at all times",
      "both a functional manager and a project or product manager",
      "an external client liaison only",
      "a rotating supervisor chosen monthly by seniority",
    ],
    correctIndex: 1,
    explanation:
      "Matrix structures combine functional and project dimensions, giving each employee two bosses — which improves coordination but can violate unity of command.",
  },
  {
    id: 1179,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "A CEO decides to push pricing, hiring, and purchasing decisions down to individual store managers. The main expected benefit of this decentralization is:",
    choices: [
      "guaranteed consistency across all locations",
      "faster responses to local market conditions",
      "elimination of all management levels",
      "reduced need for financial controls",
    ],
    correctIndex: 1,
    explanation:
      "Decentralization empowers managers closest to customers to act quickly on local information, though it can reduce uniformity across units.",
  },
  {
    id: 1180,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "During the controlling process, a manager discovers actual costs exceed standards. Which action completes the control cycle most appropriately?",
    choices: [
      "Ignore the variance because standards are only estimates",
      "Raise the standards to match actual performance",
      "Take corrective action to bring performance back in line with standards",
      "Eliminate the budgeting process for the next year",
    ],
    correctIndex: 2,
    explanation:
      "Control requires corrective action when measured performance deviates from standards; adjusting standards should happen only after verifying they were unrealistic.",
  },
  {
    id: 1181,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "A company uses brainstorming sessions where employees freely suggest ideas without criticism, following the rule that quantity of ideas matters before quality. This technique is used primarily during which planning activity?",
    choices: [
      "Setting performance standards",
      "Generating alternatives",
      "Implementing the chosen alternative",
      "Evaluating control results",
    ],
    correctIndex: 1,
    explanation:
      "Brainstorming expands the pool of possible alternatives early in decision making, before criteria are applied to evaluate each option.",
  },
  {
    id: 1182,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "A firm analyzes its external environment and identifies rising consumer interest in eco-friendly packaging it could easily produce. In SWOT terms, this combination points to a(n):",
    choices: [
      "threat requiring contingency planning",
      "internal weakness to be corrected",
      "opportunity matching an internal strength",
      "irrelevant trend outside the analysis",
    ],
    correctIndex: 2,
    explanation:
      "When external opportunities align with internal strengths, the firm has a favorable opening it is well positioned to pursue.",
  },
  {
    id: 1183,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "Which scenario best illustrates the organizing function rather than the planning function?",
    choices: [
      "A manager sets a goal of increasing market share by 10%",
      "A manager restructures teams into three regional units with new reporting lines",
      "A manager forecasts sales for the next fiscal year",
      "A manager compares quarterly profits against targets",
    ],
    correctIndex: 1,
    explanation:
      "Restructuring roles and reporting relationships arranges resources into a working system — the essence of organizing — whereas setting goals and forecasting belong to planning.",
  },
  {
    id: 1184,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "A company’s decision-making process follows these steps, but they are out of order: (1) choose the best alternative, (2) define the problem, (3) implement the decision, (4) identify alternatives, (5) evaluate alternatives. What is the correct order?",
    choices: [
      "2, 4, 5, 1, 3",
      "4, 2, 5, 3, 1",
      "2, 5, 4, 3, 1",
      "1, 2, 4, 5, 3",
    ],
    correctIndex: 0,
    explanation:
      "Rational decision making proceeds from defining the problem, generating alternatives, evaluating them, choosing the best one, and finally implementing it.",
  },
  {
    id: 1185,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A warehouse manager posts a sign stating “No forklift may be operated without certification.” Compared with a policy, this directive is more accurately called a:",
    choices: [
      "rule",
      "procedure",
      "program",
      "forecast",
    ],
    correctIndex: 0,
    explanation:
      "Rules tell employees exactly what may or may not be done and allow no discretion, while policies are broader guidelines.",
  },
  {
    id: 1186,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "Accountability in an organization means that employees:",
    choices: [
      "may ignore directives they disagree with",
      "answer for the results of the duties assigned to them",
      "share identical job descriptions across departments",
      "set their own performance standards annually",
    ],
    correctIndex: 1,
    explanation:
      "Accountability flows with authority: employees with assigned duties must explain and answer for the outcomes of those duties.",
  },
  {
    id: 1187,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "Which document visually shows the hierarchy of positions and reporting relationships in a company?",
    choices: [
      "Income statement",
      "Organizational chart",
      "Gantt chart",
      "Balance sheet",
    ],
    correctIndex: 1,
    explanation:
      "An organizational chart maps boxes and connecting lines that depict positions, departments, and lines of authority.",
  },
  {
    id: 1188,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "A manager who motivates employees through encouragement and recognition is performing which management function?",
    choices: [
      "Leading",
      "Planning",
      "Controlling",
      "Organizing",
    ],
    correctIndex: 0,
    explanation:
      "Leading involves inspiring and motivating employees to work toward organizational goals.",
  },
  {
    id: 1189,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A company’s strategic plan calls for national expansion. Its marketing director then builds a two-year promotional campaign for the western region. The campaign is an example of a(n):",
    choices: [
      "operational schedule",
      "tactical plan supporting the strategy",
      "standing rule",
      "informal organization",
    ],
    correctIndex: 1,
    explanation:
      "Tactical plans are medium-range actions by middle managers that carry out part of the broader corporate strategy.",
  },
  {
    id: 1190,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "Which factor most likely justifies a NARROW span of control for a manager?",
    choices: [
      "Subordinates perform simple, routine tasks",
      "Subordinates are highly experienced and self-directed",
      "Subordinates’ work is complex and requires frequent supervision",
      "The company wants to flatten its hierarchy",
    ],
    correctIndex: 2,
    explanation:
      "Complex or hazardous work needing close guidance forces narrower spans; simple tasks and skilled workers allow wider spans.",
  },
  {
    id: 1191,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "Delegation is most likely to fail when a manager:",
    choices: [
      "assigns authority along with clear expectations and deadlines",
      "gives the employee freedom to choose the method but checks milestones",
      "delegates the task but continues to make every small decision about it",
      "matches the task to an employee’s demonstrated skills",
    ],
    correctIndex: 2,
    explanation:
      "Micromanaging after delegating removes the employee’s authority, defeats the purpose of delegation, and signals distrust.",
  },
  {
    id: 1192,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "A company evaluates a major decision by asking how it affects employees, customers, suppliers, and the community. Collectively, these groups are known as:",
    choices: [
      "stockholders",
      "stakeholders",
      "regulators",
      "middlemen",
    ],
    correctIndex: 1,
    explanation:
      "Stakeholders include everyone affected by or able to affect the business, not just owners who hold stock.",
  },
  {
    id: 1193,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "A manager uses a decision-making style in which she makes the choice alone after gathering information, then announces it to the team. This is best described as:",
    choices: [
      "consensus decision making",
      "autocratic decision making",
      "majority-rule voting",
      "delegative decision making",
    ],
    correctIndex: 1,
    explanation:
      "Autocratic leaders decide independently and announce results; consensus requires group agreement and delegative styles hand the choice to others.",
  },
  {
    id: 1194,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "A manufacturer finds that adding a fifth quality inspector reduces defects, but adding a tenth inspector barely changes defect rates while raising payroll sharply. This illustrates:",
    choices: [
      "economies of scale",
      "the law of diminishing marginal returns",
      "management by exception",
      "span-of-control theory",
    ],
    correctIndex: 1,
    explanation:
      "Diminishing marginal returns occur when each additional unit of input adds progressively less output, eventually costing more than it contributes.",
  },
  {
    id: 1195,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "Which situation best demonstrates empowerment rather than simple delegation?",
    choices: [
      "A manager tells an employee exactly which steps to follow and when",
      "A manager gives employees authority to resolve customer complaints up to $500 without approval",
      "A manager requires sign-off on every refund regardless of amount",
      "A manager rotates complaint handling among staff weekly",
    ],
    correctIndex: 1,
    explanation:
      "Empowerment grants real decision-making discretion within defined limits, letting employees act immediately without seeking approval.",
  },
  {
    id: 1196,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "easy",
    prompt:
      "A job specification lists the __________ required for a position, while a job description lists the position’s __________.",
    choices: [
      "salaries; benefits",
      "qualifications; duties and responsibilities",
      "duties; qualifications",
      "benefits; salaries",
    ],
    correctIndex: 1,
    explanation:
      "Specifications describe the person needed (education, skills, experience); descriptions describe the job itself (tasks and responsibilities).",
  },
  {
    id: 1197,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "easy",
    prompt:
      "Placing help-wanted ads and attending college career fairs are activities associated with which HR function?",
    choices: [
      "Recruitment",
      "Compensation analysis",
      "Labor relations arbitration",
      "Succession auditing",
    ],
    correctIndex: 0,
    explanation:
      "Recruitment attracts a pool of qualified candidates through channels such as advertising, referrals, and campus events.",
  },
  {
    id: 1198,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "easy",
    prompt:
      "Teaching a new hire how to operate the company’s point-of-sale system is an example of:",
    choices: [
      "employee orientation",
      "on-the-job training",
      "performance appraisal",
      "outplacement counseling",
    ],
    correctIndex: 1,
    explanation:
      "On-the-job training teaches specific task skills while the employee performs actual work duties.",
  },
  {
    id: 1199,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "easy",
    prompt:
      "Which compensation item is an example of an indirect payment to employees?",
    choices: [
      "Hourly wages",
      "Overtime pay",
      "Employer-paid health insurance",
      "Sales commission",
    ],
    correctIndex: 2,
    explanation:
      "Benefits such as health insurance are indirect compensation; wages, overtime, and commissions are direct monetary payments.",
  },
  {
    id: 1200,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "easy",
    prompt:
      "A structured conversation in which an employer asks a candidate behavioral questions is called a(n):",
    choices: [
      "orientation interview",
      "employment interview",
      "exit interview",
      "appraisal conference",
    ],
    correctIndex: 1,
    explanation:
      "The employment (selection) interview lets employers assess candidates’ qualifications, communication, and fit for the role.",
  },
  {
    id: 1201,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "A hiring manager gives every applicant for a cashier position the same timed math test. This selection tool is best described as a(n):",
    choices: [
      "unstructured interview",
      "standardized employment test",
      "assessment center exercise",
      "reference check",
    ],
    correctIndex: 1,
    explanation:
      "Standardized tests present identical questions under identical conditions, allowing fair comparison of all applicants on job-related abilities.",
  },
  {
    id: 1202,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "An HR manager verifies a candidate’s previous employment dates and asks a former supervisor to describe the candidate’s reliability. This step in the hiring process is:",
    choices: [
      "a reference check",
      "an exit interview",
      "job enrichment",
      "a realistic job preview",
    ],
    correctIndex: 0,
    explanation:
      "Reference checks confirm information the applicant provided and gather third-party insight into past performance and conduct.",
  },
  {
    id: 1203,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "Two employees share one full-time position, each working half of the week. This staffing arrangement is called:",
    choices: [
      "flextime",
      "telecommuting",
      "job sharing",
      "outsourcing",
    ],
    correctIndex: 2,
    explanation:
      "Job sharing splits one job between two workers, giving the employer continuous coverage while both employees work part-time.",
  },
  {
    id: 1204,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "An employee works four 10-hour days per week instead of five 8-hour days. This schedule is known as a:",
    choices: [
      "compressed workweek",
      "job rotation",
      "split shift",
      "temporary assignment",
    ],
    correctIndex: 0,
    explanation:
      "A compressed workweek packs full-time hours into fewer than five days, often improving work-life balance.",
  },
  {
    id: 1205,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "Which action best illustrates an employer complying with equal employment opportunity (EEO) laws during hiring?",
    choices: [
      "Rejecting applicants over age 50 to reduce insurance costs",
      "Asking female candidates about plans to have children",
      "Evaluating all candidates using the same job-related criteria",
      "Hiring only friends and relatives of current employees",
    ],
    correctIndex: 2,
    explanation:
      "EEO laws require employment decisions based on job-related qualifications applied uniformly; questions about age, family plans, or nepotistic favoritism violate them.",
  },
  {
    id: 1206,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "A company pays bonuses when teams exceed quarterly performance targets. This incentive is designed primarily to:",
    choices: [
      "reduce the company’s tax liability",
      "link pay directly to performance results",
      "comply with minimum wage regulations",
      "replace the need for performance appraisals",
    ],
    correctIndex: 1,
    explanation:
      "Performance-based incentives motivate employees by tying extra compensation to measurable achievement of goals.",
  },
  {
    id: 1207,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "During a union organizing drive, management threatens to fire any employee who signs a union card. This action is:",
    choices: [
      "a lawful management right under most labor statutes",
      "an unfair labor practice that interferes with employees’ rights to organize",
      "required collective bargaining",
      "a legal lockout tactic",
    ],
    correctIndex: 1,
    explanation:
      "Threats or retaliation against employees for union activity constitute unfair labor practices under laws such as the National Labor Relations Act.",
  },
  {
    id: 1208,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "When a neutral third party makes a binding decision to settle a labor dispute, the process is called:",
    choices: [
      "mediation",
      "arbitration",
      "picketing",
      "collective bargaining",
    ],
    correctIndex: 1,
    explanation:
      "Arbitration ends with a binding ruling from the third party; mediation only facilitates discussion without imposing a decision.",
  },
  {
    id: 1209,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "Douglas McGregor’s Theory X assumes that employees:",
    choices: [
      "seek responsibility and are self-motivated",
      "dislike work and must be closely controlled and coerced",
      "are motivated equally by all factors",
      "perform best with no supervision at all",
    ],
    correctIndex: 1,
    explanation:
      "Theory X managers assume laziness requiring control and punishment, while Theory Y assumes workers are self-motivated and seek responsibility.",
  },
  {
    id: 1210,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "According to expectancy theory, an employee will be motivated to work hard when she believes:",
    choices: [
      "effort will lead to performance, performance will lead to rewards, and the rewards are valued",
      "her coworkers are also working hard",
      "the supervisor monitors attendance daily",
      "pay is identical across all positions in the firm",
    ],
    correctIndex: 0,
    explanation:
      "Vroom’s expectancy theory says motivation depends on expectancy (effort→performance), instrumentality (performance→reward), and valence (value of the reward).",
  },
  {
    id: 1211,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "A rating error occurs when a supervisor lets one outstanding trait, such as punctuality, inflate scores on unrelated dimensions like teamwork. This bias is called the:",
    choices: [
      "recency effect",
      "halo effect",
      "central tendency error",
      "leniency error",
    ],
    correctIndex: 1,
    explanation:
      "The halo effect lets one positive characteristic color judgments of everything else, distorting the appraisal’s accuracy.",
  },
  {
    id: 1212,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "A company identifies that two senior engineers could retire within three years and begins developing mid-level staff to fill their roles. This HR activity is called:",
    choices: [
      "downsizing",
      "succession planning",
      "outplacement",
      "workforce reduction analysis",
    ],
    correctIndex: 1,
    explanation:
      "Succession planning prepares internal talent to assume critical roles before vacancies occur, protecting organizational continuity.",
  },
  {
    id: 1213,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "easy",
    prompt:
      "The number of employees who leave an organization during a period, expressed as a percentage of total staff, is called the:",
    choices: [
      "turnover rate",
      "utilization rate",
      "absenteeism rate",
      "retention bonus rate",
    ],
    correctIndex: 0,
    explanation:
      "Turnover rate measures separations relative to workforce size; high turnover raises recruiting and training costs.",
  },
  {
    id: 1214,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "A graphic designer works full-time from her home office, communicating with the office by video call. This arrangement is called:",
    choices: [
      "telecommuting",
      "job sharing",
      "compressed scheduling",
      "hoteling",
    ],
    correctIndex: 0,
    explanation:
      "Telecommuting (remote work) lets employees perform their jobs away from the office using technology to stay connected.",
  },
  {
    id: 1215,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "Which interview question is legally permissible in a U.S. job interview?",
    choices: [
      "What year did you graduate from high school?",
      "Are you authorized to work in the United States?",
      "What is your native language?",
      "Do you have any disabilities?",
    ],
    correctIndex: 1,
    explanation:
      "Work authorization may be asked because it is job-related and legally required; questions about age, national origin, or disability are prohibited.",
  },
  {
    id: 1216,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "A restaurant chain promotes its best cook to kitchen manager without providing any supervisory training, and he struggles badly. The primary lesson is that:",
    choices: [
      "cooks should never be promoted",
      "technical skill alone does not guarantee managerial success",
      "kitchens do not need managers",
      "external hires always outperform internal promotions",
    ],
    correctIndex: 1,
    explanation:
      "Management requires distinct human and conceptual skills; promoting top performers without leadership development is a common staffing mistake.",
  },
  {
    id: 1217,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "In Herzberg’s terms, which change would act as a true MOTIVATOR rather than a hygiene factor?",
    choices: [
      "Installing more comfortable office chairs",
      "Raising base salaries to match competitors",
      "Giving employees complete ownership of a new project",
      "Relaxing the dress code policy",
    ],
    correctIndex: 2,
    explanation:
      "Motivators involve the work itself — responsibility, achievement, growth — while chairs, salary levels, and policies are hygiene factors.",
  },
  {
    id: 1218,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "A firm uses a forced-ranking system in which a fixed percentage of employees must receive the lowest rating regardless of absolute performance. A likely drawback of this approach is:",
    choices: [
      "it guarantees everyone receives high ratings",
      "it can demoralize competent employees rated low simply to fit the curve",
      "it eliminates the need for goal setting",
      "it removes managers from the evaluation process",
    ],
    correctIndex: 1,
    explanation:
      "Forced ranking pits employees against each other and can label solid performers as failures when quotas force low ratings, hurting morale and retention.",
  },
  {
    id: 1219,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "easy",
    prompt:
      "Costs that change in direct proportion to production volume, such as raw materials, are called:",
    choices: [
      "fixed costs",
      "variable costs",
      "sunk costs",
      "opportunity costs",
    ],
    correctIndex: 1,
    explanation:
      "Variable costs rise as output increases and fall as it decreases, unlike fixed costs which remain constant.",
  },
  {
    id: 1220,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "easy",
    prompt:
      "The sequence of activities that transforms raw materials into finished goods delivered to customers is called the:",
    choices: [
      "profit margin chain",
      "supply chain",
      "organizational hierarchy",
      "marketing mix",
    ],
    correctIndex: 1,
    explanation:
      "The supply chain links suppliers, manufacturers, distributors, and retailers involved in producing and delivering products.",
  },
  {
    id: 1221,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "easy",
    prompt:
      "Extra inventory kept on hand to protect against unexpected demand spikes or supplier delays is called:",
    choices: [
      "safety stock",
      "perpetual inventory",
      "raw materials ledger",
      "dead stock",
    ],
    correctIndex: 0,
    explanation:
      "Safety stock cushions against uncertainty so stockouts do not occur, at the cost of higher holding expenses.",
  },
  {
    id: 1222,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "easy",
    prompt:
      "Producing goods in large batches ahead of customer orders characterizes which production approach?",
    choices: [
      "Make-to-order",
      "Mass production",
      "Just-in-time production",
      "Custom manufacturing",
    ],
    correctIndex: 1,
    explanation:
      "Mass production creates large volumes of standardized items in advance, lowering unit cost but risking unsold inventory.",
  },
  {
    id: 1223,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A factory produces 500 units at a total cost of $12,000. If fixed costs are $4,500, what is the variable cost per unit?",
    choices: [
      "$9.00",
      "$15.00",
      "$24.00",
      "$4.50",
    ],
    correctIndex: 1,
    explanation:
      "Variable cost = ($12,000 − $4,500) ÷ 500 = $7,500 ÷ 500 = $15 per unit.",
  },
  {
    id: 1224,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A company has fixed costs of $80,000, a selling price of $40, and variable costs of $24 per unit. How many units must it sell to earn a $16,000 profit?",
    choices: [
      "2,400 units",
      "4,000 units",
      "5,000 units",
      "6,000 units",
    ],
    correctIndex: 3,
    explanation:
      "Required units = (fixed costs + target profit) ÷ contribution margin = ($80,000 + $16,000) ÷ $16 = 6,000 units.",
  },
  {
    id: 1225,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A manufacturer tracks how many times per year it sells and replaces its average inventory. This metric is called:",
    choices: [
      "inventory turnover",
      "capacity utilization",
      "gross margin",
      "lead time",
    ],
    correctIndex: 0,
    explanation:
      "Inventory turnover (cost of goods sold ÷ average inventory) shows how efficiently stock is managed; higher turnover usually means less capital tied up.",
  },
  {
    id: 1226,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "The time between placing an order with a supplier and receiving the goods is known as:",
    choices: [
      "cycle time",
      "lead time",
      "downtime",
      "float time",
    ],
    correctIndex: 1,
    explanation:
      "Lead time determines when reordering must occur so new stock arrives before inventory runs out.",
  },
  {
    id: 1227,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A quality analyst draws a bar chart ranking defect types from most frequent to least frequent to focus improvement efforts. This tool is a:",
    choices: [
      "Pareto chart",
      "Gantt chart",
      "histogram of random samples",
      "control chart",
    ],
    correctIndex: 0,
    explanation:
      "Pareto charts apply the 80/20 principle, showing that a few causes account for most defects so resources target the biggest problems first.",
  },
  {
    id: 1228,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "Building quality into processes so defects are prevented rather than caught after production reflects the concept of:",
    choices: [
      "quality assurance",
      "statistical sampling",
      "rework management",
      "warranty service",
    ],
    correctIndex: 0,
    explanation:
      "Quality assurance focuses upstream on preventing errors through better processes and training, whereas inspection merely detects defects afterward.",
  },
  {
    id: 1229,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A car plant operates at maximum sustainable output using existing equipment and shifts. This output level defines the plant’s:",
    choices: [
      "break-even point",
      "production capacity",
      "economies of scale threshold",
      "marginal revenue",
    ],
    correctIndex: 1,
    explanation:
      "Capacity is the maximum output a facility can produce under normal conditions over a given period.",
  },
  {
    id: 1230,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A project manager identifies which sequence of tasks determines the earliest possible completion date for a construction project. She is performing:",
    choices: [
      "critical path analysis",
      "break-even analysis",
      "Pareto analysis",
      "sensitivity auditing",
    ],
    correctIndex: 0,
    explanation:
      "Critical path analysis finds the longest dependent task sequence; delays on those tasks delay the entire project.",
  },
  {
    id: 1231,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "hard",
    prompt:
      "Six Sigma methodology aims primarily to:",
    choices: [
      "reduce defects to near perfection by statistically analyzing and improving processes",
      "increase inventory levels to prevent shortages",
      "cut prices below all competitors",
      "expand the product line every six months",
    ],
    correctIndex: 0,
    explanation:
      "Six Sigma uses data-driven methods (DMAIC) to reduce variation and drive defects toward 3.4 per million opportunities.",
  },
  {
    id: 1232,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "hard",
    prompt:
      "Kaizen, adopted from Japanese management practice, emphasizes:",
    choices: [
      "dramatic once-a-year restructuring programs",
      "continuous small improvements involving employees at all levels",
      "outsourcing all non-core functions immediately",
      "strict adherence to original process designs",
    ],
    correctIndex: 1,
    explanation:
      "Kaizen means continuous incremental improvement, engaging frontline workers who know the processes best to suggest ongoing refinements.",
  },
  {
    id: 1233,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "hard",
    prompt:
      "A project has tasks A→B→C along its critical path totaling 20 days. Task D runs parallel and takes 14 days. If Task B slips by 3 days, the project completion date will:",
    choices: [
      "not change because Task D has slack",
      "be delayed by 3 days because B is on the critical path",
      "be delayed by 6 days due to compounding effects",
      "finish early since total float remains positive",
    ],
    correctIndex: 1,
    explanation:
      "Any delay to a critical path task pushes the whole project back day-for-day; parallel Task D’s slack is irrelevant to the path length.",
  },
  {
    id: 1234,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "hard",
    prompt:
      "A lean manufacturing program identifies steps in a process that consume resources but add nothing the customer values. Eliminating these steps is called removing:",
    choices: [
      "bottlenecks",
      "waste (muda)",
      "fixed costs",
      "throughput",
    ],
    correctIndex: 1,
    explanation:
      "Lean thinking classifies non-value-adding activities as waste — including waiting, excess motion, overproduction, and defects — and systematically removes them.",
  },
  {
    id: 1235,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "hard",
    prompt:
      "A control chart shows a process averaging 10 units with control limits at 8 and 12. Today’s sample reads 13. Under statistical process control, the manager should:",
    choices: [
      "do nothing because samples naturally vary",
      "recalculate the average downward to include the reading",
      "investigate for a special cause since the point falls outside control limits",
      "shut down permanently and replace the equipment",
    ],
    correctIndex: 2,
    explanation:
      "Points outside control limits signal special-cause variation requiring investigation; ordinary random variation stays within limits.",
  },
  {
    id: 1236,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A single workstation slows an entire assembly line because parts pile up waiting to be processed there. This station is called a:",
    choices: [
      "bottleneck",
      "buffer",
      "benchmark",
      "byproduct",
    ],
    correctIndex: 0,
    explanation:
      "A bottleneck limits the throughput of the whole system; improving overall output requires expanding capacity at that constraint first.",
  },
  {
    id: 1237,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "easy",
    prompt:
      "Which activity belongs to operations management rather than human resource management?",
    choices: [
      "Conducting exit interviews",
      "Scheduling production runs to meet demand forecasts",
      "Administering benefits enrollment",
      "Posting job openings online",
    ],
    correctIndex: 1,
    explanation:
      "Operations management oversees the systems that produce goods and services, including production scheduling, capacity, and quality.",
  },
  {
    id: 1238,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A furniture maker builds each table only after receiving the customer’s specifications. This production strategy is called:",
    choices: [
      "mass production",
      "make-to-order",
      "continuous flow processing",
      "standard assembly",
    ],
    correctIndex: 1,
    explanation:
      "Make-to-order production begins only after an order arrives, allowing customization but typically at higher cost and longer lead time.",
  },
  {
    id: 1239,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "hard",
    prompt:
      "A company calculates economic order quantity (EOQ). EOQ is the order size that minimizes:",
    choices: [
      "total ordering costs only",
      "total carrying costs only",
      "the combined costs of ordering and holding inventory",
      "supplier negotiation expenses",
    ],
    correctIndex: 2,
    explanation:
      "EOQ balances ordering costs against carrying costs; ordering too often raises ordering expense while ordering too much raises holding expense.",
  },
  {
    id: 1240,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A software team divides a large website project into short cycles of two weeks, delivering working increments each cycle. This approach is known as:",
    choices: [
      "waterfall project management",
      "agile project management",
      "critical chain buffering",
      "program evaluation review",
    ],
    correctIndex: 1,
    explanation:
      "Agile methods use short iterative sprints with frequent deliverables and adaptation, contrasting with waterfall’s single sequential plan.",
  },
  {
    id: 1241,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A project manager lists every task, estimates durations, and assigns owners before work begins, then freezes the plan. This sequential approach is called:",
    choices: [
      "waterfall project management",
      "scrum sprinting",
      "kanban pull scheduling",
      "lean startup iteration",
    ],
    correctIndex: 0,
    explanation:
      "Waterfall completes each phase — requirements, planning, execution — in order before moving on, with little planned iteration.",
  },
  {
    id: 1242,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "hard",
    prompt:
      "A manager must decide whether to buy a new machine costing $120,000 that saves $30,000 per year in labor. Ignoring other factors, the simple payback period is:",
    choices: [
      "2 years",
      "3 years",
      "4 years",
      "6 years",
    ],
    correctIndex: 2,
    explanation:
      "Payback period = investment ÷ annual savings = $120,000 ÷ $30,000 = 4 years.",
  },
  {
    id: 1243,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "easy",
    prompt:
      "Routine, repetitive activities such as opening and closing procedures are typically governed by:",
    choices: [
      "standard operating procedures",
      "strategic objectives",
      "mission statements",
      "contingency triggers",
    ],
    correctIndex: 0,
    explanation:
      "Standard operating procedures (SOPs) give step-by-step instructions so routine tasks are performed consistently and safely.",
  },
  {
    id: 1244,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A distributor uses barcode scanners to update inventory records the moment items are received or sold. This system is called:",
    choices: [
      "periodic inventory system",
      "perpetual inventory system",
      "physical count system",
      "safety stock system",
    ],
    correctIndex: 1,
    explanation:
      "Perpetual systems track inventory continuously in real time; periodic systems update only after physical counts.",
  },
  {
    id: 1245,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "The fundamental economic problem that human wants exceed available resources is called:",
    choices: [
      "inflation",
      "scarcity",
      "monopoly",
      "devaluation",
    ],
    correctIndex: 1,
    explanation:
      "Scarcity forces individuals and businesses to make choices about how to allocate limited resources among competing uses.",
  },
  {
    id: 1246,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "The value of the next best alternative given up when a choice is made is called:",
    choices: [
      "marginal cost",
      "opportunity cost",
      "fixed cost",
      "book value",
    ],
    correctIndex: 1,
    explanation:
      "Opportunity cost captures what you sacrifice by choosing one option over the next-best forgone alternative.",
  },
  {
    id: 1247,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "A sustained increase in the general price level over time is known as:",
    choices: [
      "deflation",
      "recession",
      "inflation",
      "appreciation",
    ],
    correctIndex: 2,
    explanation:
      "Inflation erodes purchasing power; deflation is its opposite — a general decline in prices.",
  },
  {
    id: 1248,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "Which economic system relies most heavily on private ownership and profit motive with minimal government involvement?",
    choices: [
      "Command economy",
      "Traditional economy",
      "Market (capitalist) economy",
      "Subsistence economy",
    ],
    correctIndex: 2,
    explanation:
      "Market economies allocate resources through private decisions and prices, while command economies rely on central government planning.",
  },
  {
    id: 1249,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "A new tax credit increases consumers’ disposable income while production costs stay constant. In the market for restaurant meals, we expect:",
    choices: [
      "demand to increase, raising both price and quantity",
      "supply to decrease, raising price but lowering quantity",
      "demand to decrease, lowering both price and quantity",
      "no change because taxes do not affect restaurants",
    ],
    correctIndex: 0,
    explanation:
      "Higher disposable income shifts demand rightward, producing a higher equilibrium price and larger equilibrium quantity.",
  },
  {
    id: 1250,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "A market with many sellers offering slightly differentiated products, like hair salons or coffee shops, is an example of:",
    choices: [
      "perfect competition",
      "monopolistic competition",
      "oligopoly",
      "pure monopoly",
    ],
    correctIndex: 1,
    explanation:
      "Monopolistic competition features many sellers with easy entry whose products are similar but differentiated enough to support brand loyalty.",
  },
  {
    id: 1251,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "An industry dominated by a few large firms, such as commercial aircraft manufacturing, is best described as a(n):",
    choices: [
      "oligopoly",
      "monopolistic competition",
      "perfectly competitive market",
      "natural monopoly",
    ],
    correctIndex: 0,
    explanation:
      "Oligopolies have few sellers whose pricing decisions are interdependent, often protected by high barriers to entry.",
  },
  {
    id: 1252,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "The consumer price index (CPI) is used primarily to measure:",
    choices: [
      "total national output",
      "changes in the cost of a typical basket of consumer goods",
      "the unemployment rate",
      "the federal budget deficit",
    ],
    correctIndex: 1,
    explanation:
      "CPI tracks price changes for a fixed basket of goods and services, making it the standard gauge of consumer inflation.",
  },
  {
    id: 1253,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Unemployment caused by a mismatch between workers’ skills and the skills employers need is called:",
    choices: [
      "frictional unemployment",
      "cyclical unemployment",
      "structural unemployment",
      "seasonal unemployment",
    ],
    correctIndex: 2,
    explanation:
      "Structural unemployment arises when technology or market changes make existing skills obsolete; frictional unemployment is short-term job searching.",
  },
  {
    id: 1254,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "The Federal Reserve raises interest rates. Which effect would businesses most likely experience?",
    choices: [
      "Borrowing becomes cheaper, expanding investment",
      "Borrowing becomes more expensive, discouraging expansion",
      "Consumer savings fall immediately to zero",
      "Inflation automatically disappears within days",
    ],
    correctIndex: 1,
    explanation:
      "Higher rates raise the cost of loans and credit, which dampens business investment and consumer spending, cooling inflationary pressure.",
  },
  {
    id: 1255,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A country can produce cars more efficiently than its trading partners, while another country has an absolute advantage in neither good yet still benefits from trade. This outcome is explained by:",
    choices: [
      "comparative advantage based on relative opportunity costs",
      "the law of diminishing returns",
      "balance of payments accounting",
      "purchasing power parity",
    ],
    correctIndex: 0,
    explanation:
      "Comparative advantage shows that trade benefits both parties when each specializes in what it produces at the lowest relative opportunity cost.",
  },
  {
    id: 1256,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "During a severe downturn, a government increases spending and cuts taxes to stimulate demand. This approach reflects:",
    choices: [
      "contractionary monetary policy",
      "expansionary fiscal policy",
      "protectionist trade policy",
      "austerity budgeting",
    ],
    correctIndex: 1,
    explanation:
      "Fiscal policy uses government spending and taxation; expansionary fiscal stimulus aims to boost aggregate demand during recessions.",
  },
  {
    id: 1257,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A bakery finds that cutting bagel prices 10% raises quantity sold only 4%. To increase total revenue, the bakery should:",
    choices: [
      "lower prices further since volume will keep rising",
      "raise prices because demand is inelastic",
      "keep prices unchanged because revenue cannot change",
      "give bagels away free to maximize traffic",
    ],
    correctIndex: 1,
    explanation:
      "When demand is inelastic (quantity responds less than price), price increases raise total revenue; price cuts reduce it.",
  },
  {
    id: 1258,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "Which of the following is NOT one of the essential elements of a legally binding contract?",
    choices: [
      "Offer",
      "Acceptance",
      "Notarization by a public official",
      "Consideration",
    ],
    correctIndex: 2,
    explanation:
      "Contracts require offer, acceptance, consideration, capacity, and legality; notarization is rarely required except for specific documents like deeds.",
  },
  {
    id: 1259,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "A partnership differs from a sole proprietorship mainly in that a partnership:",
    choices: [
      "has two or more co-owners who share profits and management",
      "protects partners’ personal assets from business debts",
      "must file articles of incorporation with the state",
      "pays corporate income taxes at the entity level",
    ],
    correctIndex: 0,
    explanation:
      "Partnerships involve two or more owners sharing profits, losses, and management; like sole proprietorships, they generally expose owners to unlimited liability.",
  },
  {
    id: 1260,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "Which government agency enforces workplace safety standards in the United States?",
    choices: [
      "FTC (Federal Trade Commission)",
      "OSHA (Occupational Safety and Health Administration)",
      "SEC (Securities and Exchange Commission)",
      "EPA (Environmental Protection Agency)",
    ],
    correctIndex: 1,
    explanation:
      "OSHA sets and enforces safety and health regulations for workplaces; the FTC handles consumer protection, the SEC securities markets, and the EPA environment.",
  },
  {
    id: 1261,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "Legally, discrimination in hiring based on race, religion, sex, or national origin is prohibited primarily by:",
    choices: [
      "civil rights and equal employment laws",
      "bankruptcy statutes",
      "patent law",
      "the Uniform Commercial Code’s warranty provisions",
    ],
    correctIndex: 0,
    explanation:
      "Civil rights legislation such as Title VII of the Civil Rights Act bans employment discrimination based on protected characteristics.",
  },
  {
    id: 1262,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "An oral agreement to purchase custom-built machinery for $90,000 is disputed. Under the Statute of Frauds, this contract is generally:",
    choices: [
      "unenforceable unless evidenced by writing because it exceeds a certain dollar amount",
      "fully enforceable because oral contracts are always valid",
      "enforceable only if witnessed by three adults",
      "void because machinery sales require court approval",
    ],
    correctIndex: 0,
    explanation:
      "The Statute of Frauds requires certain contracts — including sales of goods over $500 under the UCC — to be in writing to be enforceable.",
  },
  {
    id: 1263,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "An employee injures a customer while performing job duties. The employer may also be held liable under the doctrine of:",
    choices: [
      "respondeat superior",
      "caveat emptor",
      "stare decisis",
      "ultra vires",
    ],
    correctIndex: 0,
    explanation:
      "Respondeat superior holds employers liable for torts committed by employees acting within the scope of their employment.",
  },
  {
    id: 1264,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A dissatisfied customer posts false statements online claiming a restaurant serves expired food when it does not. The restaurant could sue for:",
    choices: [
      "defamation",
      "bailment",
      "usury",
      "escheat",
    ],
    correctIndex: 0,
    explanation:
      "Defamation includes libel (written) and slander (spoken); publishing false factual claims that harm a business’s reputation is actionable.",
  },
  {
    id: 1265,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "In a general partnership, each partner’s legal exposure to business debts is best described as:",
    choices: [
      "limited to each partner’s capital contribution",
      "jointly and severally unlimited personal liability",
      "zero, because partnerships are separate legal persons",
      "limited to half of any judgment amount",
    ],
    correctIndex: 1,
    explanation:
      "General partners face unlimited liability, and any single partner can be held responsible for the full amount of partnership obligations.",
  },
  {
    id: 1266,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "The Uniform Commercial Code (UCC) governs primarily:",
    choices: [
      "commercial transactions including the sale of goods",
      "criminal fraud prosecutions",
      "federal income tax rates",
      "municipal zoning ordinances",
    ],
    correctIndex: 0,
    explanation:
      "The UCC standardizes commercial law across states, covering sales, leases, negotiable instruments, and secured transactions.",
  },
  {
    id: 1267,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "An inventor develops a new fuel-efficient engine design. To protect the invention itself from being copied for up to 20 years, she should apply for a:",
    choices: [
      "copyright",
      "trademark",
      "utility patent",
      "trade name registration",
    ],
    correctIndex: 2,
    explanation:
      "Utility patents protect functional inventions for roughly 20 years; copyrights cover creative works and trademarks protect brand identifiers.",
  },
  {
    id: 1268,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "hard",
    prompt:
      "A former employee uses his old company’s secret customer list to solicit clients for a competitor. Even without a registered filing, the company may sue for misappropriation of:",
    choices: [
      "a trade secret",
      "a copyright",
      "an easement",
      "a franchise fee",
    ],
    correctIndex: 0,
    explanation:
      "Trade secrets gain protection through reasonable secrecy measures, no registration required — as long as the information derives value from not being known.",
  },
  {
    id: 1269,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "hard",
    prompt:
      "Two competing contractors secretly agree to submit inflated bids on city projects so whoever wins charges higher prices. This conduct constitutes:",
    choices: [
      "price fixing, an illegal restraint of trade",
      "lawful joint venturing",
      "permissible competitive intelligence",
      "a vertical merger exemption",
    ],
    correctIndex: 0,
    explanation:
      "Bid rigging and price fixing violate antitrust laws such as the Sherman Act because they eliminate competition and raise consumer prices.",
  },
  {
    id: 1270,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "hard",
    prompt:
      "A corporation’s board approves a merger despite a conflict: two directors also own large stakes in the acquisition target and did not disclose them. The directors most clearly violated their duty of:",
    choices: [
      "loyalty",
      "gratitude",
      "indemnification",
      "succession",
    ],
    correctIndex: 0,
    explanation:
      "The fiduciary duty of loyalty requires directors to put the corporation’s interests ahead of personal ones and disclose conflicts of interest.",
  },
  {
    id: 1271,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "Profit is calculated as:",
    choices: [
      "revenue minus expenses",
      "assets minus liabilities plus equity",
      "sales times price per unit",
      "expenses divided by revenue",
    ],
    correctIndex: 0,
    explanation:
      "Profit equals total revenue minus total costs; positive profit signals the business creates more value than it consumes.",
  },
  {
    id: 1272,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "When a government imposes a tariff on imported steel, the most likely domestic effects are:",
    choices: [
      "lower steel prices and reduced domestic production",
      "higher steel prices and increased domestic production",
      "no change in steel prices but higher wages",
      "complete elimination of steel imports immediately",
    ],
    correctIndex: 1,
    explanation:
      "Tariffs make imports more expensive, raising domestic prices and encouraging local producers to expand output, though downstream buyers pay more.",
  },
  {
    id: 1273,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Unemployment that occurs naturally as workers move between jobs is called:",
    choices: [
      "frictional unemployment",
      "structural unemployment",
      "cyclical unemployment",
      "disguised unemployment",
    ],
    correctIndex: 0,
    explanation:
      "Frictional unemployment reflects normal job-search transitions and exists even in healthy economies.",
  },
  {
    id: 1274,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "If nominal GDP rises from $20 trillion to $21 trillion while prices rise 6%, real output has most likely:",
    choices: [
      "grown about 5%",
      "declined slightly",
      "grown exactly 5% only if inflation were zero",
      "doubled due to compounding",
    ],
    correctIndex: 1,
    explanation:
      "Nominal growth of 5% minus 6% inflation means real GDP contracted slightly — price increases outpaced actual output gains.",
  },
  {
    id: 1275,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "easy",
    prompt:
      "A written statement of a company’s core values and expected employee conduct is called a:",
    choices: [
      "code of ethics",
      "organizational chart",
      "capital budget",
      "job specification",
    ],
    correctIndex: 0,
    explanation:
      "Codes of ethics articulate standards of behavior and help employees resolve ethical dilemmas consistently.",
  },
  {
    id: 1276,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "easy",
    prompt:
      "Accepting an expensive gift from a supplier while evaluating that supplier’s bid is problematic mainly because it:",
    choices: [
      "increases the company’s tax liability",
      "compromises impartial judgment in the purchasing decision",
      "violates trademark law",
      "is always perfectly legal and unremarkable",
    ],
    correctIndex: 1,
    explanation:
      "Gifts from vendors create conflicts of interest that can bias selection decisions and erode trust in the procurement process.",
  },
  {
    id: 1277,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "medium",
    prompt:
      "Corporate social responsibility (CSR) is best described as a business commitment to:",
    choices: [
      "maximizing short-term shareholder profit by any means",
      "operating in ways that benefit society and the environment alongside profits",
      "avoiding all political and community involvement",
      "donating exclusively to reduce taxable income",
    ],
    correctIndex: 1,
    explanation:
      "CSR integrates social and environmental concerns into operations and stakeholder relationships beyond legal minimums.",
  },
  {
    id: 1278,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "medium",
    prompt:
      "A manager discovers a coworker falsifying safety inspection records. The MOST ethical first course of action within the company is to:",
    choices: [
      "ignore it because inspections rarely matter",
      "report the concern through appropriate internal channels",
      "blackmail the coworker for personal gain",
      "post accusations anonymously on social media before investigating",
    ],
    correctIndex: 1,
    explanation:
      "Escalating through established reporting channels addresses wrongdoing responsibly; ignoring or exploiting the situation compounds the ethical breach.",
  },
  {
    id: 1279,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "medium",
    prompt:
      "Paying officials in another country small unofficial fees to expedite routine customs processing may still be illegal because of:",
    choices: [
      "the Foreign Corrupt Practices Act",
      "the Sherman Antitrust Act",
      "the Fair Labor Standards Act",
      "the Copyright Act",
    ],
    correctIndex: 0,
    explanation:
      "The FCPA prohibits U.S. companies and individuals from bribing foreign officials, even where such payments seem customary.",
  },
  {
    id: 1280,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "hard",
    prompt:
      "An ethical framework that judges actions by universal duties regardless of consequences — e.g., “never lie” — is known as:",
    choices: [
      "deontology",
      "utilitarianism",
      "ethical egoism",
      "situation ethics",
    ],
    correctIndex: 0,
    explanation:
      "Deontological ethics (Kant) evaluates whether actions follow moral rules or duties, not whether outcomes happen to be beneficial.",
  },
  {
    id: 1281,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "easy",
    prompt:
      "Sending a brief thank-you email after a job interview demonstrates primarily:",
    choices: [
      "professional courtesy and continued interest",
      "legal entitlement to the position",
      "that references have been verified",
      "negotiation of the salary range",
    ],
    correctIndex: 0,
    explanation:
      "Post-interview follow-up reinforces interest, shows professionalism, and keeps the candidate memorable to hiring managers.",
  },
  {
    id: 1282,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "easy",
    prompt:
      "On a résumé, accomplishments should ideally be written using:",
    choices: [
      "vague phrases like “responsible for various tasks”",
      "action verbs paired with quantifiable results",
      "full paragraphs describing every job duty ever held",
      "personal hobbies listed above work experience",
    ],
    correctIndex: 1,
    explanation:
      "Strong résumés use action verbs and metrics (“increased sales 15%”) to demonstrate concrete impact rather than listing vague responsibilities.",
  },
  {
    id: 1283,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "medium",
    prompt:
      "An employee sets a goal “to improve customer satisfaction.” According to SMART criteria, the main weakness is that the goal is not:",
    choices: [
      "specific and measurable",
      "relevant to the business",
      "time-bound only",
      "achievable by anyone",
    ],
    correctIndex: 0,
    explanation:
      "“Improve customer satisfaction” lacks a defined metric and target; SMART goals specify what will improve and by how much.",
  },
  {
    id: 1284,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "medium",
    prompt:
      "Joining DECA, Future Business Leaders of America, or a professional association primarily supports career development by providing:",
    choices: [
      "guaranteed employment upon graduation",
      "leadership experience, competitions, and industry connections",
      "exemption from college entrance exams",
      "automatic professional certifications",
    ],
    correctIndex: 1,
    explanation:
      "Career and technical student organizations build leadership skills, offer competitive events, and expand professional networks valuable for careers.",
  },
  {
    id: 1285,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "medium",
    prompt:
      "In a job interview, when asked about a weakness, the strongest response strategy is to:",
    choices: [
      "claim you have no weaknesses at all",
      "name a real but non-critical weakness and describe how you are improving it",
      "reveal a disqualifying flaw honestly in detail",
      "criticize your previous employer instead",
    ],
    correctIndex: 1,
    explanation:
      "Acknowledging a genuine improvement area with evidence of growth shows self-awareness and honesty without undermining candidacy.",
  },
  {
    id: 1286,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "hard",
    prompt:
      "A professional maintains an up-to-date profile of skills, work samples, and endorsements on a business networking site. The primary career benefit is:",
    choices: [
      "eliminating the need to ever interview",
      "increased visibility to recruiters and validation of expertise",
      "automatic salary increases from current employer",
      "exemption from continuing education requirements",
    ],
    correctIndex: 1,
    explanation:
      "A strong online professional presence helps recruiters find candidates and lets endorsements substantiate claimed skills.",
  },
  {
    id: 1287,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "hard",
    prompt:
      "An employee’s manager assigns stretch projects slightly beyond her current abilities while providing support. This development approach works because it:",
    choices: [
      "guarantees immediate promotion regardless of results",
      "builds new capabilities through challenging but supported experiences",
      "removes all risk of failure from the assignment",
      "replaces formal training entirely for every employee",
    ],
    correctIndex: 1,
    explanation:
      "Stretch assignments accelerate growth by pushing employees past their comfort zone with coaching and resources as a safety net.",
  },
  {
    id: 1288,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "medium",
    prompt:
      "A company donates 1% of profits to local schools and gives employees paid volunteer days. These programs most directly support which element of corporate social responsibility?",
    choices: [
      "Community engagement and philanthropy",
      "Regulatory compliance auditing",
      "Insider trading prevention",
      "Inventory control",
    ],
    correctIndex: 0,
    explanation:
      "Donations and volunteer time are philanthropic community investments — a core CSR dimension alongside environmental and workplace responsibility.",
  },
  {
    id: 1289,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "hard",
    prompt:
      "A firm discovers its bestselling product has a safety defect. Recalling it will cost $10 million; staying silent risks harm but likely no detection. A stakeholder-based ethical analysis would conclude the firm should recall because:",
    choices: [
      "recalls always increase quarterly profits",
      "customer safety interests outweigh short-term financial costs",
      "competitors expect recalls each year",
      "silence is legal if no regulator has asked yet",
    ],
    correctIndex: 1,
    explanation:
      "Ethical decision making weighs harms to all stakeholders; concealing a safety defect endangers customers and ultimately destroys trust and value.",
  },
  {
    id: 1290,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "Which benefit is designed primarily to help employees balance caregiving responsibilities with work?",
    choices: [
      "Stock option grants",
      "On-site childcare and parental leave",
      "Commuter parking passes",
      "Uniform allowances",
    ],
    correctIndex: 1,
    explanation:
      "Childcare support and parental leave directly reduce work-family conflict, improving retention especially among working parents.",
  },
  {
    id: 1291,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "A company replaces annual reviews with continuous feedback delivered by managers weekly through brief check-ins. The main advantage is:",
    choices: [
      "it eliminates documentation requirements completely",
      "employees receive timely guidance they can act on immediately",
      "managers no longer need any evaluation criteria",
      "pay decisions become fully automatic",
    ],
    correctIndex: 1,
    explanation:
      "Continuous feedback corrects problems and reinforces good work in real time instead of surfacing issues months later at formal reviews.",
  },
  {
    id: 1292,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A manager holds a meeting where team members openly debate options before she makes the final call herself. Her style combines:",
    choices: [
      "pure laissez-faire leadership",
      "participative input with autocratic final authority",
      "delegative abdication",
      "bureaucratic rule-following only",
    ],
    correctIndex: 1,
    explanation:
      "Consultative leadership gathers employee input but reserves the decision for the leader, blending participation with final authority.",
  },
  {
    id: 1293,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A plant schedules maintenance during planned slowdowns rather than waiting for machines to fail. This approach is called:",
    choices: [
      "reactive maintenance",
      "preventive maintenance",
      "deferred liquidation",
      "crisis outsourcing",
    ],
    correctIndex: 1,
    explanation:
      "Preventive maintenance reduces costly unplanned downtime and extends equipment life by servicing assets on schedule.",
  },
  {
    id: 1294,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "The total value of goods and services a country exports minus what it imports is called the:",
    choices: [
      "balance of trade",
      "money supply",
      "consumer price index",
      "discount rate",
    ],
    correctIndex: 0,
    explanation:
      "A trade surplus occurs when exports exceed imports; a deficit occurs when imports exceed exports.",
  },
  {
    id: 1295,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A business signs a contract to buy stolen merchandise without knowing it was stolen. The contract is:",
    choices: [
      "fully enforceable because both parties acted in good faith",
      "void because the subject matter is illegal",
      "enforceable if the price was fair market value",
      "voidable only by the seller",
    ],
    correctIndex: 1,
    explanation:
      "Contracts involving illegal subject matter are void regardless of the parties’ good faith or knowledge.",
  },
  {
    id: 1296,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "easy",
    prompt:
      "In business communication, the term “channel” refers to:",
    choices: [
      "the medium used to deliver the message",
      "the person who decodes the message",
      "feedback sent after the message",
      "background noise in the environment",
    ],
    correctIndex: 0,
    explanation:
      "Channels are the pathways — email, phone, face-to-face meetings, memos — through which messages travel from sender to receiver.",
  },
  {
    id: 1297,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "easy",
    prompt:
      "Which is an example of nonverbal communication in a business meeting?",
    choices: [
      "The agenda handed to attendees",
      "Crossed arms and lack of eye contact",
      "The minutes recorded afterward",
      "A follow-up email summary",
    ],
    correctIndex: 1,
    explanation:
      "Body language, facial expressions, posture, and eye contact convey meaning without words and strongly affect how messages are received.",
  },
  {
    id: 1298,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "easy",
    prompt:
      "A business letter should typically use which tone?",
    choices: [
      "Sarcastic and informal",
      "Professional, clear, and courteous",
      "Aggressive and demanding",
      "Overly technical regardless of audience",
    ],
    correctIndex: 1,
    explanation:
      "Professional business writing is courteous, concise, and audience-appropriate, reflecting positively on the sender and organization.",
  },
  {
    id: 1299,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "medium",
    prompt:
      "An employee sends a detailed policy change by company-wide email, but many employees misunderstand it. The most likely communication barrier was:",
    choices: [
      "information overload and one-way delivery without feedback",
      "too much eye contact",
      "excessive paraphrasing by receivers",
      "an overly short message",
    ],
    correctIndex: 0,
    explanation:
      "Long one-way messages without opportunity for questions invite misinterpretation; effective communication includes feedback loops.",
  },
  {
    id: 1300,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "medium",
    prompt:
      "When delivering bad news to an employee, such as denial of a promotion, the most professional approach is to:",
    choices: [
      "send the news by text late at night",
      "meet privately, explain reasons clearly, and discuss future development options",
      "announce it at a staff meeting for transparency",
      "avoid the conversation until the employee asks",
    ],
    correctIndex: 1,
    explanation:
      "Bad news deserves privacy, honest explanation, and constructive next steps — preserving dignity and motivation.",
  },
  {
    id: 1301,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "medium",
    prompt:
      "Grapevine communication within an organization refers to:",
    choices: [
      "official announcements from top management",
      "informal information flow among employees, often rumor-based",
      "written policies distributed by HR",
      "customer feedback surveys",
    ],
    correctIndex: 1,
    explanation:
      "The grapevine is the informal network through which news travels quickly — managers should monitor it but not rely on it for official messages.",
  },
  {
    id: 1302,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "medium",
    prompt:
      "A presenter opens her talk with a startling statistic and a question to the audience. Her purpose is to:",
    choices: [
      "summarize her conclusion first",
      "capture attention and engage listeners immediately",
      "distribute handouts efficiently",
      "comply with legal disclosure rules",
    ],
    correctIndex: 1,
    explanation:
      "Strong openings hook the audience’s attention and establish relevance, increasing retention of the presentation’s key points.",
  },
  {
    id: 1303,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "hard",
    prompt:
      "During negotiation, each side states its ideal position first and then makes planned concessions toward agreement. This process works best when both parties:",
    choices: [
      "refuse to compromise on any point",
      "focus on interests behind positions and seek mutual gains",
      "communicate only through attorneys",
      "set deadlines of one hour or less",
    ],
    correctIndex: 1,
    explanation:
      "Principled (win-win) negotiation explores underlying interests so creative solutions satisfy both sides rather than haggling over fixed positions.",
  },
  {
    id: 1304,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "hard",
    prompt:
      "An employee writes “Per my last email, as previously stated, the aforementioned issue remains unresolved.” The main weakness of this phrasing is that it is:",
    choices: [
      "too short for business writing",
      "wordy and potentially passive-aggressive, reducing clarity",
      "missing a subject line",
      "grammatically incorrect",
    ],
    correctIndex: 1,
    explanation:
      "Effective business writing favors plain, direct language; bureaucratic phrasing obscures meaning and can read as condescending.",
  },
  {
    id: 1305,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "easy",
    prompt:
      "A leader who sets a compelling vision and inspires employees to exceed expectations practices which leadership style?",
    choices: [
      "Transactional leadership",
      "Transformational leadership",
      "Laissez-faire leadership",
      "Autocratic leadership",
    ],
    correctIndex: 1,
    explanation:
      "Transformational leaders motivate through vision, inspiration, and individual attention rather than rewards and punishments alone.",
  },
  {
    id: 1306,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "easy",
    prompt:
      "A laissez-faire leader is best described as one who:",
    choices: [
      "makes every decision personally",
      "gives employees wide freedom with minimal direct supervision",
      "barters rewards strictly for performance",
      "follows company rules without exception",
    ],
    correctIndex: 1,
    explanation:
      "Laissez-faire leadership hands decision-making freedom to experienced, self-motivated teams; it fails with inexperienced staff needing guidance.",
  },
  {
    id: 1307,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "medium",
    prompt:
      "A team has become stuck because members avoid disagreement and rush to consensus without examining alternatives. This dysfunction is known as:",
    choices: [
      "groupthink",
      "synergy",
      "delegation",
      "brainstorming",
    ],
    correctIndex: 0,
    explanation:
      "Groupthink suppresses dissent to preserve harmony, producing poor decisions; healthy teams encourage constructive conflict.",
  },
  {
    id: 1308,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "medium",
    prompt:
      "According to Tuckman’s model, the stage in which team members begin openly debating roles and ideas after initial politeness is called:",
    choices: [
      "forming",
      "storming",
      "norming",
      "performing",
    ],
    correctIndex: 1,
    explanation:
      "Teams progress forming → storming → norming → performing; storming is the productive-but-tense clash stage where conflicts surface.",
  },
  {
    id: 1309,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "medium",
    prompt:
      "Two departments blame each other for missed deadlines. A manager resolves this most effectively by:",
    choices: [
      "choosing whichever department she knows better",
      "facilitating a joint session to identify the process breakdown and shared solution",
      "ignoring the dispute hoping it resolves itself",
      "splitting the teams permanently apart",
    ],
    correctIndex: 1,
    explanation:
      "Collaborative conflict resolution addresses root causes and rebuilds working relationships, unlike avoidance or favoritism.",
  },
  {
    id: 1310,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "hard",
    prompt:
      "Hersey-Blanchard’s situational leadership theory holds that the best leadership style depends on:",
    choices: [
      "the leader’s personal preference alone",
      "followers’ maturity and readiness for the specific task",
      "the size of the annual budget",
      "the industry’s average profit margin",
    ],
    correctIndex: 1,
    explanation:
      "Situational leadership matches directing, coaching, supporting, or delegating to followers’ competence and commitment levels.",
  },
  {
    id: 1311,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "hard",
    prompt:
      "A manager rewards employees exactly according to preset targets and corrects deviations through penalties. This exchange-based approach is called:",
    choices: [
      "transactional leadership",
      "transformational leadership",
      "servant leadership",
      "charismatic leadership",
    ],
    correctIndex: 0,
    explanation:
      "Transactional leadership relies on contingent rewards and corrective action, effective for routine performance but weak at inspiring change.",
  },
  {
    id: 1312,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "easy",
    prompt:
      "A database that stores customer names, purchase history, and contact details in organized tables is an example of a(n):",
    choices: [
      "management information system (MIS)",
      "organizational chart",
      "audit trail",
      "employee handbook",
    ],
    correctIndex: 0,
    explanation:
      "Management information systems collect, store, and organize data so managers can retrieve useful reports for decisions.",
  },
  {
    id: 1313,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "easy",
    prompt:
      "Which practice best protects sensitive customer data from unauthorized access?",
    choices: [
      "Posting passwords on monitors for convenience",
      "Encryption and role-based access controls",
      "Emailing full databases to all staff monthly",
      "Using “password” as the universal login",
    ],
    correctIndex: 1,
    explanation:
      "Encryption renders stolen data unreadable, and access controls ensure employees see only data their jobs require.",
  },
  {
    id: 1314,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "medium",
    prompt:
      "A retail chain analyzes point-of-sale data to decide which products to stock in each region. This use of data illustrates:",
    choices: [
      "data-driven decision making",
      "intuitive forecasting only",
      "grapevine communication",
      "quality inspection sampling",
    ],
    correctIndex: 0,
    explanation:
      "Business analytics turns transaction data into insights, letting managers base stocking decisions on evidence rather than guesswork.",
  },
  {
    id: 1315,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "medium",
    prompt:
      "Software that integrates a company’s finance, HR, manufacturing, and supply chain data into one system is known as:",
    choices: [
      "enterprise resource planning (ERP)",
      "desktop publishing software",
      "a web browser",
      "spreadsheet shareware",
    ],
    correctIndex: 0,
    explanation:
      "ERP systems unify data and processes across departments into a single platform, improving coordination and reporting accuracy.",
  },
  {
    id: 1316,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "easy",
    prompt:
      "Which financial statement reports a company’s revenues and expenses over a period of time?",
    choices: [
      "Balance sheet",
      "Income statement",
      "Statement of cash flows",
      "Organizational budget chart",
    ],
    correctIndex: 1,
    explanation:
      "The income statement shows profitability — revenue minus expenses — during a period; the balance sheet shows assets, liabilities, and equity at a point in time.",
  },
  {
    id: 1317,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "easy",
    prompt:
      "Assets = Liabilities + Owner’s Equity is the fundamental equation of the:",
    choices: [
      "income statement",
      "balance sheet",
      "cash flow statement",
      "break-even analysis",
    ],
    correctIndex: 1,
    explanation:
      "The accounting equation underlies the balance sheet, ensuring every asset is financed either by debt or by owners’ claims.",
  },
  {
    id: 1318,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "medium",
    prompt:
      "A company has current assets of $200,000 and current liabilities of $100,000. Its current ratio is:",
    choices: [
      "0.5",
      "1.5",
      "2.0",
      "$100,000",
    ],
    correctIndex: 2,
    explanation:
      "Current ratio = current assets ÷ current liabilities = $200,000 ÷ $100,000 = 2.0, indicating solid short-term liquidity.",
  },
  {
    id: 1319,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "medium",
    prompt:
      "Net profit margin measures:",
    choices: [
      "net income as a percentage of sales",
      "total assets divided by total debt",
      "inventory divided by cost of goods sold",
      "cash inflows minus loan repayments",
    ],
    correctIndex: 0,
    explanation:
      "Net margin shows how much of each sales dollar becomes profit, allowing comparison of efficiency across firms and periods.",
  },
  {
    id: 1320,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "easy",
    prompt:
      "A tax placed on imported goods to protect domestic industries is called a:",
    choices: [
      "tariff",
      "subsidy",
      "quota receipt",
      "dividend",
    ],
    correctIndex: 0,
    explanation:
      "Tariffs raise import prices, shielding domestic producers while increasing costs for consumers and import-dependent businesses.",
  },
  {
    id: 1321,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "easy",
    prompt:
      "A limit on the quantity of a specific good that may be imported during a period is called a(n):",
    choices: [
      "quota",
      "embargo on services",
      "exchange rate",
      "joint venture",
    ],
    correctIndex: 0,
    explanation:
      "Import quotas cap physical quantities, restricting supply more directly than tariffs, which raise prices instead.",
  },
  {
    id: 1322,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "medium",
    prompt:
      "A U.S. company partners with a Japanese firm to build and operate a factory in Japan, with both firms sharing ownership and profits. This market-entry strategy is a:",
    choices: [
      "wholly owned subsidiary",
      "joint venture",
      "licensing arrangement",
      "direct export sale",
    ],
    correctIndex: 1,
    explanation:
      "Joint ventures pool capital and expertise from two firms in shared ownership, spreading risk while gaining local market knowledge.",
  },
  {
    id: 1323,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "medium",
    prompt:
      "If the U.S. dollar weakens against the euro, which effect is most likely for an American exporter selling to Europe?",
    choices: [
      "Its products become more expensive for European buyers",
      "Its products become relatively cheaper for European buyers",
      "Nothing changes because prices are fixed by contract law",
      "It must pay higher U.S. tariffs immediately",
    ],
    correctIndex: 1,
    explanation:
      "A weaker dollar means euros buy more dollars, so American goods cost Europeans less — boosting export competitiveness.",
  },
  {
    id: 1324,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "medium",
    prompt:
      "A soft-drink company allows a bottler in Brazil to produce and sell its beverage under its brand in exchange for royalties. This strategy is called:",
    choices: [
      "franchising or licensing",
      "offshoring",
      "countertrade",
      "nationalization",
    ],
    correctIndex: 0,
    explanation:
      "Licensing/franchising grants foreign firms rights to use brand names, formulas, or systems in exchange for fees, requiring little capital investment.",
  },
  {
    id: 1325,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "hard",
    prompt:
      "Before entering Country X, a firm studies local religious customs, gift-giving norms, and attitudes toward hierarchy. It is conducting analysis of which business environment factor?",
    choices: [
      "Sociocultural factors",
      "Monetary policy",
      "Technological infrastructure only",
      "Antitrust enforcement",
    ],
    correctIndex: 0,
    explanation:
      "Sociocultural analysis examines values, customs, and behaviors that determine whether products and management practices will succeed locally.",
  },
  {
    id: 1326,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "A manager who compares this month’s expenses against the departmental budget is performing which management function?",
    choices: [
      "Controlling",
      "Staffing",
      "Leading",
      "Planning",
    ],
    correctIndex: 0,
    explanation:
      "Budget comparisons are a classic controlling activity: measuring actual results against standards and correcting variances.",
  },
  {
    id: 1327,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "Which statement about authority and responsibility is correct?",
    choices: [
      "Authority can exist without any responsibility",
      "Responsibility should be accompanied by matching authority to complete the work",
      "Responsibility applies only to top executives",
      "Authority always exceeds responsibility in healthy organizations",
    ],
    correctIndex: 1,
    explanation:
      "The parity principle requires that whoever is held responsible for results also receives enough authority to influence those results.",
  },
  {
    id: 1328,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "easy",
    prompt:
      "Paying employees a fixed annual amount regardless of hours worked each week describes:",
    choices: [
      "salary compensation",
      "piece-rate compensation",
      "commission-only pay",
      "tip income",
    ],
    correctIndex: 0,
    explanation:
      "Salaries are fixed periodic payments; piece rates pay per unit produced and commissions pay per sale made.",
  },
  {
    id: 1329,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "An HR team uses current employee data to forecast how many technicians it will need as the company automates. This activity is called:",
    choices: [
      "human resource planning",
      "job enrichment",
      "collective bargaining",
      "exit interviewing",
    ],
    correctIndex: 0,
    explanation:
      "HR planning forecasts future staffing needs and prepares recruitment, training, or restructuring to meet them.",
  },
  {
    id: 1330,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "easy",
    prompt:
      "The maximum number of customers a call center can handle per hour with its current staff reflects its:",
    choices: [
      "service capacity",
      "fixed asset turnover",
      "gross margin",
      "brand equity",
    ],
    correctIndex: 0,
    explanation:
      "Capacity measures output potential; in service businesses it depends heavily on staffing levels and technology.",
  },
  {
    id: 1331,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A manufacturer inspects every 50th item coming off the line rather than every item. This quality technique is called:",
    choices: [
      "statistical sampling",
      "total inspection",
      "kaizen events",
      "poka-yoke error proofing",
    ],
    correctIndex: 0,
    explanation:
      "Statistical sampling checks a representative subset, balancing defect detection against inspection costs.",
  },
  {
    id: 1332,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "A government prints money rapidly to cover deficits. The most likely macroeconomic consequence is:",
    choices: [
      "deflation",
      "inflation",
      "a trade surplus",
      "falling nominal interest rates permanently",
    ],
    correctIndex: 1,
    explanation:
      "Expanding the money supply faster than output erodes currency value, producing inflation — sometimes hyperinflation at extremes.",
  },
  {
    id: 1333,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "A corporation is legally considered:",
    choices: [
      "an extension of its founders personally",
      "a separate legal entity distinct from its owners",
      "illegal without unanimous shareholder consent",
      "a temporary partnership",
    ],
    correctIndex: 1,
    explanation:
      "Incorporation creates a legal “person” that can own property, sue, be sued, and outlive its original owners.",
  },
  {
    id: 1334,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "medium",
    prompt:
      "An employee uses company time and equipment to run a personal side business. This primarily violates standards of:",
    choices: [
      "workplace honesty and proper use of employer resources",
      "international trade law",
      "product liability",
      "securities registration",
    ],
    correctIndex: 0,
    explanation:
      "Misusing employer time and assets for personal gain is dishonest and breaches the duty employees owe their employers.",
  },
  {
    id: 1335,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "easy",
    prompt:
      "Lifelong learning through workshops, certifications, and courses after formal schooling is called:",
    choices: [
      "continuing education",
      "remedial placement",
      "orientation",
      "outplacement",
    ],
    correctIndex: 0,
    explanation:
      "Continuing education keeps skills current as industries and technologies evolve, protecting employability over a career.",
  },
  {
    id: 1336,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "easy",
    prompt:
      "In the communication process, the receiver’s response back to the sender is called:",
    choices: [
      "feedback",
      "encoding",
      "noise",
      "channel selection",
    ],
    correctIndex: 0,
    explanation:
      "Feedback lets senders verify the message was understood, closing the communication loop.",
  },
  {
    id: 1337,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "medium",
    prompt:
      "A leader who prioritizes employees’ growth, listens first, and removes obstacles for the team exemplifies:",
    choices: [
      "servant leadership",
      "autocratic leadership",
      "transactional leadership",
      "bureaucratic leadership",
    ],
    correctIndex: 0,
    explanation:
      "Servant leaders measure success by how well they develop and serve their people, which builds trust and engagement.",
  },
  {
    id: 1338,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "hard",
    prompt:
      "A retailer’s database links purchase records with loyalty-card demographics to predict which customers will respond to a promotion. This application is best described as:",
    choices: [
      "data mining for targeted marketing",
      "perpetual inventory counting",
      "quality control charting",
      "payroll processing",
    ],
    correctIndex: 0,
    explanation:
      "Data mining discovers patterns in large datasets, enabling segmentation and prediction such as identifying likely promotion responders.",
  },
  {
    id: 1339,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "medium",
    prompt:
      "A firm’s debt-to-equity ratio rises sharply after borrowing to fund expansion. This most directly signals increased:",
    choices: [
      "financial leverage and financial risk",
      "inventory turnover",
      "gross profit percentage",
      "employee productivity",
    ],
    correctIndex: 0,
    explanation:
      "More debt relative to equity amplifies both potential returns and risk of default — the essence of financial leverage.",
  },
  {
    id: 1340,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "medium",
    prompt:
      "A complete ban on trade with another country is called a(n):",
    choices: [
      "embargo",
      "tariff schedule",
      "import quota",
      "free trade agreement",
    ],
    correctIndex: 0,
    explanation:
      "Embargoes prohibit trade entirely, usually for political reasons, and are the most severe trade barrier.",
  },
  {
    id: 1341,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "A CEO frames major decisions around what competitors will do in response. This strategic view treats business primarily as:",
    choices: [
      "an isolated internal exercise",
      "a competitive interaction requiring anticipation of rivals’ moves",
      "a purely administrative function",
      "a compliance checklist",
    ],
    correctIndex: 1,
    explanation:
      "Strategic thinking models rivalry — like game theory — where optimal moves depend on anticipating competitors’ responses.",
  },
  {
    id: 1342,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "A company’s turnover analysis shows most resignations occur within 90 days of hiring. The MOST effective first response is to:",
    choices: [
      "raise salaries across the board immediately",
      "examine onboarding, job previews, and early-training practices for gaps",
      "eliminate exit interviews to save time",
      "hire only candidates with five years of experience",
    ],
    correctIndex: 1,
    explanation:
      "Early attrition usually traces to unrealistic job expectations or weak onboarding; diagnosing root causes targets the fix better than blanket pay raises.",
  },
  {
    id: 1343,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "hard",
    prompt:
      "A hospital reduces patient wait times not by adding staff but by rearranging step sequences and eliminating duplicate paperwork. This improvement reflects:",
    choices: [
      "process reengineering / lean process improvement",
      "capacity expansion through capital spending",
      "demand stimulation",
      "vertical integration",
    ],
    correctIndex: 0,
    explanation:
      "Redesigning workflow to remove non-value steps improves throughput without new resources — core lean/reengineering logic.",
  },
  {
    id: 1344,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "Stagflation refers to a period combining:",
    choices: [
      "high inflation, high unemployment, and stagnant growth",
      "low inflation with rapid growth",
      "rising exports with falling imports",
      "stable prices with falling wages",
    ],
    correctIndex: 0,
    explanation:
      "Stagflation defies the usual Phillips-curve trade-off: prices rise while output stalls and joblessness climbs, complicating policy responses.",
  },
  {
    id: 1345,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "hard",
    prompt:
      "A company’s product injures a user despite following all regulations, because a safer alternative design existed. The plaintiff’s strongest claim is based on:",
    choices: [
      "strict product liability for a defective design",
      "breach of employment contract",
      "trade secret misappropriation",
      "zoning violation",
    ],
    correctIndex: 0,
    explanation:
      "Design-defect claims ask whether a reasonable safer design existed; liability can attach without proving negligence when products unreasonably endanger users.",
  },
  {
    id: 1346,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "hard",
    prompt:
      "Under Sarbanes-Oxley requirements, corporate executives certifying knowingly false financial statements face:",
    choices: [
      "no consequences if auditors missed the errors",
      "personal criminal and civil penalties",
      "only informal board criticism",
      "automatic bankruptcy protection",
    ],
    correctIndex: 1,
    explanation:
      "SOX holds CEOs and CFOs personally accountable for financial report accuracy, imposing criminal penalties for willful false certification.",
  },
  {
    id: 1347,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "medium",
    prompt:
      "Managing one’s time most effectively begins with:",
    choices: [
      "answering messages in arrival order regardless of importance",
      "identifying priorities and allocating time to high-value tasks first",
      "working longer hours until everything is done",
      "avoiding calendars to stay flexible",
    ],
    correctIndex: 1,
    explanation:
      "Prioritization frameworks (e.g., urgent/important matrices) ensure limited time goes to tasks with the greatest impact before low-value demands.",
  },
  {
    id: 1348,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "medium",
    prompt:
      "When writing to a customer who misunderstood the return policy, the best opening sentence:",
    choices: [
      "blames the customer for failing to read the receipt",
      "acknowledges the customer’s concern before clarifying the policy",
      "quotes the entire legal policy verbatim first",
      "states that no further emails will be answered",
    ],
    correctIndex: 1,
    explanation:
      "Customer-focused writing leads with empathy and acknowledgment, making corrective information easier to accept.",
  },
  {
    id: 1349,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "medium",
    prompt:
      "Effective delegation of a project should include which elements?",
    choices: [
      "Clear objectives, necessary authority, resources, and checkpoints",
      "Only a deadline with no guidance",
      "Constant hourly progress reports on minor details",
      "Verbal instructions only, never written goals",
    ],
    correctIndex: 0,
    explanation:
      "Successful delegation pairs expected outcomes with authority, resources, and agreed checkpoints so employees can act independently yet stay aligned.",
  },
  {
    id: 1350,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "medium",
    prompt:
      "Backing up critical business data to secure off-site servers protects primarily against:",
    choices: [
      "data loss from disasters, breaches, or system failures",
      "employee absenteeism",
      "currency fluctuations",
      "supply chain delays",
    ],
    correctIndex: 0,
    explanation:
      "Off-site backups enable recovery after fires, ransomware attacks, or hardware failures, preserving business continuity.",
  },
  {
    id: 1351,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "hard",
    prompt:
      "A business has strong profits but struggles to pay bills because cash is tied up in inventory and receivables. Its problem is best described as poor:",
    choices: [
      "liquidity management",
      "marketing strategy",
      "span of control",
      "product positioning",
    ],
    correctIndex: 0,
    explanation:
      "Profitability differs from liquidity; slow-moving inventory and unpaid receivables starve a profitable firm of operating cash.",
  },
  {
    id: 1352,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "hard",
    prompt:
      "A multinational standardizes its advertising worldwide to cut costs, but sales lag in markets where humor styles differ. The lesson is that global marketing must balance:",
    choices: [
      "standardization efficiency against cultural adaptation",
      "tariff rates against quota limits",
      "licensing fees against royalty taxes",
      "embargo risk against exchange controls",
    ],
    correctIndex: 0,
    explanation:
      "Global campaigns save money but often fail without localization; effective multinationals adapt creative execution to local cultures.",
  },
  {
    id: 1353,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "Benchmarking as a control technique involves:",
    choices: [
      "comparing your processes and performance against industry best practices",
      "setting arbitrary targets without research",
      "auditing only financial statements",
      "surveying employee satisfaction annually",
    ],
    correctIndex: 0,
    explanation:
      "Benchmarking identifies gap-to-best performance, giving managers concrete standards and proven improvement ideas.",
  },
  {
    id: 1354,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "Which recruiting source typically yields candidates who can contribute fastest?",
    choices: [
      "Internal promotions of trained current employees",
      "Brand-new college graduates",
      "Random walk-in applicants",
      "Overseas hires needing visa sponsorship",
    ],
    correctIndex: 0,
    explanation:
      "Internal candidates already know systems, culture, and processes, shortening ramp-up time compared with external sources.",
  },
  {
    id: 1355,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "Outsourcing production overseas mainly to reduce labor costs involves trading off:",
    choices: [
      "cost savings against longer lead times and less direct control",
      "higher wages against shorter hours",
      "quality improvements against tax increases",
      "brand equity against market share",
    ],
    correctIndex: 0,
    explanation:
      "Offshore outsourcing lowers unit costs but adds shipping delays, oversight challenges, and reputational risks that firms must manage.",
  },
  {
    id: 1356,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "A shortage occurs in a market when:",
    choices: [
      "price is held below equilibrium, so quantity demanded exceeds quantity supplied",
      "price is above equilibrium",
      "supply equals demand exactly",
      "the government subsidizes producers",
    ],
    correctIndex: 0,
    explanation:
      "Price ceilings below equilibrium create shortages — buyers want more than sellers will supply at that price.",
  },
  {
    id: 1357,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A small business owner signs a personal guarantee on a business loan. If the business defaults, the owner:",
    choices: [
      "owes nothing because the business borrowed the money",
      "is personally responsible for repaying the loan",
      "may transfer the debt to employees",
      "automatically receives a government bailout",
    ],
    correctIndex: 1,
    explanation:
      "Personal guarantees pierce the liability shield, making the owner’s personal assets available to satisfy the business debt.",
  },
  {
    id: 1358,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "medium",
    prompt:
      "A marketing team exaggerates product capabilities in ads knowing customers will be disappointed. Beyond ethics, the main business risk is:",
    choices: [
      "losing customer trust and facing deceptive-advertising liability",
      "paying higher payroll taxes",
      "reduced span of control",
      "increased economies of scale",
    ],
    correctIndex: 0,
    explanation:
      "False advertising destroys repeat business and invites regulatory action under consumer protection laws like those enforced by the FTC.",
  },
  {
    id: 1359,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "medium",
    prompt:
      "During a salary negotiation, knowing the market rate for your position primarily helps you:",
    choices: [
      "set a realistic, defensible target range",
      "guarantee the highest possible offer",
      "avoid interviewing altogether",
      "skip reference checks",
    ],
    correctIndex: 0,
    explanation:
      "Market data anchors negotiations in objective benchmarks, making requests credible rather than arbitrary.",
  },
  {
    id: 1360,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "hard",
    prompt:
      "A manager must announce layoffs. Which communication approach is most appropriate?",
    choices: [
      "An anonymous rumor leaked to build suspense",
      "A clear, empathetic message delivered in person with support resources and reasons",
      "A cheerful email emphasizing company picnic dates",
      "Individual texts sent during the weekend",
    ],
    correctIndex: 1,
    explanation:
      "Crisis communications demand honesty, compassion, timeliness, and practical support delivered through rich, personal channels.",
  },
  {
    id: 1361,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "hard",
    prompt:
      "A new manager inherits a high-performing, experienced team. According to situational leadership principles, she should mostly adopt which style?",
    choices: [
      "Close directing with detailed instructions",
      "Delegating with autonomy and support on request",
      "Constant coaching of basic skills",
      "Removing all goals to maximize freedom",
    ],
    correctIndex: 1,
    explanation:
      "High-competence, high-commitment teams perform best under delegating styles; heavy direction wastes talent and breeds resentment.",
  },
  {
    id: 1362,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "medium",
    prompt:
      "Phishing attacks threaten businesses primarily by:",
    choices: [
      "tricking employees into revealing passwords or sensitive data through fake messages",
      "physically stealing office furniture",
      "raising supplier prices automatically",
      "corrupting printed marketing brochures",
    ],
    correctIndex: 0,
    explanation:
      "Phishing exploits human trust rather than technical flaws, making employee security awareness training essential.",
  },
  {
    id: 1363,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "medium",
    prompt:
      "Return on investment (ROI) is calculated as:",
    choices: [
      "(net gain from investment ÷ cost of investment) × 100",
      "total revenue minus total expenses",
      "current assets minus current liabilities",
      "sales divided by total employees",
    ],
    correctIndex: 0,
    explanation:
      "ROI expresses profit relative to investment cost as a percentage, allowing comparison across projects of different sizes.",
  },
  {
    id: 1364,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "easy",
    prompt:
      "The World Trade Organization (WTO) primarily exists to:",
    choices: [
      "set rules for international trade and resolve disputes between member countries",
      "manufacture exported goods",
      "fix global currency exchange rates daily",
      "operate national postal services",
    ],
    correctIndex: 0,
    explanation:
      "The WTO administers trade agreements and provides a forum for settling trade disputes among nations.",
  },
  {
    id: 1365,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "Tactical plans are typically developed by:",
    choices: [
      "middle managers implementing strategy in their units",
      "customers and suppliers jointly",
      "first-line employees without input",
      "government regulators",
    ],
    correctIndex: 0,
    explanation:
      "Middle managers translate top-level strategy into medium-range departmental plans and resource allocations.",
  },
  {
    id: 1366,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "easy",
    prompt:
      "Job rotation benefits organizations mainly by:",
    choices: [
      "building versatile employees and reducing monotony",
      "eliminating the need for any supervision",
      "guaranteeing lower payroll costs",
      "replacing performance appraisals",
    ],
    correctIndex: 0,
    explanation:
      "Rotating employees across roles develops broader skills, increases engagement, and creates backup coverage for absences.",
  },
  {
    id: 1367,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "easy",
    prompt:
      "Capacity planning answers which fundamental question?",
    choices: [
      "How much output capability will we need to meet future demand?",
      "Who should receive the employee-of-the-month award?",
      "Which logo design attracts more attention?",
      "How should the mission statement be worded?",
    ],
    correctIndex: 0,
    explanation:
      "Capacity planning matches long-term production capability to forecast demand, avoiding costly overbuilding or lost sales.",
  },
  {
    id: 1368,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "Gross profit is calculated as:",
    choices: [
      "net sales minus cost of goods sold",
      "total assets minus total liabilities",
      "net income plus dividends",
      "cash received minus cash paid",
    ],
    correctIndex: 0,
    explanation:
      "Gross profit measures what remains from sales after covering direct product costs, before operating expenses.",
  },
  {
    id: 1369,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "A trademark’s basic purpose is to:",
    choices: [
      "identify the source of goods and distinguish them from competitors",
      "protect the functional design of machines",
      "register employee contracts with the state",
      "tax imported merchandise",
    ],
    correctIndex: 0,
    explanation:
      "Trademarks prevent consumer confusion by giving brands exclusive rights to identifiers like names, logos, and slogans.",
  },
  {
    id: 1370,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "easy",
    prompt:
      "Whistleblower protections exist primarily to:",
    choices: [
      "encourage reporting of illegal conduct without fear of retaliation",
      "punish employees who miss deadlines",
      "reward shareholders with dividends",
      "regulate import tariffs",
    ],
    correctIndex: 0,
    explanation:
      "Legal protections shield employees who report wrongdoing from firing, demotion, or harassment, promoting accountability.",
  },
  {
    id: 1371,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "easy",
    prompt:
      "Professionalism in workplace appearance and behavior matters chiefly because it:",
    choices: [
      "shapes others’ confidence in your competence and judgment",
      "guarantees promotions regardless of performance",
      "replaces the need for technical skill",
      "is required by antitrust law",
    ],
    correctIndex: 0,
    explanation:
      "First impressions and consistent professional conduct build credibility, which affects trust, opportunities, and influence.",
  },
  {
    id: 1372,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "easy",
    prompt:
      "Choosing video conferencing for a sensitive performance discussion illustrates selecting a channel based on:",
    choices: [
      "message importance and need for two-way interaction",
      "lowest possible cost alone",
      "random preference",
      "avoiding documentation entirely",
    ],
    correctIndex: 0,
    explanation:
      "Richer channels suit complex or emotional messages because they convey tone and allow immediate dialogue.",
  },
  {
    id: 1373,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "easy",
    prompt:
      "Charismatic leadership influences followers primarily through:",
    choices: [
      "personal charm, confidence, and compelling vision",
      "formal rules and procedure manuals",
      "strict pay-for-output formulas",
      "rotating meeting schedules",
    ],
    correctIndex: 0,
    explanation:
      "Charismatic leaders inspire strong emotional commitment through personality and vision, though reliance on one figure carries succession risks.",
  },
  {
    id: 1374,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "easy",
    prompt:
      "A decision support system (DSS) helps managers by:",
    choices: [
      "modeling alternatives and analyzing data for semi-structured decisions",
      "printing payroll checks automatically",
      "recording attendance only",
      "drafting legal contracts without review",
    ],
    correctIndex: 0,
    explanation:
      "DSS tools combine data and models to explore “what-if” scenarios, supporting judgment rather than replacing it.",
  },
  {
    id: 1375,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "easy",
    prompt:
      "Working capital is defined as:",
    choices: [
      "current assets minus current liabilities",
      "long-term debt minus equity",
      "annual net sales times gross margin",
      "cash plus buildings only",
    ],
    correctIndex: 0,
    explanation:
      "Positive working capital indicates a firm can cover short-term obligations with short-term resources.",
  },
  {
    id: 1376,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "medium",
    prompt:
      "Exchange rate risk affects international businesses mainly because:",
    choices: [
      "currency value changes can turn profitable deals into losses",
      "tariffs are recalculated weekly",
      "quotas expire without notice",
      "translations always double costs",
    ],
    correctIndex: 0,
    explanation:
      "Between contract signing and payment, currencies can shift, so firms hedge with forwards, options, or natural offsets.",
  },
  {
    id: 1377,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A policy that requires two signatures on checks above $5,000 is an example of:",
    choices: [
      "internal control",
      "job enrichment",
      "grapevine management",
      "strategic planning",
    ],
    correctIndex: 0,
    explanation:
      "Segregation of duties and dual authorization are internal controls designed to prevent fraud and catch errors.",
  },
  {
    id: 1378,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "Total compensation includes:",
    choices: [
      "wages plus benefits such as insurance, retirement, and paid leave",
      "base pay only",
      "overtime only",
      "stock price appreciation only",
    ],
    correctIndex: 0,
    explanation:
      "Total compensation captures direct pay plus the value of all benefits, giving a true picture of employment cost and employee reward.",
  },
  {
    id: 1379,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "Service operations differ from manufacturing chiefly because services are:",
    choices: [
      "intangible and often produced and consumed simultaneously",
      "always inventoried in warehouses",
      "never customized",
      "exempt from quality standards",
    ],
    correctIndex: 0,
    explanation:
      "Services cannot be stored and vary with each delivery, making capacity timing and consistency harder to manage.",
  },
  {
    id: 1380,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "A surplus occurs when:",
    choices: [
      "price sits above equilibrium, so quantity supplied exceeds quantity demanded",
      "quantity demanded exceeds quantity supplied",
      "supply and demand intersect",
      "the government sets a price ceiling below equilibrium",
    ],
    correctIndex: 0,
    explanation:
      "Above-equilibrium prices leave sellers with unsold goods; competition eventually pushes prices down toward equilibrium.",
  },
  {
    id: 1381,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A non-compete agreement restricts a departing employee from:",
    choices: [
      "working for direct competitors within defined limits of time and geography",
      "ever working anywhere again",
      "collecting earned wages",
      "using public roads near the office",
    ],
    correctIndex: 0,
    explanation:
      "Courts enforce non-competes only when reasonable in scope, duration, and geography, and tied to legitimate business interests.",
  },
  {
    id: 1382,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "medium",
    prompt:
      "Insider trading is illegal because it:",
    choices: [
      "undermines fair markets by exploiting confidential information unavailable to the public",
      "raises corporate tax rates",
      "violates trademark registrations",
      "slows employee orientation",
    ],
    correctIndex: 0,
    explanation:
      "Trading on material nonpublic information cheats other investors and erodes confidence in securities markets.",
  },
  {
    id: 1383,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "hard",
    prompt:
      "An employee consistently volunteers for visible cross-department projects, delivers results, and builds relationships with senior leaders. This career strategy is best described as:",
    choices: [
      "intentional career management and visibility building",
      "job hopping",
      "passive waiting for promotion cycles",
      "delegating responsibility upward",
    ],
    correctIndex: 0,
    explanation:
      "Deliberately expanding exposure, demonstrating impact, and cultivating sponsors accelerate advancement far more than tenure alone.",
  },
  {
    id: 1384,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "hard",
    prompt:
      "A multicultural team misreads direct criticism as rudeness, causing friction. The manager’s best remedy is to:",
    choices: [
      "ban all feedback discussions",
      "establish shared team norms explaining communication-style differences",
      "communicate only in writing forever",
      "replace team members from one culture",
    ],
    correctIndex: 1,
    explanation:
      "Explicitly discussing cultural communication differences and agreeing on norms prevents misattribution of intent and rebuilds trust.",
  },
  {
    id: 1385,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "medium",
    prompt:
      "Team cohesiveness tends to improve performance most when:",
    choices: [
      "cohesion is paired with clear performance goals",
      "members agree to suppress all disagreement",
      "the leader avoids setting any standards",
      "membership changes weekly",
    ],
    correctIndex: 0,
    explanation:
      "Research shows cohesion boosts productivity mainly when norms support high performance; cohesion without goals can even hurt results.",
  },
  {
    id: 1386,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "hard",
    prompt:
      "A company suffers a ransomware attack that encrypts its files. Which preparation would have minimized operational damage most?",
    choices: [
      "Regular tested offline backups and an incident response plan",
      "Larger print advertising budgets",
      "Wider spans of control",
      "More frequent staff picnics",
    ],
    correctIndex: 0,
    explanation:
      "Tested backups allow restoration without paying ransoms, and incident plans speed coordinated recovery — key cybersecurity resilience measures.",
  },
  {
    id: 1387,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "hard",
    prompt:
      "Two projects each require $100,000. Project A returns $30,000/year for 4 years; Project B returns $140,000 once after 4 years. Ignoring discounting, both return $120,000 total, but B is riskier chiefly because:",
    choices: [
      "its entire payoff arrives later, exposing it to more uncertainty",
      "it earns less total profit",
      "it has a shorter payback period",
      "ROI cannot be computed for lump sums",
    ],
    correctIndex: 0,
    explanation:
      "Money later carries more risk and lower present value; A’s earlier cash flows reduce exposure and improve liquidity.",
  },
  {
    id: 1388,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "medium",
    prompt:
      "Adapting product packaging, language, and sizing to each country market while keeping core branding consistent is called:",
    choices: [
      "glocalization (standardize globally, adapt locally)",
      "nationalization",
      "tariff engineering",
      "quota hopping",
    ],
    correctIndex: 0,
    explanation:
      "“Think global, act local” preserves brand equity worldwide while respecting local preferences and regulations.",
  },
  {
    id: 1389,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "A balanced scorecard evaluates organizational performance using which four perspectives?",
    choices: [
      "Financial, customer, internal process, and learning & growth",
      "Sales, marketing, HR, and IT",
      "Price, place, product, and promotion",
      "Plan, do, check, and act",
    ],
    correctIndex: 0,
    explanation:
      "Kaplan and Norton’s balanced scorecard supplements financial metrics with customer, process, and development measures to track strategy holistically.",
  },
  {
    id: 1390,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "A firm pays above-market wages deliberately to attract top talent and reduce turnover and shirking. This strategy is known as paying:",
    choices: [
      "efficiency wages",
      "minimum wages",
      "piece rates",
      "deferred bonuses",
    ],
    correctIndex: 0,
    explanation:
      "Efficiency-wage theory holds that above-market pay raises productivity and loyalty enough to offset the extra cost.",
  },
  {
    id: 1391,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "hard",
    prompt:
      "A factory manager must choose between two layouts. Layout A minimizes material travel distance; Layout B allows quick changeovers between many small product runs. If demand is highly varied with short lead times, which choice and reasoning are correct?",
    choices: [
      "Layout B, because flexibility to switch products quickly matters more than transport efficiency",
      "Layout A, because distance is always the only relevant factor",
      "Neither, because layout never affects performance",
      "Both, because layouts have no trade-offs",
    ],
    correctIndex: 0,
    explanation:
      "Varied, short-lead-time demand rewards flexible layouts that reduce changeover time; pure transport optimization suits high-volume standardized flows.",
  },
  {
    id: 1392,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "A business cycle’s peak is followed by which typical sequence?",
    choices: [
      "Contraction, trough, expansion",
      "Expansion, peak, contraction immediately repeating",
      "Trough directly back to peak",
      "Permanent stagnation",
    ],
    correctIndex: 0,
    explanation:
      "The business cycle moves peak → recession/contraction → trough → recovery/expansion → peak again.",
  },
  {
    id: 1393,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A franchisee must follow the franchisor’s operating system, branding, and pricing guidelines in exchange for:",
    choices: [
      "the right to use the brand and ongoing support, paid via fees and royalties",
      "ownership of the franchisor corporation",
      "exemption from all local employment laws",
      "a seat on the franchisor’s board by default",
    ],
    correctIndex: 0,
    explanation:
      "Franchising buys a proven business model and trademark rights; franchisees pay initial fees plus royalties while accepting strict operating standards.",
  },
  {
    id: 1394,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "easy",
    prompt:
      "A code of ethics is most effective when:",
    choices: [
      "leaders model the standards and violations carry consistent consequences",
      "it is written once and filed away unread",
      "it applies only to entry-level employees",
      "it conflicts with daily management behavior",
    ],
    correctIndex: 0,
    explanation:
      "Ethical culture flows from the top — when leaders visibly comply and enforce standards consistently, employees take codes seriously.",
  },
  {
    id: 1395,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "easy",
    prompt:
      "Punctuality, meeting deadlines, and following through on commitments demonstrate:",
    choices: [
      "reliability, a core professional work ethic",
      "technical certification",
      "networking ability",
      "financial literacy",
    ],
    correctIndex: 0,
    explanation:
      "Dependability is among the most valued workplace traits because colleagues’ work depends on your commitments being met.",
  },
  {
    id: 1396,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "medium",
    prompt:
      "Active listening differs from simply hearing because active listening requires:",
    choices: [
      "concentrating, interpreting, responding, and remembering the message",
      "staying silent no matter what",
      "planning your reply while the other speaks",
      "agreeing with everything said",
    ],
    correctIndex: 0,
    explanation:
      "Active listening engages attention and feedback to confirm understanding; hearing alone is passive sound reception.",
  },
  {
    id: 1397,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "medium",
    prompt:
      "Which action best builds trust between a new manager and her team?",
    choices: [
      "Following through on promises and admitting mistakes openly",
      "Making sweeping promises she may not keep",
      "Sharing only favorable information always",
      "Avoiding one-on-one conversations entirely",
    ],
    correctIndex: 0,
    explanation:
      "Trust grows from consistency between words and actions; transparency about errors models accountability and safety.",
  },
  {
    id: 1398,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "medium",
    prompt:
      "An intranet differs from the internet because an intranet is:",
    choices: [
      "a private network restricted to an organization’s members",
      "accessible to anyone worldwide",
      "used only for email",
      "a physical filing cabinet system",
    ],
    correctIndex: 0,
    explanation:
      "Intranets share policies, tools, and information internally behind authentication, protecting confidential company content.",
  },
  {
    id: 1399,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "medium",
    prompt:
      "A cash flow statement reveals that a profitable company shows negative operating cash flow for two straight years. The most likely cause is:",
    choices: [
      "sales recorded on credit that customers have not yet paid",
      "the company pays no taxes",
      "depreciation adds cash each year",
      "dividends increase operating cash flow",
    ],
    correctIndex: 0,
    explanation:
      "Accrual profits can mask uncollected receivables; cash flow statements expose whether reported earnings actually convert to cash.",
  },
  {
    id: 1400,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "easy",
    prompt:
      "NAFTA’s successor agreement governing North American trade is called the:",
    choices: [
      "USMCA (United States–Mexico–Canada Agreement)",
      "WTO charter",
      "EU single market treaty",
      "ASEAN accord",
    ],
    correctIndex: 0,
    explanation:
      "USMCA replaced NAFTA in 2020, updating rules of origin, labor provisions, and digital trade across the three countries.",
  },
  {
    id: 1401,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "Zero-based budgeting differs from traditional budgeting because it:",
    choices: [
      "requires justifying every expense from scratch each period rather than adjusting last year’s figures",
      "sets budgets at exactly zero spending",
      "eliminates financial records entirely",
      "applies only to nonprofit organizations",
    ],
    correctIndex: 0,
    explanation:
      "Starting each line item at zero forces managers to re-examine every cost’s value instead of perpetuating historical spending patterns.",
  },
  {
    id: 1402,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "A realistic job preview improves retention mainly by:",
    choices: [
      "showing candidates both positive and negative aspects of the job before acceptance",
      "hiding difficult duties until after hiring",
      "guaranteeing promotions within one year",
      "shortening interviews to five minutes",
    ],
    correctIndex: 0,
    explanation:
      "Candidates who understand real demands self-select appropriately and arrive with accurate expectations, reducing early quits.",
  },
  {
    id: 1403,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "A poka-yoke device, such as a fixture that only lets parts assemble one way, functions to:",
    choices: [
      "prevent errors before they occur",
      "inspect finished goods statistically",
      "schedule preventive maintenance",
      "calculate economic order quantities",
    ],
    correctIndex: 0,
    explanation:
      "Poka-yoke (mistake-proofing) designs processes so errors are impossible or immediately obvious, stopping defects at the source.",
  },
  {
    id: 1404,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Perfect competition is characterized by all of the following EXCEPT:",
    choices: [
      "many buyers and sellers",
      "homogeneous products",
      "individual firms influencing market price",
      "easy entry and exit",
    ],
    correctIndex: 2,
    explanation:
      "In perfect competition firms are price takers — no single firm is large enough to influence market price.",
  },
  {
    id: 1405,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "Consideration in a contract fails to exist when:",
    choices: [
      "one party promises a gift with nothing received in return",
      "both parties exchange money for goods",
      "services are traded for payment",
      "a promissory note replaces cash",
    ],
    correctIndex: 0,
    explanation:
      "One-sided gratuitous promises lack consideration and are generally unenforceable as contracts — they remain gifts.",
  },
  {
    id: 1406,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "hard",
    prompt:
      "A manager learns a top performer inflated his expense reports slightly but delivers record sales. Disciplining him anyway upholds which ethical principle?",
    choices: [
      "Consistent application of standards regardless of employee value",
      "Utilitarian calculation that sales outweigh honesty",
      "Relativism based on department norms",
      "Egoism protecting the manager’s bonus",
    ],
    correctIndex: 0,
    explanation:
      "Fairness demands uniform enforcement; excusing valued employees for misconduct corrodes integrity and invites widespread abuse.",
  },
  {
    id: 1407,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "medium",
    prompt:
      "Constructive feedback is most effective when it:",
    choices: [
      "addresses specific behaviors and offers actionable improvement steps",
      "criticizes personal character traits broadly",
      "arrives months after the event",
      "compares the person unfavorably to star coworkers",
    ],
    correctIndex: 0,
    explanation:
      "Behavior-focused, specific, timely feedback gives recipients something concrete to change without triggering defensiveness.",
  },
  {
    id: 1408,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "medium",
    prompt:
      "Jargon-heavy technical language in a message to general customers creates a barrier best described as:",
    choices: [
      "semantic noise from vocabulary the audience doesn’t share",
      "physical noise from the environment",
      "feedback overload",
      "channel richness",
    ],
    correctIndex: 0,
    explanation:
      "Semantic noise arises when words mean different things or mean nothing to receivers; effective writers translate jargon into plain language.",
  },
  {
    id: 1409,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "hard",
    prompt:
      "During a crisis with severe time pressure, which leadership approach is generally most effective?",
    choices: [
      "Directive leadership making fast, clear decisions with brief explanations",
      "Full consensus voting across all staff",
      "Complete delegation with no oversight",
      "Waiting for perfect information before acting",
    ],
    correctIndex: 0,
    explanation:
      "Crises reward decisive direction and clarity; participative styles regain value once urgency subsides and analysis time returns.",
  },
  {
    id: 1410,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "medium",
    prompt:
      "Data encryption protects information by:",
    choices: [
      "scrambling it so only authorized parties with keys can read it",
      "deleting it after 30 days automatically",
      "printing duplicate paper copies",
      "slowing internet connections deliberately",
    ],
    correctIndex: 0,
    explanation:
      "Encryption renders intercepted data useless without decryption keys, safeguarding confidentiality in storage and transit.",
  },
  {
    id: 1411,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "easy",
    prompt:
      "Depreciation expense represents:",
    choices: [
      "allocating a long-term asset’s cost over its useful life",
      "cash set aside in a savings account",
      "the decline in stock prices",
      "employee wage reductions over time",
    ],
    correctIndex: 0,
    explanation:
      "Depreciation spreads equipment and building costs across accounting periods, matching expense to the revenue those assets help generate.",
  },
  {
    id: 1412,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "hard",
    prompt:
      "A company weighs entering Country Y where courts rarely enforce contracts. Its greatest institutional risk involves:",
    choices: [
      "weak rule of law increasing reliance on relationships and raising expropriation risk",
      "excessive judicial enforcement of agreements",
      "too much currency stability",
      "unusually low tariffs",
    ],
    correctIndex: 0,
    explanation:
      "Weak legal institutions raise transaction costs, contract risk, and political risk, often pushing firms toward joint ventures with trusted local partners.",
  },
  {
    id: 1413,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "Contingency factors in organizational design include all EXCEPT:",
    choices: [
      "environmental uncertainty",
      "technology used",
      "strategy pursued",
      "the CEO’s favorite color",
    ],
    correctIndex: 3,
    explanation:
      "Structure should fit environment, technology, strategy, and size — not arbitrary personal preferences unrelated to operations.",
  },
  {
    id: 1414,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "easy",
    prompt:
      "Mentoring programs primarily develop employees through:",
    choices: [
      "guidance and knowledge transfer from experienced colleagues",
      "automated testing software",
      "reduced working hours",
      "public ranking lists",
    ],
    correctIndex: 0,
    explanation:
      "Mentors accelerate development by sharing experience, offering advice, and opening professional networks to less experienced staff.",
  },
  {
    id: 1415,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "easy",
    prompt:
      "Workflow analysis examines:",
    choices: [
      "the sequence and efficiency of steps needed to complete a process",
      "only the final product price",
      "employee birthday schedules",
      "advertising color schemes",
    ],
    correctIndex: 0,
    explanation:
      "Mapping workflow exposes redundancies, bottlenecks, and handoff delays so processes can be streamlined.",
  },
  {
    id: 1416,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "Demand-pull inflation occurs when:",
    choices: [
      "total demand grows faster than the economy’s capacity to produce",
      "oil supplies suddenly double",
      "consumer spending collapses",
      "imports flood domestic markets",
    ],
    correctIndex: 0,
    explanation:
      "When spending outruns productive capacity, buyers bid prices up — demand pulls inflation upward.",
  },
  {
    id: 1417,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "hard",
    prompt:
      "A business owner discovers a former manager took client files to a competing startup. Beyond contract claims, the strongest additional theory is:",
    choices: [
      "misappropriation of trade secrets and breach of fiduciary duty",
      "zoning violation",
      "usury",
      "escheat",
    ],
    correctIndex: 0,
    explanation:
      "Confidential client data can qualify as trade secrets, and senior employees owe fiduciary duties against exploiting company opportunities.",
  },
  {
    id: 1418,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "medium",
    prompt:
      "Sustainability reporting that discloses carbon emissions and labor practices serves mainly to:",
    choices: [
      "give stakeholders transparent ESG performance information",
      "replace audited financial statements",
      "set minimum wages globally",
      "determine tariff rates",
    ],
    correctIndex: 0,
    explanation:
      "ESG disclosures let investors, customers, and regulators evaluate environmental and social impact alongside financial results.",
  },
  {
    id: 1419,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "medium",
    prompt:
      "Adaptability has become a prized career attribute primarily because:",
    choices: [
      "technologies and job requirements change rapidly throughout careers",
      "employers legally require flexibility certificates",
      "change reduces all workload",
      "static skills now command premium salaries",
    ],
    correctIndex: 0,
    explanation:
      "As automation and markets evolve, workers who reskill and adjust quickly stay valuable while rigid skill sets become obsolete.",
  },
  {
    id: 1420,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "easy",
    prompt:
      "Proofreading business documents before sending matters because:",
    choices: [
      "errors undermine credibility and can create misunderstandings",
      "spell-checkers catch every possible mistake",
      "recipients never notice writing quality",
      "speed always outweighs accuracy",
    ],
    correctIndex: 0,
    explanation:
      "Typos and unclear wording damage professional image and can distort meaning; careful review protects both.",
  },
  {
    id: 1421,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "medium",
    prompt:
      "Empowerment improves customer service chiefly because frontline employees can:",
    choices: [
      "resolve problems immediately without escalating every issue",
      "set corporate strategy unilaterally",
      "bypass all budgets freely",
      "skip training requirements",
    ],
    correctIndex: 0,
    explanation:
      "When employees hold decision authority within limits, customers get faster resolutions, boosting satisfaction and loyalty.",
  },
  {
    id: 1422,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "easy",
    prompt:
      "Cloud computing allows businesses to:",
    choices: [
      "access software and storage over the internet instead of owning local servers",
      "eliminate all cybersecurity concerns",
      "operate without any internet connection",
      "avoid paying for any technology services",
    ],
    correctIndex: 0,
    explanation:
      "Cloud services provide scalable computing on demand, cutting capital costs — though security and connectivity still need managing.",
  },
  {
    id: 1423,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "medium",
    prompt:
      "Accounts receivable turnover measures:",
    choices: [
      "how quickly a company collects payment from credit customers",
      "how fast inventory sells",
      "the ratio of debt to assets",
      "profit per employee",
    ],
    correctIndex: 0,
    explanation:
      "Higher receivables turnover means faster collection, improving cash flow and reducing bad-debt risk.",
  },
  {
    id: 1424,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "medium",
    prompt:
      "A free trade agreement between countries typically:",
    choices: [
      "reduces or eliminates tariffs among member countries",
      "raises barriers against member countries",
      "creates a single world currency",
      "abolishes national governments",
    ],
    correctIndex: 0,
    explanation:
      "FTAs like USMCA lower internal trade barriers, expanding export markets while increasing competitive pressure at home.",
  },
  {
    id: 1425,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "easy",
    prompt:
      "Operational plans differ from strategic plans because operational plans are:",
    choices: [
      "short-range, specific, and focused on day-to-day execution",
      "long-range and organization-wide",
      "written only by boards of directors",
      "always confidential",
    ],
    correctIndex: 0,
    explanation:
      "Strategy sets direction over years; operational plans specify near-term tasks, schedules, and resources that implement it.",
  },
  {
    id: 1426,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "Under the Family and Medical Leave Act (FMLA), eligible U.S. employees may generally:",
    choices: [
      "take unpaid, job-protected leave for specified family and medical reasons",
      "receive unlimited paid vacation on request",
      "retire at age 40 with full benefits",
      "refuse all schedule changes permanently",
    ],
    correctIndex: 0,
    explanation:
      "FMLA guarantees up to 12 weeks of unpaid, protected leave annually for qualifying reasons at covered employers.",
  },
  {
    id: 1427,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "Mass customization combines:",
    choices: [
      "flexible production technology with products tailored to individual customers at near mass-production cost",
      "hand-built luxury goods with artisanal pricing",
      "identical products with warehouse storage",
      "custom orders with year-long waits",
    ],
    correctIndex: 0,
    explanation:
      "Modular design and flexible systems let firms offer personalization efficiently — think custom sneakers built on standard platforms.",
  },
  {
    id: 1428,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A central bank fighting inflation would MOST likely:",
    choices: [
      "raise interest rates and reduce money supply growth",
      "cut interest rates and expand lending",
      "increase government spending directly",
      "fix prices by decree across industries",
    ],
    correctIndex: 0,
    explanation:
      "Contractionary monetary policy cools borrowing and spending, easing price pressure; fiscal stimulus would worsen demand-pull inflation.",
  },
  {
    id: 1429,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "Workers’ compensation insurance exists so that employees injured on the job:",
    choices: [
      "receive defined benefits without needing to prove employer fault",
      "must sue employers in court for full damages",
      "forfeit all medical coverage",
      "are compensated only if the employer admits negligence",
    ],
    correctIndex: 0,
    explanation:
      "Workers’ comp is a no-fault system trading guaranteed medical and wage benefits for employees giving up most injury lawsuits.",
  },
  {
    id: 1430,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "medium",
    prompt:
      "Diversity and inclusion programs aim to:",
    choices: [
      "create workplaces where varied backgrounds are represented and everyone can contribute fully",
      "enforce identical thinking across teams",
      "limit hiring to a single demographic group",
      "replace performance evaluation entirely",
    ],
    correctIndex: 0,
    explanation:
      "Effective D&I pairs representation with genuine inclusion, which research links to better decisions, innovation, and financial results.",
  },
  {
    id: 1431,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "hard",
    prompt:
      "A mid-career professional’s industry is shrinking due to automation. The wisest career response is to:",
    choices: [
      "assess transferable skills and pursue retraining in growing adjacent fields",
      "wait for the industry to return to previous size",
      "reject all technology use on principle",
      "reduce networking to save time",
    ],
    correctIndex: 0,
    explanation:
      "Proactive reskilling leverages existing strengths into durable employment; denial or avoidance leaves workers least prepared for transitions.",
  },
  {
    id: 1432,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "hard",
    prompt:
      "A supervisor must correct an employee’s repeated tardiness. The most effective conversation:",
    choices: [
      "describes the pattern factually, states its impact, asks for causes, and agrees on expectations",
      "accuses the employee of laziness in front of peers",
      "sends one vague group email about punctuality",
      "ignores it until the annual review",
    ],
    correctIndex: 0,
    explanation:
      "Private, factual, impact-focused dialogue with joint problem solving changes behavior while preserving dignity and motivation.",
  },
  {
    id: 1433,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "medium",
    prompt:
      "Leading change successfully requires managers to:",
    choices: [
      "communicate the reason for change and involve employees in implementation",
      "impose changes secretly and announce them as done deals",
      "assume resistance never occurs",
      "change everything simultaneously without priorities",
    ],
    correctIndex: 0,
    explanation:
      "Change models like Kotter’s emphasize urgency, communication, and participation to overcome natural resistance and build ownership.",
  },
  {
    id: 1434,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "medium",
    prompt:
      "Customer relationship management (CRM) systems primarily help businesses:",
    choices: [
      "track interactions and history with customers to improve sales and service",
      "manufacture products automatically",
      "file tax returns without accountants",
      "ship packages faster than competitors",
    ],
    correctIndex: 0,
    explanation:
      "CRMs centralize customer data so teams personalize outreach, spot sales opportunities, and resolve issues with full context.",
  },
  {
    id: 1435,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "hard",
    prompt:
      "A retailer extends generous credit terms to boost sales. Sales rise, but cash shortages follow. The underlying tension is between:",
    choices: [
      "revenue growth and working capital / liquidity needs",
      "fixed costs and variable costs",
      "gross margin and net margin definitions",
      "marketing spend and advertising reach",
    ],
    correctIndex: 0,
    explanation:
      "Credit sales book revenue immediately but delay cash collection, straining liquidity even as income statements look strong.",
  },
  {
    id: 1436,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "easy",
    prompt:
      "Offshoring refers to:",
    choices: [
      "moving business processes to another country",
      "selling only within domestic borders",
      "banning imports entirely",
      "issuing offshore bonds only",
    ],
    correctIndex: 0,
    explanation:
      "Offshoring relocates production or services abroad — for cost, talent, or market access — regardless of whether the firm owns the facility.",
  },
  {
    id: 1437,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "medium",
    prompt:
      "A manager uses management by objectives with her team. Which practice fits MBO?",
    choices: [
      "Agreeing jointly on measurable goals and reviewing progress periodically together",
      "Assigning secret quotas revealed only at year-end",
      "Setting goals once and never revisiting them",
      "Rating employees against each other only",
    ],
    correctIndex: 0,
    explanation:
      "MBO’s core is collaborative goal setting tied to organizational objectives plus regular progress reviews and feedback.",
  },
  {
    id: 1438,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "A company faces a temporary two-year surge in demand. The BEST staffing response avoids long-term fixed costs by using:",
    choices: [
      "temporary and contract workers scaled to the project duration",
      "permanent executive hires with golden parachutes",
      "immediate mass hiring of career employees",
      "refusing all new business",
    ],
    correctIndex: 0,
    explanation:
      "Flexible staffing matches workforce capacity to demand horizons, avoiding painful layoffs when the surge ends.",
  },
  {
    id: 1439,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "hard",
    prompt:
      "A plant can make 10,000 units monthly but demand averages 7,000. Operating at full capacity anyway would most likely:",
    choices: [
      "build excess inventory, raising holding costs and obsolescence risk",
      "increase profits proportionally forever",
      "reduce total costs to zero",
      "eliminate the need for forecasting",
    ],
    correctIndex: 0,
    explanation:
      "Producing beyond demand converts cash into idle stock; capacity planning aligns output with forecasted sales, not maximum capability.",
  },
  {
    id: 1440,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Substitute goods affect demand such that when the price of coffee rises sharply, demand for tea will likely:",
    choices: [
      "increase as consumers switch away from the pricier option",
      "decrease along with coffee sales",
      "remain completely unaffected",
      "become illegal under trade law",
    ],
    correctIndex: 0,
    explanation:
      "Substitutes experience cross-effect: a price rise for one raises demand for its alternative.",
  },
  {
    id: 1441,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "easy",
    prompt:
      "A patent gives inventors the right to:",
    choices: [
      "exclude others from making, using, or selling their invention for a limited period",
      "keep inventions secret forever without disclosure",
      "copyright their marketing brochures",
      "register their company name internationally",
    ],
    correctIndex: 0,
    explanation:
      "Patents trade public disclosure of the invention for a time-limited exclusive right, typically 20 years from filing.",
  },
  {
    id: 1442,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "hard",
    prompt:
      "An AI screening tool systematically rejects qualified older applicants due to biased training data. The responsible managerial response is to:",
    choices: [
      "audit outcomes, correct the bias, and add human review before deployment decisions",
      "continue using it since software decisions feel objective",
      "delete all applicant records to hide the pattern",
      "blame applicants for weak resumes",
    ],
    correctIndex: 0,
    explanation:
      "Algorithmic discrimination violates equal opportunity principles and law; auditing, correcting, and human oversight are required safeguards.",
  },
  {
    id: 1443,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "easy",
    prompt:
      "Teamwork skills matter to employers primarily because most business results depend on:",
    choices: [
      "people coordinating effectively across roles and functions",
      "individuals working in complete isolation",
      "avoiding all shared responsibility",
      "minimizing communication between departments",
    ],
    correctIndex: 0,
    explanation:
      "Complex work spans specialties, so collaborating, sharing information, and resolving differences drive collective results.",
  },
  {
    id: 1444,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "medium",
    prompt:
      "Persuasive business messages are most effective when they:",
    choices: [
      "emphasize benefits to the audience supported by credible evidence",
      "focus exclusively on the sender’s own interests",
      "rely on pressure tactics and false urgency",
      "hide key terms until after commitment",
    ],
    correctIndex: 0,
    explanation:
      "Audience-centered persuasion shows “what’s in it for them” with proof; manipulation damages trust and often breaks consumer law.",
  },
  {
    id: 1445,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "easy",
    prompt:
      "Accountability within teams increases most when:",
    choices: [
      "roles, expectations, and consequences are clearly defined and tracked",
      "responsibilities remain vague and shared by everyone equally",
      "only the leader knows the goals",
      "meetings happen without agendas",
    ],
    correctIndex: 0,
    explanation:
      "People own what is clearly assigned and measured; ambiguity diffuses responsibility until no one acts.",
  },
  {
    id: 1446,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "hard",
    prompt:
      "A dashboard showing live sales, inventory, and service metrics supports which management activity most directly?",
    choices: [
      "Real-time monitoring and control of operations",
      "Long-term succession planning",
      "Trademark registration",
      "Employee orientation scheduling",
    ],
    correctIndex: 0,
    explanation:
      "Dashboards feed the controlling function by surfacing deviations instantly, enabling rapid corrective action.",
  },
  {
    id: 1447,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "medium",
    prompt:
      "Fixed asset turnover ratio measures:",
    choices: [
      "how efficiently a company generates sales from its property, plant, and equipment",
      "how quickly debts are repaid",
      "the percentage of revenue spent on marketing",
      "inventory accuracy rates",
    ],
    correctIndex: 0,
    explanation:
      "Sales ÷ net fixed assets shows how much revenue each dollar of plant and equipment produces — higher means better asset productivity.",
  },
  {
    id: 1448,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "medium",
    prompt:
      "Cultural ethnocentrism in international management — judging other cultures by your own standards — most directly risks:",
    choices: [
      "alienating local employees, partners, and customers",
      "improving local brand perception",
      "guaranteeing regulatory approval",
      "lowering exchange rate exposure",
    ],
    correctIndex: 0,
    explanation:
      "Ethnocentric attitudes produce tone-deaf practices abroad; cultural intelligence and localization prevent costly relationship damage.",
  },
  {
    id: 1449,
    clusterId: "business-management",
    category: "Management Functions",
    difficulty: "hard",
    prompt:
      "A firm’s strategy, structure, and controls align poorly: strategy calls for innovation, but budgets punish failed experiments. The most probable outcome is:",
    choices: [
      "employees avoid innovative projects, undermining the stated strategy",
      "innovation flourishes despite incentives",
      "structure has no effect on strategy execution",
      "controls become irrelevant to behavior",
    ],
    correctIndex: 0,
    explanation:
      "People follow measured rewards, not slogans; misaligned controls defeat strategy, so structure and incentives must reinforce goals.",
  },
  {
    id: 1450,
    clusterId: "business-management",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "Job enrichment differs from job enlargement because enrichment adds:",
    choices: [
      "greater depth — planning and decision-making responsibility — to a job",
      "more identical simple tasks at the same skill level",
      "longer shifts without added pay",
      "fewer responsibilities overall",
    ],
    correctIndex: 0,
    explanation:
      "Enrichment vertically loads jobs with autonomy and control (motivating), while enlargement merely widens task variety horizontally.",
  },
  {
    id: 1451,
    clusterId: "business-management",
    category: "Operations",
    difficulty: "medium",
    prompt:
      "Quality function deployment (QFD) helps companies:",
    choices: [
      "translate customer requirements into specific technical specifications",
      "audit financial statements quarterly",
      "forecast currency movements",
      "select board members",
    ],
    correctIndex: 0,
    explanation:
      "QFD (house of quality) converts the voice of the customer into engineering targets, ensuring products reflect what buyers value.",
  },
  {
    id: 1452,
    clusterId: "business-management",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A business’s supply curve slopes upward primarily because:",
    choices: [
      "higher prices justify producing additional units with rising marginal costs",
      "demand falls as prices rise",
      "wages fall when output expands",
      "regulators cap production levels",
    ],
    correctIndex: 0,
    explanation:
      "Rising marginal costs mean producers need higher prices to profitably supply extra units, generating the upward slope.",
  },
  {
    id: 1453,
    clusterId: "business-management",
    category: "Business Law",
    difficulty: "medium",
    prompt:
      "A sole proprietorship ends automatically upon the owner’s death because:",
    choices: [
      "the business has no legal existence separate from its owner",
      "courts dissolve all businesses upon any death",
      "creditors seize all partnerships first",
      "licenses expire monthly",
    ],
    correctIndex: 0,
    explanation:
      "With no separate legal identity, the proprietorship cannot outlive its owner; corporations and some LLCs continue independently.",
  },
  {
    id: 1454,
    clusterId: "business-management",
    category: "Ethics",
    difficulty: "easy",
    prompt:
      "Treating all job applicants consistently under the same criteria demonstrates the ethical principle of:",
    choices: [
      "fairness and justice",
      "utilitarian calculation",
      "whistleblowing",
      "greenwashing",
    ],
    correctIndex: 0,
    explanation:
      "Justice requires impartial, consistent treatment — the foundation of fair hiring, promotion, and discipline practices.",
  },
  {
    id: 1455,
    clusterId: "business-management",
    category: "Professional Development",
    difficulty: "medium",
    prompt:
      "Building “social capital” during your career refers to developing:",
    choices: [
      "relationships and goodwill you can draw on for information and support",
      "cryptocurrency holdings",
      "vacation bank balances",
      "parking privileges",
    ],
    correctIndex: 0,
    explanation:
      "Social capital — trusted networks — provides referrals, knowledge, and cooperation that formal credentials alone cannot deliver.",
  },
  {
    id: 1456,
    clusterId: "business-management",
    category: "Communication Skills",
    difficulty: "medium",
    prompt:
      "Cross-cultural business etiquette, such as exchanging business cards respectfully in Japan, matters because:",
    choices: [
      "ritual signals respect and shapes first impressions in relationship-based cultures",
      "etiquette has no commercial effect anywhere",
      "all cultures share identical customs",
      "laws mandate identical greetings worldwide",
    ],
    correctIndex: 0,
    explanation:
      "In many cultures, proper etiquette demonstrates seriousness and respect, laying groundwork for trust before deals proceed.",
  },
  {
    id: 1457,
    clusterId: "business-management",
    category: "Leadership",
    difficulty: "hard",
    prompt:
      "A leader wants both high task accomplishment and strong relationships. According to the Managerial Grid, the ideal long-term position is:",
    choices: [
      "high concern for both people and production (team management)",
      "high concern for people only",
      "high concern for production only",
      "low concern for both",
    ],
    correctIndex: 0,
    explanation:
      "Blake and Mouton’s grid identifies team management (9,9) as integrating task focus with genuine concern for people.",
  },
  {
    id: 1458,
    clusterId: "business-management",
    category: "Information Management",
    difficulty: "medium",
    prompt:
      "Records retention policies exist primarily to:",
    choices: [
      "specify how long documents are kept and when they are securely destroyed",
      "require keeping every record forever",
      "prohibit digital storage entirely",
      "publish all files publicly online",
    ],
    correctIndex: 0,
    explanation:
      "Retention schedules satisfy legal and tax requirements while limiting liability from retaining unnecessary old records.",
  },
  {
    id: 1459,
    clusterId: "business-management",
    category: "Financial Analysis",
    difficulty: "hard",
    prompt:
      "A company’s gross margin improved from 30% to 35% while operating expenses grew from 20% to 27% of sales. Net margin has:",
    choices: [
      "fallen from 10% to 8%, because expense growth outpaced gross margin gains",
      "risen from 10% to 15%",
      "remained constant at 10%",
      "become impossible to calculate",
    ],
    correctIndex: 0,
    explanation:
      "Net margin = gross margin − operating expense ratio: 35% − 27% = 8%, down from 30% − 20% = 10%.",
  },
  {
    id: 1460,
    clusterId: "business-management",
    category: "Global Business",
    difficulty: "hard",
    prompt:
      "A firm exports successfully but hesitates to invest in foreign production. The main strategic trade-off it faces is:",
    choices: [
      "exporting’s low commitment and flexibility versus foreign direct investment’s local presence and growth ceiling",
      "tariff elimination versus quota creation",
      "licensing royalties versus patent expiration",
      "embargo risk versus subsidy capture",
    ],
    correctIndex: 0,
    explanation:
      "Exporting limits capital risk but caps market control and can face trade barriers; FDI commits resources yet deepens local advantage.",
  },
];
