import type { PracticeQuestion } from "@/data/types";

// 300 questions appended 2026-08: IDs 5161-5460 across Marketing Fundamentals,
// Consumer Behavior, Market Research, Product & Brand Management, Distribution,
// Pricing, Promotion, Selling, Digital Marketing, and Economics (30 each).

export const marketingQuestions: PracticeQuestion[] = [
  {
    id: 5101,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "A beverage company decides to redesign its packaging, adjust its price, run a new ad campaign, and place the product in more stores. Together, these decisions are known as the:",
    choices: [
      "Marketing mix",
      "Product life cycle",
      "Market segmentation strategy",
      "Positioning statement",
    ],
    correctIndex: 0,
    explanation:
      "The four Ps of the marketing mix are product, price, place, and promotion. Decisions about all four together make up a company’s marketing mix.",
  },
  {
    id: 5102,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "Which of the following is one of the four Ps of the marketing mix?",
    choices: [
      "People",
      "Profit",
      "Place",
      "Planning",
    ],
    correctIndex: 2,
    explanation:
      "The four Ps are product, price, place, and promotion. Place refers to how and where the product is distributed to customers.",
  },
  {
    id: 5103,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "A smartphone is newly released, sales grow quickly, then level off for several years, and finally decline as newer models replace it. The sequence described is the:",
    choices: [
      "Marketing concept cycle",
      "Product life cycle",
      "Sales promotion calendar",
      "Distribution channel flow",
    ],
    correctIndex: 1,
    explanation:
      "The product life cycle consists of introduction, growth, maturity, and decline stages, which match the pattern described.",
  },
  {
    id: 5104,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "medium",
    prompt:
      "During which stage of the product life cycle do sales typically increase rapidly while competitors begin entering the market?",
    choices: [
      "Introduction",
      "Growth",
      "Maturity",
      "Decline",
    ],
    correctIndex: 1,
    explanation:
      "In the growth stage, consumer acceptance rises, sales climb quickly, and new competitors enter to capture the expanding market.",
  },
  {
    id: 5105,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "medium",
    prompt:
      "A business that adopts the marketing orientation bases its decisions primarily on:",
    choices: [
      "What its production equipment can efficiently make",
      "How to reduce costs below all competitors",
      "The needs and wants of its target customers",
      "The personal preferences of senior executives",
    ],
    correctIndex: 2,
    explanation:
      "A marketing orientation centers every decision on identifying and satisfying customer needs and wants better than competitors do.",
  },
  {
    id: 5106,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "medium",
    prompt:
      "Dividing a market into groups based on age, income, gender, or family size is an example of which type of segmentation?",
    choices: [
      "Geographic segmentation",
      "Psychographic segmentation",
      "Behavioral segmentation",
      "Demographic segmentation",
    ],
    correctIndex: 3,
    explanation:
      "Demographic segmentation divides the market using measurable population characteristics such as age, income, gender, and household size.",
  },
  {
    id: 5107,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "hard",
    prompt:
      "A gym targets customers by dividing its market into people who value convenience, people who want elite training, and people who seek a social atmosphere. This approach is best classified as:",
    choices: [
      "Psychographic segmentation",
      "Geographic segmentation",
      "Demographic segmentation",
      "Mass marketing",
    ],
    correctIndex: 0,
    explanation:
      "Segmenting by lifestyle, values, interests, and attitudes is psychographic segmentation, unlike demographic traits such as age or geographic traits such as region.",
  },
  {
    id: 5108,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "The specific group of consumers a company designs its product and marketing program to reach is called the:",
    choices: [
      "Target market",
      "Market share",
      "Sampling frame",
      "Distribution network",
    ],
    correctIndex: 0,
    explanation:
      "The target market is the group of consumers most likely to buy a company’s products and on whom marketing efforts are focused.",
  },
  {
    id: 5109,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "hard",
    prompt:
      "A shoe brand consistently markets itself as the durable boot ‘built for hard work.’ In consumers’ minds, the brand occupies a distinct place relative to competitors. This is known as:",
    choices: [
      "Brand equity dilution",
      "Positioning",
      "Market penetration",
      "Channel integration",
    ],
    correctIndex: 1,
    explanation:
      "Positioning is the effort to create a clear, distinctive image of a brand in the target customer’s mind relative to competing brands.",
  },
  {
    id: 5110,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "easy",
    prompt:
      "A shopper buys the same brand of toothpaste every time without comparing alternatives because past purchases have been satisfying. This behavior illustrates:",
    choices: [
      "Impulse buying",
      "Brand loyalty",
      "Extensive decision making",
      "Cognitive dissonance",
    ],
    correctIndex: 1,
    explanation:
      "Brand loyalty is a consistent preference for, and repeated purchase of, one brand regardless of competing offers.",
  },
  {
    id: 5111,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "The first stage in the consumer decision-making process is generally:",
    choices: [
      "Evaluating alternatives",
      "Making the purchase",
      "Recognizing a need or problem",
      "Searching for information",
    ],
    correctIndex: 2,
    explanation:
      "Consumers begin the buying process when they recognize a need or problem; information search, evaluation, purchase, and post-purchase evaluation follow.",
  },
  {
    id: 5112,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "After buying an expensive laptop, a customer second-guesses whether she made the right choice after seeing an ad for a rival model. This feeling is known as:",
    choices: [
      "Selective retention",
      "Cognitive dissonance",
      "Perceptual mapping",
      "Subliminal processing",
    ],
    correctIndex: 1,
    explanation:
      "Cognitive dissonance is post-purchase doubt or discomfort. Marketers reduce it with reassurance such as warranties, follow-up contact, and strong support.",
  },
  {
    id: 5113,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "A consumer who buys a luxury handbag mainly because it signals status and fits her self-image is being influenced primarily by which factor?",
    choices: [
      "Economic conditions",
      "Government regulation",
      "Social and psychological factors",
      "Physical distribution costs",
    ],
    correctIndex: 2,
    explanation:
      "Motives tied to self-image, status, and social influence fall under the social and psychological factors that shape buying behavior.",
  },
  {
    id: 5114,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "A cereal brand places its product at eye level and uses bright packaging so shoppers notice it among dozens of options. This tactic relates most directly to which consumer behavior concept?",
    choices: [
      "Perception",
      "Post-purchase evaluation",
      "Opportunity cost",
      "Channel conflict",
    ],
    correctIndex: 0,
    explanation:
      "Perception is the process by which consumers notice and interpret stimuli. Placement and packaging help a product break through clutter and gain attention.",
  },
  {
    id: 5115,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "hard",
    prompt:
      "A coffee shop introduces a frequent-buyer rewards program. From a consumer behavior standpoint, the primary purpose of the program is to:",
    choices: [
      "Increase the rate of first-time trial only",
      "Reduce the need for any market research",
      "Shift buyers from routine decision making to extensive decision making",
      "Encourage repeat purchases and strengthen brand loyalty",
    ],
    correctIndex: 3,
    explanation:
      "Loyalty programs reward repeat behavior, raising switching costs and reinforcing loyalty, which stabilizes long-term revenue.",
  },
  {
    id: 5116,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "hard",
    prompt:
      "Marketers studying reference groups are examining how a consumer’s buying decisions are affected by:",
    choices: [
      "The wholesale cost structure of suppliers",
      "Groups the consumer identifies with or aspires to belong to",
      "Seasonal changes in retail inventory levels",
      "The legal requirements for product labeling",
    ],
    correctIndex: 1,
    explanation:
      "Reference groups are the family, friends, celebrities, or peer groups whose opinions and behaviors influence an individual’s attitudes and purchases.",
  },
  {
    id: 5117,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "easy",
    prompt:
      "An unplanned, spur-of-the-moment candy purchase at a checkout counter is best described as:",
    choices: [
      "An impulse purchase",
      "A negotiated transaction",
      "A planned major purchase",
      "A business-to-business sale",
    ],
    correctIndex: 0,
    explanation:
      "Impulse purchases are made with little planning or deliberation, often triggered by product placement near checkout areas.",
  },
  {
    id: 5118,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "Segmenting consumers into light users, heavy users, and non-users of a product is an example of which segmentation base?",
    choices: [
      "Geographic",
      "Demographic",
      "Behavioral",
      "Psychographic",
    ],
    correctIndex: 2,
    explanation:
      "Behavioral segmentation groups consumers by their usage rate, purchase occasions, and relationship with the product.",
  },
  {
    id: 5119,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "easy",
    prompt:
      "A marketer reads government census reports and industry publications to estimate market size. This is an example of gathering:",
    choices: [
      "Primary data",
      "Secondary data",
      "Experimental data",
      "Observational data",
    ],
    correctIndex: 1,
    explanation:
      "Secondary data already exists because it was collected for other purposes, such as census statistics, trade journals, and industry studies.",
  },
  {
    id: 5120,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "easy",
    prompt:
      "Which research method involves asking a small group of target customers open-ended questions in a guided discussion?",
    choices: [
      "Focus group",
      "Census survey",
      "Data mining",
      "Test marketing",
    ],
    correctIndex: 0,
    explanation:
      "A focus group brings together a small number of participants for a moderated discussion that reveals attitudes, perceptions, and motivations in depth.",
  },
  {
    id: 5121,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "Before launching a new snack flavor nationwide, a company sells it in three test cities and tracks results. This step is best described as:",
    choices: [
      "Secondary data analysis",
      "Test marketing",
      "Statistical sampling",
      "Benchmarking",
    ],
    correctIndex: 1,
    explanation:
      "Test marketing introduces a product to a limited geographic area to measure real-world performance before a full-scale launch.",
  },
  {
    id: 5122,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "A key advantage of surveys over focus groups is that surveys generally:",
    choices: [
      "Provide richer qualitative discussion",
      "Allow responses to be collected from larger samples more quickly and cheaply",
      "Eliminate the need for any follow-up research",
      "Guarantee unbiased wording of questions",
    ],
    correctIndex: 1,
    explanation:
      "Surveys can reach large samples efficiently and produce quantifiable results, whereas focus groups offer depth but from very few participants.",
  },
  {
    id: 5123,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "A researcher watches how shoppers move through a store and which displays stop them, recording behavior directly rather than asking questions. This method is called:",
    choices: [
      "Observation",
      "Mail survey",
      "Literature review",
      "Panel interview",
    ],
    correctIndex: 0,
    explanation:
      "Observational research collects data by watching actual behavior, avoiding errors that occur when people misreport what they do.",
  },
  {
    id: 5124,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "hard",
    prompt:
      "A marketing manager wants fresh data on why customers stopped shopping at his store. Which source would be considered primary data?",
    choices: [
      "Last year’s industry association report",
      "Exit interviews his team conducts with departing customers this week",
      "Published competitor sales figures",
      "A purchased database of regional demographics",
    ],
    correctIndex: 1,
    explanation:
      "Primary data is collected firsthand for the current specific purpose. Exit interviews conducted now by the manager’s own team fit that definition.",
  },
  {
    id: 5125,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "easy",
    prompt:
      "In market research, a hypothesis is best defined as:",
    choices: [
      "A proven conclusion about the market",
      " A tentative statement that can be tested with evidence",
      "The final recommendation to management",
      "A list of survey respondents",
    ],
    correctIndex: 1,
    explanation:
      "A hypothesis is an unproven, testable prediction that guides the design of the research and is confirmed or rejected by the data.",
  },
  {
    id: 5126,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "easy",
    prompt:
      "A retailer marks down winter coats in March to clear inventory. This pricing strategy is best described as:",
    choices: [
      "Prestige pricing",
      "Markdown pricing",
      "Price lining",
      "Bundling",
    ],
    correctIndex: 1,
    explanation:
      "A markdown is a reduction from the original selling price, commonly used at season’s end to move slow inventory quickly.",
  },
  {
    id: 5127,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "easy",
    prompt:
      "Setting a price at $9.99 instead of $10.00 is an example of:",
    choices: [
      "Odd-even, or psychological, pricing",
      "Cost-plus pricing",
      "Skimming pricing",
      "Geographic pricing",
    ],
    correctIndex: 0,
    explanation:
      "Prices just below whole numbers appeal to customer psychology, making the item feel meaningfully cheaper even though the difference is one cent.",
  },
  {
    id: 5128,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "A store sells printers below cost but earns profit on replacement ink cartridges. The printer is acting as a:",
    choices: [
      "Loss leader",
      "Private label",
      "Markup anchor",
      "Premium good",
    ],
    correctIndex: 0,
    explanation:
      "A loss leader is priced below cost to attract customers who then purchase additional, profitable items such as ink supplies.",
  },
  {
    id: 5129,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "If a retailer pays $40 for a jacket and applies a markup of 50% on cost, the selling price will be:",
    choices: ["$50", "$60", "$80", "$90"],
    correctIndex: 1,
    explanation:
      "Markup on cost adds 50% of $40, which is $20, to the $40 cost, producing a selling price of $60.",
  },
  {
    id: 5130,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "A tech firm launches an innovative gadget at a high price, then lowers the price over time as competition grows. This strategy is called:",
    choices: [
      "Penetration pricing",
      "Price skimming",
      "Loss-leader pricing",
      "Bundle pricing",
    ],
    correctIndex: 1,
    explanation:
      "Skimming sets an initially high price to capture early adopters’ willingness to pay, then steps the price down as the market broadens.",
  },
  {
    id: 5131,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "hard",
    prompt:
      "A company enters a crowded market with a deliberately low introductory price to win market share quickly. The main risk of this penetration pricing strategy is that:",
    choices: [
      "Early adopters will pay too little attention to the brand",
      "Customers may resist later price increases, squeezing profit margins",
      "It always triggers immediate legal penalties",
      "It prevents the firm from ever gaining distribution",
    ],
    correctIndex: 1,
    explanation:
      "Penetration pricing builds volume fast, but customers anchored to the low price may defect when prices rise, leaving thin margins.",
  },
  {
    id: 5132,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "hard",
    prompt:
      "A boutique prices handmade scarves high precisely because wealthy customers equate higher price with higher quality. This is an example of:",
    choices: [
      "Penetration pricing",
      "Loss-leader pricing",
      "Prestige pricing",
      "Promotional pricing",
    ],
    correctIndex: 2,
    explanation:
      "Prestige pricing uses an intentionally high price to signal quality and exclusivity to customers who associate price with value.",
  },
  {
    id: 5133,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "The difference between a product’s selling price and its cost is known as:",
    choices: [
      "Turnover",
      "Margin",
      "Break-even point",
      "Fixed cost",
    ],
    correctIndex: 1,
    explanation:
      "Gross margin is the amount remaining after subtracting the cost of goods sold from the selling price; it contributes toward expenses and profit.",
  },
  {
    id: 5134,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "A local newspaper writes a favorable article about a restaurant’s charity event without payment from the restaurant. This form of promotion is called:",
    choices: [
      "Advertising",
      "Personal selling",
      "Publicity",
      "Sales promotion",
    ],
    correctIndex: 2,
    explanation:
      "Publicity is unpaid media coverage. Unlike advertising, the company does not pay for the space and does not fully control the message.",
  },
  {
    id: 5135,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "easy",
    prompt:
      "Coupons, contests, and buy-one-get-one-free offers are examples of:",
    choices: [
      "Sales promotion",
      "Public relations",
      "Viral marketing",
      "Direct mailing lists",
    ],
    correctIndex: 0,
    explanation:
      "Sales promotions are short-term incentives designed to stimulate immediate purchases or boost sales within a limited period.",
  },
  {
    id: 5136,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "The main difference between advertising and publicity is that advertising:",
    choices: [
      "Reaches fewer people than publicity",
      "Is paid for by the sponsor, giving it greater message control",
      "Cannot be used to build brand image",
      "Is always less credible than news coverage",
    ],
    correctIndex: 1,
    explanation:
      "Advertising is paid, sponsored communication, so the advertiser controls content, timing, and placement; publicity is earned and less controlled.",
  },
  {
    id: 5137,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "A promotional mix element that relies on direct, face-to-face interaction with prospective buyers is:",
    choices: [
      "Publicity",
      "Advertising",
      "Personal selling",
      "Sales promotion",
    ],
    correctIndex: 2,
    explanation:
      "Personal selling involves direct contact between a salesperson and a prospect, allowing customized presentations and immediate feedback.",
  },
  {
    id: 5138,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "hard",
    prompt:
      "A software company runs ads, offers free trials, sends e-mail newsletters, and has reps call qualified leads, coordinating all channels around one consistent message. This integrated approach is known as:",
    choices: [
      "Integrated marketing communications",
      "Horizontal integration",
      "Selective distribution",
      "Mass customization",
    ],
    correctIndex: 0,
    explanation:
      "Integrated marketing communications coordinates all promotional tools and channels so they deliver a clear, consistent message to the customer.",
  },
  {
    id: 5139,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "easy",
    prompt:
      "A billboard along a highway promoting a hotel chain is best classified as which type of advertising medium?",
    choices: [
      "Out-of-home media",
      "Broadcast media",
      "Direct mail",
      "Specialty media",
    ],
    correctIndex: 0,
    explanation:
      "Billboards are out-of-home media, reaching consumers in public spaces outside their homes rather than through broadcast or mail channels.",
  },
  {
    id: 5140,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "hard",
    prompt:
      "During the introduction stage of a new product, promotional efforts should focus primarily on:",
    choices: [
      "Reminding loyal customers to repurchase",
      "Building awareness and educating the market about the product",
      "Comparing prices against mature competitors",
      "Reducing promotional spending to protect margins",
    ],
    correctIndex: 1,
    explanation:
      "Because few consumers know the new product exists, early promotion emphasizes creating awareness and providing product information.",
  },
  {
    id: 5141,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "easy",
    prompt:
      "A salesperson searches company records and online sources to identify potential new business customers. This activity is known as:",
    choices: [
      "Prospecting",
      "Closing",
      "Approaching",
      "Following up",
    ],
    correctIndex: 0,
    explanation:
      "Prospecting is the process of locating and qualifying potential customers, usually the first step in the sales process.",
  },
  {
    id: 5142,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "easy",
    prompt:
      "When a salesperson meets a prospect for the first time and works to create a positive impression, this step is called the:",
    choices: [
      "Approach",
      "Demonstration",
      "Close",
      "Objection handling",
    ],
    correctIndex: 0,
    explanation:
      "The approach is the opening contact with the prospect, when rapport is established and the salesperson begins building trust.",
  },
  {
    id: 5143,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "A salesperson asks, ‘Would you prefer delivery Tuesday or Thursday?’ This technique is best described as:",
    choices: [
      "The alternative close",
      "Cold canvassing",
      "The summary-of-the-benefits approach",
      "Qualifying the prospect",
    ],
    correctIndex: 0,
    explanation:
      "The alternative close assumes the sale by offering a choice between two positive outcomes, moving the buyer straight to a purchasing detail.",
  },
  {
    id: 5144,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "When a customer says the price seems too high, the salesperson explains financing options and the product’s durability. The salesperson is:",
    choices: [
      "Handling the objection",
      "Prospecting",
      "Preparing the quota report",
      "Terminating the presentation",
    ],
    correctIndex: 0,
    explanation:
      "Handling objections means responding to a prospect’s concerns with information that resolves doubts and keeps the sale moving forward.",
  },
  {
    id: 5145,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "After completing a sale, a salesperson calls the customer a week later to confirm satisfaction and answer questions. This step is called:",
    choices: [
      "Follow-up",
      "Preapproach",
      "Feature dumping",
      "Trade loading",
    ],
    correctIndex: 0,
    explanation:
      "Follow-up occurs after the sale to confirm satisfaction, resolve problems, and build the relationship for future business.",
  },
  {
    id: 5146,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "hard",
    prompt:
      "A sales rep learns everything possible about a prospect’s business needs before the first meeting. This preparation step is called the:",
    choices: [
      "Preapproach",
      "Trial close",
      "Referral close",
      "Service recovery",
    ],
    correctIndex: 0,
    explanation:
      "The preapproach is the research phase in which the salesperson gathers information about the prospect to tailor the presentation effectively.",
  },
  {
    id: 5147,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "easy",
    prompt:
      "Effective salespeople are usually trained to emphasize a product’s benefits rather than its features because benefits:",
    choices: [
      "Are easier for manufacturers to produce",
      "Explain how the features satisfy the customer’s specific needs",
      "Require no knowledge of the customer",
      "Are identical across all competing brands",
    ],
    correctIndex: 1,
    explanation:
      "Features describe what a product has; benefits translate those features into value for the individual customer, which drives buying decisions.",
  },
  {
    id: 5148,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "easy",
    prompt:
      "Of the 2,000 visitors to an online store last week, 60 made a purchase. The site’s conversion rate was:",
    choices: ["0.3%", "3%", "6%", "30%"],
    correctIndex: 1,
    explanation:
      "Conversion rate equals conversions divided by visitors: 60 ÷ 2,000 = 0.03, or 3% of visitors completed a purchase.",
  },
  {
    id: 5149,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "An e-mail campaign records 500 opens out of 10,000 delivered messages. The open rate is:",
    choices: ["0.05%", "5%", "20%", "50%"],
    correctIndex: 1,
    explanation:
      "Open rate equals opens divided by delivered messages: 500 ÷ 10,000 = 0.05, or 5%.",
  },
  {
    id: 5150,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "On social media, likes, shares, comments, and saves divided by total followers or impressions measure the account’s:",
    choices: [
      "Engagement rate",
      "Inventory turnover",
      "Click-through depth",
      "Net promoter score",
    ],
    correctIndex: 0,
    explanation:
      "Engagement rate captures how actively audiences interact with content, calculated from interactions such as likes, comments, and shares.",
  },
  {
    id: 5151,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "hard",
    prompt:
      "A brand partners with a popular content creator who posts authentic product reviews to the creator’s own audience. This digital tactic is best described as:",
    choices: [
      "Influencer marketing",
      "Search engine optimization",
      "Retargeting",
      "Affiliate warehousing",
    ],
    correctIndex: 0,
    explanation:
      "Influencer marketing leverages individuals with engaged followings to promote products in a way that feels credible to their audiences.",
  },
  {
    id: 5152,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "easy",
    prompt:
      "Improving website content and structure so pages rank higher in organic search results is known as:",
    choices: [
      "Pay-per-click bidding",
      "Search engine optimization",
      "A/B testing",
      "Cookie retargeting",
    ],
    correctIndex: 1,
    explanation:
      "Search engine optimization, or SEO, raises unpaid, organic rankings through relevant content, keywords, and site quality improvements.",
  },
  {
    id: 5153,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "hard",
    prompt:
      "A company uses CRM software primarily to:",
    choices: [
      "Automate factory production schedules",
      "Store customer data and manage interactions to strengthen relationships over time",
      "Set statutory tax rates on imported goods",
      "Design warehouse layouts for faster shipping",
    ],
    correctIndex: 1,
    explanation:
      "Customer relationship management systems centralize customer information so businesses can personalize service, target offers, and build loyalty.",
  },
  {
    id: 5154,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "According to the law of demand, if all other factors stay constant, when the price of a good rises the quantity demanded will:",
    choices: [
      "Rise",
      "Fall",
      "Stay exactly the same",
      "Become impossible to measure",
    ],
    correctIndex: 1,
    explanation:
      "The law of demand states that price and quantity demanded move in opposite directions, so higher prices lead to lower quantity demanded.",
  },
  {
    id: 5155,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "A frost destroys half the orange crop, sharply reducing supply while demand stays steady. The most likely result is:",
    choices: [
      "Lower equilibrium price and higher quantity",
      "Higher equilibrium price and lower quantity",
      "Higher price and higher quantity",
      "No change in either price or quantity",
    ],
    correctIndex: 1,
    explanation:
      "With reduced supply and unchanged demand, scarcity pushes the market price up and the traded quantity down toward a new equilibrium.",
  },
  {
    id: 5156,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Demand for a necessity like table salt is generally less responsive to price changes than demand for luxury cruises. Economists say salt demand is relatively:",
    choices: [
      "Elastic",
      "Inelastic",
      "Derived",
      "Inflated",
    ],
    correctIndex: 1,
    explanation:
      "Necessities have few substitutes and are bought regardless of modest price changes, making their demand inelastic compared with luxuries.",
  },
  {
    id: 5157,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A coffee shop raises prices 10% and loses only 2% of its customers. Qualitatively, demand for its coffee is best characterized as:",
    choices: [
      "Highly elastic, since quantity changed proportionally more than price",
      "Unit elastic, since revenue stayed exactly the same",
      "Relatively inelastic, since quantity changed proportionally less than price",
      "Perfectly elastic, since no customers remained",
    ],
    correctIndex: 2,
    explanation:
      "When the percentage change in quantity demanded is smaller than the percentage change in price, demand is relatively inelastic.",
  },
  {
    id: 5158,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "If consumer incomes rise and demand for a product increases as a result, the product is classified as:",
    choices: [
      "An inferior good",
      "A normal good",
      "A substitute good",
      "A complementary good",
    ],
    correctIndex: 1,
    explanation:
      "Normal goods see increased demand when incomes rise; inferior goods see demand fall as consumers shift to preferred alternatives.",
  },
  {
    id: 5159,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A sharp rise in gasoline prices reduces demand for large sport utility vehicles. Gasoline and SUVs illustrate the concept of:",
    choices: [
      "Complementary goods",
      "Substitute goods",
      "Independent goods",
      "Luxury goods",
    ],
    correctIndex: 0,
    explanation:
      "Complements are goods used together; when the price of one rises, demand for the related good falls, as with fuel and fuel-hungry vehicles.",
  },
  {
    id: 5160,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "At the equilibrium price in a competitive market:",
    choices: [
      "Quantity demanded exceeds quantity supplied",
      "Quantity supplied exceeds quantity demanded",
      "Quantity demanded equals quantity supplied",
      "Suppliers earn zero revenue",
    ],
    correctIndex: 2,
    explanation:
      "Equilibrium is reached where the quantity buyers want equals the quantity sellers offer, clearing the market with no shortage or surplus.",
    },
  {
    id: 5161,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "Marketing is best defined as the process of:",
    choices: [
      "Manufacturing products at the lowest possible cost",
      "Creating, communicating, and delivering value to satisfy customer needs profitably",
      "Selling as many units as possible regardless of customer fit",
      "Setting prices higher than all competitors",
    ],
    correctIndex: 1,
    explanation:
      "Marketing centers on understanding customer needs and creating, communicating, and delivering offerings that provide value while meeting business goals.",
  },
  {
    id: 5162,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "Which of the following is NOT one of the four Ps of the marketing mix?",
    choices: ["Product", "Process", "Price", "Promotion"],
    correctIndex: 1,
    explanation:
      "The four Ps are product, price, place, and promotion. Process is part of the extended services marketing mix, not the classic four Ps.",
  },
  {
    id: 5163,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "A company’s sales divided by total industry sales for the same period measures its:",
    choices: ["Market share", "Gross margin", "Break-even volume", "Return on assets"],
    correctIndex: 0,
    explanation:
      "Market share is the percentage of total industry sales captured by one company, a key indicator of competitive standing.",
  },
  {
    id: 5164,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "A firm that sells steel coils to auto manufacturers operates primarily in which type of market?",
    choices: [
      "Consumer market",
      "Business-to-business market",
      "Nonprofit market",
      "Government auction market",
    ],
    correctIndex: 1,
    explanation:
      "Selling goods to other businesses for use in production or operations is business-to-business (industrial) marketing rather than consumer marketing.",
  },
  {
    id: 5165,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "The value a product provides by being available where and when customers want it is called:",
    choices: [
      "Form utility",
      "Possession utility",
      "Place and time utility",
      "Information utility",
    ],
    correctIndex: 2,
    explanation:
      "Place utility comes from making products available at convenient locations, and time utility from having them available when customers want them.",
  },
  {
    id: 5166,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "A toy company divides its market into infants, toddlers, school-age children, and tweens. This is an example of segmenting by:",
    choices: ["Age", "Income", "Lifestyle", "Usage rate"],
    correctIndex: 0,
    explanation:
      "Grouping consumers by life stage or age bracket is demographic segmentation because age is a measurable population characteristic.",
  },
  {
    id: 5167,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "A snow-blower manufacturer advertises heavily only in northern states. This reflects which segmentation base?",
    choices: ["Geographic", "Demographic", "Behavioral", "Psychographic"],
    correctIndex: 0,
    explanation:
      "Segmenting by region or climate is geographic segmentation, targeting customers based on where they live.",
  },
  {
    id: 5168,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "Targeting one small, well-defined group of customers with specialized products is known as:",
    choices: ["Mass marketing", "Niche marketing", "Undifferentiated marketing", "Telemarketing"],
    correctIndex: 1,
    explanation:
      "Niche marketing concentrates on a narrow, specific segment, allowing the firm to serve that group better than broad-market competitors.",
  },
  {
    id: 5169,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "The set of benefits a brand promises to deliver to customers is called its:",
    choices: ["Value proposition", "Distribution channel", "Sales quota", "Cost structure"],
    correctIndex: 0,
    explanation:
      "A value proposition summarizes why customers should buy the brand — the benefits and value it promises relative to alternatives.",
  },
  {
    id: 5170,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "In a SWOT analysis, strengths and weaknesses are:",
    choices: [
      "External factors outside the company’s control",
      "Internal factors within the company",
      "Strictly financial measurements",
      "Always related to competitors only",
    ],
    correctIndex: 1,
    explanation:
      "Strengths and weaknesses are internal to the organization, while opportunities and threats come from the external environment.",
  },
  {
    id: 5171,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "Selling one product to the entire market with a single marketing program is called:",
    choices: [
      "Differentiated marketing",
      "Concentrated marketing",
      "Undifferentiated (mass) marketing",
      "Micromarketing",
    ],
    correctIndex: 2,
    explanation:
      "Undifferentiated marketing ignores segment differences and offers one product and message to the whole market.",
  },
  {
    id: 5172,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "easy",
    prompt:
      "A written document that outlines a company’s marketing objectives, strategies, and tactics for a specific period is a:",
    choices: ["Marketing plan", "Balance sheet", "Employment contract", "Product warranty"],
    correctIndex: 0,
    explanation:
      "The marketing plan guides marketing activities by stating objectives, target markets, strategies, budgets, and timelines.",
  },
  {
    id: 5173,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "medium",
    prompt:
      "A running-shoe company notices that some buyers want racing performance while others want everyday comfort, so it develops two separate product lines with distinct ads for each. This strategy is:",
    choices: [
      "Differentiated (multi-segment) marketing",
      "Undifferentiated marketing",
      "Mass customization of one segment",
      "Vertical integration",
    ],
    correctIndex: 0,
    explanation:
      "Developing separate offerings and messages for different segments is differentiated marketing, which can capture more total demand than one-size-fits-all.",
  },
  {
    id: 5174,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "medium",
    prompt:
      "‘For busy parents who need healthy meals fast, Brand X frozen dinners offer restaurant-quality taste in five minutes.’ This sentence is best described as a:",
    choices: [
      "Positioning statement",
      "Mission-critical budget forecast",
      "Channel strategy memo",
      "Production schedule",
    ],
    correctIndex: 0,
    explanation:
      "A positioning statement identifies the target customer, the category, and the distinctive benefit that sets the brand apart.",
  },
  {
    id: 5175,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "medium",
    prompt:
      "A bank surveys customers before designing a new mobile app so the features match what users actually want. This reflects which business philosophy?",
    choices: [
      "Production orientation",
      "Sales orientation",
      "Marketing concept",
      "Insider orientation",
    ],
    correctIndex: 2,
    explanation:
      "The marketing concept holds that firms should first identify customer needs, then satisfy them better than competitors while earning a profit.",
  },
  {
    id: 5176,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "medium",
    prompt:
      "A rising trend of consumers preferring plant-based foods would be classified in a SWOT analysis as a(n):",
    choices: ["Strength", "Weakness", "Opportunity", "Threat"],
    correctIndex: 2,
    explanation:
      "An external trend a firm could exploit to grow is an opportunity; threats are external trends that could harm the firm.",
  },
  {
    id: 5177,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "medium",
    prompt:
      "Two coffee shops sell similar drinks at similar prices, but one wins loyal customers by offering baristas who remember names and orders. Its advantage is based on:",
    choices: [
      "Cost leadership through scale",
      "Superior service differentiation",
      "Regulatory protection",
      "Supplier exclusivity contracts",
    ],
    correctIndex: 1,
    explanation:
      "When products and prices are comparable, competing on personalized service is service differentiation — a sustainable edge when rivals cannot easily copy it.",
  },
  {
    id: 5178,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "medium",
    prompt:
      "Which situation best illustrates possession utility?",
    choices: [
      "A store offers financing so a customer can take home a sofa today",
      "A factory improves fabric quality during production",
      "A warehouse stocks coats before winter arrives",
      "A retailer opens a branch near a new subdivision",
    ],
    correctIndex: 0,
    explanation:
      "Possession utility is created by transferring ownership through sales, financing, or payment options that let customers obtain the product.",
  },
  {
    id: 5179,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "medium",
    prompt:
      "A software firm sells accounting programs directly to corporations’ finance departments. Compared with consumer marketing, this firm should expect:",
    choices: [
      "Many more, smaller transactions",
      "Fewer, larger transactions with longer decision cycles",
      "No need for personal selling",
      "Decisions made purely on impulse",
    ],
    correctIndex: 1,
    explanation:
      "Business markets typically involve fewer but larger purchases, multiple decision makers, and lengthy formal buying processes.",
  },
  {
    id: 5180,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "medium",
    prompt:
      "A furniture maker begins offering customizable fabrics and finishes chosen online by each buyer. This move toward tailoring products to individual customers is known as:",
    choices: [
      "Mass customization",
      "Standardization",
      "Channel consolidation",
      "Price bundling",
    ],
    correctIndex: 0,
    explanation:
      "Mass customization uses flexible production to create individually tailored products at near mass-production cost levels.",
  },
  {
    id: 5181,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "medium",
    prompt:
      "For a segment to be worth targeting, it must be large enough to be profitable. Marketers describe such a segment as:",
    choices: ["Substantial", "Reachable", "Homogeneous", "Durable"],
    correctIndex: 0,
    explanation:
      "Effective segments must be substantial (big enough to profit), measurable, accessible, differentiable, and actionable.",
  },
  {
    id: 5182,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "medium",
    prompt:
      "A new competitor opens across the street from an independent bookstore. In a SWOT analysis, this event is classified as a:",
    choices: ["Weakness", "Threat", "Strength", "Opportunity"],
    correctIndex: 1,
    explanation:
      "A new competitor is an external factor that could reduce the store’s sales, making it a threat rather than an internal weakness.",
  },
  {
    id: 5183,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "hard",
    prompt:
      "A luxury watch brand known for tradition wants to attract younger buyers without alienating loyal older customers. The most strategically sound approach is to:",
    choices: [
      "Abandon heritage branding entirely and relaunch as a youth brand",
      "Introduce a distinct sub-brand line marketed to younger consumers while preserving the flagship image",
      "Cut prices sharply to appeal to younger budgets",
      "Stop advertising to existing customers to force brand turnover",
    ],
    correctIndex: 1,
    explanation:
      "A sub-brand lets the firm reach a new segment without diluting the equity of the established flagship brand, unlike price cuts or a full relaunch.",
  },
  {
    id: 5184,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "hard",
    prompt:
      "Ranking the steps of target marketing in order, the correct sequence is:",
    choices: [
      "Segment the market, select target segments, position the brand",
      "Position the brand, segment the market, select targets",
      "Select targets, position the brand, segment the market",
      "Select targets, segment the market, position the brand",
    ],
    correctIndex: 0,
    explanation:
      "STP stands for segmentation, targeting, then positioning: divide the market, choose the best segments, then craft the brand’s place in customers’ minds.",
  },
  {
    id: 5185,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "hard",
    prompt:
      "A cereal maker discovers two segments: health-conscious adults and convenience-seeking parents. Its current product appeals weakly to both. The best strategic response is to:",
    choices: [
      "Keep the single product and increase ad spending",
      "Choose the more attractive segment and redesign the offering specifically for it",
      "Split the budget evenly without changing anything else",
      "Exit the cereal industry immediately",
    ],
    correctIndex: 1,
    explanation:
      "When an offering fits no segment well, concentrating resources on the strongest segment and tailoring the product beats spreading effort thinly across both.",
  },
  {
    id: 5186,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "hard",
    prompt:
      "New privacy laws restrict how apps collect user data. For a digital advertiser, this change belongs to which marketing environment factor?",
    choices: [
      "Political/legal environment",
      "Competitive environment",
      "Technological environment only",
      "Internal environment",
    ],
    correctIndex: 0,
    explanation:
      "Laws and government regulation are political-legal environmental forces that shape what marketing practices are permitted.",
  },
  {
    id: 5187,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "hard",
    prompt:
      "Customers perceive Brand A as identical to cheaper rivals, yet it charges 20% more. Sales are falling. The root problem is most likely:",
    choices: [
      "Insufficient distribution coverage",
      "A failure to communicate meaningful differentiation that justifies the premium price",
      "Too much market research spending",
      "Excessive use of personal selling",
    ],
    correctIndex: 1,
    explanation:
      "Premium pricing requires perceived differentiation. When buyers see parity, the price-value relationship fails and sales erode.",
  },
  {
    id: 5188,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "hard",
    prompt:
      "A sporting-goods chain analyzes industry reports and finds pickleball equipment sales growing 30% annually while tennis gear stagnates. Shifting shelf space toward pickleball is an example of acting on:",
    choices: [
      "A market opportunity identified through environmental scanning",
      "An internal weakness revealed by auditing",
      "A promotional tactic within the maturity stage",
      "A channel conflict resolution",
    ],
    correctIndex: 0,
    explanation:
      "Environmental scanning detects external trends; reallocating resources toward a fast-growing category exploits a market opportunity.",
  },
  {
    id: 5189,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "hard",
    prompt:
      "A company labels its bottles ‘eco-friendly’ although the packaging is not recyclable. Besides legal risk, the greatest marketing danger is:",
    choices: [
      "Losing shelf space to private labels",
      "Damaging brand trust if consumers discover the misleading claim",
      "Paying too much for raw materials",
      "Over-segmenting its target market",
    ],
    correctIndex: 1,
    explanation:
      "Greenwashing destroys credibility once exposed; trust is difficult to rebuild and affects all future claims the brand makes.",
  },
  {
    id: 5190,
    clusterId: "marketing",
    category: "Marketing Fundamentals",
    difficulty: "hard",
    prompt:
      "A regional airline finds its frequent-business-traveler segment is highly profitable but shrinking, while leisure travel grows rapidly. The most balanced strategic response is to:",
    choices: [
      "Ignore leisure travelers and defend the shrinking segment only",
      "Maintain service for business travelers while developing offerings targeted at the growing leisure segment",
      "Eliminate business-class amenities immediately",
      "Switch entirely to charter flights",
    ],
    correctIndex: 1,
    explanation:
      "Sound portfolio strategy defends profitable core segments while investing in growth segments, avoiding overdependence on a declining base.",
  },
  {
    id: 5191,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "easy",
    prompt:
      "The stages of the consumer decision-making process, in order, are:",
    choices: [
      "Need recognition, information search, evaluation of alternatives, purchase, post-purchase behavior",
      "Purchase, need recognition, evaluation, search, follow-up",
      "Information search, purchase, need recognition, evaluation, loyalty",
      "Evaluation, purchase, search, need recognition, satisfaction",
    ],
    correctIndex: 0,
    explanation:
      "Consumers recognize a need, search for information, evaluate alternatives, buy, and then evaluate the purchase afterward.",
  },
  {
    id: 5192,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "easy",
    prompt:
      "Motivation, perception, learning, attitudes, and personality are all classified as which type of influence on buying behavior?",
    choices: [
      "Psychological influences",
      "Economic influences",
      "Technological influences",
      "Legal influences",
    ],
    correctIndex: 0,
    explanation:
      "These internal mental factors are psychological influences that shape how consumers think, feel, and act toward products.",
  },
  {
    id: 5193,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "easy",
    prompt:
      "A consumer’s family, friends, coworkers, and social media communities affect purchases as:",
    choices: [
      "Social influences",
      "Situational influences",
      "Physiological influences",
      "Distribution influences",
    ],
    correctIndex: 0,
    explanation:
      "Groups and relationships that shape a buyer’s preferences are social influences on consumer behavior.",
  },
  {
    id: 5194,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "easy",
    prompt:
      "Routine purchases such as toothpaste or gasoline typically involve which level of decision making?",
    choices: [
      "Extensive decision making",
      "Limited decision making",
      "Routinized (habitual) response behavior",
      "Joint organizational decision making",
    ],
    correctIndex: 2,
    explanation:
      "Low-cost, familiar products bought regularly require little thought — routinized response behavior.",
  },
  {
    id: 5195,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "easy",
    prompt:
      "The tendency to remember information that supports existing beliefs and forget the rest is called:",
    choices: [
      "Selective retention",
      "Subliminal perception",
      "Operant conditioning",
      "Market saturation",
    ],
    correctIndex: 0,
    explanation:
      "Selective retention means consumers recall messages consistent with their attitudes and filter out conflicting ones.",
  },
  {
    id: 5196,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "easy",
    prompt:
      "In Maslow’s hierarchy, which need level motivates a consumer to buy a home security system primarily for protection?",
    choices: [
      "Esteem needs",
      "Safety needs",
      "Self-actualization needs",
      "Social needs",
    ],
    correctIndex: 1,
    explanation:
      "Security and protection are safety needs, the second tier of Maslow’s hierarchy, satisfied by products like alarms and insurance.",
  },
  {
    id: 5197,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "easy",
    prompt:
      "A lasting evaluation — good or bad — of a person, object, or idea that guides buying is called a(n):",
    choices: ["Attitude", "Perception", "Motive", "Role"],
    correctIndex: 0,
    explanation:
      "An attitude is a relatively stable evaluation that predisposes consumers to respond favorably or unfavorably to brands.",
  },
  {
    id: 5198,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "A student researching laptops reads expert reviews, compares specs online, and asks friends before choosing. His extensive information search suggests he perceives the purchase as:",
    choices: [
      "Low-involvement and low-risk",
      "High-involvement with perceived risk",
      "Purely habitual",
      "An impulse decision",
    ],
    correctIndex: 1,
    explanation:
      "Consumers invest more search effort when a purchase is expensive, infrequent, or risky — hallmarks of high-involvement decisions.",
  },
  {
    id: 5199,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "A car dealer sends new owners a thank-you card and a free first service. The primary behavioral goal is to:",
    choices: [
      "Increase cognitive dissonance",
      "Reduce cognitive dissonance and build post-purchase satisfaction",
      "Accelerate the information-search stage",
      "Shift the customer to impulse buying",
    ],
    correctIndex: 1,
    explanation:
      "Post-purchase reassurance reduces buyer’s remorse (cognitive dissonance) and increases repeat purchase and referrals.",
  },
  {
    id: 5200,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "A teen buys sneakers because his favorite athlete endorses them. This illustrates the influence of:",
    choices: [
      "A reference group",
      "A government regulation",
      "A channel intermediary",
      "An economic forecast",
    ],
    correctIndex: 0,
    explanation:
      "Reference groups, including aspirational figures like athletes, shape consumers’ attitudes and brand choices.",
  },
  {
    id: 5201,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "Two shoppers see the same store display, but only one notices it because she is actively shopping for that product type. This difference is best explained by:",
    choices: [
      "Selective attention",
      "Cognitive dissonance",
      "Brand equity",
      "Price elasticity",
    ],
    correctIndex: 0,
    explanation:
      "Selective attention means consumers notice stimuli relevant to their current needs and screen out the rest.",
  },
  {
    id: 5202,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "A consumer who always researches ‘best value’ options and enjoys comparing features before any purchase would be described as having which decision-making style?",
    choices: [
      "Habitual buyer",
      "Impulse buyer",
      "Rational/analytical buyer",
      "Laggard adopter",
    ],
    correctIndex: 2,
    explanation:
      "Analytical buyers systematically gather and compare information to maximize value before deciding.",
  },
  {
    id: 5203,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "Buying a bouquet of flowers because a friend is in the hospital is an example of a purchase driven by:",
    choices: [
      "A specific situation or occasion",
      "Long-term brand loyalty",
      "Wholesale pricing incentives",
      "Government policy",
    ],
    correctIndex: 0,
    explanation:
      "Occasion-based (situational) buying occurs when circumstances, not routine habit, trigger the purchase.",
  },
  {
    id: 5204,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "A marketer who studies culture is examining:",
    choices: [
      "The values, beliefs, and customs learned from society that shape consumption",
      "Only the income levels of consumers",
      "The technical specifications customers prefer",
      "Warehouse storage conditions",
    ],
    correctIndex: 0,
    explanation:
      "Culture is the broadest social influence — learned values and customs that define what products and behaviors are acceptable or desirable.",
  },
  {
    id: 5205,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "After seeing repeated ads for a pain reliever, a shopper reaches for that brand automatically at the pharmacy. Repetition creating familiarity illustrates:",
    choices: [
      "Learning through repetition",
      "Extensive problem solving",
      "Channel power",
      "Derived demand",
    ],
    correctIndex: 0,
    explanation:
      "Repeated exposure builds familiarity and learned responses, making the brand the default choice in routine situations.",
  },
  {
    id: 5206,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "hard",
    prompt:
      "A retailer notices customers who buy grills also frequently buy grill covers in the same trip. Designing displays that pair these items exploits which behavioral insight?",
    choices: [
      "Complementary purchase patterns",
      "Cognitive dissonance reduction",
      "Selective distortion",
      "Income elasticity of demand",
    ],
    correctIndex: 0,
    explanation:
      "Complementary products are consumed together, so co-locating them captures linked demand and raises basket size.",
  },
  {
    id: 5207,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "hard",
    prompt:
      "A company discovers dissatisfied customers rarely complain directly but quietly switch brands and warn friends. The most important managerial implication is to:",
    choices: [
      "Assume no complaints mean high satisfaction",
      "Actively measure satisfaction and recover problems before customers defect",
      "Increase advertising frequency only",
      "Raise prices to signal quality",
    ],
    correctIndex: 1,
    explanation:
      "Silent defection and negative word of mouth are costly; firms must proactively monitor satisfaction rather than rely on complaint counts.",
  },
  {
    id: 5208,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "hard",
    prompt:
      "For a $3 candy bar versus a $30,000 car, marketers should expect the car purchase to involve:",
    choices: [
      "Less search and shorter deliberation",
      "More search, more alternatives considered, and longer deliberation",
      "Identical decision processes",
      "No post-purchase evaluation",
    ],
    correctIndex: 1,
    explanation:
      "Higher cost and risk raise involvement, expanding every stage of the decision process compared with low-cost habitual goods.",
  },
  {
    id: 5209,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "hard",
    prompt:
      "An energy-drink brand wants to change negative attitudes among health-conscious consumers. Which approach attacks the attitude most directly?",
    choices: [
      "Repositioning the message around natural ingredients and zero sugar",
      "Increasing distribution to more gas stations",
      "Lowering the price by ten cents",
      "Changing the bottle cap color",
    ],
    correctIndex: 0,
    explanation:
      "Attitude change requires altering beliefs about the product; reformulation messaging targets the health objection itself, unlike price or packaging tweaks.",
  },
  {
    id: 5210,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "hard",
    prompt:
      "A supermarket places premium wines near the entrance so early impressions elevate perceptions of the whole store. This leverages which perceptual effect?",
    choices: [
      "The halo effect",
      "The law of demand",
      "Channel leakage",
      "The experience-curve effect",
    ],
    correctIndex: 0,
    explanation:
      "The halo effect lets one positive impression (upscale wine) spill over into judgments about everything else in the store.",
  },
  {
    id: 5211,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "easy",
    prompt:
      "The set of brands a consumer actually considers when solving a problem is called the:",
    choices: [
      "Evoked set",
      "Universal set of all products",
      "Distribution cluster",
      "Media plan",
    ],
    correctIndex: 0,
    explanation:
      "The evoked (consideration) set contains the few brands that come to mind and meet initial criteria during decision making.",
  },
  {
    id: 5212,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "easy",
    prompt:
      "Word-of-mouth recommendations are powerful in consumer behavior mainly because they are seen as:",
    choices: [
      "Paid and therefore biased",
      "More credible because they come from trusted, unpaid sources",
      "Legally required disclosures",
      "Always faster than advertising",
    ],
    correctIndex: 1,
    explanation:
      "Recommendations from friends and family carry high credibility since they lack commercial motive, unlike paid ads.",
  },
  {
    id: 5213,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "easy",
    prompt:
      "A consumer’s way of life expressed through activities, interests, and opinions describes his or her:",
    choices: ["Lifestyle", "Social class", "Personality", "Occupation"],
    correctIndex: 0,
    explanation:
      "Lifestyle is measured through activities, interests, and opinions (AIO) and strongly shapes product and brand preferences.",
  },
  {
    id: 5214,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "easy",
    prompt:
      "Dissatisfaction expressed when a returned product is handled poorly can most directly damage a firm through:",
    choices: [
      "Negative word of mouth spreading to other potential buyers",
      "Higher supplier costs",
      "Increased shelf space fees",
      "Lower wholesale discounts",
    ],
    correctIndex: 0,
    explanation:
      "Unhappy customers share bad experiences widely; poor complaint handling converts one lost sale into many influenced non-buyers.",
  },
  {
    id: 5215,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "A consumer trusts a brand because ‘everyone I know uses it.’ Her judgment is being shaped mostly by:",
    choices: [
      "Social proof from her peer environment",
      "Technical product specifications",
      "Supply-chain efficiency",
      "Regulatory certification",
    ],
    correctIndex: 0,
    explanation:
      "Social proof — observing widespread adoption by peers — substitutes for personal research and validates the choice.",
  },
  {
    id: 5216,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "Which factor is a situational influence on buying behavior?",
    choices: [
      "Time pressure while shopping",
      "Personal motivation",
      "Family structure",
      "Brand attitude",
    ],
    correctIndex: 0,
    explanation:
      "Situational influences are temporary conditions — time, mood, physical setting — rather than stable personal or social traits.",
  },
  {
    id: 5217,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "medium",
    prompt:
      "A buyer chooses the second-cheapest option to avoid appearing cheap without overspending. This compromise choice reflects:",
    choices: [
      "Risk-aversion and social judgment shaping price choice",
      "Perfect information search",
      "Post-purchase dissonance",
      "Organizational buying behavior",
    ],
    correctIndex: 0,
    explanation:
      "Middle-option selection balances financial and social risk — a well-documented pattern marketers exploit with tiered offerings.",
  },
  {
    id: 5218,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "hard",
    prompt:
      "A streaming service learns subscribers cancel after finishing one favorite show. The strongest data-driven fix is to:",
    choices: [
      "Build deeper content libraries across genres to extend engagement beyond a single title",
      "Raise prices to improve margins on remaining users",
      "Remove cancellation buttons to create friction only",
      "Stop promoting new shows entirely",
    ],
    correctIndex: 0,
    explanation:
      "Addressing the root cause — single-title engagement — extends retention, whereas friction tactics damage trust and delay inevitable churn.",
  },
  {
    id: 5219,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "hard",
    prompt:
      "Marketers segmenting ‘early adopters’ from ‘laggards’ are classifying consumers by:",
    choices: [
      "Their stage in adopting innovations relative to others",
      "Annual household income brackets",
      "Geographic distance from retail stores",
      "Frequency of coupon redemption alone",
    ],
    correctIndex: 0,
    explanation:
      "Diffusion-of-innovation categories — innovators, early adopters, majority, laggards — describe timing of adoption, not demographics or geography.",
  },
  {
    id: 5220,
    clusterId: "marketing",
    category: "Consumer Behavior",
    difficulty: "hard",
    prompt:
      "A hotel chain finds business travelers value fast Wi-Fi above all, while families value pools. Sending identical promotions to both groups will most likely:",
    choices: [
      "Underperform tailored messages because each segment’s dominant need differs",
      "Outperform tailored messages due to consistency",
      "Eliminate the need for segmentation entirely",
      "Guarantee equal conversion in both groups",
    ],
    correctIndex: 0,
    explanation:
      "Message–need mismatch lowers relevance and response; effective campaigns emphasize each segment’s highest-value benefit.",
  },
  {
    id: 5221,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "easy",
    prompt:
      "The first step in the marketing research process is:",
    choices: [
      "Defining the problem and research objectives",
      "Collecting the data",
      "Presenting the findings",
      "Designing the questionnaire",
    ],
    correctIndex: 0,
    explanation:
      "Research begins by clearly defining the problem and objectives; every later step depends on knowing what question is being answered.",
  },
  {
    id: 5222,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "easy",
    prompt:
      "A random sample is one in which:",
    choices: [
      "Every member of the population has an equal chance of being selected",
      "Only volunteers are surveyed",
      "Researchers choose respondents they find convenient",
      "The largest customers are interviewed exclusively",
    ],
    correctIndex: 0,
    explanation:
      "Random sampling gives each population member equal selection probability, allowing results to be generalized with known confidence.",
  },
  {
    id: 5223,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "easy",
    prompt:
      "Qualitative research differs from quantitative research because qualitative research:",
    choices: [
      "Explores attitudes and motivations in depth rather than measuring numerical data",
      "Always uses larger samples",
      "Produces statistically projectable percentages",
      "Relies only on government statistics",
    ],
    correctIndex: 0,
    explanation:
      "Qualitative methods like focus groups and interviews explain the ‘why’ behind behavior; quantitative methods measure ‘how many.’",
  },
  {
    id: 5224,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "easy",
    prompt:
      "Sales invoices, website analytics, and loyalty-card purchase histories are examples of:",
    choices: [
      "Internal secondary data",
      "External primary data",
      "Experimental controls",
      "Census projections",
    ],
    correctIndex: 0,
    explanation:
      "Data a company already possesses from its own operations is internal secondary data — collected previously for other purposes.",
  },
  {
    id: 5225,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "easy",
    prompt:
      "A leading question such as ‘Don’t you agree our excellent service is the best?’ suffers from:",
    choices: [
      "Bias that pressures respondents toward a particular answer",
      "Excessive sample size",
      "Too much secondary data",
      "Random sampling error",
    ],
    correctIndex: 0,
    explanation:
      "Leading or loaded wording biases responses, undermining the validity of survey findings.",
  },
  {
    id: 5226,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "easy",
    prompt:
      "A marketing information system (MIS) is best described as:",
    choices: [
      "An organized way to gather, analyze, and distribute marketing data for decision makers",
      "A single annual customer survey",
      "Software that only tracks payroll",
      "A legal requirement for public companies",
    ],
    correctIndex: 0,
    explanation:
      "An MIS continuously collects and processes internal, competitive, and market data so managers can make informed decisions.",
  },
  {
    id: 5227,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "Before designing its own expensive study, a firm should first check existing sources because secondary data is usually:",
    choices: [
      "Faster and cheaper to obtain, though it may not fit the exact need",
      "More accurate than any primary research",
      "Illegal to use without permission",
      "Collected only after primary research",
    ],
    correctIndex: 0,
    explanation:
      "Secondary data saves time and money; researchers verify whether it answers the question before investing in primary collection.",
  },
  {
    id: 5228,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "A restaurant mails surveys to 500 customers but only 40 respond. The main concern with these results is:",
    choices: [
      "Nonresponse bias — the 40 may differ systematically from typical customers",
      "The sample was too large to analyze",
      "Secondary data cannot be trusted at all",
      "Focus groups would have been free",
    ],
    correctIndex: 0,
    explanation:
      "Low response rates risk nonresponse bias if motivated respondents (often very satisfied or very angry) overrepresent the population.",
  },
  {
    id: 5229,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "An A/B test shows Version B of a landing page converts 5% versus 3% for Version A. The proper conclusion is:",
    choices: [
      "Version B performed better in this test and should be adopted, ideally confirmed for significance",
      "Version A should always be kept regardless of results",
      "Conversion rates cannot ever be compared",
      "The test proves Version B will convert 5% forever",
    ],
    correctIndex: 0,
    explanation:
      "Test results guide decisions, but prudent marketers confirm the difference is statistically meaningful before full rollout.",
  },
  {
    id: 5230,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "A researcher wants cause-and-effect evidence that a new checkout layout speeds purchases. The most appropriate method is:",
    choices: [
      "An experiment comparing stores with old and new layouts",
      "Reading industry magazines",
      "A mail survey of opinions about layouts",
      "A focus group discussion",
    ],
    correctIndex: 0,
    explanation:
      "Experiments manipulate one variable while controlling others, providing the strongest evidence of causation.",
  },
  {
    id: 5231,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "Net Promoter Score is calculated by asking customers:",
    choices: [
      "How likely they are to recommend the company, on a 0–10 scale",
      "How much they spent last year",
      "Which ads they remember seeing",
      "How many competitors they can name",
    ],
    correctIndex: 0,
    explanation:
      "NPS asks the likelihood-to-recommend question; promoters minus detractors yield the score used as a loyalty indicator.",
  },
  {
    id: 5232,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "Mystery shoppers who pose as regular customers and score service quality are conducting:",
    choices: [
      "Observational research using trained field agents",
      "Experimental research with control groups",
      "Secondary data analysis",
      "Probability sampling",
    ],
    correctIndex: 0,
    explanation:
      "Mystery shopping is structured observation: trained observers record actual service experiences against defined criteria.",
  },
  {
    id: 5233,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "A survey finds average satisfaction of 4.2 out of 5 with a margin of error of ±0.4. This means management can be confident the true average falls between:",
    choices: ["3.8 and 4.6", "4.0 and 4.4", "3.0 and 5.0", "4.2 and 5.0"],
    correctIndex: 0,
    explanation:
      "The margin of error defines the interval around the estimate: 4.2 ± 0.4 yields a range of 3.8 to 4.6.",
  },
  {
    id: 5234,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "hard",
    prompt:
      "A chain tests a new menu item in 20 randomly chosen stores and compares sales lift against 20 matched control stores. The control group’s purpose is to:",
    choices: [
      "Isolate the menu change’s effect from other factors affecting all stores",
      "Increase total company sales during the test",
      "Eliminate the need for statistical analysis",
      "Provide jobs for regional managers",
    ],
    correctIndex: 0,
    explanation:
      "Control stores experience everything except the treatment, so differences between groups can be attributed to the new menu item.",
  },
  {
    id: 5235,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "hard",
    prompt:
      "A manager rejects a study showing his strategy is failing, calling the researcher incompetent. This illustrates which barrier to using research effectively?",
    choices: [
      "Confirmation bias in decision making",
      "Sampling error",
      "Questionnaire bias",
      "Overgeneralization of secondary data",
    ],
    correctIndex: 0,
    explanation:
      "Dismissing unwelcome findings because they conflict with prior beliefs is confirmation bias and undermines evidence-based decisions.",
  },
  {
    id: 5236,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "hard",
    prompt:
      "A survey of 100 college students at one campus concludes ‘78% of American consumers prefer brand X.’ The flaw is:",
    choices: [
      "Overgeneralizing a small, non-representative sample to the whole population",
      "Using too many closed-ended questions",
      "Relying on primary instead of secondary data",
      "Reporting percentages rather than averages",
    ],
    correctIndex: 0,
    explanation:
      "Conclusions are only as generalizable as the sample; one campus cannot represent all American consumers.",
  },
  {
    id: 5237,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "hard",
    prompt:
      "Big-data analytics adds value to marketing primarily by:",
    choices: [
      "Revealing patterns across millions of transactions that enable precise targeting and personalization",
      "Replacing the need for strategic thinking entirely",
      "Guaranteeing campaign success",
      "Eliminating privacy considerations",
    ],
    correctIndex: 0,
    explanation:
      "Analytics uncovers hidden behavioral patterns at scale, enabling segmentation and personalization impossible with small samples — though privacy rules still apply.",
  },
  {
    id: 5238,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "hard",
    prompt:
      "A focus group of eight people loves a new product concept, so management skips further testing and launches nationally. The biggest risk is:",
    choices: [
      "Treating qualitative insight from a tiny group as proof of broad market demand",
      "Spending too little on advertising",
      "Choosing too large a sample size",
      "Violating trademark law",
    ],
    correctIndex: 0,
    explanation:
      "Focus groups generate hypotheses, not projections; national launches should rest on quantitative validation from representative samples.",
  },
  {
    id: 5239,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "easy",
    prompt:
      "Data collected specifically for the current research problem through surveys or experiments is called:",
    choices: ["Primary data", "Secondary data", "Archival data", "Syndicated census data"],
    correctIndex: 0,
    explanation:
      "Primary data is gathered firsthand for the exact question at hand, offering fit but at greater cost and time.",
  },
  {
    id: 5240,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "easy",
    prompt:
      "Open-ended survey questions are useful when researchers want to:",
    choices: [
      "Capture respondents’ ideas in their own words",
      "Force choice among fixed options",
      "Simplify statistical tabulation",
      "Shorten interview time to seconds",
    ],
    correctIndex: 0,
    explanation:
      "Open-ended questions reveal unanticipated ideas and language, though they are harder to code and quantify.",
  },
  {
    id: 5241,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "easy",
    prompt:
      "Competitive intelligence refers to:",
    choices: [
      "Ethically gathering and analyzing publicly available information about competitors",
      "Hacking competitor databases",
      "Copying competitor packaging exactly",
      "Ignoring rival firms completely",
    ],
    correctIndex: 0,
    explanation:
      "Competitive intelligence uses legal public sources — filings, websites, trade press — to understand rivals’ strategies and capabilities.",
  },
  {
    id: 5242,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "A mall intercept survey may produce biased results chiefly because:",
    choices: [
      "Shoppers at one location at one time are not representative of the target population",
      "Interviewers cost too much",
      "Questions are always too short",
      "Malls prohibit all research",
    ],
    correctIndex: 0,
    explanation:
      "Convenience samples drawn from whoever happens to pass by limit how widely findings can be generalized.",
  },
  {
    id: 5243,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "Tracking studies that repeat the same questions over time are designed mainly to:",
    choices: [
      "Detect changes in awareness, attitudes, or usage trends across periods",
      "Replace the need for any initial baseline research",
      "Measure only financial performance",
      "Reduce the sample size required",
    ],
    correctIndex: 0,
    explanation:
      "Longitudinal tracking reveals movement — whether campaigns build awareness or satisfaction is drifting — that single snapshots miss.",
  },
  {
    id: 5244,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "A researcher cross-tabulates purchase frequency against age group. This analysis helps identify:",
    choices: [
      "Whether buying behavior differs across demographic segments",
      "The company’s tax liability",
      "Warehouse capacity needs",
      "Trademark conflicts",
    ],
    correctIndex: 0,
    explanation:
      "Cross-tabulation exposes relationships between variables, showing which segments behave differently and guiding targeting.",
  },
  {
    id: 5245,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "Conjoint analysis is a research technique used to determine:",
    choices: [
      "How customers trade off different product attributes when choosing",
      "Employee satisfaction levels",
      "Shipping route efficiency",
      "Legal compliance costs",
    ],
    correctIndex: 0,
    explanation:
      "Conjoint presents buyers with combinations of features and prices to quantify the relative value placed on each attribute.",
  },
  {
    id: 5246,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "hard",
    prompt:
      "Online panel data show heavy users skew older, contradicting the team’s assumption that teens dominate. The professional response is to:",
    choices: [
      "Re-examine assumptions and adjust targeting based on the evidence",
      "Discard the data because it contradicts expectations",
      "Re-run the study until teen dominance appears",
      "Report only the teen-focused portions",
    ],
    correctIndex: 0,
    explanation:
      "Research exists to test assumptions; suppressing inconvenient findings leads to misallocated marketing resources.",
  },
  {
    id: 5247,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "hard",
    prompt:
      "A firm must choose between a quick national online survey and a slower in-person study with richer data. If a launch decision is due in two weeks, the most defensible choice is:",
    choices: [
      "The online survey, since timely, directionally reliable data beats perfect data arriving too late",
      "The in-person study, regardless of deadline",
      "No research at all",
      "Both studies run sequentially before deciding",
    ],
    correctIndex: 0,
    explanation:
      "Research value depends on timeliness; decision deadlines often justify faster methods with acceptable accuracy trade-offs.",
  },
  {
    id: 5248,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "easy",
    prompt:
      "A pilot test of a questionnaire on a small group before full launch is conducted mainly to:",
    choices: [
      "Identify confusing wording or flawed questions early",
      "Increase the final sample size",
      "Replace the need for sampling",
      "Guarantee positive results",
    ],
    correctIndex: 0,
    explanation:
      "Pretesting catches ambiguous items and technical problems cheaply before the full study commits resources.",
  },
  {
    id: 5249,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "medium",
    prompt:
      "Syndicated research services sell standardized data, such as retail scanner sales, to many subscribing companies. Their advantage is:",
    choices: [
      "Shared cost and consistent industry-wide measurement",
      "Perfect customization to one firm’s question",
      "Complete secrecy from competitors",
      "Freedom from sampling error",
    ],
    correctIndex: 0,
    explanation:
      "Because many firms share the cost, syndicated data is affordable and comparable across the industry, though not tailored to unique questions.",
  },
  {
    id: 5250,
    clusterId: "marketing",
    category: "Market Research",
    difficulty: "hard",
    prompt:
      "Survey results show 60% intent to buy a new product, yet actual launch sales reach only 15%. The most likely explanation is:",
    choices: [
      "Stated intentions typically overstate actual purchasing behavior",
      "Customers lied deliberately to harm the company",
      "The product failed legally",
      "Distribution was too strong",
    ],
    correctIndex: 0,
    explanation:
      "Purchase-intent scales systematically inflate real-world conversion; forecasters apply discounts to stated intent before projecting sales.",
  },
  {
    id: 5251,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "easy",
    prompt:
      "A product’s core benefit — what the buyer is really purchasing, such as ‘rest’ from a hotel room — is called the:",
    choices: [
      "Core product",
      "Augmented product",
      "Actual product",
      "Convenience product",
    ],
    correctIndex: 0,
    explanation:
      "The core product is the fundamental benefit sought; the actual product is the tangible item, and augmented features add extra value.",
  },
  {
    id: 5252,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "easy",
    prompt:
      "Warranties, delivery, and customer support that surround a product are part of the:",
    choices: [
      "Augmented product",
      "Core product",
      "Brand mark",
      "Generic offering",
    ],
    correctIndex: 0,
    explanation:
      "Augmented product features are added services and benefits beyond the physical item that differentiate the offer.",
  },
  {
    id: 5253,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "easy",
    prompt:
      "Goods bought frequently with minimal effort, such as bread or soap, are classified as:",
    choices: [
      "Convenience products",
      "Shopping products",
      "Specialty products",
      "Unsought products",
    ],
    correctIndex: 0,
    explanation:
      "Convenience products are low-cost, frequently purchased items consumers buy with little comparison shopping.",
  },
  {
    id: 5254,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "easy",
    prompt:
      "A name, term, symbol, or design that identifies a seller’s products and distinguishes them from competitors is a:",
    choices: ["Brand", "Patent", "License", "Franchise"],
    correctIndex: 0,
    explanation:
      "A brand encompasses the identifying elements — name, logo, design — that signal source and differentiation.",
  },
  {
    id: 5255,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "easy",
    prompt:
      "The added value a brand name gives a product beyond its functional benefits is called:",
    choices: [
      "Brand equity",
      "Break-even value",
      "Channel power",
      "Economies of scale",
    ],
    correctIndex: 0,
    explanation:
      "Strong brand equity lets firms charge premiums, gain distribution more easily, and extend into new categories.",
  },
  {
    id: 5256,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "easy",
    prompt:
      "During the introduction stage of the product life cycle, profits are typically:",
    choices: [
      "Negative or minimal because development and promotion costs are high",
      "At their lifetime peak",
      "Exactly equal to maturity-stage profits",
      "Irrelevant to pricing decisions",
    ],
    correctIndex: 0,
    explanation:
      "Heavy launch spending against modest sales usually makes introduction-stage profits negative or slim.",
  },
  {
    id: 5257,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "easy",
    prompt:
      "In the maturity stage of the product life cycle, marketers most commonly emphasize:",
    choices: [
      "Differentiation and brand loyalty to defend market share",
      "Building basic awareness for the first time",
      "Exiting the market immediately",
      "Raising prices without any changes",
    ],
    correctIndex: 0,
    explanation:
      "With sales leveling off and competition intense, maturity-stage strategy focuses on differentiation, loyalty, and product improvements.",
  },
  {
    id: 5258,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "easy",
    prompt:
      "A group of related products sold under one brand by one company is called a:",
    choices: [
      "Product line",
      "Marketing mix",
      "Supply chain",
      "Merchandise return",
    ],
    correctIndex: 0,
    explanation:
      "A product line is a set of closely related items — such as a shampoo brand in several sizes and formulas.",
  },
  {
    id: 5259,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "easy",
    prompt:
      "Packaging performs all of the following functions EXCEPT:",
    choices: [
      "Setting statutory interest rates",
      "Protecting the product",
      "Communicating information",
      "Promoting the brand at the point of sale",
    ],
    correctIndex: 0,
    explanation:
      "Packaging protects, informs, and promotes; setting interest rates is a governmental function unrelated to packaging.",
  },
  {
    id: 5260,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "medium",
    prompt:
      "Adding items at a higher price level to an existing line — for example, a luxury trim of a mid-market sedan — is called:",
    choices: [
      "Stretching the product line upward",
      "Filling the product line",
      "Contracting the line",
      "Pure bundling",
    ],
    correctIndex: 0,
    explanation:
      "Upward line stretch adds premium items to reach higher-priced segments and enhance brand image.",
  },
  {
    id: 5261,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "medium",
    prompt:
      "A cereal brand launches an oat milk using the same brand name. This strategy is:",
    choices: [
      "Brand extension",
      "Line pruning",
      "Private labeling",
      "Generic branding",
    ],
    correctIndex: 0,
    explanation:
      "Brand extension applies an established name to a new product category, borrowing existing equity to speed acceptance.",
  },
  {
    id: 5262,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "medium",
    prompt:
      "Products sold under a retailer’s own brand name, manufactured by another company, are known as:",
    choices: [
      "Private-label (store) brands",
      "National manufacturer brands",
      "Licensed brands",
      "Generic patents",
    ],
    correctIndex: 0,
    explanation:
      "Private labels let retailers capture manufacturing margin, control assortment, and often price below national brands.",
  },
  {
    id: 5263,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "medium",
    prompt:
      "A company modifies its app’s interface based on user complaints. In product terms this is a:",
    choices: [
      "Product modification (improvement)",
      "Market modification",
      "Marketing-mix elimination",
      "Repositioning of the entire brand",
    ],
    correctIndex: 0,
    explanation:
      "Changing the product’s characteristics or quality to improve performance is product modification, a common maturity-stage tactic.",
  },
  {
    id: 5264,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "medium",
    prompt:
      "Finding new users, new uses, or more usage per occasion for an existing product is called:",
    choices: [
      "Market modification",
      "Product development",
      "Diversification",
      "Harvesting",
    ],
    correctIndex: 0,
    explanation:
      "Market modification grows demand for the unchanged product by expanding who uses it, how, or how often.",
  },
  {
    id: 5265,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "medium",
    prompt:
      "A firm decides to phase out a failing product gradually while still serving loyal customers. This strategy is called:",
    choices: [
      "Harvesting",
      "Skimming",
      "Test marketing",
      "Licensing",
    ],
    correctIndex: 0,
    explanation:
      "Harvesting reduces investment in a declining product to maximize short-term cash flow while winding it down.",
  },
  {
    id: 5266,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "medium",
    prompt:
      "Which factor most increases the risk of a failed brand extension?",
    choices: [
      "Weak perceived fit between the original brand and the new category",
      "Using too few advertising channels",
      "Pricing the extension identically to the original",
      "Keeping the same logo font",
    ],
    correctIndex: 0,
    explanation:
      "Extensions succeed when consumers see logical fit; distant categories confuse buyers and can dilute the parent brand.",
  },
  {
    id: 5267,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "hard",
    prompt:
      "Sales are flat, profits are slipping, and several rivals have exited a mature category. The strongest strategic case exists for:",
    choices: [
      "Acquiring or consolidating share cheaply as weaker players exit, improving long-run position",
      "Immediately launching a price war to accelerate exits",
      "Doubling inventory across all warehouses",
      "Freezing all marketing spending",
    ],
    correctIndex: 0,
    explanation:
      "Shakeout periods let efficient survivors buy share inexpensively; price wars deepen losses while consolidation builds durable advantage.",
  },
  {
    id: 5268,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "hard",
    prompt:
      "A brand famous for inexpensive fast food licenses its name to a frozen dinner line of questionable quality. The most likely long-term consequence is:",
    choices: [
      "Dilution of brand equity as poor-quality products damage consumer trust",
      "Automatic improvement in restaurant sales",
      "Lower fixed costs for the restaurant chain",
      "Elimination of the need for quality control",
    ],
    correctIndex: 0,
    explanation:
      "Every product bearing the name affects overall brand perception; licensing without quality control erodes hard-built equity.",
  },
  {
    id: 5269,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "hard",
    prompt:
      "A product manager must allocate a limited budget among a growth-stage star, a mature cash generator, and a declining item. The classic balanced allocation is to:",
    choices: [
      "Invest in the star, harvest cash from the mature item, and plan the declining item’s exit",
      "Split funds equally regardless of stage",
      "Fund only the declining item to save it",
      "Cut everything until next fiscal year",
    ],
    correctIndex: 0,
    explanation:
      "Portfolio thinking matches investment to life-cycle stage: build stars, milk strongholds, and divest decliners.",
  },
  {
    id: 5270,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "hard",
    prompt:
      "A company discovers counterfeit versions of its product online. Beyond legal action, the best brand-protection step is to:",
    choices: [
      "Educate customers on authentic-product verification and strengthen official channels",
      "Ignore the issue since counterfeits rarely affect sales",
      "Raise genuine-product prices to fund lawsuits only",
      "Remove all products from online sale",
    ],
    correctIndex: 0,
    explanation:
      "Consumer education plus secure authentication protects both revenue and trust; ignoring counterfeits lets fake quality harm the brand image.",
  },
  {
    id: 5271,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "easy",
    prompt:
      "A product purchased infrequently after careful comparison of quality, price, and style across stores — like furniture — is a:",
    choices: [
      "Shopping product",
      "Convenience product",
      "Staple good",
      "Impulse product",
    ],
    correctIndex: 0,
    explanation:
      "Shopping products involve deliberate comparison across attributes and retailers before purchase.",
  },
  {
    id: 5272,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "easy",
    prompt:
      "Life insurance and burial plots, which consumers do not think about buying until prompted, are examples of:",
    choices: [
      "Unsought products",
      "Specialty products",
      "Raw materials",
      "Capital equipment",
    ],
    correctIndex: 0,
    explanation:
      "Unsought products require aggressive personal selling and awareness-building because buyers do not actively seek them.",
  },
  {
    id: 5273,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "medium",
    prompt:
      "Adding more varieties within the existing price range of a line — say, three new flavors at the same $4 price — is called:",
    choices: [
      "Line filling",
      "Line stretching",
      "Line pruning",
      "Trading down",
    ],
    correctIndex: 0,
    explanation:
      "Line filling adds items within the current range to close gaps and satisfy dealers, provided it does not cause cannibalization.",
  },
  {
    id: 5274,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "medium",
    prompt:
      "A consistent look, tone, and message across packaging, ads, store design, and social media builds:",
    choices: [
      "Coherent brand identity that strengthens recognition and trust",
      "Higher wholesale costs automatically",
      "Legal trademark ownership",
      "Distribution exclusivity",
    ],
    correctIndex: 0,
    explanation:
      "Consistency across touchpoints makes brands easier to recognize and believe, compounding equity over time.",
  },
  {
    id: 5275,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "medium",
    prompt:
      "A snack maker removes artificial colors in response to consumer preferences. The change primarily supports which product-level objective?",
    choices: [
      "Aligning the product with evolving customer expectations to sustain demand",
      "Reducing promotional budgets",
      "Shortening the distribution channel",
      "Increasing channel conflict",
    ],
    correctIndex: 0,
    explanation:
      "Adapting product attributes to shifting preferences maintains relevance and defends the brand against changing tastes.",
  },
  {
    id: 5276,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "hard",
    prompt:
      "Two brands co-develop and jointly sell a limited-edition product bearing both names. This tactic is called:",
    choices: [
      "Co-branding",
      "Brand dilution",
      "Private labeling",
      "Generic branding",
    ],
    correctIndex: 0,
    explanation:
      "Co-branding combines two brands’ equities to generate buzz and borrow each partner’s strengths — provided the fit is credible.",
  },
  {
    id: 5277,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "hard",
    prompt:
      "A tech firm continues selling an obsolete accessory because loyal users depend on it, though margins are thin. The primary strategic justification is:",
    choices: [
      "Preserving customer relationships and trust that outweigh short-term margin loss",
      "Maximizing quarterly profit from the item",
      "Avoiding all product-line decisions",
      "Meeting competitor price points",
    ],
    correctIndex: 0,
    explanation:
      "Supporting dependent customers protects lifetime relationship value and reputation, which can exceed the accessory’s direct profit.",
  },
  {
    id: 5278,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "medium",
    prompt:
      "The total group of all product lines a company offers is its:",
    choices: [
      "Product mix",
      "Target market",
      "Promotional mix",
      "Value chain",
    ],
    correctIndex: 0,
    explanation:
      "The product mix (or assortment) includes every line and item the firm sells; its width and depth describe variety.",
  },
  {
    id: 5279,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "easy",
    prompt:
      "A logo that cannot be spoken — only recognized visually — is called a:",
    choices: [
      "Brand mark",
      "Brand name",
      "Trademark claim",
      "Trade dress license",
    ],
    correctIndex: 0,
    explanation:
      "The brand mark is the visual symbol or design element of a brand, distinct from the pronounceable brand name.",
  },
  {
    id: 5280,
    clusterId: "marketing",
    category: "Product & Brand Management",
    difficulty: "hard",
    prompt:
      "Sales data show a new feature cannibalizes 30% of the premium model’s volume while adding little new total demand. The best managerial response is to:",
    choices: [
      "Evaluate whether the feature’s costs and positioning justify the shift, possibly differentiating the models more clearly",
      "Immediately delete the feature regardless of margins",
      "Hide the feature from marketing materials permanently",
      "Double production of both models",
    ],
    correctIndex: 0,
    explanation:
      "Cannibalization is acceptable when total contribution rises; otherwise clearer differentiation between models restores premium value.",
  },
  {
    id: 5281,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "easy",
    prompt:
      "The path a product travels from producer to final consumer is called the:",
    choices: [
      "Channel of distribution",
      "Promotional mix",
      "Product life cycle",
      "Organizational chart",
    ],
    correctIndex: 0,
    explanation:
      "A channel of distribution is the sequence of intermediaries — wholesalers, retailers, agents — that moves products to end users.",
  },
  {
    id: 5282,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "easy",
    prompt:
      "A farmer selling produce directly to consumers at a farmers market uses which channel?",
    choices: [
      "Direct channel (no intermediaries)",
      "Two-level channel with wholesalers and retailers",
      "Agent-brokered export channel",
      "Reverse logistics channel",
    ],
    correctIndex: 0,
    explanation:
      "Selling straight from producer to consumer is the shortest, direct channel with no middlemen.",
  },
  {
    id: 5283,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "easy",
    prompt:
      "A wholesaler’s primary function is to:",
    choices: [
      "Buy in bulk from producers and resell smaller quantities to retailers",
      "Manufacture finished goods from raw materials",
      "Advertise directly to final consumers only",
      "Set national tax policy on goods",
    ],
    correctIndex: 0,
    explanation:
      "Wholesalers break bulk, storing and redistributing large shipments into retailer-sized quantities, adding time and place utility.",
  },
  {
    id: 5284,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "easy",
    prompt:
      "Distributing a product through every available outlet willing to carry it is called:",
    choices: [
      "Intensive distribution",
      "Selective distribution",
      "Exclusive distribution",
      "Direct distribution",
    ],
    correctIndex: 0,
    explanation:
      "Intensive distribution maximizes availability for convenience goods like snacks and soft drinks.",
  },
  {
    id: 5285,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "easy",
    prompt:
      "Granting only one dealer per territory the right to sell a product is:",
    choices: [
      "Exclusive distribution",
      "Intensive distribution",
      "Dual distribution",
      "Scrambled merchandising",
    ],
    correctIndex: 0,
    explanation:
      "Exclusive distribution limits outlets to preserve prestige and control, common for luxury cars and high-end brands.",
  },
  {
    id: 5286,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "easy",
    prompt:
      "Physical distribution includes all of the following activities EXCEPT:",
    choices: [
      "Designing the advertising message",
      "Warehousing",
      "Transportation",
      "Inventory management",
    ],
    correctIndex: 0,
    explanation:
      "Physical distribution covers moving and storing goods; creative message design belongs to promotion.",
  },
  {
    id: 5287,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "A manufacturer sells through both its own online store and independent retail partners. This approach is called:",
    choices: [
      "Dual (multichannel) distribution",
      "Exclusive dealing",
      "Backward integration only",
      "Single-channel brokerage",
    ],
    correctIndex: 0,
    explanation:
      "Using multiple channel types simultaneously broadens reach but requires managing potential conflict between channels.",
  },
  {
    id: 5288,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "Retailers complain that the manufacturer’s new direct-to-consumer website undercuts their prices. This situation illustrates:",
    choices: [
      "Vertical channel conflict",
      "Horizontal competition among retailers only",
      "Perfect channel harmony",
      "A promotional mix decision",
    ],
    correctIndex: 0,
    explanation:
      "Conflict between different levels of the same channel — manufacturer versus its retailers — is vertical channel conflict.",
  },
  {
    id: 5289,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "Two dealers of the same brand in neighboring towns compete aggressively on price. This is an example of:",
    choices: [
      "Horizontal channel conflict",
      "Vertical channel conflict",
      "Supply-chain integration",
      "Administered pricing by law",
    ],
    correctIndex: 0,
    explanation:
      "Conflict between members at the same channel level, such as rival dealers, is horizontal conflict.",
  },
  {
    id: 5290,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "Just-in-time inventory systems aim primarily to:",
    choices: [
      "Reduce holding costs by receiving goods only as they are needed",
      "Maximize warehouse stock levels year-round",
      "Eliminate all suppliers",
      "Slow delivery to lower shipping fees",
    ],
    correctIndex: 0,
    explanation:
      "JIT minimizes inventory investment and waste but demands reliable, precisely coordinated supplier deliveries.",
  },
  {
    id: 5291,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "A luxury watchmaker chooses selective distribution over intensive distribution mainly because scarcity:",
    choices: [
      "Protects brand image and supports premium pricing",
      "Always lowers total manufacturing costs",
      "Is legally required for watches",
      "Eliminates the need for promotion",
    ],
    correctIndex: 0,
    explanation:
      "Limiting outlets preserves exclusivity, controls the buying experience, and defends premium price positioning.",
  },
  {
    id: 5292,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "Cross-docking in warehousing means:",
    choices: [
      "Moving incoming goods directly to outbound trucks with minimal storage",
      "Storing all goods for at least 90 days",
      "Splitting warehouses between two companies permanently",
      "Inspecting every item twice before sale",
    ],
    correctIndex: 0,
    explanation:
      "Cross-docking speeds flow and cuts storage costs by transferring goods almost immediately from receiving to shipping.",
  },
  {
    id: 5293,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "A producer takes over its former distributor’s operations. This move toward the supply source’s customer side is called:",
    choices: [
      "Forward vertical integration",
      "Backward vertical integration",
      "Horizontal merger",
      "Outsourcing",
    ],
    correctIndex: 0,
    explanation:
      "Integrating toward the consumer — taking over distribution or retail — is forward vertical integration.",
  },
  {
    id: 5294,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "hard",
    prompt:
      "An e-commerce firm promises two-day delivery nationwide. To keep that promise profitably, its most critical physical-distribution investment is:",
    choices: [
      "Strategically located fulfillment centers paired with efficient transportation management",
      "Larger print catalogs",
      "More sales territories for field reps",
      "Longer payment terms for customers",
    ],
    correctIndex: 0,
    explanation:
      "Delivery speed depends on warehouse placement near demand plus optimized transport — the core of order-cycle performance.",
  },
  {
    id: 5295,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "hard",
    prompt:
      "A supplier requires retailers to buy its slow-moving line in order to receive allocations of its hot-selling item. This practice is known as:",
    choices: [
      "Full-line forcing, which can raise legal and relationship concerns",
      "Everyday low pricing",
      "Open buying",
      "Slotting allowance compliance",
    ],
    correctIndex: 0,
    explanation:
      "Tying purchases together (full-line forcing) may violate antitrust rules when it substantially lessens competition and strains channel relationships.",
  },
  {
    id: 5296,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "hard",
    prompt:
      "Total distribution cost analysis shows that shipping everything overnight raises service but destroys margin, while sea freight saves money but loses customers. The optimal solution balances:",
    choices: [
      "Customer-service requirements against logistics costs, often using segmented service levels",
      "Choosing the cheapest option regardless of customers",
      "Choosing the fastest option regardless of cost",
      "Eliminating transportation entirely",
    ],
    correctIndex: 0,
    explanation:
      "Effective logistics matches service level to segment needs — premium speed where it wins customers, economy where it does not.",
  },
  {
    id: 5297,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "easy",
    prompt:
      "Retailers charge manufacturers fees for prominent shelf space, known as:",
    choices: [
      "Slotting allowances",
      "Quantity discounts",
      "Cash rebates",
      "Trade-in credits",
    ],
    correctIndex: 0,
    explanation:
      "Slotting allowances pay for shelf placement, reflecting retailers’ power over scarce display space.",
  },
  {
    id: 5298,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "Omnichannel retailing differs from simple multichannel retailing because it:",
    choices: [
      "Integrates all channels so customers move seamlessly among them",
      "Operates each channel completely independently",
      "Uses only one channel at a time",
      "Focuses exclusively on physical stores",
    ],
    correctIndex: 0,
    explanation:
      "Omnichannel unifies inventory, pricing, and experience across store, web, and app so channels complement rather than compete.",
  },
  {
    id: 5299,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "Buy-online-pickup-in-store (BOPIS) primarily benefits retailers by:",
    choices: [
      "Driving store traffic where additional purchases often occur while cutting last-mile delivery costs",
      "Increasing return rates deliberately",
      "Reducing the need for any inventory",
      "Eliminating staff requirements",
    ],
    correctIndex: 0,
    explanation:
      "BOPIS shifts fulfillment to the store, saving shipping expense and creating incremental in-store sales opportunities.",
  },
  {
    id: 5300,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "A broker differs from a merchant wholesaler because brokers:",
    choices: [
      "Do not take title to the goods; they negotiate sales for a commission",
      "Own the merchandise they sell",
      "Sell only to final consumers",
      "Manufacture private-label goods",
    ],
    correctIndex: 0,
    explanation:
      "Brokers and agents facilitate transactions without owning inventory, earning commissions instead of trading margins.",
  },
  {
    id: 5301,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "hard",
    prompt:
      "Inventory turnover equals cost of goods sold divided by average inventory. A turnover of 4 versus an industry norm of 8 most likely indicates:",
    choices: [
      "Excess inventory tying up capital and risking obsolescence",
      "Superior stock management",
      "Too little inventory on shelves",
      "Guaranteed higher profits",
    ],
    correctIndex: 0,
    explanation:
      "Low turnover means goods sit longer, absorbing holding costs and markdown risk rather than converting quickly to sales.",
  },
  {
    id: 5302,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "hard",
    prompt:
      "A manufacturer’s exclusive-dealing contract requires distributors to sell only its brand. Courts are most likely to permit it when:",
    choices: [
      "It promotes interbrand competition without foreclosing a large share of the market",
      "It eliminates every competitor instantly",
      "It applies to all products in the economy",
      "It is kept secret from regulators forever",
    ],
    correctIndex: 0,
    explanation:
      "Exclusive dealing is judged by competitive effects; arrangements that intensify rivalry among brands generally pass legal scrutiny.",
  },
  {
    id: 5303,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "Order processing, from purchase order to delivery confirmation, affects customer satisfaction most directly through:",
    choices: [
      "Accuracy and speed of fulfilling what was ordered",
      "The color of the invoice paper",
      "The number of competitors in the market",
      "Corporate tax filings",
    ],
    correctIndex: 0,
    explanation:
      "Fast, error-free order cycles are a core service output customers experience directly on every transaction.",
  },
  {
    id: 5304,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "easy",
    prompt:
      "Transporting crude oil by pipeline and fresh flowers by air freight demonstrates that mode selection depends on:",
    choices: [
      "The product’s value, perishability, and cost trade-offs",
      "Personal preference of the CEO",
      "Uniform use of the cheapest mode always",
      "Random assignment each season",
    ],
    correctIndex: 0,
    explanation:
      "Logistics managers match transport modes to product characteristics — cheap bulk goods tolerate slow modes; perishables need speed.",
  },
  {
    id: 5305,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "A vendor-managed inventory (VMI) arrangement means:",
    choices: [
      "The supplier monitors the buyer’s stock and replenishes it automatically",
      "The buyer stores nothing and orders hourly by phone",
      "The government manages warehouse safety",
      "Each store manager guesses reorder quantities",
    ],
    correctIndex: 0,
    explanation:
      "VMI shifts replenishment responsibility to the supplier with shared data, reducing stockouts and excess inventory for both parties.",
  },
  {
    id: 5306,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "hard",
    prompt:
      "A brand discovers gray-market goods — genuine products sold through unauthorized dealers. The most effective first response is to:",
    choices: [
      "Trace the authorized-channel leakage and tighten distribution agreements and supply controls",
      "Declare all products counterfeit publicly",
      "Lower official prices below gray-market levels everywhere",
      "Stop production until leaks close",
    ],
    correctIndex: 0,
    explanation:
      "Gray markets stem from authorized-channel diversion; controlling allocation and contracts addresses the source more effectively than blanket price cuts.",
  },
  {
    id: 5307,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "easy",
    prompt:
      "Reverse logistics refers to:",
    choices: [
      "Moving returned or recycled goods backward through the supply chain",
      "Shipping faster than competitors",
      "Routing trucks in circles to save fuel",
      "Reversing a company’s logo direction",
    ],
    correctIndex: 0,
    explanation:
      "Reverse logistics handles returns, repairs, and recycling — flows from the customer back toward the producer.",
  },
  {
    id: 5308,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "For convenience products like chewing gum, the most appropriate distribution strategy is:",
    choices: [
      "Intensive distribution across as many outlets as possible",
      "Exclusive distribution through single boutiques",
      "Direct factory sales only",
      "Seasonal pop-up shops alone",
    ],
    correctIndex: 0,
    explanation:
      "Convenience goods succeed through maximum availability since buyers will not search far for them.",
  },
  {
    id: 5309,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "hard",
    prompt:
      "A company calculates that opening a regional warehouse adds $500,000 in fixed costs but cuts transport costs $700,000 annually and reduces stockouts worth $200,000. The best decision is:",
    choices: [
      "Open the warehouse, since annual net benefit is about $400,000 against added fixed cost",
      "Reject it because fixed costs always dominate",
      "Open three warehouses instead without analysis",
      "Delay indefinitely pending perfect data",
    ],
    correctIndex: 0,
    explanation:
      "$900,000 in combined savings exceeds $500,000 in added fixed cost, yielding roughly $400,000 net annual benefit.",
  },
  {
    id: 5310,
    clusterId: "marketing",
    category: "Distribution & Channel Management",
    difficulty: "medium",
    prompt:
      "Drop-shipping in e-commerce means:",
    choices: [
      "The retailer forwards orders to a supplier who ships directly to the customer",
      "Customers drop packages at postal boxes themselves",
      "Goods are shipped only after prices drop",
      "Returns are destroyed on arrival",
    ],
    correctIndex: 0,
    explanation:
      "With drop-shipping the seller holds no inventory; suppliers ship on the retailer’s behalf, reducing capital tied up in stock.",
  },
  {
    id: 5311,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "easy",
    prompt:
      "The lowest price at which a company can sell a product without losing money on each unit is bounded by:",
    choices: [
      "Its variable cost per unit",
      "Competitors’ advertising budgets",
      "The product’s life-cycle stage",
      "The number of distribution channels",
    ],
    correctIndex: 0,
    explanation:
      "In the short run, price must at least cover variable cost; below that, every sale deepens the loss.",
  },
  {
    id: 5312,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "easy",
    prompt:
      "Cost-plus pricing calculates price by:",
    choices: [
      "Adding a desired markup percentage to unit cost",
      "Matching the highest competitor’s price",
      "Surveying customer willingness to pay",
      "Dividing total industry revenue by market share",
    ],
    correctIndex: 0,
    explanation:
      "Cost-plus is simple and guarantees margin over cost, though it ignores demand and competition.",
  },
  {
    id: 5313,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "easy",
    prompt:
      "A quantity discount is a price reduction granted for:",
    choices: [
      "Buying in larger volumes",
      "Paying late",
      "Returning damaged goods",
      "Advertising the competitor’s brand",
    ],
    correctIndex: 0,
    explanation:
      "Quantity discounts reward larger orders, encouraging bulk buying while spreading sellers’ fixed costs.",
  },
  {
    id: 5314,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "easy",
    prompt:
      "The break-even point in units equals:",
    choices: [
      "Fixed costs divided by price per unit minus variable cost per unit",
      "Total sales divided by total assets",
      "Variable costs multiplied by units sold",
      "Price minus markup",
    ],
    correctIndex: 0,
    explanation:
      "Break-even units = fixed costs ÷ contribution margin per unit, where contribution margin is price minus variable cost.",
  },
  {
    id: 5315,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "easy",
    prompt:
      "Charging different prices to different segments for essentially the same product is called:",
    choices: [
      "Price discrimination (segmented pricing)",
      "Uniform delivered pricing",
      "Cost-plus pricing",
      "Loss-leader pricing",
    ],
    correctIndex: 0,
    explanation:
      "Segmented pricing — student discounts, senior rates — captures different willingness to pay across groups when legally permissible.",
  },
  {
    id: 5316,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "If fixed costs are $20,000, price is $50, and variable cost is $30 per unit, the break-even volume is:",
    choices: ["400 units", "667 units", "1,000 units", "2,000 units"],
    correctIndex: 2,
    explanation:
      "Contribution margin = $50 − $30 = $20. Break-even = $20,000 ÷ $20 = 1,000 units.",
  },
  {
    id: 5317,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "A retailer pays $60 for a lamp and wants a 40% markup on the selling price. The retail price should be:",
    choices: ["$100", "$84", "$96", "$150"],
    correctIndex: 0,
    explanation:
      "Markup on selling price: price × (1 − 0.40) = cost, so $60 ÷ 0.60 = $100.",
  },
  {
    id: 5318,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "An airline charges business travelers more than leisure travelers for identical seats by restricting cheap fares to advance purchases. This works because the segments differ in:",
    choices: [
      "Price sensitivity of demand",
      "Physical seat dimensions",
      "Fuel costs per passenger",
      "Airport landing fees",
    ],
    correctIndex: 0,
    explanation:
      "Segmented pricing succeeds when segments have different elasticities and can be separated by fences like advance-purchase rules.",
  },
  {
    id: 5319,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "Selling two products together for one price lower than the sum of separate prices is called:",
    choices: [
      "Bundle pricing",
      "Captive pricing",
      "Geographic pricing",
      "Skimming",
    ],
    correctIndex: 0,
    explanation:
      "Bundling raises perceived value and total units sold; it works best when customers’ valuations of components differ.",
  },
  {
    id: 5320,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "Selling a razor cheaply and profiting from blade refills illustrates:",
    choices: [
      "Captive-product pricing",
      "Optional-feature pricing only",
      "Byproduct pricing",
      "Prestige pricing",
    ],
    correctIndex: 0,
    explanation:
      "Captive-product pricing sets a low price on the main item while earning margins on required consumables.",
  },
  {
    id: 5321,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "A cash discount of ‘2/10, net 30’ means the buyer may take:",
    choices: [
      "A 2% discount if payment is made within 10 days, otherwise full payment in 30 days",
      "10% off if paid within 2 days",
      "$2 off any order over $10",
      "30 days of free credit with no discount ever",
    ],
    correctIndex: 0,
    explanation:
      "Trade-credit terms state discount percent, discount period, and net due date: 2% off within 10 days, full amount due at day 30.",
  },
  {
    id: 5322,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "hard",
    prompt:
      "A firm cuts price 10% on a product whose contribution margin is 25%. To keep total contribution dollars constant, unit volume must rise approximately:",
    choices: [
      "67%",
      "10%",
      "25%",
      "150%",
    ],
    correctIndex: 0,
    explanation:
      "New margin ≈ 15 (from 25 after a 10% price cut). Required volume = 25 ÷ 15 − 1 ≈ 67%, showing how risky shallow-margin discounting is.",
  },
  {
    id: 5323,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "hard",
    prompt:
      "Two rival airlines repeatedly undercut each other’s fares until both lose money. This outcome demonstrates the danger of:",
    choices: [
      "Price-based competition in commoditized markets without differentiation",
      "Excessive use of frequent-flyer programs",
      "Too many distribution channels",
      "Overinvestment in customer service",
    ],
    correctIndex: 0,
    explanation:
      "When offerings are undifferentiated, price wars erode industry profits; differentiation shifts competition onto value instead of price.",
  },
  {
    id: 5324,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "hard",
    prompt:
      "Dynamic pricing adjusts prices in real time based on demand and inventory. Its most important risk for consumer trust is that:",
    choices: [
      "Customers who discover they paid more than others for the same item may feel exploited",
      "It always violates antitrust law regardless of design",
      "It eliminates revenue management benefits",
      "It requires printing new catalogs hourly",
    ],
    correctIndex: 0,
    explanation:
      "Perceived unfairness damages loyalty when price swings look arbitrary; transparency about how prices move mitigates backlash.",
  },
  {
    id: 5325,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "Psychological pricing that sets several sequential price points for good-better-best versions exploits consumers’ tendency to:",
    choices: [
      "Judge options relative to one another rather than in isolation",
      "Always select the cheapest version",
      "Ignore all price information",
      "Prefer round numbers exclusively",
    ],
    correctIndex: 0,
    explanation:
      "Relativity drives choice: a premium tier makes the middle tier look reasonable, shifting mix upward.",
  },
  {
    id: 5326,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "easy",
    prompt:
      "FOB shipping terms generally determine:",
    choices: [
      "Who pays transportation costs and where title transfers",
      "The product’s warranty length",
      "The advertising budget split",
      "Employee overtime rules",
    ],
    correctIndex: 0,
    explanation:
      "Free-on-board terms specify the point at which ownership and freight responsibility pass from seller to buyer.",
  },
  {
    id: 5327,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "A supermarket sells milk at barely above cost because shoppers use milk prices to judge overall store value. Milk functions as a:",
    choices: [
      "Traffic-building staple priced near cost",
      "Prestige item",
      "Captive product",
      "Byproduct",
    ],
    correctIndex: 0,
    explanation:
      "Frequently purchased staples anchor shoppers’ price perceptions, so stores price them keenly and profit elsewhere in the basket.",
  },
  {
    id: 5328,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "hard",
    prompt:
      "Under Robinson-Patman-type rules, charging competing wholesalers different prices for the same goods is most defensible when:",
    choices: [
      "Differences reflect genuine cost savings such as volume or delivery efficiencies",
      "The seller simply prefers one customer",
      "Prices change randomly each week",
      "The discounts are hidden from accounting records",
    ],
    correctIndex: 0,
    explanation:
      "Price differences between competing buyers must be justified by real cost differences or meeting competition, not favoritism.",
  },
  {
    id: 5329,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "Value-based pricing sets price according to:",
    choices: [
      "Customers’ perceived value of the benefits received",
      "The manufacturer’s historical costs plus inflation",
      "Whatever the nearest competitor charged last year",
      "Government-mandated formulas",
    ],
    correctIndex: 0,
    explanation:
      "Value-based pricing starts with what customers will pay given the benefits delivered, then manages costs to protect margin.",
  },
  {
    id: 5330,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "easy",
    prompt:
      "A seasonal discount is offered to encourage buyers to purchase:",
    choices: [
      "Out of season, smoothing production and inventory demands",
      "Only during peak weeks",
      "At higher prices than usual",
      "From competitors instead",
    ],
    correctIndex: 0,
    explanation:
      "Off-season discounts shift demand into slack periods, balancing capacity utilization across the year.",
  },
  {
    id: 5331,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "hard",
    prompt:
      "A subscription service tests raising price from $10 to $12 monthly. Churn rises from 4% to 7% of subscribers. Revenue per initial cohort of 1,000 subscribers in the first month moves from $10,000 to $11,760, but the key long-run concern is:",
    choices: [
      "Whether faster churn compounds until lifetime revenue falls despite higher monthly price",
      "Whether the logo needs redesigning",
      "Whether competitors will also raise prices automatically",
      "Whether taxes will rise proportionally",
    ],
    correctIndex: 0,
    explanation:
      "Higher churn shrinks the subscriber base every month; lifetime-value analysis, not first-month revenue, should guide the increase.",
  },
  {
    id: 5332,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "Reference pricing influences shoppers because they evaluate current prices against:",
    choices: [
      "An internal or advertised standard, such as the regular price or a competitor’s price",
      "The store’s rent expense",
      "Last year’s exchange rate",
      "The manufacturer’s payroll data",
    ],
    correctIndex: 0,
    explanation:
      "Buyers judge deals relative to reference points; ‘was $99, now $69’ framing makes the same price feel like greater value.",
  },
  {
    id: 5333,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "easy",
    prompt:
      "Markup is conventionally calculated as:",
    choices: [
      "The difference between selling price and cost, often expressed as a percentage",
      "Total revenue minus all company expenses",
      "Government tax on imported items",
      "A rebate paid to customers after purchase",
    ],
    correctIndex: 0,
    explanation:
      "Markup is the amount added to cost to reach selling price, stated either as a percentage of cost or of selling price.",
  },
  {
    id: 5334,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "hard",
    prompt:
      "A hotel’s rooms would otherwise go empty tonight. Since variable cost per occupied room is $15 and the standard rate is $180, selling remaining rooms at $70 through a flash app is rational because:",
    choices: [
      "Any price above variable cost contributes toward fixed costs that exist regardless",
      "Fixed costs disappear when rooms are empty",
      "Guests paying $70 will never return at full rate",
      "Full-rate guests always cancel when discounts appear",
    ],
    correctIndex: 0,
    explanation:
      "With perishable inventory and sunk fixed costs, marginal sales above variable cost add profit — provided regular-rate demand is protected.",
  },
  {
    id: 5335,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "Everyday low pricing (EDLP) differs from high-low pricing mainly because EDLP:",
    choices: [
      "Avoids frequent promotions by maintaining consistently low prices",
      "Runs deeper sales less often",
      "Charges the highest price in the market",
      "Changes prices daily by algorithm",
    ],
    correctIndex: 0,
    explanation:
      "EDLP builds trust and simplifies operations with stable low prices, while high-low relies on periodic promotions to drive traffic spikes.",
  },
  {
    id: 5336,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "hard",
    prompt:
      "A manufacturer suggests retail prices but retailers legally set their own. A supplier threatening to cut off dealers who discount too deeply risks violating:",
    choices: [
      "Resale price maintenance laws governing vertical price agreements",
      "Trademark registration rules",
      "Minimum wage statutes",
      "Environmental disposal regulations",
    ],
    correctIndex: 0,
    explanation:
      "Coercing dealers to honor resale prices constitutes resale price maintenance, which antitrust law treats as unlawful restraint.",
  },
  {
    id: 5337,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "Freight absorption means the seller:",
    choices: [
      "Pays part or all of the shipping cost to compete effectively in distant markets",
      "Charges customers double for freight",
      "Refuses to ship beyond its home region",
      "Buys its own trucks for personal use",
    ],
    correctIndex: 0,
    explanation:
      "Absorbing freight lets sellers match rivals’ landed prices in far territories, expanding reach at controlled cost.",
  },
  {
    id: 5338,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "easy",
    prompt:
      "A trade discount offered to channel members differs from a consumer coupon because it:",
    choices: [
      "Compensates intermediaries for functions they perform, such as stocking and selling",
      "Appears only in consumer media",
      "Is illegal in all circumstances",
      "Applies solely to damaged merchandise",
    ],
    correctIndex: 0,
    explanation:
      "Trade (functional) discounts reward channel members for performing distribution tasks, unlike consumer promotions aimed at end buyers.",
  },
  {
    id: 5339,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "hard",
    prompt:
      "Demand for a component is derived from demand for the finished product. If auto sales fall 20%, steel suppliers should expect:",
    choices: [
      "Declining orders roughly tracking vehicle production, since their demand is derived",
      "Unchanged orders because steel is independent",
      "Rising orders as factories stockpile inputs",
      "No relationship whatsoever to autos",
    ],
    correctIndex: 0,
    explanation:
      "Industrial demand is derived from consumer demand downstream; falling final sales cascade backward through the supply chain.",
  },
  {
    id: 5340,
    clusterId: "marketing",
    category: "Pricing",
    difficulty: "medium",
    prompt:
      "A gym advertises membership at $29 per month but requires a $199 initiation fee. This structure illustrates:",
    choices: [
      "Two-part (split) pricing combining a recurring fee with a fixed charge",
      "Pure bundling with no separate fees",
      "Penetration pricing with no additional costs",
      "Randomized dynamic pricing",
    ],
    correctIndex: 0,
    explanation:
      "Split pricing pairs a low recurring rate with an upfront fee, lowering the advertised entry price while securing commitment.",
  },
  {
    id: 5341,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "easy",
    prompt:
      "The five major elements of the promotional mix are advertising, personal selling, sales promotion, public relations, and:",
    choices: [
      "Direct marketing",
      "Warehousing",
      "Product design",
      "Credit approval",
    ],
    correctIndex: 0,
    explanation:
      "Direct marketing — email, mail, telemarketing — completes the promotional mix as a targeted, measurable communication tool.",
  },
  {
    id: 5342,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "easy",
    prompt:
      "The AIDA model describes promotional objectives as moving the audience through:",
    choices: [
      "Attention, interest, desire, action",
      "Analysis, investment, distribution, audit",
      "Awareness, inventory, delivery, accounting",
      "Attention, income, demand, adoption",
    ],
    correctIndex: 0,
    explanation:
      "AIDA traces persuasion from capturing attention to building interest and desire and finally prompting purchase action.",
  },
  {
    id: 5343,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "easy",
    prompt:
      "A pull strategy directs promotion primarily at:",
    choices: [
      "Final consumers so they demand the product from retailers",
      "Wholesalers only",
      "Factory employees",
      "Government regulators",
    ],
    correctIndex: 0,
    explanation:
      "Pull strategies create consumer demand that ‘pulls’ products through the channel; push strategies promote toward intermediaries instead.",
  },
  {
    id: 5344,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "easy",
    prompt:
      "Trade shows, dealer contests, and free merchandise for retailers are forms of:",
    choices: [
      "Trade-oriented sales promotion",
      "Consumer advertising",
      "Publicity stunts",
      "Corporate philanthropy",
    ],
    correctIndex: 0,
    explanation:
      "Trade promotions target channel members, motivating them to stock, display, and push the manufacturer’s products.",
  },
  {
    id: 5345,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "easy",
    prompt:
      "A press release announcing a company’s new sustainability initiative is a public relations tool designed to:",
    choices: [
      "Earn favorable media coverage and build goodwill",
      "Replace all paid advertising permanently",
      "Fulfill tax reporting duties",
      "Negotiate supplier contracts",
    ],
    correctIndex: 0,
    explanation:
      "PR tools like press releases cultivate a positive public image through earned media rather than paid placements.",
  },
  {
    id: 5346,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "A push strategy is most appropriate when:",
    choices: [
      "The product needs strong intermediary support and shelf presence to reach buyers",
      "Consumers already search out the brand by name",
      "The budget supports only mass consumer ads",
      "No distribution exists yet",
    ],
    correctIndex: 0,
    explanation:
      "Push tactics trade incentives and selling effort to intermediaries when retailer enthusiasm determines availability.",
  },
  {
    id: 5347,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "A sweepstakes differs from a contest because a sweepstakes winner is chosen by:",
    choices: [
      "Chance, with no skill involved",
      "Judged skill or merit",
      "Seniority of customers",
      "Random store assignment",
    ],
    correctIndex: 0,
    explanation:
      "Sweepstakes award prizes by luck; contests require skill-based entries, which affects legal treatment in many jurisdictions.",
  },
  {
    id: 5348,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "A brand spokesperson caught in scandal creates which type of promotional risk?",
    choices: [
      "Negative association transferring from the endorser to the brand",
      "Automatic loss of trademark protection",
      "Immediate warehouse shortages",
      "Higher slotting allowances",
    ],
    correctIndex: 0,
    explanation:
      "Endorsements link brand image to the endorser’s behavior; scandals can force costly campaign withdrawals and image repair.",
  },
  {
    id: 5349,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "Comparative advertising that names a rival must be careful to avoid:",
    choices: [
      "False or misleading claims about the competitor’s product",
      "Mentioning any competitor under any circumstance",
      "Showing its own product benefits",
      "Using any visuals whatsoever",
    ],
    correctIndex: 0,
    explanation:
      "Comparative ads are legal when claims are truthful and substantiated; deception invites lawsuits and regulatory action.",
  },
  {
    id: 5350,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "Loyalty programs, samples, and rebates share one defining feature of sales promotion: they provide:",
    choices: [
      "A short-term incentive to purchase now",
      "Long-term brand positioning only",
      "Unpaid editorial coverage",
      "Face-to-face consultative selling",
    ],
    correctIndex: 0,
    explanation:
      "Sales promotion adds immediate incentives on top of baseline value, accelerating purchase timing.",
  },
  {
    id: 5351,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "hard",
    prompt:
      "A brand runs constant coupons. Sales rise during each offer but fall below baseline afterward, and bargain hunters never convert to full-price loyalty. The diagnosis is that:",
    choices: [
      "Overused promotions train customers to wait for deals and erode price integrity",
      "Coupons always build lasting loyalty regardless of frequency",
      "The product’s core value is too strong",
      "Distribution is too narrow",
    ],
    correctIndex: 0,
    explanation:
      "Promotion dependence shifts purchases in time without changing attitudes, degrading margins and reference prices.",
  },
  {
    id: 5352,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "hard",
    prompt:
      "Measuring an ad campaign’s return on advertising spend (ROAS) requires comparing:",
    choices: [
      "Revenue attributable to the campaign against the campaign’s cost",
      "Total company profit against employee count",
      "Impressions against warehouse capacity",
      "Ad length against production year",
    ],
    correctIndex: 0,
    explanation:
      "ROAS = attributed revenue ÷ ad cost, letting managers rank campaigns by financial efficiency.",
  },
  {
    id: 5353,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "In the maturity stage, reminder advertising is appropriate because the goal shifts to:",
    choices: [
      "Keeping established brands in consumers’ minds rather than informing them anew",
      "Explaining basic product functions for the first time",
      "Introducing an unknown name",
      "Recruiting sales staff",
    ],
    correctIndex: 0,
    explanation:
      "Mature products need light-touch reminder messages to maintain awareness and habitual purchase, not heavy education.",
  },
  {
    id: 5354,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "easy",
    prompt:
      "Product placement in movies and TV shows is a form of:",
    choices: [
      "Branded entertainment within the promotional mix",
      "Personal selling",
      "Trade regulation",
      "Inventory control",
    ],
    correctIndex: 0,
    explanation:
      "Placement embeds brands in content audiences choose to watch, skirting ad avoidance while building familiarity.",
  },
  {
    id: 5355,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "Crisis communication best practice after a product recall is to:",
    choices: [
      "Respond quickly, take responsibility where warranted, and communicate corrective actions transparently",
      "Stay silent until media attention fades",
      "Blame customers publicly",
      "Deny everything without investigation",
    ],
    correctIndex: 0,
    explanation:
      "Speed, honesty, and visible corrective action protect trust; silence and denial amplify reputational damage.",
  },
  {
    id: 5356,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "hard",
    prompt:
      "An advertiser reaches 1 million people but most are outside the target market, while a niche magazine reaches only 50,000 highly qualified readers. Cost per thousand impressions (CPM) alone would mislead because it ignores:",
    choices: [
      "Audience relevance and conversion potential",
      "The magazine’s paper quality",
      "The number of creative revisions",
      "Seasonal weather patterns",
    ],
    correctIndex: 0,
    explanation:
      "Efficient media buying weighs cost against target-audience fit; cheap irrelevant impressions waste budget despite low CPM.",
  },
  {
    id: 5357,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "easy",
    prompt:
      "Institutional advertising promotes:",
    choices: [
      "The company’s overall image rather than a specific product",
      "One clearance sale this weekend only",
      "Employee payroll services",
      "Competitor brands by name",
    ],
    correctIndex: 0,
    explanation:
      "Institutional (corporate) advertising builds reputation and goodwill for the organization as a whole.",
  },
  {
    id: 5358,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "Sampling as a sales-promotion technique works best when:",
    choices: [
      "Trial experience itself demonstrates clear product superiority",
      "The product performs identically to rivals",
      "Purchase cycles span many years",
      "The product is dangerous to use untrained",
    ],
    correctIndex: 0,
    explanation:
      "Samples convert when firsthand experience reveals advantages words cannot convey — and when repeat purchase follows quickly.",
  },
  {
    id: 5359,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "hard",
    prompt:
      "Attribution modeling in digital advertising attempts to determine:",
    choices: [
      "Which touchpoints along the customer journey deserve credit for the conversion",
      "Which employees should receive bonuses",
      "How much raw material each order consumes",
      "Which warehouse should close next",
    ],
    correctIndex: 0,
    explanation:
      "Customers see multiple messages before buying; attribution models allocate conversion credit across those touchpoints to guide spending.",
  },
  {
    id: 5360,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "Word-of-mouth marketing is valuable but hard to control, so firms often stimulate it through:",
    choices: [
      "Referral incentives and shareable experiences worth talking about",
      "Reducing product quality deliberately",
      "Banning online reviews",
      "Eliminating customer service",
    ],
    correctIndex: 0,
    explanation:
      "Companies cannot script conversations, but referral rewards and remarkable experiences reliably generate authentic advocacy.",
  },
  {
    id: 5361,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "easy",
    prompt:
      "Frequency in media planning refers to:",
    choices: [
      "The average number of times a person sees the message",
      "The total number of different people exposed once",
      "The speed of delivery trucks",
      "The number of products in the line",
    ],
    correctIndex: 0,
    explanation:
      "Reach counts unique people exposed; frequency measures repetition per person — both drive effective awareness.",
  },
  {
    id: 5362,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "hard",
    prompt:
      "A small business with a tiny budget needs immediate local foot traffic this weekend. The most efficient promotional choice is:",
    choices: [
      "Highly targeted local digital ads plus a time-limited in-store promotion",
      "A national television campaign",
      "A year-long institutional branding program",
      "Sponsoring an overseas sports team",
    ],
    correctIndex: 0,
    explanation:
      "Limited budgets demand precision targeting and urgency-creating offers matched to the immediate objective.",
  },
  {
    id: 5363,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "Native advertising is distinguished from traditional display ads because native ads:",
    choices: [
      "Match the look and feel of the surrounding content platform",
      "Always appear only on television",
      "Are never labeled or disclosed",
      "Cannot include any brand information",
    ],
    correctIndex: 0,
    explanation:
      "Native formats blend into editorial environments; ethical practice still requires disclosure that content is sponsored.",
  },
  {
    id: 5364,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "Premiums in sales promotion are:",
    choices: [
      "Merchandise offered free or at low cost with a purchase, such as a toy in a cereal box",
      "Higher prices charged on weekends",
      "Fees paid for shelf space",
      "Penalties for late payment",
    ],
    correctIndex: 0,
    explanation:
      "Premiums add tangible extra value tied to purchase, differentiating offers and encouraging trial or larger orders.",
  },
  {
    id: 5365,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "hard",
    prompt:
      "An ad generates high click-through rates but almost no sales. The most likely problem lies in:",
    choices: [
      "Weak post-click experience — landing page, offer, or product-market mismatch",
      "Insufficient click volume",
      "Colors used in the banner",
      "Too few impressions served",
    ],
    correctIndex: 0,
    explanation:
      "Clicks measure attention, not persuasion; conversion failures usually stem from what happens after the click.",
  },
  {
    id: 5366,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "easy",
    prompt:
      "Point-of-purchase displays belong to which promotional element?",
    choices: [
      "Sales promotion",
      "Publicity",
      "Personal selling",
      "Direct mail",
    ],
    correctIndex: 0,
    explanation:
      "In-store displays are merchandising/sales-promotion tools that trigger purchases at the moment of decision.",
  },
  {
    id: 5367,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "Advocacy advertising in which a company states positions on public issues is designed primarily to:",
    choices: [
      "Shape opinion about the company’s stance and values",
      "Clear excess inventory quickly",
      "Announce weekly specials",
      "Train new employees",
    ],
    correctIndex: 0,
    explanation:
      "Advocacy (issue) advertising influences public debate and perception of the firm, not immediate product sales.",
  },
  {
    id: 5368,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "hard",
    prompt:
      "Budgeting promotion by allocating whatever remains after other expenses is criticized mainly because it:",
    choices: [
      "Treats communication as a leftover rather than tying spending to objectives",
      "Spends too little on payroll",
      "Is illegal in most countries",
      "Guarantees overspending on media",
    ],
    correctIndex: 0,
    explanation:
      "Affordable/remaining-funds budgeting disconnects promotion from goals; objective-and-task methods link dollars to desired outcomes.",
  },
  {
    id: 5369,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "medium",
    prompt:
      "Cooperative advertising between a manufacturer and retailer means they:",
    choices: [
      "Share the cost of advertising that features both the brand and the store",
      "Merge into one corporation",
      "Split warehouse expenses",
      "Alternate years running all ads solo",
    ],
    correctIndex: 0,
    explanation:
      "Co-op ad programs stretch both parties’ budgets while reinforcing brand availability at the featured retailer.",
  },
  {
    id: 5370,
    clusterId: "marketing",
    category: "Promotion",
    difficulty: "hard",
    prompt:
      "A campaign wins creative awards and high recall scores, yet market share stays flat. The most useful next diagnostic is to examine:",
    choices: [
      "Whether the message persuades the right target audience to act, not just whether it is remembered",
      "Whether the awards ceremony was televised",
      "Whether competitors also won awards",
      "Whether the agency billed hourly or flat fee",
    ],
    correctIndex: 0,
    explanation:
      "Recall without behavioral change suggests creative appeal misaligned with purchase motives or targeting — persuasion and action metrics matter more than fame.",
  },
  {
    id: 5371,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "easy",
    prompt:
      "The seven steps of the sales process, in order, are: prospecting, preapproach, approach, presentation, handling objections, closing, and:",
    choices: [
      "Follow-up",
      "Advertising",
      "Warehousing",
      "Recruiting",
    ],
    correctIndex: 0,
    explanation:
      "Follow-up after the sale secures satisfaction and repeat business, completing the selling cycle.",
  },
  {
    id: 5372,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "easy",
    prompt:
      "A qualified prospect is one who:",
    choices: [
      "Has the need, authority, and ability to buy",
      "Has already purchased from a competitor forever",
      "Works for the same company",
      "Answers every advertisement",
    ],
    correctIndex: 0,
    explanation:
      "Qualifying checks that the prospect has a genuine need, decision-making authority, and financial capacity — the MAD framework’s core.",
  },
  {
    id: 5373,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "easy",
    prompt:
      "Open-ended questions are valuable in sales conversations because they:",
    choices: [
      "Encourage prospects to share needs and information in their own words",
      "Can be answered with only yes or no",
      "Shorten every meeting to two minutes",
      "Avoid building any rapport",
    ],
    correctIndex: 0,
    explanation:
      "Open questions uncover needs, priorities, and objections that closed questions miss, feeding an effective consultative presentation.",
  },
  {
    id: 5374,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "easy",
    prompt:
      "A feature-benefit chart helps salespeople:",
    choices: [
      "Translate what a product has into what it does for each customer",
      "Track warehouse shipments",
      "Set federal interest rates",
      "Design store layouts",
    ],
    correctIndex: 0,
    explanation:
      "Mapping features to benefits prepares sellers to personalize value statements to each prospect’s situation.",
  },
  {
    id: 5375,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "easy",
    prompt:
      "The best time to ask for the sale is when:",
    choices: [
      "Buying signals appear, such as questions about delivery or ownership",
      "The presentation begins, before any needs are known",
      "The prospect says nothing at all",
      "A competitor has already been chosen",
    ],
    correctIndex: 0,
    explanation:
      "Buying signals — questions about terms, timing, or use — indicate readiness; skilled sellers close when they appear.",
  },
  {
    id: 5376,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "easy",
    prompt:
      "Service quality after the sale influences future revenue mainly because:",
    choices: [
      "Retaining customers costs far less than acquiring new ones",
      "Complaints always increase profits",
      "Warranties are legally optional everywhere",
      "Repeat buyers never refer others",
    ],
    correctIndex: 0,
    explanation:
      "Post-sale service drives retention and referrals; keeping a customer is substantially cheaper than winning a replacement.",
  },
  {
    id: 5377,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "A prospect objects, ‘I’ve never heard of your company.’ The most effective response is to:",
    choices: [
      "Provide credible proof such as testimonials, case studies, and references",
      "Argue that the prospect should feel ashamed for not knowing the brand",
      "Immediately cut the price in half",
      "End the meeting politely",
    ],
    correctIndex: 0,
    explanation:
      "Unfamiliarity objections are trust issues; third-party evidence resolves them far better than discounts or defensiveness.",
  },
  {
    id: 5378,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "Consultative (relationship) selling differs from transactional selling because it emphasizes:",
    choices: [
      "Understanding long-term customer needs and acting as a trusted advisor",
      "Closing as many one-time deals as fast as possible",
      "Reading scripts without listening",
      "Minimizing contact after payment",
    ],
    correctIndex: 0,
    explanation:
      "Consultative sellers invest in diagnosing problems and building ongoing relationships, which raises lifetime customer value.",
  },
  {
    id: 5379,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "The ‘feel-felt-found’ technique responds to an objection by:",
    choices: [
      "Empathizing, sharing how others felt similarly, then showing what they found after buying",
      "Ignoring the objection entirely",
      "Offering three free samples immediately",
      "Asking the manager to leave the room",
    ],
    correctIndex: 0,
    explanation:
      "This classic method validates the concern, normalizes it through others’ experience, and reframes it with positive outcomes.",
  },
  {
    id: 5380,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "A trial close such as ‘How does this compare with what you use today?’ is designed to:",
    choices: [
      "Gauge the prospect’s receptiveness before asking for commitment",
      "Deliver the final invoice",
      "Replace the entire presentation",
      "Introduce a competitor’s product",
    ],
    correctIndex: 0,
    explanation:
      "Trial closes test temperature without pressure, revealing whether to proceed, adjust, or move toward the final close.",
  },
  {
    id: 5381,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "In B2B selling, identifying all members of the buying center matters because:",
    choices: [
      "Multiple people influence the decision — users, influencers, buyers, and gatekeepers",
      "Only the CEO ever signs anything",
      "Purchasing agents decide everything alone by law",
      "Committees never exist in firms",
    ],
    correctIndex: 0,
    explanation:
      "Organizational purchases involve several roles; addressing only one member leaves other influences unaddressed and risks losing the sale.",
  },
  {
    id: 5382,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "Active listening during a sales call means:",
    choices: [
      "Paraphrasing and confirming understanding while letting the prospect talk",
      "Planning your next sentence while the prospect speaks",
      "Interrupting to demonstrate expertise",
      "Speaking at least 80% of the time",
    ],
    correctIndex: 0,
    explanation:
      "Top sellers listen more than they talk, using paraphrase and confirmation to surface accurate needs.",
  },
  {
    id: 5383,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "hard",
    prompt:
      "A rep discovers mid-presentation that the product discussed cannot meet the prospect’s compliance requirements. The most ethical and effective action is to:",
    choices: [
      "Acknowledge the gap honestly and explore whether another offering fits the requirement",
      "Downplay the requirement and hope the auditor misses it",
      "Promise undocumented customizations anyway",
      "Continue pitching irrelevant features",
    ],
    correctIndex: 0,
    explanation:
      "Honesty preserves long-term credibility; overselling noncompliant solutions creates churn, liability, and lost referrals.",
  },
  {
    id: 5384,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "hard",
    prompt:
      "Sales quotas exist primarily to:",
    choices: [
      "Set measurable performance expectations that align selling effort with company goals",
      "Punish employees randomly",
      "Replace marketing planning entirely",
      "Guarantee industry-wide price fixing",
    ],
    correctIndex: 0,
    explanation:
      "Quotas translate revenue targets into individual accountability and help forecast, coach, and compensate fairly.",
  },
  {
    id: 5385,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "hard",
    prompt:
      "A CRM pipeline shows ten deals stalled at the proposal stage for over 60 days. The best managerial response is to:",
    choices: [
      "Review stalled deals to identify common blockers and coach reps on re-engagement or disqualification",
      "Automatically mark all stalled deals as won",
      "Delete the deals from the system",
      "Double every quota immediately",
    ],
    correctIndex: 0,
    explanation:
      "Pipeline analysis reveals process friction; disciplined review either revives genuine opportunities or clears inflated forecasts.",
  },
  {
    id: 5386,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "Nonverbal communication affects selling because:",
    choices: [
      "Body language, eye contact, and tone shape trust alongside spoken words",
      "Words alone carry all meaning in every culture",
      "Appearance is never noticed by buyers",
      "Silence is always interpreted as agreement",
    ],
    correctIndex: 0,
    explanation:
      "Buyers read nonverbal cues heavily; mismatched tone or closed posture undermines even well-worded pitches.",
  },
  {
    id: 5387,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "easy",
    prompt:
      "Cold canvassing refers to:",
    choices: [
      "Contacting potential customers who have had no prior relationship with the firm",
      "Revisiting loyal repeat buyers",
      "Selling only in winter months",
      "Distributing free calendars",
    ],
    correctIndex: 0,
    explanation:
      "Cold calling or canvassing reaches unqualified strangers; conversion is low but it expands the prospect base.",
  },
  {
    id: 5388,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "An endless-chain referral program asks each satisfied customer to:",
    choices: [
      "Recommend additional prospects, growing the list continuously",
      "Pay for the next customer’s order",
      "Sign exclusive lifetime contracts",
      "Handle the company’s shipping",
    ],
    correctIndex: 0,
    explanation:
      "Referrals convert better than cold contacts because trust transfers from the existing relationship to the seller.",
  },
  {
    id: 5389,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "hard",
    prompt:
      "A buyer signals the deal is nearly closed but requests an unrealistic discount at the last minute. The strongest professional response balances:",
    choices: [
      "Holding price integrity while offering value-based alternatives such as adjusted terms or scope",
      "Instantly agreeing to any demand to save the sale",
      "Walking out without discussion",
      "Promising undisclosed future rebates verbally",
    ],
    correctIndex: 0,
    explanation:
      "Last-minute discount demands reward pressure tactics; trading value rather than cutting price protects margin and precedent.",
  },
  {
    id: 5390,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "hard",
    prompt:
      "Territory design that assigns reps based on customer potential rather than geography alone aims to:",
    choices: [
      "Equalize earning opportunity and workload so effort aligns with market value",
      "Ensure every rep drives the fewest miles possible regardless of revenue",
      "Concentrate all accounts in one city",
      "Eliminate the need for sales managers",
    ],
    correctIndex: 0,
    explanation:
      "Balanced territories keep motivation high and coverage complete by matching effort opportunity across assignments.",
  },
  {
    id: 5391,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "easy",
    prompt:
      "Product demonstrations are most persuasive when they:",
    choices: [
      "Show benefits relevant to the specific prospect’s situation",
      "Display every feature regardless of interest",
      "Run longer than an hour without pause",
      "Avoid letting the customer touch anything",
    ],
    correctIndex: 0,
    explanation:
      "Tailored demos prove claimed benefits in the buyer’s own context, making value concrete and memorable.",
  },
  {
    id: 5392,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "The summary close works by:",
    choices: [
      "Restating agreed-upon benefits before asking for the order",
      "Listing every objection ever raised",
      "Comparing prices across five competitors aloud",
      "Ending meetings without next steps",
    ],
    correctIndex: 0,
    explanation:
      "Summarizing confirmed points of agreement builds momentum toward a natural request for the purchase decision.",
  },
  {
    id: 5393,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "When a prospect says no, professional sellers should first:",
    choices: [
      "Explore whether the no reflects a solvable concern or a genuine lack of fit",
      "Assume the sale is permanently dead",
      "Lower the price immediately",
      "Send daily emails until yes",
    ],
    correctIndex: 0,
    explanation:
      "Diagnosing the objection distinguishes addressable hesitations from true non-fit, guiding respectful follow-up or graceful exit.",
  },
  {
    id: 5394,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "hard",
    prompt:
      "Compensation plans mixing salary with commission aim to balance:",
    choices: [
      "Income security for reps with incentive to grow sales",
      "Pure risk borne entirely by the employee",
      "Fixed costs with zero variability",
      "Legal minimum wage avoidance schemes",
    ],
    correctIndex: 0,
    explanation:
      "Base pay provides stability; commissions motivate performance — blended plans attract talent while driving results.",
  },
  {
    id: 5395,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "easy",
    prompt:
      "Ethical selling requires that claims made to customers be:",
    choices: [
      "Truthful and substantiated",
      "Exaggerated to close faster",
      "Kept vague to allow flexibility",
      "Different for every buyer regardless of facts",
    ],
    correctIndex: 0,
    explanation:
      "Truthful representation is both a legal duty and the foundation of repeat business and reputation.",
  },
  {
    id: 5396,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "Suggestive selling at the register (‘Would you like fries with that?’) increases sales because it:",
    choices: [
      "Reminds customers of complementary items at the moment of highest purchase intent",
      "Forces customers to buy unwanted goods",
      "Reduces average transaction size deliberately",
      "Replaces all advertising spending",
    ],
    correctIndex: 0,
    explanation:
      "Timely suggestions capitalize on established willingness to buy, lifting average transaction value at minimal cost.",
  },
  {
    id: 5397,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "hard",
    prompt:
      "A rep’s funnel shows abundant leads but a steep drop between demonstration and close. The most targeted coaching focus is:",
    choices: [
      "Strengthening needs-based presentations, objection handling, and closing skills late in the process",
      "Generating even more raw leads",
      "Cutting prices across the board",
      "Reducing demonstrations offered",
    ],
    correctIndex: 0,
    explanation:
      "Funnel analysis isolates the weak stage; late-stage slippage points to persuasion skill gaps rather than lead volume.",
  },
  {
    id: 5398,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "medium",
    prompt:
      "Customer lifetime value thinking changes selling behavior by encouraging reps to:",
    choices: [
      "Prioritize long-term fit and retention over one-time aggressive closes",
      "Maximize each single transaction regardless of consequences",
      "Avoid recording customer history",
      "Treat returns as personal victories",
    ],
    correctIndex: 0,
    explanation:
      "When compensation and strategy reflect LTV, sellers nurture relationships whose cumulative profit exceeds any single sale.",
  },
  {
    id: 5399,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "easy",
    prompt:
      "Before contacting a prospect, reviewing their website, LinkedIn profile, and recent news is part of:",
    choices: [
      "Preapproach preparation",
      "The final contract signing",
      "Warehouse auditing",
      "Public relations measurement",
    ],
    correctIndex: 0,
    explanation:
      "Preapproach research lets the seller personalize the opening and anticipate needs, sharply raising meeting effectiveness.",
  },
  {
    id: 5400,
    clusterId: "marketing",
    category: "Selling",
    difficulty: "hard",
    prompt:
      "Two reps sell identical products. One quotes features immediately; the other spends twice as long questioning before presenting yet closes far more often. The lesson is that:",
    choices: [
      "Diagnosing needs before prescribing solutions dramatically improves persuasion effectiveness",
      "Talking speed determines sales success",
      "Products sell themselves without any process",
      "Longer meetings always lose sales",
    ],
    correctIndex: 0,
    explanation:
      "Needs-first selling ensures the presentation maps directly to the buyer’s problems, making the solution feel inevitable rather than pushed.",
  },
  {
    id: 5401,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "easy",
    prompt:
      "Pay-per-click (PPC) advertising charges the advertiser only when:",
    choices: [
      "A user clicks the ad",
      "The ad is designed",
      "A competitor lowers a bid",
      "The website loads slowly",
    ],
    correctIndex: 0,
    explanation:
      "PPC models bill per click, making costs directly tied to traffic delivered rather than mere exposure.",
  },
  {
    id: 5402,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "easy",
    prompt:
      "Organic search results differ from paid search results because organic listings:",
    choices: [
      "Are earned through relevance and site quality rather than bid payments",
      "Always appear at the very top of the page",
      "Require no content investment whatsoever",
      "Cannot be influenced by keywords",
    ],
    correctIndex: 0,
    explanation:
      "Search engines rank organic results by algorithmic relevance and authority; paid placements are bought through auctions.",
  },
  {
    id: 5403,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "easy",
    prompt:
      "Click-through rate (CTR) is calculated as:",
    choices: [
      "Clicks divided by impressions, expressed as a percentage",
      "Sales divided by employees",
      "Bounces divided by pages",
      "Followers divided by posts",
    ],
    correctIndex: 0,
    explanation:
      "CTR measures how often people who see an ad actually click it — clicks ÷ impressions × 100.",
  },
  {
    id: 5404,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "easy",
    prompt:
      "Retargeting (remarketing) serves ads to users who:",
    choices: [
      "Previously visited the site or interacted with the brand but did not convert",
      "Have never heard of the brand",
      "Opted out of all marketing permanently",
      "Work at the advertising agency",
    ],
    correctIndex: 0,
    explanation:
      "Retargeting re-engages warm audiences who showed interest, typically converting at much higher rates than cold traffic.",
  },
  {
    id: 5405,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "easy",
    prompt:
      "Email segmentation improves campaign performance primarily by:",
    choices: [
      "Sending more relevant messages to smaller, defined groups of subscribers",
      "Guaranteeing delivery to every inbox",
      "Increasing unsubscribe rates intentionally",
      "Eliminating the need for subject lines",
    ],
    correctIndex: 0,
    explanation:
      "Relevance drives opens and clicks; segmented lists consistently outperform one-size-fits-all blasts.",
  },
  {
    id: 5406,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "A bounce rate of 75% on a landing page most likely indicates:",
    choices: [
      "Visitors leave without engaging, suggesting mismatched expectations or poor page experience",
      "Extremely successful conversion",
      "Too many returning customers",
      "Server costs are too low",
    ],
    correctIndex: 0,
    explanation:
      "High bounce rates signal that the page fails to meet visitor expectations set by the ad or link that brought them.",
  },
  {
    id: 5407,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "Customer acquisition cost (CAC) is $80 and average customer lifetime value is $60. The business model is:",
    choices: [
      "Unsustainable as structured, since acquiring customers costs more than they return",
      "Highly profitable",
      "Break-even by definition",
      "Impossible to evaluate with these numbers",
    ],
    correctIndex: 0,
    explanation:
      "When CAC exceeds LTV, each new customer destroys value unless retention or pricing improves substantially.",
  },
  {
    id: 5408,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "Search engine marketing differs from search engine optimization in that SEM:",
    choices: [
      "Includes paid placement such as PPC alongside or instead of organic efforts",
      "Relies purely on unpaid rankings",
      "Applies only to social media platforms",
      "Requires no keyword research",
    ],
    correctIndex: 0,
    explanation:
      "SEM encompasses paid search tactics like PPC bidding; SEO is specifically the organic-ranking discipline.",
  },
  {
    id: 5409,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "Content marketing attracts customers primarily by:",
    choices: [
      "Providing genuinely useful information that builds trust and authority over time",
      "Hiding the brand identity in every post",
      "Copying competitor articles verbatim",
      "Sending identical messages to purchased lists",
    ],
    correctIndex: 0,
    explanation:
      "Valuable content earns attention and credibility, drawing buyers toward the brand when they are ready to purchase.",
  },
  {
    id: 5410,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "An influencer’s engagement rate matters more than follower count because:",
    choices: [
      "Active, responsive audiences actually see and act on content",
      "Follower numbers are always accurate public records",
      "Large accounts never use automation",
      "Engagement cannot be measured",
    ],
    correctIndex: 0,
    explanation:
      "Inflated follower counts with tiny engagement indicate fake or passive audiences; genuine interaction predicts real impact.",
  },
  {
    id: 5411,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "hard",
    prompt:
      "Third-party cookie deprecation forces advertisers to shift toward:",
    choices: [
      "First-party data collection through owned channels and contextual targeting",
      "Buying more third-party cookies in advance",
      "Abandoning digital measurement entirely",
      "Random untargeted display buying",
    ],
    correctIndex: 0,
    explanation:
      "With cross-site tracking restricted, brands must gather consented first-party data via email, apps, and loyalty programs.",
  },
  {
    id: 5412,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "hard",
    prompt:
      "A/B testing produces valid conclusions only when:",
    choices: [
      "Traffic is randomly split between variants and differences are statistically significant",
      "One version runs in January and the other in July",
      "The team prefers one design beforehand",
      "Each variant is shown to different countries",
    ],
    correctIndex: 0,
    explanation:
      "Simultaneous random assignment isolates the tested variable; seasonal splits or biased allocation confound results.",
  },
  {
    id: 5413,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "Marketing automation platforms add value mainly by:",
    choices: [
      "Triggering personalized messages based on user behavior at scale",
      "Writing strategy without human input",
      "Removing the need for any creative assets",
      "Guaranteeing viral reach",
    ],
    correctIndex: 0,
    explanation:
      "Automation delivers the right message based on actions — abandoned carts, downloads, milestones — without manual sending.",
  },
  {
    id: 5414,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "easy",
    prompt:
      "User-generated content (UGC) benefits brands chiefly because it:",
    choices: [
      "Provides authentic peer endorsements at relatively low cost",
      "Is fully controlled by the legal department",
      "Never requires permission or moderation",
      "Replaces product development",
    ],
    correctIndex: 0,
    explanation:
      "Content created by real customers carries authenticity ads lack, though brands must still secure rights and moderate appropriately.",
  },
  {
    id: 5415,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "Conversion rate optimization (CRO) focuses on:",
    choices: [
      "Increasing the percentage of visitors who complete desired actions",
      "Maximizing raw traffic regardless of behavior",
      "Reducing website speed deliberately",
      "Expanding ad budgets automatically",
    ],
    correctIndex: 0,
    explanation:
      "CRO improves the yield from existing traffic through testing and UX improvements, often cheaper than buying more visitors.",
  },
  {
    id: 5416,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "hard",
    prompt:
      "Last-click attribution systematically undervalues which campaign types?",
    choices: [
      "Upper-funnel awareness channels that start customer journeys",
      "Branded search ads clicked just before purchase",
      "Checkout-page promotions",
      "Retargeting emails sent on the final day",
    ],
    correctIndex: 0,
    explanation:
      "Assigning all credit to the final touch starves discovery channels that initiate demand, biasing budget toward bottom-funnel tactics.",
  },
  {
    id: 5417,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "easy",
    prompt:
      "Key performance indicators (KPIs) should be chosen so that they:",
    choices: [
      "Directly reflect progress toward specific marketing objectives",
      "Impress outsiders with large raw numbers",
      "Remain identical for every company in every industry",
      "Change weekly to keep teams alert",
    ],
    correctIndex: 0,
    explanation:
      "KPIs translate objectives into measurable signals; vanity metrics that don’t track goals mislead decision making.",
  },
  {
    id: 5418,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "Social listening tools help marketers primarily by:",
    choices: [
      "Monitoring online conversations to surface sentiment, trends, and complaints early",
      "Blocking all negative comments automatically",
      "Deleting competitor accounts",
      "Scheduling employee payroll",
    ],
    correctIndex: 0,
    explanation:
      "Listening captures what customers say organically, informing product fixes, crisis response, and content ideas.",
  },
  {
    id: 5419,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "hard",
    prompt:
      "An e-commerce site spends heavily on traffic but cart abandonment sits at 80%. The highest-leverage fix is usually:",
    choices: [
      "Streamlining checkout — fewer steps, transparent shipping costs, guest options",
      "Doubling ad spend immediately",
      "Adding more products to the catalog",
      "Redesigning the company logo",
    ],
    correctIndex: 0,
    explanation:
      "Abandonment at checkout stems from friction and surprise costs there; fixing the funnel beats buying more traffic into a leaky process.",
  },
  {
    id: 5420,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "Affiliate marketing compensates partners:",
    choices: [
      "Based on results they drive, such as sales or leads, usually tracked with unique links",
      "With flat yearly salaries regardless of output",
      "Only when no sale occurs",
      "Through government grants",
    ],
    correctIndex: 0,
    explanation:
      "Performance-based payouts make affiliates an accountable extension of the marketing team, with cost tied to outcomes.",
  },
  {
    id: 5421,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "easy",
    prompt:
      "A call to action (CTA) is effective when it:",
    choices: [
      "Tells visitors exactly what to do next in clear, specific language",
      "Uses vague phrasing to seem sophisticated",
      "Appears nowhere on the page",
      "Offers forty simultaneous choices",
    ],
    correctIndex: 0,
    explanation:
      "Specific, single-action CTAs (‘Start your free trial’) outperform vague or multiple competing instructions.",
  },
  {
    id: 5422,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "Geo-targeting in mobile advertising delivers ads based on:",
    choices: [
      "The user’s physical location, such as proximity to a store",
      "Their favorite sports team",
      "Device battery level",
      "Screen brightness settings",
    ],
    correctIndex: 0,
    explanation:
      "Location signals enable locally relevant offers — driving foot traffic with timely, nearby messaging.",
  },
  {
    id: 5423,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "hard",
    prompt:
      "A brand’s video gets millions of views but negligible site visits. The missing element is most likely:",
    choices: [
      "Clear next-step pathways — links, CTAs, or shoppable features connecting views to action",
      "Higher video resolution",
      "Longer video runtime",
      "More background music",
    ],
    correctIndex: 0,
    explanation:
      "Awareness without a frictionless path to engagement rarely converts; view counts alone don’t move business metrics.",
  },
  {
    id: 5424,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "easy",
    prompt:
      "Responsive web design means the site:",
    choices: [
      "Adapts its layout automatically to fit any screen size",
      "Answers emails within one hour",
      "Loads only on desktop computers",
      "Changes colors every second",
    ],
    correctIndex: 0,
    explanation:
      "Responsive design serves mobile and desktop users from one adaptable layout, essential as mobile traffic dominates.",
  },
  {
    id: 5425,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "Under GDPR-style privacy laws, marketers must generally obtain:",
    choices: [
      "Explicit consent before collecting or processing personal data",
      "Payment from users for data rights",
      "Court orders for every newsletter",
      "Nothing, since privacy rules are voluntary",
    ],
    correctIndex: 0,
    explanation:
      "Modern privacy regimes require clear consent, purpose limitation, and user rights over their data — shaping global marketing practice.",
  },
  {
    id: 5426,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "hard",
    prompt:
      "Algorithm changes on a social platform cut a brand’s organic reach by half overnight. The most resilient strategic response is to:",
    choices: [
      "Diversify across owned channels like email while adapting content to the new algorithm",
      "Post identical content more frequently and hope",
      "Concentrate everything on that single platform",
      "Delete the account entirely",
    ],
    correctIndex: 0,
    explanation:
      "Rented-audience risk demands owned-channel insurance; diversification plus platform adaptation protects against unilateral rule changes.",
  },
  {
    id: 5427,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "Chatbots in digital marketing serve best as:",
    choices: [
      "First-line tools answering common questions instantly and routing complex issues to humans",
      "Complete replacements for all staff",
      "Ways to hide contact information from customers",
      "Devices for collecting payments secretly",
    ],
    correctIndex: 0,
    explanation:
      "Automation handles routine queries at scale while preserving human escalation, improving responsiveness without sacrificing service quality.",
  },
  {
    id: 5428,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "hard",
    prompt:
      "Two campaigns cost $10,000 each. Campaign A generates $30,000 in attributed revenue; Campaign B generates $45,000. Campaign B’s ROAS is:",
    choices: ["4.5, or 450%", "3.0, or 300%", "45%", "$35,000"],
    correctIndex: 0,
    explanation:
      "ROAS = revenue ÷ spend = $45,000 ÷ $10,000 = 4.5. Campaign A’s ROAS was 3.0, so B used budget more efficiently.",
  },
  {
    id: 5429,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "easy",
    prompt:
      "A hashtag campaign encouraging customers to post photos with a branded tag primarily aims to:",
    choices: [
      "Amplify reach through customer participation and social proof",
      "Restrict brand mentions to employees only",
      "Increase printing costs",
      "Replace the entire media budget",
    ],
    correctIndex: 0,
    explanation:
      "Hashtag campaigns turn customers into broadcasters, multiplying exposure with authentic peer endorsement.",
  },
  {
    id: 5430,
    clusterId: "marketing",
    category: "Digital Marketing",
    difficulty: "medium",
    prompt:
      "Website dwell time and scroll depth are examples of:",
    choices: [
      "Behavioral engagement metrics indicating how users interact with content",
      "Financial accounting ratios",
      "Legal compliance certificates",
      "Shipping performance measures",
    ],
    correctIndex: 0,
    explanation:
      "These analytics reveal whether content holds attention, guiding improvements in format, length, and structure.",
  },
  {
    id: 5431,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "Scarcity exists because:",
    choices: [
      "Resources are limited while wants are unlimited",
      "Governments print too much money",
      "Companies refuse to manufacture goods",
      "Consumers save too little",
    ],
    correctIndex: 0,
    explanation:
      "Scarcity — limited resources against unlimited wants — is the fundamental economic problem forcing choices and trade-offs.",
  },
  {
    id: 5432,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "Opportunity cost refers to:",
    choices: [
      "The value of the next-best alternative given up when a choice is made",
      "The sticker price of a purchase only",
      "Interest charged on loans",
      "Government fees on imports",
    ],
    correctIndex: 0,
    explanation:
      "Every decision sacrifices alternatives; opportunity cost measures the value of the best forgone option, not just monetary price.",
  },
  {
    id: 5433,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "A supply curve typically slopes upward because higher prices:",
    choices: [
      "Make production more profitable, encouraging sellers to offer more",
      "Force producers to shut down",
      "Reduce the number of suppliers by law",
      "Have no relationship to quantity supplied",
    ],
    correctIndex: 0,
    explanation:
      "Higher prices raise the reward for producing, so firms expand output — the basis of the law of supply.",
  },
  {
    id: 5434,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "Gross domestic product (GDP) measures:",
    choices: [
      "The total value of goods and services produced within a country in a period",
      "A single company’s annual profit",
      "The national unemployment rate only",
      "Total consumer savings accounts",
    ],
    correctIndex: 0,
    explanation:
      "GDP sums all final output produced domestically, serving as the broadest gauge of economic activity.",
  },
  {
    id: 5435,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Inflation erodes marketing effectiveness mainly because consumers:",
    choices: [
      "Become more price-sensitive and trade toward lower-cost alternatives",
      "Automatically increase brand loyalty",
      "Stop comparing prices entirely",
      "Buy more luxury goods during downturns",
    ],
    correctIndex: 0,
    explanation:
      "Rising prices squeeze budgets, shifting demand toward value brands and private labels unless differentiation justifies premiums.",
  },
  {
    id: 5436,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "If two goods are substitutes, a price increase for one will:",
    choices: [
      "Increase demand for the other",
      "Decrease demand for the other",
      "Leave the other unaffected",
      "Eliminate both from the market",
    ],
    correctIndex: 0,
    explanation:
      "Substitutes compete; when one becomes costlier, buyers shift to its alternative, raising that alternative’s demand.",
  },
  {
    id: 5437,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Perfect competition is characterized by:",
    choices: [
      "Many sellers of identical products with no single firm able to influence price",
      "One seller controlling the entire market",
      "A few large firms dominating pricing",
      "Products differentiated by heavy branding",
    ],
    correctIndex: 0,
    explanation:
      "With homogeneous goods and countless sellers, each firm is a price taker — the opposite of monopoly or oligopoly power.",
  },
  {
    id: 5438,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "An oligopoly differs from perfect competition because oligopolies feature:",
    choices: [
      "A few large firms whose decisions significantly affect market prices",
      "Thousands of identical small sellers",
      "Zero barriers to entry",
      "Guaranteed falling profits",
    ],
    correctIndex: 0,
    explanation:
      "Concentrated industries like airlines and telecoms exhibit interdependence — each major player watches rivals’ moves closely.",
  },
  {
    id: 5439,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "During a recession, which product category typically proves most resilient?",
    choices: [
      "Staples and affordable indulgences, such as groceries and small treats",
      "Luxury vacation homes",
      "High-end jewelry",
      "New yachts",
    ],
    correctIndex: 0,
    explanation:
      "Recession spending shifts toward necessities and inexpensive comforts (the ‘lipstick effect’), while big-ticket luxuries collapse.",
  },
  {
    id: 5440,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A currency depreciation makes a country’s exports:",
    choices: [
      "Cheaper for foreign buyers, potentially boosting export sales",
      "More expensive abroad automatically",
      "Illegal to ship",
      "Unaffected in any way",
    ],
    correctIndex: 0,
    explanation:
      "Weaker currency lowers foreign-currency prices of exports, improving competitiveness — while raising import costs.",
  },
  {
    id: 5441,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "Fixed costs differ from variable costs because fixed costs:",
    choices: [
      "Do not change with the level of output in the short run",
      "Rise directly with each unit produced",
      "Include raw materials and hourly wages",
      "Are always zero for service firms",
    ],
    correctIndex: 0,
    explanation:
      "Rent, insurance, and salaries persist regardless of volume; variable costs like materials scale with production.",
  },
  {
    id: 5442,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Economies of scale mean that as production volume increases:",
    choices: [
      "Average cost per unit falls because fixed costs spread over more units",
      "Average cost per unit rises steadily",
      "Total revenue must decline",
      "Quality necessarily deteriorates",
    ],
    correctIndex: 0,
    explanation:
      "Spreading fixed costs and gaining purchasing/production efficiencies lower unit costs at scale, enabling price advantages.",
  },
  {
    id: 5443,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A tariff is imposed on imported steel. Domestic manufacturers using steel should expect:",
    choices: [
      "Higher input costs, pressuring margins or forcing price increases",
      "Automatic profit growth",
      "Unchanged costs forever",
      "Elimination of all foreign competitors instantly",
    ],
    correctIndex: 0,
    explanation:
      "Tariffs tax imports, raising input prices downstream; affected manufacturers must absorb margin hits or pass costs to customers.",
  },
  {
    id: 5444,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Disposable income matters to marketers because it represents:",
    choices: [
      "Money available after taxes for spending and saving",
      "Total corporate profit after dividends",
      "Government transfer payments only",
      "Money owed on credit cards",
    ],
    correctIndex: 0,
    explanation:
      "After-tax income bounds what households can spend, making it a core input for forecasting demand across categories.",
  },
  {
    id: 5445,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A product’s demand is unit elastic when a price change causes:",
    choices: [
      "An exactly proportional change in quantity demanded, leaving total revenue unchanged",
      "No change in quantity whatsoever",
      "Revenue to double",
      "Quantity to fall to zero",
    ],
    correctIndex: 0,
    explanation:
      "At unit elasticity, percentage changes offset perfectly — revenue is neutral to price, so other levers must drive growth.",
  },
  {
    id: 5446,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "A shortage occurs when:",
    choices: [
      "Price is below equilibrium, so quantity demanded exceeds quantity supplied",
      "Price is above equilibrium",
      "Supply equals demand exactly",
      "Producers earn maximum profit",
    ],
    correctIndex: 0,
    explanation:
      "Prices held below equilibrium invite excess demand; shortages persist until price rises or supply expands.",
  },
  {
    id: 5447,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "A surplus of unsold inventory signals that:",
    choices: [
      "Price is above equilibrium relative to current demand",
      "Demand exceeds supply",
      "The market has reached equilibrium",
      "Production should increase immediately",
    ],
    correctIndex: 0,
    explanation:
      "Excess stock means buyers won’t absorb output at prevailing prices; markets clear through markdowns or reduced production.",
  },
  {
    id: 5448,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "The unemployment rate rises sharply. For a retailer selling discretionary home décor, the most prudent near-term response is to:",
    choices: [
      "Emphasize value messaging and adjust assortment toward affordable items",
      "Raise all prices to protect margins",
      "Expand aggressively into new flagship stores",
      "Cut quality to boost short-term margins",
    ],
    correctIndex: 0,
    explanation:
      "Falling employment suppresses discretionary spending; value positioning protects volume until conditions recover.",
  },
  {
    id: 5449,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "Profit is calculated as:",
    choices: [
      "Total revenue minus total costs",
      "Total sales plus total expenses",
      "Units sold times variable cost",
      "Assets minus liabilities minus equity",
    ],
    correctIndex: 0,
    explanation:
      "Profit is what remains after subtracting all costs from revenue — the fundamental measure of business viability.",
  },
  {
    id: 5450,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Purchasing power declines when:",
    choices: [
      "Inflation rises faster than incomes",
      "Wages rise faster than prices",
      "Taxes are cut substantially",
      "Productivity improves dramatically",
    ],
    correctIndex: 0,
    explanation:
      "When prices outpace earnings, each dollar buys less, shrinking real consumption capacity even if nominal pay is stable.",
  },
  {
    id: 5451,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "Cross-price elasticity between Brand A and Brand B is strongly positive. This indicates the brands are:",
    choices: [
      "Substitutes — price increases for one lift demand for the other",
      "Complements consumed together",
      "Unrelated products",
      "Both inferior goods by definition",
    ],
    correctIndex: 0,
    explanation:
      "Positive cross-price elasticity reveals substitution: buyers flee A’s price hikes toward B, quantifying competitive overlap.",
  },
  {
    id: 5452,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Interest rates rise significantly. Which business decision becomes most expensive?",
    choices: [
      "Financing expansion through borrowed funds",
      "Paying existing suppliers in cash",
      "Reducing inventory levels",
      "Collecting customer payments faster",
    ],
    correctIndex: 0,
    explanation:
      "Higher rates raise borrowing costs, making debt-financed growth pricier and often slowing expansion plans economy-wide.",
  },
  {
    id: 5453,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "Consumer confidence indices help marketers anticipate:",
    choices: [
      "Future spending behavior based on household optimism about the economy",
      "Yesterday’s exact sales figures",
      "Competitor payroll data",
      "Warehouse theft rates",
    ],
    correctIndex: 0,
    explanation:
      "Optimistic consumers spend more freely, especially on discretionary items; confidence trends foreshadow demand shifts.",
  },
  {
    id: 5454,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A firm operates where marginal revenue equals marginal cost. Economic theory says this output level:",
    choices: [
      "Maximizes profit, since producing more or less would reduce it",
      "Minimizes total revenue deliberately",
      "Guarantees zero market share",
      "Forces the firm into bankruptcy",
    ],
    correctIndex: 0,
    explanation:
      "Beyond MR = MC, extra units cost more than they earn; below it, profitable units are left unsold — the point maximizes profit.",
  },
  {
    id: 5455,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Seasonal unemployment among holiday workers is counted in which type of unemployment?",
    choices: ["Seasonal", "Structural", "Cyclical", "Frictional"],
    correctIndex: 0,
    explanation:
      "Joblessness tied to predictable seasonal patterns — retail holidays, harvests — is classified as seasonal unemployment.",
  },
  {
    id: 5456,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "A government subsidy lowers electric-vehicle battery costs. In the EV market, the most likely immediate effects are:",
    choices: [
      "Increased supply and downward pressure on EV prices, raising quantity sold",
      "Reduced supply and higher prices",
      "No change in either curve",
      "Mandatory export bans",
    ],
    correctIndex: 0,
    explanation:
      "Subsidies effectively cut production costs, shifting supply rightward: equilibrium price falls and quantity rises.",
  },
  {
    id: 5457,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "easy",
    prompt:
      "Barriers to entry affect competition by:",
    choices: [
      "Making it difficult or costly for new firms to enter a market",
      "Encouraging unlimited new competitors",
      "Eliminating the need for pricing strategy",
      "Guaranteeing perfect information for all",
    ],
    correctIndex: 0,
    explanation:
      "High capital needs, regulation, or brand loyalty deter entrants, protecting incumbents’ share and pricing power.",
  },
  {
    id: 5458,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "Franchise systems connect economics and marketing because franchisees pay for:",
    choices: [
      "The right to operate under an established brand and business system",
      "Freedom from all local regulations",
      "Guaranteed monopoly status in their industry",
      "Exemption from paying any royalties",
    ],
    correctIndex: 0,
    explanation:
      "Franchising sells proven business models and brand equity, reducing franchisees’ risk while extending the brand’s reach.",
  },
  {
    id: 5459,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "hard",
    prompt:
      "Exchange-rate volatility creates planning risk for importers primarily because:",
    choices: [
      "Currency swings can unpredictably raise landed costs between contract and payment",
      "Tariffs always replace exchange rates",
      "Domestic demand never changes",
      "Shipping lanes close permanently",
    ],
    correctIndex: 0,
    explanation:
      "Between ordering and paying, currency movement can erase planned margins; hedging and pricing clauses manage this exposure.",
  },
  {
    id: 5460,
    clusterId: "marketing",
    category: "Economics",
    difficulty: "medium",
    prompt:
      "A company notices demand for its premium line grows as local incomes rise. This pattern confirms the product behaves as:",
    choices: [
      "A normal good with positive income elasticity",
      "An inferior good",
      "A pure staple independent of income",
      "A government-subsidized commodity",
    ],
    correctIndex: 0,
    explanation:
      "Demand rising with income defines a normal good; premium categories typically show strong positive income elasticity.",
  },
];

