import type { PracticeQuestion } from "@/data/types";

export const hospitalityQuestions: PracticeQuestion[] = [
  {
    id: 4101,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "A hotel guest calls the front desk to complain that their room was not cleaned on schedule. The FIRST step an employee should take when handling the complaint is to:",
    choices: [
      "Offer a free night’s stay immediately",
      "Explain why housekeeping fell behind schedule",
      "Listen carefully and let the guest fully explain the problem",
      "Transfer the call to the general manager",
    ],
    correctIndex: 2,
    explanation:
      "Effective service recovery begins with listening. Letting the guest explain the full complaint shows respect, helps the employee understand the real problem, and calms the situation before a solution is offered.",
  },
  {
    id: 4102,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "Each time a guest interacts with an employee of a hospitality business and forms an impression of that business is commonly referred to as a:",
    choices: [
      "Moment of truth",
      "Service cycle",
      "Guest profile",
      "Quality checkpoint",
    ],
    correctIndex: 0,
    explanation:
      "A moment of truth is any contact point at which a guest comes into contact with the business and forms an opinion about its quality or service.",
  },
  {
    id: 4103,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A guest arrives at a hotel several hours before the published check-in time, but no rooms are currently available. The front desk associate should first:",
    choices: [
      "Charge the guest an early check-in fee",
      "Tell the guest to return later in the afternoon",
      "Assign the guest a room that has not yet been cleaned",
      "Apologize, offer to store the guest’s luggage, and promise to call as soon as a room is ready",
    ],
    correctIndex: 3,
    explanation:
      "Good service recovery involves acknowledging the inconvenience, apologizing, and offering a helpful alternative such as luggage storage plus notification when a room becomes available. Assigning an unclean room or turning the guest away would damage satisfaction.",
  },
  {
    id: 4104,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "Which of the following best describes the concept of customer lifetime value?",
    choices: [
      "The total profit a business expects to earn from a customer over the entire relationship",
      "The amount a customer spends on a single visit",
      "The average number of years a customer remains employed by a company",
      "The discount rate offered to repeat guests on their next booking",
    ],
    correctIndex: 0,
    explanation:
      "Customer lifetime value is the total revenue or profit a business anticipates from one customer across all transactions over the course of the relationship, which is why retaining guests is usually cheaper than acquiring new ones.",
  },
  {
    id: 4105,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "After resolving a guest’s complaint about a cold meal, the most effective final step in the service recovery process is to:",
    choices: [
      "Delete the incident from the guest’s record",
      "Ask the guest not to leave an online review",
      "Follow up with the guest to confirm they are satisfied with the solution",
      "Wait to see whether the guest complains again",
    ],
    correctIndex: 2,
    explanation:
      "Service recovery typically follows the steps of listening, apologizing, solving the problem, and following up. Following up confirms the solution worked and helps rebuild trust and loyalty.",
  },
  {
    id: 4106,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "A restaurant manager knows that the cost of attracting a new customer is significantly higher than the cost of keeping an existing one. This understanding should MOST directly influence the manager’s emphasis on:",
    choices: [
      "Expanding into new geographic markets",
      "Lowering menu prices below competitors",
      "Building guest loyalty through consistent service quality",
      "Increasing the frequency of television advertising",
    ],
    correctIndex: 2,
    explanation:
      "Because customer lifetime value makes repeat guests more profitable than new ones, businesses emphasize retention strategies such as loyalty programs and consistently high service quality rather than spending heavily only on acquisition.",
  },
  {
    id: 4107,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "When a front desk agent suggests that a guest upgrade to a larger suite for an additional fee, the agent is practicing:",
    choices: [
      "Yield management",
      "Upselling",
      "Market segmentation",
      "Price fixing",
    ],
    correctIndex: 1,
    explanation:
      "Upselling means encouraging a customer to purchase a higher-priced product or add-on than originally intended, which increases revenue while often improving the guest’s experience.",
  },
  {
    id: 4108,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "A hotel employee greets every guest by name and remembers a returning guest’s preference for a high floor. This behavior primarily builds:",
    choices: [
      "Guest loyalty and satisfaction",
      "Higher occupancy taxes",
      "Lower labor costs",
      "Standardized pricing",
    ],
    correctIndex: 0,
    explanation:
      "Personalized recognition of returning guests demonstrates attentiveness and care, which increases guest satisfaction and encourages repeat visits and positive word of mouth.",
  },
  {
    id: 4109,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "A hotel is fully booked, but a guest with a confirmed reservation arrives late at night and no rooms remain. The property decides to pay for the guest’s night at a nearby comparable hotel and transportation there. This practice is known as:",
    choices: [
      "Walking the guest",
      "Overbooking recovery rate adjustment",
      "Downgrading",
      "Rate parity enforcement",
    ],
    correctIndex: 0,
    explanation:
      "When an overbooked property cannot honor a reservation, it relocates, or walks, the guest to a comparable nearby hotel and typically covers the cost and transportation as part of responsible overbooking management.",
  },
  {
    id: 4110,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "An upset guest raises their voice at the front desk about a billing error. The associate’s BEST response is to:",
    choices: [
      "Match the guest’s tone so the guest understands the urgency",
      "Speak calmly, listen without interrupting, and focus on solving the issue",
      "Ask the guest to leave the property until they calm down",
      "Ignore the emotion and quote the cancellation policy",
    ],
    correctIndex: 1,
    explanation:
      "Remaining calm, listening without interrupting, and concentrating on resolution de-escalates conflict and models professional behavior. Matching anger or dismissing the guest escalates the situation.",
  },
  {
    id: 4111,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "A hotel has 120 rooms available and sold 90 of them last night. The hotel’s occupancy rate was:",
    choices: [
      "65 percent",
      "75 percent",
      "90 percent",
      "133 percent",
    ],
    correctIndex: 1,
    explanation:
      "Occupancy rate equals rooms sold divided by rooms available, multiplied by 100. Here, 90 ÷ 120 = 75 percent.",
  },
  {
    id: 4112,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "Occupancy rate is BEST described as a measure of:",
    choices: [
      "The average price charged per room sold",
      "The percentage of available rooms that were sold during a period",
      "Total revenue generated by food and beverage outlets",
      "The number of guests staying in each sold room",
    ],
    correctIndex: 1,
    explanation:
      "Occupancy rate expresses how full a lodging property is by comparing rooms sold to rooms available during a given period. It measures utilization, not price.",
  },
  {
    id: 4113,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "Average daily rate (ADR) in the lodging industry refers to:",
    choices: [
      "Total room revenue divided by the number of rooms sold",
      "Total room revenue divided by the number of rooms available",
      "The rack rate printed on the room rate card",
      "The average nightly cost of operating a single room",
    ],
    correctIndex: 0,
    explanation:
      "ADR is calculated by dividing total room revenue by the number of rooms actually sold. It reflects the average price achieved per occupied room.",
  },
  {
    id: 4114,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "RevPAR is considered a valuable performance metric for hotels because it combines information about:",
    choices: [
      "Food revenue and beverage revenue",
      "Employee productivity and labor cost",
      "Both occupancy and average room rate in a single figure",
      "Marketing spend and booking lead time",
    ],
    correctIndex: 2,
    explanation:
      "RevPAR, or revenue per available room, blends occupancy and rate data by dividing room revenue by rooms available, so a property can see how well it fills rooms AND how well it prices them.",
  },
  {
    id: 4115,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "A hotel room with a broken air conditioner that cannot be rented until repairs are completed should be coded in the property management system as:",
    choices: [
      "Vacant ready",
      "Occupied",
      "Out-of-order",
      "Due out",
    ],
    correctIndex: 2,
    explanation:
      "Out-of-order status identifies a room that is unavailable for sale because of maintenance or repair issues. It removes the room from sellable inventory until it is fixed.",
  },
  {
    id: 4116,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "A hotel accepts reservations for more rooms than it actually has, expecting some cancellations and no-shows. The PRIMARY purpose of this practice is to:",
    choices: [
      "Increase the average daily rate",
      "Maximize occupancy despite expected cancellations",
      "Reduce housekeeping workload",
      "Comply with franchise regulations",
    ],
    correctIndex: 1,
    explanation:
      "Because some guests cancel or fail to arrive, hotels deliberately overbook to offset those losses and fill as many rooms as possible, protecting occupancy and revenue while managing the risk of walking guests.",
  },
  {
    id: 4117,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "During check-in, the front desk agent’s MAIN responsibilities include verifying the guest’s identity and:",
    choices: [
      "Cleaning the room before arrival",
      "Confirming the reservation details and payment method",
      "Preparing the guest’s dinner order",
      "Conducting the annual fire inspection",
    ],
    correctIndex: 1,
    explanation:
      "Front desk check-in centers on confirming reservation details, verifying identification, securing payment information, and issuing room keys so the guest can be settled quickly and accurately.",
  },
  {
    id: 4118,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A housekeeping supervisor prioritizes cleaning rooms each morning. Which room status should generally be serviced FIRST to support same-day arrivals?",
    choices: [
      "Rooms currently listed as out-of-order",
      "Vacant dirty rooms needed for arriving guests",
      "Long-term guest units scheduled for deep cleaning next week",
      "Occupied rooms whose guests have requested no service today",
    ],
    correctIndex: 1,
    explanation:
      "Housekeeping prioritizes vacant dirty rooms that must be readied for incoming arrivals, since those rooms block check-ins until cleaned. Out-of-order rooms cannot be sold regardless of cleaning speed.",
  },
  {
    id: 4119,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A guest who made a guaranteed reservation never arrives and never cancels. In lodging terminology, this is called a:",
    choices: [
      "Stayover",
      "Walk-in",
      "Early departure",
      "No-show",
    ],
    correctIndex: 3,
    explanation:
      "A no-show is a guest with a confirmed reservation who neither arrives nor cancels. Hotels commonly charge a penalty for guaranteed reservations that become no-shows because the room was held all night.",
  },
  {
    id: 4120,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "A resort sells a block of 40 rooms to a conference group at a negotiated rate. If individual demand surges for those dates, selling the group block helps the resort primarily by:",
    choices: [
      "Guaranteeing a base of room nights in advance",
      "Eliminating the need for housekeeping staff",
      "Raising the posted rack rate automatically",
      "Reducing the resort’s tax liability",
    ],
    correctIndex: 0,
    explanation:
      "Group blocks lock in a predictable volume of room nights ahead of arrival, reducing the risk of unsold inventory even if transient demand fluctuates closer to the date.",
  },
  {
    id: 4121,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "The temperature danger zone for food, in which harmful bacteria multiply most rapidly, is generally defined as:",
    choices: [
      "0°F to 32°F",
      "150°F to 212°F",
      "180°F to 250°F",
      "40°F to 140°F",
    ],
    correctIndex: 3,
    explanation:
      "Food safety guidelines identify 40°F to 140°F as the temperature danger zone. Perishable food should not remain in this range for extended periods because bacteria grow rapidly there.",
  },
  {
    id: 4122,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "A kitchen worker places newly delivered milk behind the cartons already on the shelf so the older stock is used first. This practice is known as:",
    choices: [
      "First in, first out (FIFO) rotation",
      "Par level stocking",
      "Just-in-time ordering",
      "Batch cooking",
    ],
    correctIndex: 0,
    explanation:
      "FIFO means the oldest stock is positioned to be used first, which reduces spoilage and waste and ensures products are consumed before their expiration dates.",
  },
  {
    id: 4123,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A server suggests that diners add shrimp to their pasta dishes or order dessert. This technique is called:",
    choices: [
      "Portion control",
      "Cost-plus pricing",
      "Suggestive selling",
      "Menu engineering",
    ],
    correctIndex: 2,
    explanation:
      "Suggestive selling occurs when servers recommend additional or higher-margin items such as appetizers, upgrades, or desserts, increasing the average check while enhancing the dining experience.",
  },
  {
    id: 4124,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "Using the same cutting board to chop raw chicken and then slice ready-to-eat vegetables without cleaning it creates the greatest risk of:",
    choices: [
      "Dehydration",
      "Freezer burn",
      "Enzymatic browning",
      "Cross-contamination",
    ],
    correctIndex: 3,
    explanation:
      "Cross-contamination happens when harmful microorganisms transfer from raw foods, especially raw meat and poultry, to ready-to-eat foods via shared surfaces, utensils, or hands.",
  },
  {
    id: 4125,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "hard",
    prompt:
      "HACCP is BEST described as a food safety system that:",
    choices: [
      "Tests finished meals randomly after service",
      "Identifies and controls hazards at critical points throughout food production",
      "Replaces the need for employee handwashing",
      "Certifies organic farms for restaurant suppliers",
    ],
    correctIndex: 1,
    explanation:
      "HACCP, Hazard Analysis and Critical Control Points, is a preventive approach that identifies where hazards can occur in the flow of food and establishes controls and monitoring at those critical points.",
  },
  {
    id: 4126,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "In French table service, what distinguishes it from American-style plated service is that food is:",
    choices: [
      "Served only from self-service stations",
      "Delivered exclusively through drive-through windows",
      "Charged by weight at a buffet counter",
      "Prepared, finished, or served at the guest’s table",
    ],
    correctIndex: 3,
    explanation:
      "French service involves finishing or presenting food tableside from a gueridon or serving trolley, offering theatrical, personalized service, whereas American service delivers individually plated meals from the kitchen.",
  },
  {
    id: 4127,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "Before handling ready-to-eat food, a food handler who just touched raw meat must FIRST:",
    choices: [
      "Put on single-use gloves over unwashed hands",
      "Rinse hands briefly under cold water",
      "Apply hand sanitizer to visibly soiled hands",
      "Wash hands thoroughly with soap and warm water",
    ],
    correctIndex: 3,
    explanation:
      "Hands must be washed thoroughly after touching raw meat before any other step. Gloves are not a substitute for handwashing, and sanitizer does not work properly on hands that have not been washed.",
  },
  {
    id: 4128,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A buffet line holds hot foods for service. To keep them safe, hot foods should be held at:",
    choices: [
      "Room temperature",
      "Between 40°F and 100°F",
      "At or above 135°F",
      "Any temperature as long as lids cover the pans",
    ],
    correctIndex: 2,
    explanation:
      "Hot holding requires temperatures at or above 135°F to keep food out of the danger zone where bacteria multiply quickly.",
  },
  {
    id: 4129,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "hard",
    prompt:
      "A restaurant receives a delivery of fresh produce. The receiving clerk’s MOST important action to protect food safety is to:",
    choices: [
      "Inspect the items for temperature, condition, and freshness before accepting them",
      "Store everything immediately in the freezer",
      "Combine the new items with existing stock to save shelf space",
      "Accept the delivery without inspection to avoid delaying the driver",
    ],
    correctIndex: 0,
    explanation:
      "Inspection at receiving is a critical control point. Checking temperature, packaging condition, and freshness prevents unsafe products from ever entering inventory, which is far easier than removing them later.",
  },
  {
    id: 4130,
    clusterId: "hospitality-tourism",
    category: "Travel & Tourism",
    difficulty: "easy",
    prompt:
      "A day-by-day schedule showing flights, hotel confirmations, tours, and activities for a traveler is called an:",
    choices: [
      "Invoice",
      "Manifest",
      "Itinerary",
      "Voucher ledger",
    ],
    correctIndex: 2,
    explanation:
      "An itinerary is the planned route and schedule of a trip, detailing transportation, accommodations, and activities in chronological order.",
  },
  {
    id: 4131,
    clusterId: "hospitality-tourism",
    category: "Travel & Tourism",
    difficulty: "medium",
    prompt:
      "Tourism that emphasizes responsible travel to natural areas that conserves the environment and sustains local well-being is called:",
    choices: [
      "Mass tourism",
      "Incentive tourism",
      "Medical tourism",
      "Ecotourism",
    ],
    correctIndex: 3,
    explanation:
      "Ecotourism is defined as responsible travel to natural areas that conserves the environment, minimizes impact, and supports the well-being of local people.",
  },
  {
    id: 4132,
    clusterId: "hospitality-tourism",
    category: "Travel & Tourism",
    difficulty: "easy",
    prompt:
      "A beach resort earns most of its revenue during summer months and struggles during winter. This pattern illustrates:",
    choices: [
      "Seasonality",
      "Diversification",
      "Horizontal integration",
      "Yield dilution",
    ],
    correctIndex: 0,
    explanation:
      "Seasonality describes recurring fluctuations in tourism demand tied to seasons, weather, holidays, and school schedules, creating peak and off-peak periods for destinations.",
  },
  {
    id: 4133,
    clusterId: "hospitality-tourism",
    category: "Travel & Tourism",
    difficulty: "medium",
    prompt:
      "A destination markets discounted rates and indoor attractions during its slow winter season. The PRIMARY goal of this strategy is to:",
    choices: [
      "Increase competition among local hotels",
      "Smooth out seasonal fluctuations in demand",
      "Eliminate the need for year-round staff",
      "Raise prices during peak season",
    ],
    correctIndex: 1,
    explanation:
      "Off-peak promotions aim to attract visitors during slow periods, balancing demand across the year and stabilizing revenue and employment levels affected by seasonality.",
  },
  {
    id: 4134,
    clusterId: "hospitality-tourism",
    category: "Travel & Tourism",
    difficulty: "easy",
    prompt:
      "A travel package that bundles airfare, hotel, transfers, and some meals into one price is attractive to travelers mainly because it offers:",
    choices: [
      "Guaranteed upgrades to luxury suites",
      "Convenience and often lower combined cost",
      "Refundable government taxes only",
      "Unlimited changes without penalties",
    ],
    correctIndex: 1,
    explanation:
      "Packaged tours bundle multiple travel components into a single purchase, simplifying planning for the traveler and frequently lowering the total cost compared with buying each element separately.",
  },
  {
    id: 4135,
    clusterId: "hospitality-tourism",
    category: "Travel & Tourism",
    difficulty: "medium",
    prompt:
      "Money spent by tourists that circulates through hotels, restaurants, suppliers, and employees within a destination community is often described as having:",
    choices: [
      "A multiplier effect on the local economy",
      "A deflationary effect on local prices",
      "No measurable economic impact",
      "Only negative social consequences",
    ],
    correctIndex: 0,
    explanation:
      "Tourist spending passes through multiple layers of a local economy as businesses pay suppliers and wages, multiplying the original expenditure’s economic impact on the destination.",
  },
  {
    id: 4136,
    clusterId: "hospitality-tourism",
    category: "Travel & Tourism",
    difficulty: "hard",
    prompt:
      "A tourism board segments its audience and targets adventure travelers aged 25–40 for a new hiking campaign. Segmenting by age and lifestyle is useful mainly because it allows the board to:",
    choices: [
      "Advertise identically to every consumer",
      "Tailor messages to the specific interests of likely visitors",
      "Guarantee bookings from the target segment",
      "Avoid tracking campaign results",
    ],
    correctIndex: 1,
    explanation:
      "Market segmentation divides consumers into groups with shared characteristics so marketing messages, products, and channels can be tailored to what each segment values, improving response rates.",
  },
  {
    id: 4137,
    clusterId: "hospitality-tourism",
    category: "Travel & Tourism",
    difficulty: "easy",
    prompt:
      "A family asks a travel professional to plan an international vacation. One of the professional’s FIRST responsibilities should be to:",
    choices: [
      "Book the least expensive hotel available online",
      "Purchase nonrefundable airline tickets immediately",
      "Recommend only destinations the professional has visited personally",
      "Discuss the family’s budget, interests, and travel dates",
    ],
    correctIndex: 3,
    explanation:
      "Effective itinerary planning begins with understanding the client’s needs, preferences, budget, and timeline before recommending or booking any travel components.",
  },
  {
    id: 4138,
    clusterId: "hospitality-tourism",
    category: "Travel & Tourism",
    difficulty: "medium",
    prompt:
      "A city promotes its historic districts, museums, and local cuisine to attract visitors. This approach is known as:",
    choices: [
      "Heritage and cultural tourism marketing",
      "Industrial tourism marketing",
      "Agritourism certification",
      "Counter-seasonal pricing",
    ],
    correctIndex: 0,
    explanation:
      "Promoting a destination’s history, culture, arts, and food to draw visitors is cultural or heritage tourism, one of the largest and fastest-growing tourism segments.",
  },
  {
    id: 4139,
    clusterId: "hospitality-tourism",
    category: "Travel & Tourism",
    difficulty: "hard",
    prompt:
      "A cruise line notices that customers increasingly book shore excursions directly through apps instead of onboard desks. The line’s BEST strategic response is to:",
    choices: [
      "Ban third-party excursion apps entirely",
      "Stop offering shore excursions",
      "Require passengers to book excursions months in advance by mail",
      "Adapt its distribution by offering excursions through its own digital channels",
    ],
    correctIndex: 3,
    explanation:
      "Businesses in tourism respond to changing consumer technology by adapting distribution channels to meet customers where they prefer to buy, protecting both revenue and customer experience.",
  },
  {
    id: 4140,
    clusterId: "hospitality-tourism",
    category: "Event Planning",
    difficulty: "easy",
    prompt:
      "Before selecting a venue or theme for a corporate event, the event planner should FIRST:",
    choices: [
      "Order catering for 500 guests",
      "Print invitations and programs",
      "Hire the entertainment act",
      "Define the event’s purpose and objectives",
    ],
    correctIndex: 3,
    explanation:
      "Event planning begins with clarifying objectives, including the event’s purpose, target audience, and desired outcomes. Every later decision, including venue, budget, and logistics, flows from those objectives.",
  },
  {
    id: 4141,
    clusterId: "hospitality-tourism",
    category: "Event Planning",
    difficulty: "medium",
    prompt:
      "A wedding planner estimates costs for venue, catering, décor, and entertainment, then compares the total against the client’s spending limit. The planner is developing the event’s:",
    choices: [
      "Mission statement",
      "Risk register",
      "Seating chart",
      "Budget",
    ],
    correctIndex: 3,
    explanation:
      "A budget projects all anticipated expenses against available funds, ensuring the event remains financially feasible and guiding trade-offs among vendors and services.",
  },
  {
    id: 4142,
    clusterId: "hospitality-tourism",
    category: "Event Planning",
    difficulty: "medium",
    prompt:
      "When evaluating potential venues for a conference of 300 attendees, the MOST important initial criterion is that the venue:",
    choices: [
      "Has the newest interior design in the city",
      "Is owned by a relative of the planner",
      "Can comfortably accommodate the expected number of attendees",
      "Offers the longest contract automatically",
    ],
    correctIndex: 2,
    explanation:
      "Capacity is a fundamental venue-selection factor; a space must physically fit attendees, equipment, and required setup before considerations like aesthetics or amenities are weighed.",
  },
  {
    id: 4143,
    clusterId: "hospitality-tourism",
    category: "Event Planning",
    difficulty: "hard",
    prompt:
      "A caterer requires final attendance numbers three days before a banquet. The guaranteed count the client provides determines:",
    choices: [
      "The minimum number of meals the client pays for, even if fewer guests attend",
      "The maximum number of meals served under any circumstance",
      "The tip percentage owed to servers",
      "The venue’s rental fee waiver",
    ],
    correctIndex: 0,
    explanation:
      "In catering, the guarantee is the minimum attendance count for which the client is billed, even if fewer guests show up. Caterers plan purchasing and staffing around this number.",
  },
  {
    id: 4144,
    clusterId: "hospitality-tourism",
    category: "Event Planning",
    difficulty: "easy",
    prompt:
      "Coordinating signage, audiovisual equipment, registration tables, and staffing schedules for a conference falls under which phase of event planning?",
    choices: [
      "Post-event evaluation",
      "Sponsor solicitation",
      "Logistics management",
      "Market research",
    ],
    correctIndex: 2,
    explanation:
      "Logistics covers the operational details of executing an event, including equipment, layout, signage, staffing, scheduling, and on-site coordination.",
  },
  {
    id: 4145,
    clusterId: "hospitality-tourism",
    category: "Event Planning",
    difficulty: "medium",
    prompt:
      "After a charity gala concludes, the planning team surveys attendees and reviews financial results. The PRIMARY value of this evaluation step is to:",
    choices: [
      "Determine server tips retroactively",
      "Extend the event indefinitely",
      "Identify successes and problems to improve future events",
      "Avoid paying vendor invoices",
    ],
    correctIndex: 2,
    explanation:
      "Post-event evaluation assesses whether objectives were met, analyzes attendee feedback and finances, and documents lessons learned that improve the planning of future events.",
  },
  {
    id: 4146,
    clusterId: "hospitality-tourism",
    category: "Event Planning",
    difficulty: "medium",
    prompt:
      "An outdoor festival secures an indoor backup location and tents in case of rain. This preparation is an example of:",
    choices: [
      "Revenue diversification",
      "Vertical integration",
      "Break-even analysis",
      "Contingency planning",
    ],
    correctIndex: 3,
    explanation:
      "Contingency planning prepares alternate arrangements for foreseeable risks, such as severe weather, so the event can proceed safely and minimize disruption.",
  },
  {
    id: 4147,
    clusterId: "hospitality-tourism",
    category: "Event Planning",
    difficulty: "hard",
    prompt:
      "Two weeks before a trade show, the client cuts the budget by 20 percent. The event coordinator’s MOST professional first response is to:",
    choices: [
      "Cancel the event immediately",
      "Review the budget line items with the client to identify which services can be reduced or eliminated",
      "Absorb the cut silently and deliver the identical scope anyway",
      "Demand full payment upfront before discussing options",
    ],
    correctIndex: 1,
    explanation:
      "Professional planners respond to budget changes by transparently reviewing priorities with the client, identifying trade-offs among services, and adjusting scope collaboratively to protect the event’s core objectives.",
  },
  {
    id: 4148,
    clusterId: "hospitality-tourism",
    category: "Safety & Sanitation",
    difficulty: "medium",
    prompt:
      "In a HACCP plan, a critical control point is a step in the flow of food where:",
    choices: [
      "Employees take their scheduled breaks",
      "Managers review quarterly financial statements",
      "Suppliers negotiate contract terms",
      "A hazard can be prevented, eliminated, or reduced to safe levels",
    ],
    correctIndex: 3,
    explanation:
      "A critical control point is any stage in food production where a specific control can be applied to prevent, eliminate, or reduce a food safety hazard to acceptable levels, such as cooking to proper temperature.",
  },
  {
    id: 4149,
    clusterId: "hospitality-tourism",
    category: "Safety & Sanitation",
    difficulty: "easy",
    prompt:
      "A food handler diagnoses with a contagious foodborne illness reports to work. The manager should:",
    choices: [
      "Restrict the employee to washing dishes only",
      "Exclude the employee from the operation until cleared according to health regulations",
      "Allow normal duties if the employee wears gloves",
      "Move the employee to the serving line away from the kitchen",
    ],
    correctIndex: 1,
    explanation:
      "Employees diagnosed with certain foodborne illnesses must be excluded from food operations until medical clearance or regulatory requirements are met, preventing pathogen transmission to guests.",
  },
  {
    id: 4150,
    clusterId: "hospitality-tourism",
    category: "Safety & Sanitation",
    difficulty: "medium",
    prompt:
      "Cleaning chemicals in a hotel laundry area should be stored:",
    choices: [
      "Above food-prep surfaces for easy access",
      "In unlabeled spray bottles employees can refill freely",
      "In labeled containers, away from food and food-contact surfaces",
      "Next to clean linens to save storage space",
    ],
    correctIndex: 2,
    explanation:
      "Chemicals must be kept in clearly labeled original or approved containers and stored separately from food, linens, and food-contact surfaces to prevent accidental poisoning and contamination.",
  },
  {
    id: 4151,
    clusterId: "hospitality-tourism",
    category: "Safety & Sanitation",
    difficulty: "easy",
    prompt:
      "During a fire alarm at a hotel, employees’ FIRST responsibility toward guests is to:",
    choices: [
      "Direct guests calmly to the nearest marked exits following emergency procedures",
      "Collect payment from departing guests",
      "Have guests return to their rooms for belongings",
      "Lock all doors to prevent theft",
    ],
    correctIndex: 0,
    explanation:
      "Guest safety takes priority over property protection. Employees guide guests to designated exits calmly and follow the property’s evacuation procedures, never blocking exits or delaying evacuation for belongings or payments.",
  },
  {
    id: 4152,
    clusterId: "hospitality-tourism",
    category: "Safety & Sanitation",
    difficulty: "hard",
    prompt:
      "A restaurant manager implements color-coded cutting boards, with green reserved for produce and red reserved for raw meat. The primary food safety purpose of this system is to:",
    choices: [
      "Speed up plating presentation",
      "Track inventory usage by department",
      "Comply with uniform dress codes",
      "Prevent cross-contamination between food types",
    ],
    correctIndex: 3,
    explanation:
      "Color-coded equipment prevents pathogens from raw animal products reaching ready-to-eat foods, enforcing separation of tasks and reducing cross-contamination risk.",
  },
  {
    id: 4153,
    clusterId: "hospitality-tourism",
    category: "Safety & Sanitation",
    difficulty: "medium",
    prompt:
      "Wet floors, blocked exits, and frayed electrical cords in a hospitality workplace are examples of:",
    choices: [
      "Physical hazards that increase the risk of accidents and injuries",
      "Normal conditions requiring no action",
      "Issues handled exclusively by outside contractors",
      "Insurance documentation requirements",
    ],
    correctIndex: 0,
    explanation:
      "These are physical safety hazards that can cause slips, trips, fires, and electrocution. Identifying and correcting them promptly is a core responsibility of workplace safety programs.",
  },
  {
    id: 4154,
    clusterId: "hospitality-tourism",
    category: "Safety & Sanitation",
    difficulty: "easy",
    prompt:
      "Sanitizing a food-contact surface differs from cleaning it because sanitizing:",
    choices: [
      "Removes visible dirt and grease",
      "Reduces disease-causing microorganisms to safe levels",
      "Polishes the surface to a shine",
      "Replaces the need for regular cleaning",
    ],
    correctIndex: 1,
    explanation:
      "Cleaning removes visible soil, while sanitizing reduces harmful microorganisms on a surface to safe levels. Surfaces must be cleaned before they can be effectively sanitized.",
  },
  {
    id: 4155,
    clusterId: "hospitality-tourism",
    category: "Safety & Sanitation",
    difficulty: "hard",
    prompt:
      "A hotel’s security policy instructs front desk agents never to announce a guest’s room number aloud and to re-key locks promptly when keys are reported lost. These policies exist primarily to:",
    choices: [
      "Reduce housekeeping labor costs",
      "Speed up the check-out process",
      "Protect guests’ personal safety and property",
      "Comply with advertising regulations",
    ],
    correctIndex: 2,
    explanation:
      "Discreet key handling and rapid lock re-keying prevent unauthorized room access, protecting guests from intrusion, theft, and harm, which are central obligations of lodging security programs.",
  },
  {
    id: 4156,
    clusterId: "hospitality-tourism",
    category: "Human Resources",
    difficulty: "easy",
    prompt:
      "A hotel introduces new hires to company policies, job duties, and property layout through a structured orientation program. The PRIMARY purpose of orientation is to:",
    choices: [
      "Replace the need for ongoing training",
      "Help new employees become productive and comfortable quickly",
      "Determine salary increases for veterans",
      "Complete legal paperwork only",
    ],
    correctIndex: 1,
    explanation:
      "Orientation familiarizes new employees with the organization, policies, culture, and expectations, helping them integrate faster, reduce early mistakes, and improve retention.",
  },
  {
    id: 4157,
    clusterId: "hospitality-tourism",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "During a job interview for a front desk position, which question is appropriate and legally permissible?",
    choices: [
      "How many children do you have?",
      "What church do you attend?",
      "How old are you?",
      "Describe your experience handling dissatisfied customers.",
    ],
    correctIndex: 3,
    explanation:
      "Interview questions must relate to the candidate’s ability to perform the job. Questions about age, religion, or family status are discriminatory and unlawful, while questions about relevant experience are valid.",
  },
  {
    id: 4158,
    clusterId: "hospitality-tourism",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "A resort calculates that replacing a departing experienced concierge costs thousands of dollars in recruiting, training, and lost productivity. This calculation is MOST useful for:",
    choices: [
      "Justifying investments in employee retention programs",
      "Setting the resort’s room rates",
      "Choosing a new property management system",
      "Determining menu prices in the restaurant",
    ],
    correctIndex: 0,
    explanation:
      "Quantifying turnover costs demonstrates the financial value of retention efforts such as better training, compensation, and engagement, supporting the business case for investing in current employees.",
  },
  {
    id: 4159,
    clusterId: "hospitality-tourism",
    category: "Human Resources",
    difficulty: "medium",
    prompt:
      "A restaurant manager builds weekly schedules by forecasting customer volume for each shift and assigning enough staff to match expected demand. This approach primarily helps the operation:",
    choices: [
      "Increase food waste during slow shifts",
      "Eliminate the need for cross-training",
      "Control labor costs while maintaining service quality",
      "Guarantee overtime pay for all employees",
    ],
    correctIndex: 2,
    explanation:
      "Forecast-based scheduling aligns staffing levels with projected business volume, avoiding both understaffing that harms service and overstaffing that inflates labor costs.",
  },
  {
    id: 4160,
    clusterId: "hospitality-tourism",
    category: "Human Resources",
    difficulty: "hard",
    prompt:
      "A housekeeping employee tells a supervisor that a coworker repeatedly made offensive jokes directed at them. The supervisor’s APPROPRIATE response is to:",
    choices: [
      "Advise the employee to ignore it to avoid conflict",
      "Document the report and follow the company’s harassment investigation procedures promptly",
      "Confront the accused coworker publicly in front of staff",
      "Terminate the reporting employee to keep peace",
    ],
    correctIndex: 1,
    explanation:
      "Managers must take harassment complaints seriously by documenting the report and initiating established investigation procedures promptly. Ignoring, retaliating against, or mishandling complaints exposes the employer to legal liability and damages workplace trust.",
  },
  {
    id: 4161,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "The sequence of steps in effective service recovery is BEST summarized as:",
    choices: [
      "Listen, apologize, solve the problem, follow up",
      "Solve, deny, document, escalate",
      "Apologize, ignore, discount, close",
      "Escalate, negotiate, refund, terminate",
    ],
    correctIndex: 0,
    explanation:
      "Service recovery follows a logical progression: listen to the guest, apologize sincerely, solve the problem, and follow up to confirm satisfaction. Skipping listening or follow-up undermines the recovery.",
  },
  {
    id: 4162,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "A hotel program that rewards returning guests with points redeemable for free nights and upgrades is called a:",
    choices: [
      "Yield management system",
      "Loyalty program",
      "Franchise agreement",
      "Central reservation office",
    ],
    correctIndex: 1,
    explanation:
      "Loyalty programs reward repeat guests with points, perks, and recognition, encouraging them to book directly with the brand again rather than switching to competitors.",
  },
  {
    id: 4163,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A guest mentions during check-in that they are celebrating an anniversary. A front desk agent who arranges a complimentary card and sparkling cider in the room is practicing:",
    choices: [
      "Anticipating guest needs through personalization",
      "Yield management",
      "Overbooking",
      "Rate parity management",
    ],
    correctIndex: 0,
    explanation:
      "Using information the guest shares to anticipate needs and deliver personalized touches creates memorable experiences that build loyalty — a hallmark of excellent guest service.",
  },
  {
    id: 4164,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A restaurant server notices a child’s drink is empty and refills it without being asked. This behavior demonstrates:",
    choices: [
      "Reactive complaint handling",
      "Attentive, anticipatory service",
      "Upselling",
      "Portion control",
    ],
    correctIndex: 1,
    explanation:
      "Anticipatory service means noticing and meeting guest needs before guests have to ask. It signals attentiveness and elevates perceived service quality.",
  },
  {
    id: 4165,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A hotel posts responses to online reviews, thanking happy guests and offering solutions to unhappy ones. The PRIMARY benefit of responding publicly to negative reviews is that it:",
    choices: [
      "Guarantees the review will be removed",
      "Shows prospective guests the business takes feedback seriously",
      "Prevents competitors from reading complaints",
      "Eliminates the need for internal quality checks",
    ],
    correctIndex: 1,
    explanation:
      "Prospective guests read how businesses respond to criticism. A professional, solution-oriented public response builds trust with future bookers even more than it affects the original reviewer.",
  },
  {
    id: 4166,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "A guest satisfaction survey asks customers to rate their likelihood of recommending the hotel on a 0–10 scale. This question measures:",
    choices: [
      "Employee engagement score",
      "Net Promoter Score",
      "RevPAR index",
      "Gross operating profit per available room",
    ],
    correctIndex: 1,
    explanation:
      "The Net Promoter Score (NPS) uses the 'likelihood to recommend' question, classifying respondents as promoters, passives, or detractors to gauge overall loyalty.",
  },
  {
    id: 4167,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "When answering the phone at a hotel, the MOST professional greeting includes:",
    choices: [
      "Just saying 'Hello' and waiting silently",
      "Answering after as many rings as possible to seem busy",
      "The business name, the employee’s name, and an offer to help",
      "Putting every caller on hold immediately to screen them",
    ],
    correctIndex: 2,
    explanation:
      "Professional telephone etiquette requires identifying the property and yourself and offering assistance promptly, which reassures callers they reached the right place and sets a positive tone.",
  },
  {
    id: 4168,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "Maintaining eye contact, smiling, and using open body language when serving guests primarily communicates:",
    choices: [
      "That the employee wants a raise",
      "Interest and willingness to help",
      "That the employee is finished working",
      "Authority over the guest",
    ],
    correctIndex: 1,
    explanation:
      "Positive nonverbal communication such as eye contact, smiling, and open posture signals approachability and genuine interest, which shapes the guest’s impression of service quality.",
  },
  {
    id: 4169,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "An international guest appears confused by the front desk agent’s rapid, idiomatic English. The agent’s BEST response is to:",
    choices: [
      "Speak louder in the same manner",
      "Slow down, use simple words, and confirm understanding politely",
      "Ask the guest to leave until an interpreter arrives",
      "Refuse service until the guest improves their English",
    ],
    correctIndex: 1,
    explanation:
      "Cultural awareness and adaptability are core hospitality skills. Slowing down, simplifying vocabulary, and confirming understanding respects the guest and ensures accurate service.",
  },
  {
    id: 4170,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "Empowering frontline employees in hospitality means giving them the authority to:",
    choices: [
      "Set annual corporate strategy",
      "Approve franchise agreements",
      "Resolve routine guest problems on the spot without manager approval",
      "Determine national tax policy for tourism",
    ],
    correctIndex: 2,
    explanation:
      "Empowerment delegates authority to resolve common guest issues immediately, speeding recovery, improving satisfaction, and freeing managers for complex decisions.",
  },
  {
    id: 4171,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "Which of the following is an example of internal customers in a hotel?",
    choices: [
      "Housekeeping staff relying on maintenance to fix a broken vacuum",
      "A family booking a vacation package",
      "A conference group signing a contract",
      "A diner ordering dessert",
    ],
    correctIndex: 0,
    explanation:
      "Internal customers are coworkers and departments within the organization who depend on one another to serve the external guest, such as housekeeping depending on maintenance support.",
  },
  {
    id: 4172,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A guest leaves a phone charger in their room after checkout. The hotel department responsible for logging and safeguarding lost items is typically:",
    choices: [
      "Sales and catering",
      "Revenue management",
      "Housekeeping, working with lost and found procedures",
      "Engineering",
    ],
    correctIndex: 2,
    explanation:
      "Housekeepers usually discover items left behind and turn them in through the property’s lost and found procedure, which logs, stores, and attempts to reunite items with owners.",
  },
  {
    id: 4173,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "A restaurant guest becomes visibly intoxicated and requests another alcoholic drink. The server should:",
    choices: [
      "Serve the drink quickly before the guest causes trouble",
      "Refuse further alcohol service politely, offer food or nonalcoholic alternatives, and involve a manager if needed",
      "Let the guest’s friends decide whether to keep serving",
      "Add the drinks to the bill but give them to another table",
    ],
    correctIndex: 1,
    explanation:
      "Responsible alcohol service legally prohibits serving visibly intoxicated guests. Servers should decline respectfully, offer alternatives, and notify management to protect both the guest and the business from liability.",
  },
  {
    id: 4174,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A wheelchair user books a room and requests an accessible bathroom. The hotel’s legal and ethical obligation is to:",
    choices: [
      "Charge a premium accessibility fee",
      "Provide the requested accessible accommodation as reserved",
      "Offer a standard room with a folding chair in the tub",
      "Ask the guest to bring their own equipment",
    ],
    correctIndex: 1,
    explanation:
      "Accessibility laws require lodging properties to honor reservations for accessible rooms and features. Charging extra or substituting inferior accommodations is discriminatory and often unlawful.",
  },
  {
    id: 4175,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "Tipping in the United States hospitality industry is BEST described as:",
    choices: [
      "A mandatory government tax on all services",
      "A voluntary payment recognizing good service, often expected for certain roles",
      "A fee charged only to international visitors",
      "Illegal in most restaurants",
    ],
    correctIndex: 1,
    explanation:
      "Tips are voluntary gratuities that recognize service quality and form a significant part of income for servers, bell staff, and other tipped employees; they are customary though not legally mandatory.",
  },
  {
    id: 4176,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A guest complains that their steak is undercooked. After apologizing, the server’s NEXT best action is to:",
    choices: [
      "Argue that the steak was cooked correctly",
      "Remove the item and have it recooked or replaced promptly at no dispute",
      "Tell the guest steaks vary and nothing can be done",
      "Charge a recooking fee",
    ],
    correctIndex: 1,
    explanation:
      "After listening and apologizing, swift correction — replacing or fixing the item without argument or extra charge — resolves the issue and preserves the dining experience.",
  },
  {
    id: 4177,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "A theme park measures how long guests wait in line and redesigns queues to add entertainment while waiting. This initiative primarily targets improving:",
    choices: [
      "Perceived value of the overall experience",
      "Employee payroll accuracy",
      "Food cost percentage",
      "Insurance premiums",
    ],
    correctIndex: 0,
    explanation:
      "Managing wait-time perception enhances the total guest experience and perceived value. Entertainment in queues reduces frustration, improving satisfaction scores even when waits remain long.",
  },
  {
    id: 4178,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "Confidentiality in guest services means employees should:",
    choices: [
      "Share guest room numbers freely with anyone who calls",
      "Post guest names publicly for recognition",
      "Protect guests’ personal information and never disclose details like room numbers to strangers",
      "Sell guest contact lists to marketers",
    ],
    correctIndex: 2,
    explanation:
      "Guest privacy protections prevent unauthorized disclosure of personal data, room assignments, and stay details, protecting guests from harassment, theft, and identity fraud.",
  },
  {
    id: 4179,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A caller claims to be a guest’s spouse and demands the guest’s room number. The desk agent cannot verify the claim. The agent should:",
    choices: [
      "Give the room number since the story sounds believable",
      "Politely decline to share the information and offer to connect the call or take a message",
      "Read the guest’s full folio over the phone",
      "Announce the room number in the lobby",
    ],
    correctIndex: 1,
    explanation:
      "Without verification, disclosing a room number violates guest privacy and safety protocols. Offering to transfer the call or take a message protects the guest while remaining helpful.",
  },
  {
    id: 4180,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "Cross-selling in a hotel context occurs when an employee:",
    choices: [
      "Recommends related services such as spa treatments or dinner reservations alongside a room booking",
      "Transfers a guest to a competing hotel",
      "Sells the same product at two different prices to different guests",
      "Cancels a reservation without notice",
    ],
    correctIndex: 0,
    explanation:
      "Cross-selling promotes complementary products or services — spa, dining, tours — increasing revenue per guest while enhancing the overall stay experience.",
  },
  {
    id: 4181,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "A cruise ship assigns each crew member specific duties during an emergency and conducts regular drills. The MAIN purpose of these drills is to:",
    choices: [
      "Entertain passengers between ports",
      "Ensure crew can execute emergency procedures quickly and correctly",
      "Reduce food costs",
      "Increase bar revenue",
    ],
    correctIndex: 1,
    explanation:
      "Mandatory safety drills build muscle memory so crews can evacuate, assist passengers, and manage emergencies efficiently, which is essential given the isolated environment at sea.",
  },
  {
    id: 4182,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "Which behavior best demonstrates professionalism in appearance for a hospitality employee?",
    choices: [
      "Wearing a clean, pressed uniform with a name tag",
      "Chewing gum while greeting guests",
      "Wearing headphones at the front desk",
      "Using strong perfume and wrinkled clothing",
    ],
    correctIndex: 0,
    explanation:
      "A clean uniform and name tag signal competence and help guests identify employees. Grooming standards directly shape first impressions, which are moments of truth in service.",
  },
  {
    id: 4183,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A guest requests a late checkout on a day the hotel expects full occupancy. The desk agent should:",
    choices: [
      "Automatically grant any request regardless of occupancy",
      "Check availability and housekeeping schedules, then accommodate if possible or offer alternatives",
      "Refuse all late checkout requests permanently",
      "Charge triple the nightly rate",
    ],
    correctIndex: 1,
    explanation:
      "Balancing guest satisfaction with operational constraints means checking real availability first. If late checkout is impossible due to arrivals, offering luggage storage or lounge access is a fair alternative.",
  },
  {
    id: 4184,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "Data shows a hotel’s satisfaction scores are high except for 'speed of check-in.' The MOST logical first step for management is to:",
    choices: [
      "Ignore the metric since other scores are high",
      "Analyze the check-in process to identify bottlenecks such as staffing levels or technology delays",
      "Fire the entire front desk team immediately",
      "Raise room rates to reduce demand",
    ],
    correctIndex: 1,
    explanation:
      "Targeted improvement starts with diagnosing root causes — staffing, procedures, or systems — before changing anything. Ignoring a weak metric risks eroding overall satisfaction.",
  },
  {
    id: 4185,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "Active listening during a guest interaction includes:",
    choices: [
      "Interrupting quickly with solutions",
      "Checking your phone while the guest speaks",
      "Paraphrasing the guest’s concern back to confirm understanding",
      "Finishing the guest’s sentences to save time",
    ],
    correctIndex: 2,
    explanation:
      "Active listening involves focusing fully on the speaker and paraphrasing or asking clarifying questions to confirm understanding, which prevents misdiagnosed problems and shows respect.",
  },
  {
    id: 4186,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "A concierge’s PRIMARY role in a hotel is to:",
    choices: [
      "Audit financial statements",
      "Help guests with recommendations, reservations, tickets, and local arrangements",
      "Repair mechanical systems",
      "Prepare banquet meals",
    ],
    correctIndex: 1,
    explanation:
      "Concierges act as local experts and facilitators, securing restaurant reservations, transportation, event tickets, and personalized recommendations that enhance the guest’s stay.",
  },
  {
    id: 4187,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A guest with a severe peanut allergy dines at a hotel restaurant. The server’s MOST important action is to:",
    choices: [
      "Guess which dishes might contain peanuts",
      "Communicate the allergy clearly to the kitchen and confirm safe menu options with the chef",
      "Recommend the guest eat elsewhere",
      "Serve the dish faster than usual",
    ],
    correctIndex: 1,
    explanation:
      "Allergy information must be accurately relayed to kitchen staff, who can verify ingredients and prevent cross-contact. Guessing about allergens can cause life-threatening reactions.",
  },
  {
    id: 4188,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "A hotel discovers a pattern: guests who experience a well-handled problem often become MORE loyal than guests who had no problem at all. This phenomenon is known as:",
    choices: [
      "The service recovery paradox",
      "The multiplier effect",
      "Price elasticity",
      "The Pareto principle",
    ],
    correctIndex: 0,
    explanation:
      "The service recovery paradox describes how guests whose complaints are resolved exceptionally well can end up more loyal than those who never experienced a problem, because the recovery proves the business cares.",
  },
  {
    id: 4189,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "When a guest thanks an employee for great service, the most appropriate response is:",
    choices: [
      "'No problem, whatever.'",
      "'You’re welcome — we’re glad you enjoyed your stay.'",
      "'It was in my job description.'",
      "Silence and a nod",
    ],
    correctIndex: 1,
    explanation:
      "Warm, courteous acknowledgment reinforces a positive final impression. Dismissive or robotic replies undermine otherwise excellent service.",
  },
  {
    id: 4190,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A bellhop carries luggage and gives a brief room orientation. This role contributes to guest satisfaction mainly by:",
    choices: [
      "Reducing the hotel’s tax burden",
      "Creating a welcoming arrival experience and reducing guest stress",
      "Setting room rates",
      "Managing the central reservation system",
    ],
    correctIndex: 1,
    explanation:
      "Bell staff shape the crucial first impression at arrival, easing logistics for guests and setting a hospitable tone for the entire stay.",
  },
  {
    id: 4191,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "A resort receives simultaneous complaints from multiple guests about slow elevator service during peak hours. The BEST long-term response is to:",
    choices: [
      "Apologize individually and change nothing else",
      "Analyze usage patterns and invest in capacity improvements or traffic-management solutions",
      "Ask guests to use stairs exclusively",
      "Close half the elevators to save electricity",
    ],
    correctIndex: 1,
    explanation:
      "Systemic problems require systemic fixes. Analyzing peak demand and investing in capacity or flow solutions addresses the root cause, whereas individual apologies leave the underlying dissatisfaction intact.",
  },
  {
    id: 4192,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "Guest expectations are formed PRIMARILY by:",
    choices: [
      "Past experiences, advertising, reviews, and word of mouth",
      "The hotel’s internal org chart",
      "Employees’ personal salaries",
      "Local zoning regulations",
    ],
    correctIndex: 0,
    explanation:
      "Expectations develop from prior experiences, marketing promises, online reviews, and recommendations. Service succeeds when the delivered experience meets or exceeds those expectations.",
  },
  {
    id: 4193,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "If promised service cannot be delivered — for example, a booked amenity is unavailable — the employee should:",
    choices: [
      "Hope the guest does not notice",
      "Blame another department loudly in front of the guest",
      "Inform the guest honestly, apologize, and offer a suitable alternative or compensation",
      "Deny the amenity was ever promised",
    ],
    correctIndex: 2,
    explanation:
      "Honesty plus a concrete alternative maintains trust even when things go wrong. Hiding problems or blaming others damages credibility and escalates dissatisfaction.",
  },
  {
    id: 4194,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "During a busy breakfast rush, a hostess keeps a running waitlist and quotes realistic wait times. Quoting accurate wait times is important because:",
    choices: [
      "It fulfills tax reporting requirements",
      "Trust in the estimate shapes the guest’s perception of fairness and service quality",
      "Longer quotes always increase tips",
      "It eliminates the need to seat parties",
    ],
    correctIndex: 1,
    explanation:
      "Guests tolerate waits better when estimates are honest and honored. Overpromising short waits then breaking them feels deceptive and damages satisfaction more than the wait itself.",
  },
  {
    id: 4195,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "A luxury hotel trains staff to address returning loyalty-tier guests by name using arrival alerts. The PRIMARY strategic purpose is to:",
    choices: [
      "Differentiate the property through personalized high-touch service",
      "Comply with minimum wage laws",
      "Reduce the number of rooms sold",
      "Standardize pricing across brands",
    ],
    correctIndex: 0,
    explanation:
      "Personalized recognition leverages guest data to deliver tailored service that economy competitors cannot easily match, reinforcing the premium positioning and deepening loyalty.",
  },
  {
    id: 4196,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "Which of the following is the best example of going 'above and beyond' for a guest?",
    choices: [
      "Completing only the tasks listed in the job description",
      "Noticing a guest struggling with heavy bags and offering help before being asked",
      "Ignoring a spill because it is not your section",
      "Ending a shift early when the lobby is busy",
    ],
    correctIndex: 1,
    explanation:
      "Going above and beyond means voluntarily exceeding basic duties to improve the guest experience, such as proactively offering assistance without being asked.",
  },
  {
    id: 4197,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A guest disputes a charge on their folio at checkout. The cashier’s FIRST step should be to:",
    choices: [
      "Review the folio line by line with the guest to identify the disputed item",
      "Accuse the guest of trying to avoid payment",
      "Delete the charge immediately without verification",
      "Call security to detain the guest",
    ],
    correctIndex: 0,
    explanation:
      "Reviewing charges together identifies misunderstandings quickly and shows good faith. Legitimate errors can then be corrected with proper authorization rather than arbitrary deletion.",
  },
  {
    id: 4198,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "In service marketing, the 'tangibles' dimension of service quality refers to:",
    choices: [
      "Physical facilities, equipment, uniforms, and printed materials",
      "The empathy of employees",
      "How reliably the service is performed",
      "How quickly complaints are resolved",
    ],
    correctIndex: 0,
    explanation:
      "In the SERVQUAL framework, tangibles cover the physical evidence of service — buildings, décor, equipment, staff appearance, and materials. Reliability, empathy, and responsiveness are separate dimensions.",
  },
  {
    id: 4199,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "A tour operator learns that a supplier has double-booked a popular excursion for tomorrow. The operator’s BEST immediate action is to:",
    choices: [
      "Say nothing and hope guests forget",
      "Proactively contact affected guests, explain the situation, and arrange a comparable alternative",
      "Cancel the entire tour indefinitely",
      "Blame the supplier in front of the guests",
    ],
    correctIndex: 1,
    explanation:
      "Proactive communication with a comparable substitute preserves trust and salvages the experience. Silence or blame transfers the supplier’s failure into the operator’s reputation damage.",
  },
  {
    id: 4200,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "Teamwork among hotel departments matters to guests because:",
    choices: [
      "Guests only interact with the general manager",
      "Breakdowns between departments, such as uncommunicated early arrivals, directly affect the guest experience",
      "Departments never share information",
      "Each department serves entirely different guests",
    ],
    correctIndex: 1,
    explanation:
      "A guest experiences the hotel as one organization. When departments fail to coordinate — rooms not ready, requests lost — the guest perceives the whole property as disorganized.",
  },
  {
    id: 4201,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A coffee shop regularly invites its most frequent customers to taste new menu items for free. This practice primarily supports:",
    choices: [
      "Customer retention and word-of-mouth advocacy",
      "Lower health inspection ratings",
      "Reduced supplier contracts",
      "Higher fixed costs only",
    ],
    correctIndex: 0,
    explanation:
      "Engaging loyal customers makes them feel valued, strengthens retention, and turns them into advocates who recommend the shop to others — low-cost, high-impact marketing.",
  },
  {
    id: 4202,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "A guest demands a full refund for a minor inconvenience clearly outside the hotel’s control, such as rain during their vacation. The desk manager’s BEST response is to:",
    choices: [
      "Grant the full refund to avoid conflict",
      "Empathize, explain what the hotel can and cannot control, and offer reasonable goodwill gestures within policy",
      "Have the guest removed from the property",
      "Promise sunny weather tomorrow",
    ],
    correctIndex: 1,
    explanation:
      "Effective resolution balances empathy with firmness: acknowledge disappointment, clarify responsibility, and offer proportionate goodwill — not capitulation to unreasonable demands that encourages abuse of policy.",
  },
  {
    id: 4203,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "Why is it risky for hospitality employees to promise something they cannot guarantee?",
    choices: [
      "Promises have no effect on guests",
      "Broken promises destroy trust and generate escalated complaints",
      "Guarantees are illegal in all states",
      "Only managers may speak to guests",
    ],
    correctIndex: 1,
    explanation:
      "Guests make plans around what employees tell them. Unfulfilled promises convert small problems into trust failures and escalated complaints, so staff should commit only to what they can control or verify.",
  },
  {
    id: 4204,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "A 'walk-in' guest is one who:",
    choices: [
      "Arrives without a prior reservation",
      "Leaves before checkout",
      "Books through a third-party website",
      "Stays multiple nights",
    ],
    correctIndex: 0,
    explanation:
      "Walk-ins arrive at the property seeking accommodation without a reservation. They represent incremental business but carry inventory risk since no commitment was made in advance.",
  },
  {
    id: 4205,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A hotel offers a mobile app for check-in, room selection, and digital keys. The PRIMARY guest-service benefit is:",
    choices: [
      "Convenience and reduced waiting for guests who prefer self-service",
      "Eliminating all staff positions",
      "Increasing the number of complaints",
      "Avoiding occupancy taxes",
    ],
    correctIndex: 0,
    explanation:
      "Technology-enabled self-service gives time-pressed travelers speed and control while freeing staff to focus on complex or high-touch guest needs.",
  },
  {
    id: 4206,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "Analysis of guest feedback reveals that business travelers value fast Wi-Fi above all, while families value pool access. Acting on this insight, the revenue manager should MOST likely:",
    choices: [
      "Market identical packages to both segments",
      "Create segment-specific offerings and messages highlighting each group’s top priority",
      "Remove Wi-Fi and the pool to cut costs",
      "Raise rates equally for everyone",
    ],
    correctIndex: 1,
    explanation:
      "Segmentation insight is valuable only when acted upon. Tailoring products, packages, and messaging to each segment’s priorities increases conversion and satisfaction in both groups.",
  },
  {
    id: 4207,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "When a guest uses profanity at an employee, the professional response is to:",
    choices: [
      "Swear back to establish equality",
      "Stay calm, not take it personally, and focus on resolving the issue — or involve a supervisor if abuse continues",
      "Hang up or walk away without a word",
      "Post about the guest on social media",
    ],
    correctIndex: 1,
    explanation:
      "Professionals de-escalate by staying composed and solution-focused. If a guest becomes abusive despite calm handling, involving a supervisor protects both the employee and the service climate.",
  },
  {
    id: 4208,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "Responsiveness as a dimension of service quality refers to:",
    choices: [
      "The willingness to help guests promptly",
      "The price of the service",
      "The size of the building",
      "The number of years the business has operated",
    ],
    correctIndex: 0,
    explanation:
      "Responsiveness measures how quickly and willingly staff help guests — answering calls fast, resolving requests promptly, and not leaving guests waiting.",
  },
  {
    id: 4209,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A guest requests a quiet room away from the elevator. Recording this preference in the guest profile so it applies to future stays is an example of:",
    choices: [
      "Using guest history to personalize future service",
      "Yield management",
      "Overbooking protection",
      "Labor scheduling",
    ],
    correctIndex: 0,
    explanation:
      "Preference capture in guest profiles allows the property to pre-assign suitable rooms automatically on return visits, delivering effortless personalization that drives loyalty.",
  },
  {
    id: 4210,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "A restaurant’s online rating drops after several reviews mention rude service. The owner’s MOST effective response combines:",
    choices: [
      "Deleting the review platform account and retraining nobody",
      "Investigating specific incidents, retraining staff on service standards, and responding professionally to reviews",
      "Offering free meals to anyone who complains, regardless of validity",
      "Banning reviewers from the restaurant",
    ],
    correctIndex: 1,
    explanation:
      "Fixing reputation requires addressing the root cause (staff behavior) through investigation and training while demonstrating accountability publicly. Suppression tactics worsen reputational damage.",
  },
  {
    id: 4211,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "The term 'guest cycle' in lodging refers to:",
    choices: [
      "The four stages of a guest’s relationship with a hotel: pre-arrival, arrival, occupancy, and departure",
      "The rotation of housekeeping shifts",
      "The hotel’s fiscal year",
      "The frequency of linen replacement",
    ],
    correctIndex: 0,
    explanation:
      "The guest cycle frames the entire service relationship across four stages — pre-arrival, arrival, occupancy, and departure — each with distinct service and revenue opportunities.",
  },
  {
    id: 4212,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "Which action best shows respect for a guest’s time?",
    choices: [
      "Making them repeat their request to three different employees",
      "Handling their request accurately the first time",
      "Placing them on hold for ten minutes",
      "Arriving twenty minutes late to fix their problem",
    ],
    correctIndex: 1,
    explanation:
      "First-contact resolution respects the guest’s time and prevents frustration from repeated explanations, which is why empowerment and good internal communication matter.",
  },
  {
    id: 4213,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "medium",
    prompt:
      "A hotel shuttle driver learns a guest missed a critical flight connection due to traffic. The driver should:",
    choices: [
      "Explain that traffic is not the hotel’s fault and end the conversation",
      "Express sympathy and radio ahead so the front desk can assist with rebooking options",
      "Promise the airline will refund everything",
      "Ignore the guest for the rest of the ride",
    ],
    correctIndex: 1,
    explanation:
      "Even when the problem originates outside the hotel, alerting colleagues allows coordinated assistance. Empathy plus action demonstrates seamless, guest-centered service.",
  },
  {
    id: 4214,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "hard",
    prompt:
      "A casino hotel identifies its highest-spending guests and assigns dedicated hosts to handle their reservations and requests. This strategy is known as:",
    choices: [
      "Customer relationship management focused on high-value segments",
      "Mass marketing",
      "Cost leadership",
      "Horizontal integration",
    ],
    correctIndex: 0,
    explanation:
      "CRM applied to high-value segments concentrates personalized attention on guests with the greatest lifetime value, maximizing retention of the revenue base that matters most.",
  },
  {
    id: 4215,
    clusterId: "hospitality-tourism",
    category: "Guest Services",
    difficulty: "easy",
    prompt:
      "The main difference between customer satisfaction and customer loyalty is that:",
    choices: [
      "They are identical concepts",
      "Satisfaction is how happy a guest is with one experience, while loyalty is the tendency to return repeatedly",
      "Loyalty applies only to employees",
      "Satisfaction cannot be measured",
    ],
    correctIndex: 1,
    explanation:
      "Satisfaction is an attitude about a specific experience; loyalty is behavioral — repeat patronage and advocacy. Satisfied guests do not always return, which is why businesses actively build loyalty.",
  },
  {
    id: 4216,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "A hotel has 200 rooms and sold 150 of them, generating $15,000 in room revenue. The hotel’s ADR was:",
    choices: [
      "$75",
      "$100",
      "$150",
      "$225",
    ],
    correctIndex: 1,
    explanation:
      "ADR equals room revenue divided by rooms sold: $15,000 ÷ 150 = $100 per occupied room.",
  },
  {
    id: 4217,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "A 100-room hotel sells 80 rooms at an average rate of $120. Its RevPAR is:",
    choices: [
      "$96",
      "$120",
      "$150",
      "$9,600",
    ],
    correctIndex: 0,
    explanation:
      "RevPAR = room revenue ÷ rooms available = (80 × $120) ÷ 100 = $96. Equivalently, occupancy (80%) × ADR ($120) = $96.",
  },
  {
    id: 4218,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A hotel’s rooms division typically includes which two major departments?",
    choices: [
      "Front office and housekeeping",
      "Accounting and legal",
      "Marketing and human resources",
      "Purchasing and engineering only",
    ],
    correctIndex: 0,
    explanation:
      "The rooms division consists of the front office (reservations, check-in, guest services) and housekeeping, the two departments most directly responsible for selling and maintaining guestrooms.",
  },
  {
    id: 4219,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "The person responsible for overseeing all food and beverage operations in a large hotel is generally called the:",
    choices: [
      "Director of food and beverage",
      "Front office manager",
      "Executive steward",
      "Revenue manager",
    ],
    correctIndex: 0,
    explanation:
      "The director of food and beverage manages restaurants, bars, banquets, and room service throughout the property, ensuring quality and profitability across outlets.",
  },
  {
    id: 4220,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "In a franchise relationship like a Holiday Inn franchisee, the franchisee pays fees in exchange for:",
    choices: [
      "Ownership of the franchisor corporation",
      "Use of the brand name, reservation system, and operating standards",
      "Free land and buildings",
      "Exemption from local taxes",
    ],
    correctIndex: 1,
    explanation:
      "Franchisees pay initial and ongoing royalty fees for brand recognition, centralized reservations, marketing, and proven operating systems while retaining ownership of their property.",
  },
  {
    id: 4221,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "Under a management contract, a hotel management company operates a property owned by an investor. The management company is compensated by:",
    choices: [
      "Receiving full ownership after ten years",
      "A base fee plus a percentage of profits or revenue",
      "Paying rent to the guests",
      "Selling rooms to itself",
    ],
    correctIndex: 1,
    explanation:
      "Management companies operate properties they do not own, earning a base fee plus incentive compensation tied to gross or net operating results, aligning their interest with the owner’s profitability.",
  },
  {
    id: 4222,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "The night audit in a hotel primarily involves:",
    choices: [
      "Cleaning guestrooms overnight",
      "Verifying and posting daily charges and reconciling accounts for the business day",
      "Cooking the midnight snack",
      "Repainting hallways",
    ],
    correctIndex: 1,
    explanation:
      "The night auditor closes the day’s books: posting room charges and taxes, reconciling folios and outlets, verifying rates, and producing daily operating reports.",
  },
  {
    id: 4223,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A guest who is currently staying and will remain at least one more night has a room status of:",
    choices: [
      "Due out",
      "Stayover",
      "Departed",
      "No-show",
    ],
    correctIndex: 1,
    explanation:
      "Stayover describes an occupied room whose guest is not departing today and will continue occupying the room, requiring standard daily service rather than checkout processing.",
  },
  {
    id: 4224,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "A 'due out' room is one where:",
    choices: [
      "The guest is expected to check out today",
      "Maintenance is due",
      "The rate is due to increase",
      "Linens are due for replacement",
    ],
    correctIndex: 0,
    explanation:
      "Due out means the occupant is scheduled to depart today. Housekeeping prioritizes these rooms for cleaning once vacated so they can be resold that evening.",
  },
  {
    id: 4225,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A guest settles their bill and returns later that day asking for their room key back because they forgot an item. This situation is handled as:",
    choices: [
      "An early arrival",
      "A sleepover request",
      "A late checkout extension or re-entry per policy",
      "A group booking",
    ],
    correctIndex: 2,
    explanation:
      "Once checked out, re-entry requires staff assistance under policy — often brief escorted access or a courtesy hold — balancing guest convenience with security and inventory accuracy.",
  },
  {
    id: 4226,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "A hotel forecasts 95 percent occupancy for a citywide event and raises rates accordingly, then lowers them when demand drops. This pricing practice is known as:",
    choices: [
      "Price fixing with competitors",
      "Yield (revenue) management",
      "Cost-plus accounting",
      "Loss-leader pricing",
    ],
    correctIndex: 1,
    explanation:
      "Yield management adjusts prices based on forecast demand to maximize revenue per available room — high rates when demand is strong, discounts to stimulate weak periods. It is legal unilateral pricing, not collusion.",
  },
  {
    id: 4227,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "Which document lists every guest expected to arrive on a given day along with their reservation details?",
    choices: [
      "Arrival report",
      "Income statement",
      "Purchase order",
      "Organizational chart",
    ],
    correctIndex: 0,
    explanation:
      "The arrival report helps the front desk prepare for incoming guests — verifying rates, special requests, and payment methods before they reach the property.",
  },
  {
    id: 4228,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A property management system (PMS) in a hotel is BEST described as:",
    choices: [
      "Software that manages reservations, room assignments, billing, and guest profiles",
      "A legal contract with the city",
      "The employee cafeteria schedule",
      "An exterior landscaping plan",
    ],
    correctIndex: 0,
    explanation:
      "The PMS is the hotel’s central operational software, coordinating reservations, front desk transactions, housekeeping status, folios, and reporting across departments.",
  },
  {
    id: 4229,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "Which lodging property type is designed for guests staying weeks or months and typically includes kitchenettes?",
    choices: [
      "Extended-stay hotel",
      "Casino resort",
      "Boutique bed and breakfast",
      "Convention center hotel",
    ],
    correctIndex: 0,
    explanation:
      "Extended-stay properties target long-duration guests — relocating workers, project teams, families in transition — with kitchen facilities, workspace, and weekly rates.",
  },
  {
    id: 4230,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "A resort differs from a commercial hotel primarily because a resort:",
    choices: [
      "Charges no taxes",
      "Is a comprehensive destination offering recreation, dining, and activities on-site",
      "Never has restaurants",
      "Only accepts group business",
    ],
    correctIndex: 1,
    explanation:
      "Resorts position themselves as destinations in themselves, bundling lodging with recreation, entertainment, dining, and activities so guests have little need to leave the property.",
  },
  {
    id: 4231,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "Housekeeping’s daily report to the front office lists each room’s service status. This communication is essential because:",
    choices: [
      "It determines employees’ tips",
      "The front office can only sell rooms that housekeeping reports as clean and ready",
      "It replaces the fire inspection",
      "It sets the hotel’s ADR automatically",
    ],
    correctIndex: 1,
    explanation:
      "Room status accuracy between housekeeping and the front office controls sellable inventory. Selling a dirty or occupied room creates serious guest-facing failures.",
  },
  {
    id: 4232,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "A general manager reviews the daily report showing occupancy of 60 percent, ADR of $140, and RevPAR of $84. If occupancy rises to 80 percent at the same ADR, RevPAR becomes:",
    choices: [
      "$84",
      "$105",
      "$112",
      "$140",
    ],
    correctIndex: 2,
    explanation:
      "RevPAR = occupancy × ADR = 0.80 × $140 = $112. RevPAR moves with both fill and rate, which is why it summarizes revenue efficiency better than either metric alone.",
  },
  {
    id: 4233,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "The executive housekeeper’s responsibilities MOST likely include:",
    choices: [
      "Negotiating the hotel’s franchise agreement",
      "Scheduling room attendants, inspecting rooms, and managing linen and cleaning inventories",
      "Setting national advertising strategy",
      "Flying the company jet",
    ],
    correctIndex: 1,
    explanation:
      "The executive housekeeper leads the housekeeping department: staffing and scheduling, quality inspections, inventory control of linens and supplies, and coordination with the front office and engineering.",
  },
  {
    id: 4234,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "Which staff member is typically responsible for maintaining pools, HVAC systems, and electrical systems in a hotel?",
    choices: [
      "Engineering and maintenance department",
      "Sales department",
      "Night audit team",
      "Catering staff",
    ],
    correctIndex: 0,
    explanation:
      "Engineering and maintenance keeps the physical plant running — mechanical, electrical, plumbing, pools — protecting both guest comfort and safety compliance.",
  },
  {
    id: 4235,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A guest’s total bill for their stay, itemizing room charges, taxes, and incidental purchases, is called a:",
    choices: [
      "Folio",
      "Manifest",
      "Prospectus",
      "Tariff ledger",
    ],
    correctIndex: 0,
    explanation:
      "The guest folio is the running account of all charges posted to a guest’s stay, reviewed and settled at checkout.",
  },
  {
    id: 4236,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A corporate client negotiates a fixed discounted rate for its employees’ stays throughout the year. This arrangement is called a:",
    choices: [
      "Corporate rate contract",
      "Rack rate posting",
      "Walk-in agreement",
      "Seasonal surcharge",
    ],
    correctIndex: 0,
    explanation:
      "Corporate contracts guarantee volume by locking negotiated discounts for a company’s travelers, giving the hotel predictable base demand and the company controlled travel costs.",
  },
  {
    id: 4237,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "A hotel’s forecast shows low midweek occupancy next month. The revenue manager’s BEST yield-management response is to:",
    choices: [
      "Raise all rates to improve ADR",
      "Offer targeted promotions and discounted packages to stimulate demand for those dates",
      "Close the hotel entirely",
      "Eliminate loyalty program benefits",
    ],
    correctIndex: 1,
    explanation:
      "When demand is weak, discounting strategically fills rooms that would otherwise sit empty, since marginal revenue from an unsold room is zero. Raising rates into weak demand worsens occupancy.",
  },
  {
    id: 4238,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "The 'rack rate' of a hotel room refers to:",
    choices: [
      "The standard published price before any discounts",
      "The lowest price ever charged",
      "The employee rate",
      "The cost of building the room",
    ],
    correctIndex: 0,
    explanation:
      "Rack rate is the official published price for a room type; most guests actually pay discounted corporate, group, promotional, or wholesale rates below it.",
  },
  {
    id: 4239,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "During check-in, a guest presents a credit card in a different name than the reservation. The agent should:",
    choices: [
      "Accept it without question to avoid awkwardness",
      "Follow payment policy — verify authorization or have the cardholder present before accepting third-party payment",
      "Refuse to check the guest in under any circumstance",
      "Charge the card twice for security",
    ],
    correctIndex: 1,
    explanation:
      "Third-party payments require verification to prevent fraud. Policies such as signed authorization forms or cardholder presence protect both the guest and the hotel.",
  },
  {
    id: 4240,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "An owner is deciding between franchising an independent hotel or joining a brand. The STRONGEST argument FOR franchising is:",
    choices: [
      "Immediate access to brand recognition, reservation systems, and standardized operating support",
      "Total freedom from any fees or standards",
      "Guaranteed profits regardless of management quality",
      "Exemption from safety regulations",
    ],
    correctIndex: 0,
    explanation:
      "Franchising trades fees and standards compliance for brand equity, distribution through central reservations, loyalty programs, and proven systems — advantages independent properties must build alone.",
  },
  {
    id: 4241,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A guest room attendant cleans approximately 15 rooms per shift. Management tracking this number is measuring:",
    choices: [
      "Employee productivity",
      "Guest satisfaction directly",
      "Occupancy rate",
      "Market share",
    ],
    correctIndex: 0,
    explanation:
      "Rooms cleaned per shift is a labor productivity metric used for scheduling and staffing decisions. Quality inspections must accompany productivity targets to protect standards.",
  },
  {
    id: 4242,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "In-room dining service delivered by hotel staff is commonly called:",
    choices: [
      "Room service",
      "Banquet service",
      "Buffet service",
      "Vending service",
    ],
    correctIndex: 0,
    explanation:
      "Room service (in-room dining) delivers food and beverages to guestrooms, a convenience amenity expected in full-service and luxury hotels.",
  },
  {
    id: 4243,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A hotel sells its rooms to wholesalers and online travel agencies at reduced rates in exchange for volume distribution. A RISK of relying heavily on these channels is:",
    choices: [
      "Lower profit margins and reduced direct booking relationships with guests",
      "Higher ADR automatically",
      "Too much guest loyalty",
      "Excess ownership of the agency",
    ],
    correctIndex: 0,
    explanation:
      "Third-party channels charge commissions and own the customer relationship, limiting the hotel’s ability to market directly to those guests and compressing margins. Direct bookings are more profitable.",
  },
  {
    id: 4244,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "The front office manager directly supervises which group of employees?",
    choices: [
      "Front desk agents, bell staff, and concierge",
      "Line cooks and dishwashers",
      "Accountants and auditors only",
      "Sales managers",
    ],
    correctIndex: 0,
    explanation:
      "The front office manager leads guest-facing arrival and departure functions: front desk agents, bell staff, concierge, switchboard, and often reservations.",
  },
  {
    id: 4245,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "A hotel tracks its performance against a competitive set using an industry benchmarking report. Comparing its RevPAR to the compset average measures:",
    choices: [
      "Market penetration and relative performance",
      "Employee turnover",
      "Food cost percentage",
      "Franchise fee amounts",
    ],
    correctIndex: 0,
    explanation:
      "RevPAR index against a competitive set shows whether the hotel is capturing its fair share of market revenue. An index above 100 means outperforming the compset; below 100 signals lost share.",
  },
  {
    id: 4246,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A guest checks out but disputes a minibar charge they say they never made. After verifying records show the charge was posted correctly, the agent should:",
    choices: [
      "Automatically waive every disputed charge to end the conversation",
      "Present the evidence politely and follow the property’s dispute resolution process",
      "Accuse the guest of lying loudly in the lobby",
      "Keep the guest’s deposit permanently without explanation",
    ],
    correctIndex: 1,
    explanation:
      "Professional dispute handling relies on documentation and calm presentation, with escalation paths defined by policy. Automatic waivers invite abuse; hostility escalates conflict.",
  },
  {
    id: 4247,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "Which room type description matches a single room with one bed and space for one person?",
    choices: [
      "Single",
      "Double-double",
      "Suite",
      "Connecting room",
    ],
    correctIndex: 0,
    explanation:
      "A single is a room designed for one occupant, usually with one bed. Doubles accommodate two, suites combine living and sleeping areas, and connecting rooms share a door.",
  },
  {
    id: 4248,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "Two guestrooms across the hall from each other are described as:",
    choices: [
      "Connecting rooms",
      "Adjacent rooms",
      "Suites",
      "Efficiencies",
    ],
    correctIndex: 1,
    explanation:
      "Adjacent rooms are near each other but do not share a door. Connecting rooms have an interior door between them, while suites combine bedroom and living space within one unit.",
  },
  {
    id: 4249,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "A 300-room hotel wants to increase RevPAR from $90 to $99 without changing occupancy. The required ADR increase, given current ADR of $150, is closest to:",
    choices: [
      "$5",
      "$10",
      "$15",
      "$20",
    ],
    correctIndex: 2,
    explanation:
      "RevPAR = occupancy × ADR, so occupancy = $90 ÷ $150 = 60 percent. To reach RevPAR of $99 at 60 percent occupancy, ADR must be $99 ÷ 0.60 = $165 — an increase of $15.",
  },
  {
    id: 4250,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "A bed and breakfast (B&B) is distinguished from a standard hotel primarily by:",
    choices: [
      "Its small size, personal host service, and breakfast included in the rate",
      "Its large casino floor",
      "Its airport location",
      "Its lack of bedrooms",
    ],
    correctIndex: 0,
    explanation:
      "B&Bs are typically small, owner-operated properties offering overnight lodging with a morning meal and personalized hospitality, often in converted homes or historic buildings.",
  },
  {
    id: 4251,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A hotel’s housekeeping department uses a 'par' level of three for bath towels. This means the hotel keeps:",
    choices: [
      "Three towels total in the entire building",
      "Three times the daily requirement in circulation so stock is available while items are in use, in laundry, or on shelves",
      "Exactly one towel per guest forever",
      "No inventory records at all",
    ],
    correctIndex: 1,
    explanation:
      "Par levels set inventory multiples of daily need so that supplies exist simultaneously in rooms, in process (laundry), and in storage, preventing shortages during turnover.",
  },
  {
    id: 4252,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "The term 'CPOR' (cost per occupied room) measures:",
    choices: [
      "The average cost of servicing each sold room, including cleaning and amenities",
      "The price guests pay per night",
      "Total marketing spend divided by employees",
      "The cost of building a new tower",
    ],
    correctIndex: 0,
    explanation:
      "CPOR divides total room operating costs by rooms sold, showing what it costs to service each occupied room — useful for controlling expenses relative to revenue.",
  },
  {
    id: 4253,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "A city passes stricter water-efficiency rules. A hotel’s engineering department MOST likely responds by:",
    choices: [
      "Installing low-flow fixtures and monitoring consumption across systems",
      "Banning all guest showers",
      "Ignoring the regulation until fined repeatedly",
      "Selling the pool to competitors",
    ],
    correctIndex: 0,
    explanation:
      "Compliance plus sustainability is achieved through efficient fixtures, leak detection, and monitoring — reducing utility costs while meeting regulatory requirements.",
  },
  {
    id: 4254,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "Which employee would a guest most likely contact to arrange a surprise birthday setup in their room?",
    choices: [
      "The concierge or front desk team",
      "The night auditor",
      "The payroll clerk",
      "The franchise director",
    ],
    correctIndex: 0,
    explanation:
      "Guest-facing staff such as the concierge and front desk coordinate special-occasion arrangements with housekeeping and food and beverage to deliver surprises seamlessly.",
  },
  {
    id: 4255,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "During check-in, a room assigned to a guest is reported dirty by housekeeping at the last minute. The agent should:",
    choices: [
      "Assign the guest another clean room immediately and apologize for the delay",
      "Give the guest the dirty room key anyway",
      "Tell the guest to clean it themselves",
      "Cancel the reservation and keep the deposit",
    ],
    correctIndex: 0,
    explanation:
      "Room status changes require quick reassignment from available inventory. Apologizing and promptly providing a clean room limits inconvenience and preserves confidence.",
  },
  {
    id: 4256,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "Which metric would BEST indicate whether a hotel is attracting its fair share of bookings compared with nearby competitors?",
    choices: [
      "RevPAR index against the competitive set",
      "Number of chandeliers in the lobby",
      "Employee cafeteria satisfaction",
      "Parking garage height",
    ],
    correctIndex: 0,
    explanation:
      "RevPAR index compares a property’s revenue performance to its competitive set; 100 means fair share, above 100 means outperforming rivals in capturing demand.",
  },
  {
    id: 4257,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "An investor analyzing two hotels sees Hotel A with 90 percent occupancy and $80 ADR, Hotel B with 60 percent occupancy and $150 ADR. Which conclusion is supported?",
    choices: [
      "Hotel A earns more revenue per available room ($72 vs $90), so B outperforms despite lower occupancy",
      "Hotel A always outperforms because occupancy is higher",
      "Both have identical RevPAR",
      "Occupancy alone determines profitability",
    ],
    correctIndex: 0,
    explanation:
      "Hotel A’s RevPAR = 0.90 × $80 = $72; Hotel B’s = 0.60 × $150 = $90. Despite filling fewer rooms, B generates more revenue per available room, showing why both metrics must be read together.",
  },
  {
    id: 4258,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "The primary role of a hotel’s sales department is to:",
    choices: [
      "Generate group business, corporate accounts, and event bookings",
      "Clean public areas",
      "Audit nightly revenues",
      "Repair elevators",
    ],
    correctIndex: 0,
    explanation:
      "Hotel sales teams prospect and negotiate group room blocks, corporate contracts, catering, and meetings — filling function space and securing future room nights.",
  },
  {
    id: 4259,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A conference organizer needs 200 sleeping rooms plus meeting space for three days. The hotel employee who prepares the proposal and negotiates terms is the:",
    choices: [
      "Sales manager",
      "Room attendant",
      "Night auditor",
      "Laundry supervisor",
    ],
    correctIndex: 0,
    explanation:
      "Sales managers handle group inquiries, prepare proposals covering rates, blocks, and meeting space, and negotiate contracts before handing off to event execution teams.",
  },
  {
    id: 4260,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "Why do hotels ask for a credit card guarantee or deposit on reservations?",
    choices: [
      "To reduce losses from no-shows and late cancellations",
      "To increase the rack rate",
      "To avoid paying commissions",
      "To eliminate housekeeping duties",
    ],
    correctIndex: 0,
    explanation:
      "Guarantees secure the reservation with payment backing, so the hotel can hold inventory confidently and charge no-show fees when rooms are held but never used.",
  },
  {
    id: 4261,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "A resort’s occupancy is 95 percent in July but 30 percent in January. The general manager wants steadier year-round revenue. The LEAST effective strategy would be:",
    choices: [
      "Hosting winter festivals and conferences to build off-season demand",
      "Targeting international markets whose vacation seasons differ",
      "Offering deep off-season packages for locals",
      "Raising peak-season prices further and doing nothing about winter",
    ],
    correctIndex: 3,
    explanation:
      "Raising already-strong peak prices does nothing to fix the underlying problem of empty winter rooms. Building counter-seasonal demand through events, new segments, and local packages addresses seasonality directly.",
  },
  {
    id: 4262,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "Which item is part of a standard guestroom preventive maintenance checklist?",
    choices: [
      "Checking smoke detectors and inspecting plumbing for leaks",
      "Repainting the entire hotel weekly",
      "Rebuilding the elevator monthly",
      "Rewriting the franchise agreement",
    ],
    correctIndex: 0,
    explanation:
      "Preventive maintenance catches small problems early — testing detectors, checking HVAC filters, inspecting plumbing and hardware — reducing costly breakdowns and safety risks.",
  },
  {
    id: 4263,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "medium",
    prompt:
      "A guest requests to extend their stay two extra nights, but the hotel is nearly full. The agent should:",
    choices: [
      "Extend the stay if inventory allows, or explain honestly and help find alternative accommodations if not",
      "Say yes regardless and deal with the overflow later",
      "Refuse without explanation",
      "Charge quadruple rates secretly",
    ],
    correctIndex: 0,
    explanation:
      "Extending loyal guests whenever possible builds goodwill; when impossible due to commitments, honest explanation and relocation assistance preserve trust.",
  },
  {
    id: 4264,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "hard",
    prompt:
      "A hotel discovers its competitor across the street consistently undercuts its rate by $10 yet has similar quality. Analysis shows the competitor fills more rooms. The FIRST strategic question management should ask is:",
    choices: [
      "Whether matching the price would increase total revenue given elasticity, or whether differentiation justifies the premium",
      "How to copy the competitor’s logo",
      "Whether to close permanently",
      "How to fire the revenue manager immediately",
    ],
    correctIndex: 0,
    explanation:
      "Price responses require understanding demand elasticity and positioning: lowering price may raise occupancy but not revenue if demand is inelastic, so analysis precedes reaction.",
  },
  {
    id: 4265,
    clusterId: "hospitality-tourism",
    category: "Lodging Operations",
    difficulty: "easy",
    prompt:
      "The term 'F&B' in hotel operations refers to:",
    choices: [
      "Food and beverage",
      "Front and back office",
      "Furniture and bedding",
      "Franchise and branding",
    ],
    correctIndex: 0,
    explanation:
      "F&B stands for food and beverage, encompassing restaurants, bars, banquets, catering, and room service within the property.",
  },
  {
    id: 4266,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "The person who plans menus, supervises the kitchen, and manages culinary staff in a restaurant is the:",
    choices: [
      "Executive chef",
      "Sommelier",
      "Maître d’",
      "Bar manager",
    ],
    correctIndex: 0,
    explanation:
      "The executive chef leads the kitchen: menu development, food quality, kitchen staffing, and food cost control. The maître d’ oversees dining room service instead.",
  },
  {
    id: 4267,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A restaurant’s food cost is $4,000 and its food sales are $16,000. The food cost percentage is:",
    choices: [
      "20 percent",
      "25 percent",
      "40 percent",
      "64 percent",
    ],
    correctIndex: 1,
    explanation:
      "Food cost percentage = cost of food sold ÷ food sales = $4,000 ÷ $16,000 = 25 percent. Managers track this to control portioning, waste, and pricing.",
  },
  {
    id: 4268,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "hard",
    prompt:
      "A menu item sells for $18 with a food cost of $5.40 per plate. Its contribution margin per plate is:",
    choices: [
      "$5.40",
      "$12.60",
      "$18.00",
      "$30.00",
    ],
    correctIndex: 1,
    explanation:
      "Contribution margin = selling price − food cost = $18.00 − $5.40 = $12.60, the amount each sale contributes toward labor, overhead, and profit.",
  },
  {
    id: 4269,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "Menu engineering classifies items by popularity and profitability. An item that is popular but low-margin is labeled a:",
    choices: [
      "Plowhorse",
      "Star",
      "Puzzle",
      "Dog",
    ],
    correctIndex: 0,
    explanation:
      "In menu engineering, stars are popular and profitable; plowhorses are popular but low-margin (candidates for modest price increases); puzzles are profitable but unpopular; dogs are neither.",
  },
  {
    id: 4270,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "Standardized recipes in a commercial kitchen primarily ensure:",
    choices: [
      "Consistent quality, portions, and costs every time a dish is prepared",
      "That no employee ever needs training",
      "Higher health inspection fees",
      "Longer cooking times",
    ],
    correctIndex: 0,
    explanation:
      "Standardized recipes specify ingredients, quantities, and procedures so any trained cook produces the same dish consistently — protecting quality and making food costing accurate.",
  },
  {
    id: 4271,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A restaurant tracks how many guests each server serves per shift. This metric primarily supports:",
    choices: [
      "Staffing and productivity decisions",
      "Menu pricing directly",
      "Health code compliance",
      "Franchise negotiations",
    ],
    correctIndex: 0,
    explanation:
      "Covers per server measures productivity and helps managers balance section assignments, forecast staffing needs, and evaluate performance fairly.",
  },
  {
    id: 4272,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "'Front of the house' in a restaurant refers to:",
    choices: [
      "Areas where guests are served, such as the dining room",
      "The walk-in freezer",
      "The dishwashing station",
      "Employee locker rooms only",
    ],
    correctIndex: 0,
    explanation:
      "Front of the house encompasses all guest-facing areas — dining room, bar, host stand — while back of the house covers kitchens, storage, and production areas.",
  },
  {
    id: 4273,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A quick-service restaurant emphasizes speed and standardization. Which practice BEST fits that model?",
    choices: [
      "Tableside preparation of entrées from a trolley",
      "Assembly-line production with limited menus and standardized portions",
      "Multi-course tasting menus chosen nightly by the chef",
      "Wine pairings selected by a sommelier",
    ],
    correctIndex: 1,
    explanation:
      "Quick service relies on simplified menus, standardized processes, and assembly-line efficiency to deliver fast, consistent, low-cost meals — the opposite of fine-dining techniques.",
  },
  {
    id: 4274,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "hard",
    prompt:
      "A restaurant’s prime cost includes:",
    choices: [
      "Food cost plus labor cost",
      "Rent plus insurance",
      "Marketing plus utilities",
      "Depreciation plus taxes",
    ],
    correctIndex: 0,
    explanation:
      "Prime cost combines food/beverage cost and labor cost — the two largest controllable expenses. Keeping prime cost around 60–65 percent of sales is a common industry target.",
  },
  {
    id: 4275,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "A server takes an order for a guest with a gluten allergy. The server should:",
    choices: [
      "Tell the guest everything is probably fine",
      "Identify gluten-free options accurately by checking with the kitchen and flagging the allergy on the order",
      "Remove bread from the plate and consider it safe",
      "Guess which sauces contain flour",
    ],
    correctIndex: 1,
    explanation:
      "Allergen service requires verified information from the kitchen and clear communication on the ticket. Removing visible gluten sources does not address hidden ingredients or cross-contact.",
  },
  {
    id: 4276,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A bar manager notices liquor costs rising without sales increasing. The MOST likely explanations to investigate FIRST include:",
    choices: [
      "Over-pouring, spillage, theft, or unrecorded comps",
      "Guests suddenly drinking more water",
      "Too many napkins being ordered",
      "Excessive tip payouts",
    ],
    correctIndex: 0,
    explanation:
      "Rising pour costs with flat sales typically indicate over-pouring, waste, theft, or drinks given away without recording. Inventory counts and pour controls identify the source.",
  },
  {
    id: 4277,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "Which type of restaurant service features fully cooked plates assembled in the kitchen and delivered ready to eat?",
    choices: [
      "American plated service",
      "French gueridon service",
      "Family-style service",
      "Buffet service",
    ],
    correctIndex: 0,
    explanation:
      "American (plated) service has kitchen staff plate individual portions, which servers deliver finished — efficient and portion-controlled compared with tableside French service.",
  },
  {
    id: 4278,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "In family-style service, food is:",
    choices: [
      "Placed in serving dishes on the table for guests to pass and serve themselves",
      "Individually plated in the kitchen",
      "Cooked at the table on a burner",
      "Dispensed from vending machines",
    ],
    correctIndex: 0,
    explanation:
      "Family-style service presents large shared platters that diners pass around the table, creating a communal experience common in Italian, Chinese, and Southern restaurants.",
  },
  {
    id: 4279,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "hard",
    prompt:
      "A restaurant owner wants to raise profitability without hurting guest perception. Which action MOST directly improves margins?",
    choices: [
      "Redesigning the menu to highlight high-contribution items and adjusting prices on underperformers",
      "Doubling all portion sizes",
      "Eliminating all staff training",
      "Serving expired inventory",
    ],
    correctIndex: 0,
    explanation:
      "Menu engineering — promoting high-margin dishes through placement and description while repricing weak performers — raises average contribution without degrading the guest experience.",
  },
  {
    id: 4280,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "The sequence for proper table service of wine includes presenting the bottle, opening it, pouring a taste for the host, and then:",
    choices: [
      "Pouring other guests, ladies first traditionally, then the host",
      "Recorking immediately",
      "Serving only the host",
      "Pouring randomly",
    ],
    correctIndex: 0,
    explanation:
      "After the host approves the taste, servers pour for other guests first (traditionally women before men) and finish with the host, showing respect for protocol.",
  },
  {
    id: 4281,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A cafeteria-style operation differs from a buffet because in a cafeteria:",
    choices: [
      "Guests move along a line and select items served or priced at stations, often paying before sitting",
      "Servers take orders at the table",
      "All food arrives simultaneously by course",
      "Only beverages are offered",
    ],
    correctIndex: 0,
    explanation:
      "Cafeterias have guests progress through a serving line choosing items as they go, typically paying at the end of the line, whereas buffets offer self-serve stations after one payment.",
  },
  {
    id: 4282,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A server notices two guests lingering long after finishing their meal during a busy dinner rush. The professional approach is to:",
    choices: [
      "Rush them rudely out the door",
      "Offer coffee or dessert politely, allowing them to stay while managing the table’s availability gracefully",
      "Turn off the lights over their table",
      "Add an automatic 'sitting fee'",
    ],
    correctIndex: 1,
    explanation:
      "Hospitality balances turnover pressure with courtesy — offering continued service signals welcome, while subtle cues like presenting the check and offering dessert manage pace respectfully.",
  },
  {
    id: 4283,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "An '86'd' item on a busy night means the item is:",
    choices: [
      "Sold out or unavailable",
      "Discounted by 86 percent",
      "The chef’s favorite",
      "Served extra spicy",
    ],
    correctIndex: 0,
    explanation:
      "Restaurant slang '86' means an item is out of stock or discontinued for service; servers must know 86 lists to avoid promising unavailable dishes.",
  },
  {
    id: 4284,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "hard",
    prompt:
      "A chain restaurant evaluates whether to add breakfast service. Which analysis is MOST relevant to the decision?",
    choices: [
      "Projected incremental revenue versus added labor, food, and equipment costs during morning hours",
      "The color of the breakfast plates",
      "Competitors’ dinner sales only",
      "Last year’s holiday party budget",
    ],
    correctIndex: 0,
    explanation:
      "Expanding daypart coverage requires comparing expected new revenue against incremental labor, product, training, and equipment investment — a straightforward cost-benefit analysis.",
  },
  {
    id: 4285,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "Beverage control systems that measure exact pours when dispensing alcohol exist primarily to:",
    choices: [
      "Ensure consistency, control costs, and discourage over-pouring or theft",
      "Make drinks weaker on purpose",
      "Replace bartenders entirely",
      "Increase glass breakage",
    ],
    correctIndex: 0,
    explanation:
      "Measured dispensing standardizes drink strength for guests while protecting margins from over-pouring, spillage, and unrecorded giveaways.",
  },
  {
    id: 4286,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "Which role acts as the link between the kitchen and the dining room, calling orders and coordinating timing?",
    choices: [
      "Expediter",
      "Steward",
      "Cashier",
      "Bartender",
    ],
    correctIndex: 0,
    explanation:
      "The expediter reads tickets, coordinates when dishes fire, and ensures courses reach tables together and at proper temperature — critical during peak service.",
  },
  {
    id: 4287,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A restaurant offers a fixed-price meal with several course choices at one set price. This is commonly called a:",
    choices: [
      "Prix fixe menu",
      "À la carte menu",
      "Cycle menu",
      "Du jour menu",
    ],
    correctIndex: 0,
    explanation:
      "Prix fixe (table d’hôte) pricing bundles multiple courses into one set price, simplifying ordering and helping the kitchen predict volume, unlike à la carte pricing per item.",
  },
  {
    id: 4288,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "An à la carte menu prices:",
    choices: [
      "Each item separately",
      "One total price for the entire meal",
      "Only desserts",
      "By guest height",
    ],
    correctIndex: 0,
    explanation:
      "À la carte means each dish carries its own price, letting guests compose their meal — contrasted with prix fixe bundles.",
  },
  {
    id: 4289,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "hard",
    prompt:
      "A catering manager bids a wedding for 150 guests. Food cost per plate is $22 and target food cost percentage is 30 percent. The MINIMUM price per plate should be approximately:",
    choices: [
      "$30",
      "$52",
      "$66",
      "$73",
    ],
    correctIndex: 3,
    explanation:
      "Price = cost ÷ target percentage = $22 ÷ 0.30 ≈ $73.33 per plate. Pricing below this would push actual food cost percentage above the 30 percent target.",
  },
  {
    id: 4290,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A dishwasher notices the sanitizing solution in the dish machine is not reaching proper concentration. The dishwasher should:",
    choices: [
      "Keep running dishes through anyway",
      "Stop the machine, report the problem, and switch to manual sanitizing procedures until it is corrected",
      "Add regular soap to fix it",
      "Dry dishes with dirty towels",
    ],
    correctIndex: 1,
    explanation:
      "Improper sanitizer concentration fails to kill pathogens. Equipment problems must be reported and corrected, with approved alternative procedures used meanwhile.",
  },
  {
    id: 4291,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "Thawing frozen chicken safely can be done by:",
    choices: [
      "Leaving it on the counter overnight",
      "Thawing under refrigeration at 41°F or below, or under cold running water",
      "Placing it in direct sunlight",
      "Using hot tap water for speed",
    ],
    correctIndex: 1,
    explanation:
      "Safe thawing keeps food out of the danger zone: refrigeration, cold running water, microwave (with immediate cooking), or cooking from frozen. Countertop thawing invites bacterial growth.",
  },
  {
    id: 4292,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "Ground beef should be cooked to a minimum internal temperature of:",
    choices: [
      "155°F for 15 seconds",
      "100°F",
      "Any temperature if it looks done",
      "212°F for one hour",
    ],
    correctIndex: 0,
    explanation:
      "FDA Food Code requires ground meats to reach 155°F for 15 seconds because grinding distributes surface bacteria throughout the meat. Color alone is not a reliable indicator.",
  },
  {
    id: 4293,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "hard",
    prompt:
      "Leftover soup cools from 135°F and must reach 70°F within two hours, then 41°F within an additional four hours. If it sits at 90°F after three hours, the correct action is to:",
    choices: [
      "Continue cooling since it looks fine",
      "Discard the soup because the cooling time-temperature standard was violated",
      "Freeze it immediately and serve next month",
      "Reheat it to 165°F and restart cooling indefinitely",
    ],
    correctIndex: 1,
    explanation:
      "Cooling standards require 135°F→70°F within 2 hours and 70°F→41°F within 4 more hours. Missing the first stage means possible toxin formation, so the food must be discarded.",
  },
  {
    id: 4294,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "A 'cycle menu' is one that:",
    choices: [
      "Repeats on a scheduled rotation, such as every four weeks",
      "Changes randomly daily",
      "Offers only one item forever",
      "Is written on a bicycle-shaped board",
    ],
    correctIndex: 0,
    explanation:
      "Cycle menus rotate predictably over a set period, simplifying purchasing and production for institutions like schools, hospitals, and camps while providing variety.",
  },
  {
    id: 4295,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A guest sends back a dessert saying it tastes nothing like the menu description. After apologizing, the server should:",
    choices: [
      "Argue about the accuracy of the menu wording",
      "Replace the item or offer an alternative, then share the feedback with management for menu review",
      "Charge twice for the replacement",
      "Ignore the comment entirely",
    ],
    correctIndex: 1,
    explanation:
      "Immediate correction preserves the experience, and relaying feedback lets management fix misleading descriptions — turning a complaint into operational improvement.",
  },
  {
    id: 4296,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "Which practice best prevents slips and falls in a restaurant kitchen?",
    choices: [
      "Cleaning spills immediately and wearing slip-resistant footwear",
      "Leaving wet floors to air dry during service",
      "Stacking boxes in walkways",
      "Running through the kitchen to save time",
    ],
    correctIndex: 0,
    explanation:
      "Prompt spill cleanup, slip-resistant shoes, clear walkways, and controlled movement are core kitchen safety practices preventing the industry’s most common injuries.",
  },
  {
    id: 4297,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "Par stocks and reorder points in a restaurant’s storeroom exist to:",
    choices: [
      "Prevent both stockouts and excess inventory that spoils",
      "Make counting unnecessary",
      "Increase spoilage deliberately",
      "Replace the chef’s judgment entirely",
    ],
    correctIndex: 0,
    explanation:
      "Setting par levels and reorder points triggers purchasing at the right time, balancing having enough product against tying up cash in perishable inventory.",
  },
  {
    id: 4298,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "hard",
    prompt:
      "A restaurant’s average check was $24 last year and $26 this year while covers rose 10 percent. Total sales growth is closest to:",
    choices: [
      "About 10 percent",
      "About 19 percent",
      "About 36 percent",
      "Unchanged",
    ],
    correctIndex: 1,
    explanation:
      "Sales = covers × average check. Growth factor = 1.10 × (26/24) ≈ 1.19, so sales grew roughly 19 percent — combining traffic growth with higher per-guest spending.",
  },
  {
    id: 4299,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "The steward (or chief steward) in a food service operation is responsible for:",
    choices: [
      "Dishwashing, cleanliness of kitchen areas, and chemical supplies",
      "Creating wine lists",
      "Booking entertainment",
      "Setting room rates",
    ],
    correctIndex: 0,
    explanation:
      "The stewarding team handles warewashing, kitchen sanitation, pot washing, and cleaning chemical inventory — keeping the back of the house sanitary and supplied.",
  },
  {
    id: 4300,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "During a sudden rush with a full dining room, the kitchen is falling behind on tickets. The manager’s BEST immediate response is to:",
    choices: [
      "Communicate realistic wait times to guests and support the line by expediting or simplifying where possible",
      "Hide in the office until the rush ends",
      "Close the doors mid-rush",
      "Blame the servers publicly",
    ],
    correctIndex: 0,
    explanation:
      "Managing a crunch requires honest communication to reset expectations plus hands-on support — expediting, prioritizing tickets, and streamlining output — rather than avoidance or blame.",
  },
  {
    id: 4301,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A food truck operator chooses locations based on office density and lunchtime foot traffic. This decision reflects:",
    choices: [
      "Location analysis based on target market access",
      "Random chance",
      "Tax avoidance strategy",
      "Menu engineering",
    ],
    correctIndex: 0,
    explanation:
      "For food service, location determines access to the target market. Matching sites to customer concentration and demand timing drives revenue potential.",
  },
  {
    id: 4302,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "Which is an example of a noncommercial food service operation?",
    choices: [
      "A hospital cafeteria serving patients and staff",
      "A downtown steakhouse",
      "A beachfront snack bar charging admission-area prices",
      "A franchise burger chain",
    ],
    correctIndex: 0,
    explanation:
      "Noncommercial operations — hospitals, schools, corporate cafeterias — serve food as part of another institution’s mission rather than primarily to earn profit from customers.",
  },
  {
    id: 4303,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "hard",
    prompt:
      "A restaurant group notices delivery apps generate 25 percent of sales but cut margin sharply. A balanced strategic response could include:",
    choices: [
      "Adjusting delivery-menu pricing, promoting direct online ordering, and using apps selectively for reach",
      "Abandoning delivery entirely regardless of trends",
      "Refusing to analyze channel profitability",
      "Doubling commissions voluntarily",
    ],
    correctIndex: 2,
    explanation:
      "Channel mix decisions weigh reach against margin. Optimizing delivery-specific pricing, building cheaper direct channels, and treating apps as one tool among several protects profitability while preserving visibility.",
  },
  {
    id: 4304,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A bartender checks ID for anyone who appears under a certain age. This practice exists to:",
    choices: [
      "Comply with laws prohibiting service to minors and protect the establishment’s license",
      "Embarrass young-looking guests",
      "Collect marketing data",
      "Slow down service intentionally",
    ],
    correctIndex: 0,
    explanation:
      "Carding prevents unlawful service to underage drinkers, which risks fines, license suspension, criminal liability, and harm — a fundamental responsibility of alcohol service.",
  },
  {
    id: 4305,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "The term 'covers' in a restaurant refers to:",
    choices: [
      "The number of guests served",
      "Tablecloths used per shift",
      "Lids on soup pots",
      "Insurance policies",
    ],
    correctIndex: 0,
    explanation:
      "A cover is one guest served. Cover counts measure volume and drive forecasting for staffing, purchasing, and prep quantities.",
  },
  {
    id: 4306,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A chef designs a new dish using expensive imported ingredients. Before adding it to the menu, the chef should verify that:",
    choices: [
      "The projected price point and contribution margin fit the menu’s overall pricing structure and target market",
      "It uses the most expensive ingredients possible",
      "No competitor has ever heard of it",
      "It cannot be photographed",
    ],
    correctIndex: 0,
    explanation:
      "New items must make financial sense: ingredient cost, achievable menu price, and appeal to the target market determine whether the dish adds profit or drags margins.",
  },
  {
    id: 4307,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "hard",
    prompt:
      "Two identical restaurants operate in different cities. Restaurant A achieves 12 percent food cost; Restaurant B achieves 22 percent with similar menus. The MOST likely explanation is:",
    choices: [
      "Differences in portioning discipline, waste control, purchasing prices, or theft between locations",
      "Restaurant B has friendlier servers",
      "Food cost percentages never vary between locations",
      "City size alone guarantees percentages",
    ],
    correctIndex: 0,
    explanation:
      "Large gaps in identical concepts point to controllable execution differences: inconsistent portioning, spoilage, supplier pricing, or missing inventory — all targets for audit and retraining.",
  },
  {
    id: 4308,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "Which statement about restaurant tipping pools is TRUE?",
    choices: [
      "Tipping pools distribute gratuities among eligible service staff according to agreed formulas",
      "Tips legally belong only to the cashier",
      "Pools are illegal everywhere",
      "Managers must always keep all tips",
    ],
    correctIndex: 0,
    explanation:
      "Tip pooling shares gratuities among qualifying employees — servers, bussers, runners — by formula. Rules vary by jurisdiction, but managers typically may not participate in pools in the U.S.",
  },
  {
    id: 4309,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "medium",
    prompt:
      "A diner asks the server, 'What’s good here?' The BEST response demonstrates:",
    choices: [
      "Genuine menu knowledge with specific recommendations matched to the guest’s tastes",
      "'Everything is good.'",
      "'I don’t eat here.'",
      "Reading the entire menu aloud",
    ],
    correctIndex: 0,
    explanation:
      "Product knowledge enables confident, personalized suggestions that build trust and increase satisfaction and check averages. Vague answers signal indifference.",
  },
  {
    id: 4310,
    clusterId: "hospitality-tourism",
    category: "Food Service",
    difficulty: "easy",
    prompt:
      "Batch cooking (cooking smaller amounts throughout service rather than all at once) primarily improves:",
    choices: [
      "Food freshness and reduces waste from unsold product",
      "Labor requirements dramatically",
      "Menu variety limits",
      "Freezer capacity needs",
    ],
    correctIndex: 0,
    explanation:
      "Preparing food in batches timed to demand keeps items fresher on the line and minimizes the amount held and discarded after slow periods.",
  },
];
