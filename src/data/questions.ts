import type { Question } from "@/types/question";

export const questions: Question[] = [
  {
    id: "q-home-5-percent-down",
    slug: "can-i-buy-a-home-with-5-percent-down",
    title: "Can I buy a home with 5% down?",
    category: "Purchase Loans",
    popular: true,
    icon: "houseplus",
    author: "Abe",
    publishedAt: "2026-08-12",
    video: {
      thumbnail: "/images/questions/can-i-buy-a-home-with-5-percent-down.jpg",
    },
    shortAnswer:
      "Yes. Many qualified buyers can purchase a primary residence with 5% down, and some programs may allow even less. The right option depends on your credit, income, property, occupancy, and available funds.",
    fullAnswer: [
      "A 5% down payment is common on conventional financing for a primary home. It can give you more flexibility than waiting until you have 20%, although mortgage insurance will usually apply when the down payment is below 20%.",
      "Other possibilities may include certain 3% down conventional programs, FHA financing with as little as 3.5% down for eligible borrowers, and VA or USDA financing that may permit no down payment for eligible applicants and properties. Low down payment does not mean no cash is needed: closing costs, prepaid taxes, insurance, inspections, and reserves may still apply.",
      "The best comparison is not simply the smallest down payment. Compare the total cash needed, monthly payment, mortgage insurance, interest rate, and how much emergency savings you will have after closing. A slightly larger down payment can help, but draining every dollar to reach it may leave you financially exposed.",
    ],
    whatAbeReviews: [
      "Loan type and occupancy",
      "Credit and debt-to-income profile",
      "Closing costs and reserves",
      "Monthly payment including taxes, insurance, HOA, and mortgage insurance",
    ],
    abeTip:
      "Ask for a side-by-side estimate at 3%, 5%, 10%, and 20% down. The lowest cash-to-close option is not always the lowest-cost option.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/",
      label: "Explore our loan programs",
    },
    relatedQuestionIds: [
      "q-how-much-house-can-i-afford",
      "q-2-1-buydown",
      "q-down-payment-options",
    ],
  },
  {
    id: "q-self-employed-mortgage",
    slug: "can-i-get-a-mortgage-if-im-self-employed",
    title: "Can I get a mortgage if I'm self-employed?",
    category: "Self-Employed Loans",
    popular: true,
    icon: "user",
    author: "Abe",
    publishedAt: "2026-08-12",
    video: {
      thumbnail: "/images/questions/can-i-get-a-mortgage-if-im-self-employed.jpg",
    },
    shortAnswer:
      "Yes. Self-employed borrowers can qualify for a mortgage. The key is matching the way you earn and document income with the right loan program.",
    fullAnswer: [
      "Traditional mortgage underwriting commonly reviews tax returns, business history, year-to-date profit and loss information, and the stability of income. Business deductions can lower taxable income, which may reduce the income available for mortgage qualification even when the business has healthy cash flow.",
      "If tax returns do not tell the full story, alternative-documentation programs may use personal or business bank statements, a 1099 history, assets, or other approved methods. These programs are not shortcuts around qualification; lenders still review credit, assets, property, business activity, and the ability to repay.",
      "Before applying, avoid mixing unexplained personal and business transfers, keep deposits easy to document, and have current business records ready. A broker who can compare conventional and non-QM programs may identify a better route than submitting the same file to one bank repeatedly.",
    ],
    whatAbeReviews: [
      "Length and stability of self-employment",
      "Tax-return income versus actual cash flow",
      "Personal or business bank statements",
      "Credit, down payment, and reserves",
    ],
    abeTip:
      "Do not assume your tax write-offs automatically disqualify you. Let the numbers be reviewed under both full-documentation and alternative-documentation programs.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/bank-statement-loans/",
      label: "Explore bank statement loans",
    },
    relatedQuestionIds: [
      "q-mortgage-without-tax-returns",
      "q-how-lenders-calculate-self-employed-income",
      "q-bank-statement-mortgage",
    ],
  },
  {
    id: "q-dscr-loan",
    slug: "what-is-a-dscr-loan",
    title: "What is a DSCR loan?",
    category: "DSCR Loans",
    popular: true,
    icon: "building",
    author: "Abe",
    publishedAt: "2026-08-12",
    video: {
      thumbnail: "/images/questions/what-is-a-dscr-loan.jpg",
    },
    shortAnswer:
      "A DSCR loan is an investment-property mortgage that focuses primarily on the property's rental income rather than the borrower's personal employment income.",
    fullAnswer: [
      "DSCR means Debt Service Coverage Ratio. In simple terms, the lender compares qualifying rent with the property's required housing payment. The exact calculation varies, but it generally considers principal, interest, taxes, insurance, and association dues when applicable.",
      "Because the property is central to qualification, many DSCR programs do not require personal tax returns or traditional employment-income verification. The lender still reviews the borrower's credit, assets, experience, property type, appraisal, lease or market rent, and available reserves.",
      "DSCR loans are generally intended for non-owner-occupied investment properties, not a home you plan to occupy. Rates, down payments, prepayment provisions, entity-vesting rules, and minimum ratios vary by lender, so the full structure matters\u2014not just whether the rent appears to cover the payment.",
    ],
    whatAbeReviews: [
      "Expected or documented rental income",
      "Total qualifying property payment",
      "Credit and available reserves",
      "Property type and investment use",
    ],
    abeTip:
      "Run the property before you make the offer. A small change in taxes, insurance, rent, or rate can materially change the DSCR.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/dscr-loans/",
      label: "Explore DSCR loans",
    },
    relatedQuestionIds: [
      "q-how-to-qualify-for-dscr-loan",
      "q-good-dscr-for-rental-property",
      "q-first-time-investor-dscr-loan",
    ],
  },
  {
    id: "q-how-much-house-can-i-afford",
    slug: "how-much-house-can-i-afford",
    title: "How much house can I afford?",
    category: "Purchase Loans",
    popular: true,
    icon: "houseplus",
    author: "Abe",
    publishedAt: "2026-08-12",
    video: {
      thumbnail: "/images/questions/how-much-house-can-i-afford.jpg",
    },
    shortAnswer:
      "The amount you can afford depends on more than the price a lender may approve. Your income, debts, down payment, interest rate, taxes, insurance, HOA dues, and comfort level all matter.",
    fullAnswer: [
      "A lender generally reviews gross qualifying income and monthly obligations to calculate a debt-to-income ratio. But approval is only one part of affordability. Two homes with the same price can have very different monthly payments because property taxes, homeowners insurance, flood insurance, mortgage insurance, and HOA dues vary.",
      "Your cash plan also matters. Include the down payment, closing costs, prepaid expenses, moving costs, immediate repairs, and a reserve after closing. If using an adjustable rate or temporary buydown, understand the payment that applies later\u2014not only the introductory payment.",
      "A useful approach is to choose a comfortable total monthly housing budget first, then work backward to a purchase-price range. A preapproval can test your documents and show the maximum program range, while your personal budget determines what you should actually spend.",
    ],
    whatAbeReviews: [
      "Comfortable total monthly payment",
      "Cash available after closing",
      "Taxes, insurance, HOA, and mortgage insurance",
      "Existing debts and future financial goals",
    ],
    abeTip:
      "Tell me the payment you would feel comfortable making, not only the home price you want. I can work backward from the payment.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/",
      label: "Explore our loan programs",
    },
    relatedQuestionIds: [
      "q-home-5-percent-down",
      "q-2-1-buydown",
      "q-down-payment-options",
    ],
  },
  {
    id: "q-bank-statement-mortgage",
    slug: "can-i-get-a-mortgage-with-bank-statements",
    title: "Can I get a mortgage with bank statements?",
    category: "Bank Statement Loans",
    popular: true,
    icon: "document",
    author: "Abe",
    publishedAt: "2026-08-12",
    video: {
      thumbnail: "/images/questions/can-i-get-a-mortgage-with-bank-statements.jpg",
    },
    shortAnswer:
      "Possibly. Bank statement loans may let eligible self-employed borrowers qualify using deposits shown on personal or business bank statements instead of traditional tax-return income.",
    fullAnswer: [
      "These programs are designed for borrowers whose tax returns may understate cash flow because of legitimate business deductions. A lender usually reviews 12 or 24 months of statements, identifies recurring eligible deposits, removes transfers and non-income items, and calculates an average monthly qualifying income.",
      "Personal and business statements are evaluated differently. Business accounts generally require an expense calculation because gross deposits are not the same as personal income. Some programs use a standard expense factor; others may consider a professionally prepared profit-and-loss statement or expense analysis.",
      "You will still need to meet the program's credit, down payment, reserve, property, and business-history requirements. Clean records matter: frequent overdrafts, unexplained large deposits, declining revenue, or heavy account transfers can complicate the review.",
    ],
    whatAbeReviews: [
      "12- or 24-month statement option",
      "Personal versus business accounts",
      "Eligible deposits and expense factor",
      "Credit, equity, and reserves",
    ],
    abeTip:
      "Send the statements for a preliminary deposit analysis before choosing a home or ordering an appraisal.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/bank-statement-loans/",
      label: "Explore bank statement loans",
    },
    relatedQuestionIds: [
      "q-months-of-bank-statements",
      "q-personal-vs-business-bank-statements",
      "q-self-employed-mortgage",
    ],
  },
  {
    id: "q-2-1-buydown",
    slug: "how-does-a-2-1-buydown-work",
    title: "How does a 2-1 buydown work?",
    category: "Purchase Loans",
    popular: true,
    icon: "dollar",
    author: "Abe",
    publishedAt: "2026-08-12",
    video: {
      thumbnail: "/images/questions/how-does-a-2-1-buydown-work.jpg",
    },
    shortAnswer:
      "A 2-1 buydown temporarily reduces the borrower's effective payment for the first two years. The payment is generally calculated 2 percentage points below the note rate in year one, 1 point below in year two, and at the full note rate from year three forward.",
    fullAnswer: [
      "The mortgage itself typically has a fixed note rate. Money contributed at closing is placed in a buydown account and used to cover the difference between the reduced payment and the full scheduled payment during the first two years.",
      "The buydown is often funded by a seller, builder, or lender credit, subject to the loan program's contribution limits. Borrowers are generally qualified using the permanent note-rate payment, because that is the payment due after the temporary subsidy ends.",
      "A 2-1 buydown can create early payment relief, but it should not depend on a future refinance. Rates may not fall, property values may change, and refinancing requires a new approval and closing costs. Compare the buydown with using the same credit toward closing costs or a permanent rate reduction.",
    ],
    whatAbeReviews: [
      "Who funds the buydown",
      "Full note-rate payment",
      "Cost versus other uses of the seller credit",
      "Treatment of unused funds if the loan pays off early",
    ],
    abeTip:
      "Make sure the year-three payment fits your budget today. Treat any future refinance as an option, not a promise.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/",
      label: "Explore our loan programs",
    },
    relatedQuestionIds: [
      "q-home-5-percent-down",
      "q-how-much-house-can-i-afford",
      "q-down-payment-options",
    ],
  },
  {
    id: "q-down-payment-options",
    slug: "what-are-the-down-payment-options",
    title: "What are the down payment options?",
    category: "Purchase Loans",
    popular: true,
    icon: "house",
    author: "Abe",
    publishedAt: "2026-08-12",
    video: {
      thumbnail: "/images/questions/what-are-the-down-payment-options.jpg",
    },
    shortAnswer:
      "Down payment options can range from no down payment for certain eligible programs to 3%, 3.5%, 5%, 10%, 20%, or more. The best amount depends on the loan type and your overall financial plan.",
    fullAnswer: [
      "Conventional loans may offer low-down-payment choices for eligible primary-residence buyers. FHA financing may allow 3.5% down for qualified borrowers. VA and USDA programs may offer no-down-payment financing when the borrower and property meet the rules. Jumbo, investment, bank statement, ITIN, foreign national, and other portfolio programs commonly require more equity.",
      "Funds may come from the borrower's verified accounts and, when allowed, eligible gifts, grants, approved assistance, or seller credits for permitted costs. Every source must be documented, and seller credits generally cannot replace the borrower's required minimum investment.",
      "Putting less down preserves cash but can increase the loan amount, monthly payment, mortgage insurance, or rate. Putting more down may improve terms, but you should still retain enough money for closing costs, reserves, repairs, and emergencies.",
    ],
    whatAbeReviews: [
      "Minimum required investment",
      "Mortgage insurance and monthly payment",
      "Eligible gift or assistance funds",
      "Cash reserves after closing",
    ],
    abeTip:
      "Compare at least three down-payment scenarios using the same property, rate assumptions, taxes, and insurance.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/",
      label: "Explore our loan programs",
    },
    relatedQuestionIds: [
      "q-home-5-percent-down",
      "q-how-much-house-can-i-afford",
      "q-2-1-buydown",
    ],
  },
  {
    id: "q-credit-score-to-buy",
    slug: "what-credit-score-do-i-need-to-buy-a-house",
    title: "What credit score do I need to buy a house?",
    category: "Purchase Loans",
    icon: "percent",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "There is no single credit score required for every mortgage. Minimums vary by loan program and lender, and approval also depends on income, debts, down payment, reserves, and recent credit history.",
    fullAnswer: [
      "A higher score can expand your options and may improve pricing, but the score shown in a consumer app may not be the mortgage score used by a lender. Mortgage underwriting also looks beyond the number to payment history, balances, recent inquiries, collections, bankruptcies, foreclosures, and disputed accounts.",
      "Some government-insured and portfolio programs can consider lower scores, while conventional, jumbo, investment, bank statement, ITIN, or foreign-national programs may use different thresholds. A minimum guideline does not guarantee approval, and individual lenders can apply additional requirements.",
      "Before applying, avoid opening new debt, making late payments, or charging large balances. If the score needs improvement, a loan officer can review the report and identify actions that may help without guessing or disputing accurate information.",
    ],
    whatAbeReviews: [
      "Mortgage-specific credit scores",
      "Recent payment history",
      "Debt balances and utilization",
      "Program and lender requirements",
    ],
    abeTip:
      "Have the full credit profile reviewed before assuming the score is too low\u2014or paying a company to 'repair' it.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/",
      label: "Explore our loan programs",
    },
    relatedQuestionIds: [
      "q-home-5-percent-down",
      "q-how-much-house-can-i-afford",
      "q-2-1-buydown",
    ],
  },
  {
    id: "q-closing-costs-buying-home",
    slug: "how-much-are-closing-costs-when-buying-a-home",
    title: "How much are closing costs when buying a home?",
    category: "Purchase Loans",
    icon: "dollar",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Closing costs vary by property, state, loan, taxes, insurance, title charges, and timing. Your Loan Estimate\u2014not a generic percentage\u2014is the best way to see your expected cash to close.",
    fullAnswer: [
      "Common items include lender and appraisal fees, title or settlement charges, recording fees, transfer-related charges, prepaid interest, homeowners insurance, property-tax escrows, and mortgage insurance when applicable. Some items are true transaction costs; others are prepaid expenses or initial escrow deposits for bills you would owe as a homeowner.",
      "A seller may be able to contribute toward eligible costs, subject to the contract and loan-program limits. A lender credit may also reduce upfront costs in exchange for different pricing. A 'no-closing-cost' loan usually means costs are covered through a higher rate or added to the loan when permitted\u2014not that the costs disappear.",
      "Review both the total closing costs and the final cash-to-close figure. Earnest money, deposits, credits, and financed amounts affect the final number.",
    ],
    whatAbeReviews: [
      "Loan Estimate and cash to close",
      "Prepaids and escrow deposits",
      "Seller and lender credits",
      "State, county, title, and insurance costs",
    ],
    abeTip:
      "Request an address-specific estimate early, especially in areas where taxes, flood insurance, or association fees vary significantly.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/",
      label: "Explore our loan programs",
    },
    relatedQuestionIds: [
      "q-home-5-percent-down",
      "q-how-much-house-can-i-afford",
      "q-2-1-buydown",
    ],
  },
  {
    id: "q-prequalification-vs-preapproval",
    slug: "what-is-the-difference-between-prequalification-and-preapproval",
    title:
      "What is the difference between prequalification and preapproval?",
    category: "Purchase Loans",
    icon: "document",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "A prequalification is usually an early estimate based on information you provide. A preapproval is generally stronger because the lender reviews credit, income, assets, and supporting documents before issuing it.",
    fullAnswer: [
      "A quick prequalification can help you begin planning, but it may not test whether the documents support the numbers. A solid preapproval reviews items such as pay statements or alternative income documents, bank statements, identification, credit, debts, and available funds.",
      "Neither is a final loan approval. The property must still qualify, and the file remains subject to underwriting, appraisal, title, insurance, and verification that your finances have not materially changed.",
      "In a competitive market, a documented preapproval can make an offer more credible. It can also uncover issues early, such as income that is calculated differently than expected or funds that need additional documentation.",
    ],
    whatAbeReviews: [
      "Whether documents were reviewed",
      "Whether credit was checked",
      "Conditions still outstanding",
      "Expiration date and assumptions",
    ],
    abeTip:
      "Ask what was actually verified. The label matters less than the work completed behind the letter.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/",
      label: "Explore our loan programs",
    },
    relatedQuestionIds: [
      "q-home-5-percent-down",
      "q-how-much-house-can-i-afford",
      "q-2-1-buydown",
    ],
  },
  {
    id: "q-gift-money-down-payment",
    slug: "can-i-use-gift-money-for-my-down-payment",
    title: "Can I use gift money for my down payment?",
    category: "Purchase Loans",
    icon: "dollar",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Yes, many mortgage programs allow eligible gift funds for some or all of the down payment and closing costs. The donor, amount, documentation, and permitted use depend on the loan program.",
    fullAnswer: [
      "The lender will usually require a gift letter stating that repayment is not expected. The transfer must also be documented through acceptable account records, wire evidence, or closing documentation. Cash that cannot be traced is generally not acceptable.",
      "Programs differ on who may give the gift and whether the borrower must contribute any personal funds. Occupancy, property type, number of units, and loan-to-value can affect the rules.",
      "Tell your loan officer about the gift before funds move. A last-minute unexplained deposit can delay underwriting, while a planned and documented transfer is much easier to approve.",
    ],
    whatAbeReviews: [
      "Eligible donor",
      "Gift letter",
      "Proof of transfer and receipt",
      "Any required borrower contribution",
    ],
    abeTip:
      "Do not deposit cash or move gift money between several accounts. Use a clean, documented transfer approved by the loan officer.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/",
      label: "Explore our loan programs",
    },
    relatedQuestionIds: [
      "q-home-5-percent-down",
      "q-how-much-house-can-i-afford",
      "q-2-1-buydown",
    ],
  },
  {
    id: "q-buy-new-home-before-selling",
    slug: "can-i-buy-a-new-home-before-selling-my-current-home",
    title: "Can I buy a new home before selling my current home?",
    category: "Purchase Loans",
    icon: "house",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Possibly. Options may include qualifying with both homes, using a bridge-to-sale or home-equity solution, making a contingent offer, or selling first and arranging temporary occupancy.",
    fullAnswer: [
      "The main questions are whether you can qualify while carrying the current mortgage and how you will fund the new down payment. If your income and debts support both payments, a standard purchase may work. If not, equity from the current home may need to be accessed or the sale may need to close first.",
      "Bridge and home-equity options can create liquidity, but they add cost, liens, and repayment obligations. Contract timing also matters: appraisal, title, payoff, sale contingencies, and closing dates must work together.",
      "Do not rely on an estimated sale price alone. Use a realistic net-proceeds calculation after the mortgage payoff, commissions, taxes, repairs, and closing costs.",
    ],
    whatAbeReviews: [
      "Ability to carry both payments",
      "Available equity and net sale proceeds",
      "Sale contingency and closing timeline",
      "Bridge or home-equity costs",
    ],
    abeTip:
      "Have the purchase and sale numbers structured together before writing an offer on the new home.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/",
      label: "Explore our loan programs",
    },
    relatedQuestionIds: [
      "q-home-5-percent-down",
      "q-how-much-house-can-i-afford",
      "q-2-1-buydown",
    ],
  },
  {
    id: "q-when-refinancing-makes-sense",
    slug: "when-does-refinancing-a-mortgage-make-sense",
    title: "When does refinancing a mortgage make sense?",
    category: "Refinance Loans",
    icon: "dollar",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Refinancing may make sense when it produces a clear financial or strategic benefit\u2014such as lowering cost, changing the loan structure, shortening the term, or accessing equity\u2014after considering closing costs.",
    fullAnswer: [
      "A lower rate can reduce payment or interest, but the rate difference alone does not answer the question. Compare the new payment, APR, loan amount, term, mortgage insurance, cash required, and the time needed to recover closing costs.",
      "Refinancing can also replace an adjustable loan, remove a borrower, consolidate eligible debt, or convert equity to cash. Each goal creates different tradeoffs. Resetting a 30-year term may lower the payment while increasing total interest if you keep the loan for a long time.",
      "The right analysis uses your expected time in the home and your expected time in the new loan. If you may sell or refinance again before recovering the costs, the transaction may not deliver the intended benefit.",
    ],
    whatAbeReviews: [
      "Monthly and lifetime savings",
      "Closing costs and break-even period",
      "New loan term",
      "How long you expect to keep the property and loan",
    ],
    abeTip:
      "Compare the new loan against doing nothing. A refinance should solve a real problem, not simply create a lower-looking payment.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/",
      label: "Explore our loan programs",
    },
    relatedQuestionIds: [
      "q-cash-out-refinance",
      "q-remove-mortgage-insurance-by-refinancing",
      "q-cost-to-refinance",
    ],
  },
  {
    id: "q-cash-out-refinance",
    slug: "how-does-a-cash-out-refinance-work",
    title: "How does a cash-out refinance work?",
    category: "Refinance Loans",
    icon: "dollar",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "A cash-out refinance replaces your current mortgage with a larger new loan. After paying off the old loan and closing costs, the remaining approved proceeds are paid to you.",
    fullAnswer: [
      "The amount available depends on the appraised value, current mortgage balance, permitted loan-to-value, credit, income, property type, and program. Because the entire first mortgage is replaced, the new interest rate applies to the full new balance\u2014not only the cash you receive.",
      "Cash may be used for renovations, debt consolidation, investments, reserves, or other permitted purposes. Consolidating unsecured debt can reduce monthly payments, but it converts that debt into an obligation secured by your home and may extend repayment over many years.",
      "Compare a cash-out refinance with a HELOC, home equity loan, or second-lien option, especially if your existing first-mortgage rate is attractive.",
    ],
    whatAbeReviews: [
      "New first-mortgage rate",
      "Total cash received after costs",
      "Combined monthly obligations",
      "Alternative second-lien options",
    ],
    abeTip:
      "Ask for side-by-side numbers showing the cash-out refinance and a second mortgage while keeping your current first loan.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/",
      label: "Explore our loan programs",
    },
    relatedQuestionIds: [
      "q-when-refinancing-makes-sense",
      "q-remove-mortgage-insurance-by-refinancing",
      "q-cost-to-refinance",
    ],
  },
  {
    id: "q-remove-mortgage-insurance-by-refinancing",
    slug: "can-i-remove-mortgage-insurance-by-refinancing",
    title: "Can I remove mortgage insurance by refinancing?",
    category: "Refinance Loans",
    icon: "percent",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Sometimes. Refinancing may remove or reduce mortgage insurance if the new loan, property value, equity, and program qualify. It is not always necessary to refinance to cancel mortgage insurance.",
    fullAnswer: [
      "Conventional private mortgage insurance may be cancelable under certain conditions through the current servicer. FHA mortgage insurance follows different rules and may remain for the life of some loans, making a conventional refinance worth evaluating when sufficient equity and qualification exist.",
      "A refinance requires new underwriting and usually closing costs. The property may need an appraisal, and a higher market value is not guaranteed. Compare the insurance savings with any change in rate, payment, term, and costs.",
      "First contact the current servicer and ask about cancellation requirements. Then compare that path with refinancing so you do not pay unnecessary transaction costs.",
    ],
    whatAbeReviews: [
      "Current loan type",
      "Estimated property value and equity",
      "Servicer cancellation rules",
      "New rate, term, and closing costs",
    ],
    abeTip:
      "Check whether your current mortgage insurance can be canceled before assuming you need a new loan.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/",
      label: "Explore our loan programs",
    },
    relatedQuestionIds: [
      "q-when-refinancing-makes-sense",
      "q-cash-out-refinance",
      "q-cost-to-refinance",
    ],
  },
  {
    id: "q-cost-to-refinance",
    slug: "how-much-does-it-cost-to-refinance-a-mortgage",
    title: "How much does it cost to refinance a mortgage?",
    category: "Refinance Loans",
    icon: "dollar",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Refinance costs vary by loan, property, location, lender, title work, appraisal, and prepaid items. Review a written Loan Estimate and compare the cost with the benefit you expect.",
    fullAnswer: [
      "Typical charges may include lender fees, appraisal, credit, title or settlement services, recording, and prepaid interest. Escrow deposits for taxes and insurance may also appear, while any balance in the old escrow account is generally handled separately by the prior servicer.",
      "Some refinances are advertised as no-cost. Usually, the costs are covered by a lender credit tied to a higher rate or added to the loan amount when allowed. That can reduce cash due at closing but may increase long-term cost.",
      "Calculate the break-even period by comparing the true cost with the expected monthly benefit, while also accounting for any term reset or cash received.",
    ],
    whatAbeReviews: [
      "Lender and third-party fees",
      "Prepaids and escrow setup",
      "Lender credit or financed costs",
      "Break-even period",
    ],
    abeTip:
      "Do not compare rates without comparing total costs and APR on the same loan amount and term.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/",
      label: "Explore our loan programs",
    },
    relatedQuestionIds: [
      "q-when-refinancing-makes-sense",
      "q-cash-out-refinance",
      "q-remove-mortgage-insurance-by-refinancing",
    ],
  },
  {
    id: "q-mortgage-without-tax-returns",
    slug: "can-i-get-a-mortgage-without-tax-returns",
    title: "Can I get a mortgage without tax returns?",
    category: "Self-Employed Loans",
    icon: "document",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Yes, certain alternative-documentation programs may not require personal tax returns. These programs typically verify ability to repay through bank statements, 1099 income, assets, property cash flow, or another approved method.",
    fullAnswer: [
      "The right program depends on the purpose and occupancy. A bank statement loan may fit a self-employed buyer. A DSCR loan may fit a rental property. Other portfolio programs may evaluate 1099 earnings or liquid assets.",
      "'No tax returns' does not mean 'no documentation.' Lenders still verify identity, assets, credit, housing history, property value, and the income or cash-flow method required by the program. Rates, down payments, and reserves may differ from conventional financing.",
      "If usable taxable income is strong, a conventional loan may still be more economical. The best approach is to compare both paths before deciding.",
    ],
    whatAbeReviews: [
      "Occupancy and property purpose",
      "Alternative income method",
      "Down payment and reserves",
      "Cost compared with full-documentation financing",
    ],
    abeTip:
      "Use alternative documentation because it fits your income\u2014not simply because it appears easier.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/bank-statement-loans/",
      label: "Explore bank statement loans",
    },
    relatedQuestionIds: [
      "q-self-employed-mortgage",
      "q-how-lenders-calculate-self-employed-income",
      "q-bank-statement-mortgage",
    ],
  },
  {
    id: "q-how-lenders-calculate-self-employed-income",
    slug: "how-do-lenders-calculate-self-employed-income",
    title: "How do lenders calculate self-employed income?",
    category: "Self-Employed Loans",
    icon: "percent",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "For traditional loans, lenders generally analyze documented business and personal income over time rather than using gross revenue. The exact calculation depends on the business structure and loan program.",
    fullAnswer: [
      "Underwriters may review tax returns, schedules, K-1s, W-2s from the borrower's own company, business returns, and year-to-date results. Certain noncash expenses may be added back, while recurring losses, declining income, or business obligations may reduce usable income.",
      "Ownership percentage matters because it affects which documents are required and how income is treated. The lender also evaluates whether the business appears stable and likely to continue.",
      "Alternative programs may calculate income from bank deposits instead, but they apply rules to remove transfers and account for business expenses. Gross deposits should never be assumed to equal qualifying income.",
    ],
    whatAbeReviews: [
      "Business structure and ownership",
      "Tax-return history",
      "Current profit-and-loss trend",
      "Recurring expenses, debts, and allowable add-backs",
    ],
    abeTip:
      "Have the income calculated before shopping. A CPA's number, taxable income, and mortgage qualifying income can all be different.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/bank-statement-loans/",
      label: "Explore bank statement loans",
    },
    relatedQuestionIds: [
      "q-self-employed-mortgage",
      "q-mortgage-without-tax-returns",
      "q-bank-statement-mortgage",
    ],
  },
  {
    id: "q-how-to-qualify-for-dscr-loan",
    slug: "how-do-i-qualify-for-a-dscr-loan",
    title: "How do I qualify for a DSCR loan?",
    category: "DSCR Loans",
    icon: "building",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "You generally qualify by showing that an eligible investment property has sufficient rental income for its housing obligation, while also meeting credit, equity, reserve, and property requirements.",
    fullAnswer: [
      "The lender uses a lease, market-rent analysis, or program-approved rental figure and compares it with the qualifying payment. The payment commonly includes principal, interest, taxes, insurance, and association dues.",
      "Personal tax returns and employment income often are not used, but the borrower still provides identification, credit authorization, asset statements, entity documents when applicable, and evidence of funds for closing and reserves.",
      "Program details vary widely. Some lenders permit lower ratios with stronger equity or reserves, while others require the property to meet a specified minimum. Short-term rental treatment, vacant properties, first-time investors, and unusual property types need to be checked before applying.",
    ],
    whatAbeReviews: [
      "Qualifying rent",
      "Full property payment",
      "Credit and housing history",
      "Down payment, liquidity, and reserves",
    ],
    abeTip:
      "Send the address, expected rent, taxes, insurance, HOA, price, and down payment for a quick preliminary DSCR calculation.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/dscr-loans/",
      label: "Explore DSCR loans",
    },
    relatedQuestionIds: [
      "q-dscr-loan",
      "q-good-dscr-for-rental-property",
      "q-first-time-investor-dscr-loan",
    ],
  },
  {
    id: "q-good-dscr-for-rental-property",
    slug: "what-is-a-good-dscr-for-a-rental-property",
    title: "What is a good DSCR for a rental property?",
    category: "DSCR Loans",
    icon: "percent",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "A DSCR above 1.00 generally means qualifying rent exceeds the property's calculated debt obligation. Many lenders prefer a cushion above 1.00, but minimums and pricing vary by program.",
    fullAnswer: [
      "A 1.00 ratio generally indicates that rent and the qualifying payment are approximately equal under that lender's method. A ratio above 1.00 shows a cushion; below 1.00 shows a shortfall. However, lenders do not all use identical rent or payment calculations.",
      "The ratio can change with the interest rate, taxes, insurance, HOA dues, rent estimate, and loan amount. A property that looks strong using advertised rent may calculate differently after the appraisal's market-rent analysis.",
      "A strong DSCR is helpful, but it is not the only measure of a good investment. Maintenance, vacancy, management, utilities, and capital expenses may not be fully reflected in the mortgage underwriting ratio.",
    ],
    whatAbeReviews: [
      "Lender's DSCR formula",
      "Actual versus market rent",
      "Taxes, insurance, and HOA",
      "Operating expenses outside the loan calculation",
    ],
    abeTip:
      "Underwrite the investment for yourself more conservatively than the loan program requires.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/dscr-loans/",
      label: "Explore DSCR loans",
    },
    relatedQuestionIds: [
      "q-dscr-loan",
      "q-how-to-qualify-for-dscr-loan",
      "q-first-time-investor-dscr-loan",
    ],
  },
  {
    id: "q-first-time-investor-dscr-loan",
    slug: "can-a-first-time-investor-get-a-dscr-loan",
    title: "Can a first-time investor get a DSCR loan?",
    category: "DSCR Loans",
    icon: "user",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Yes, some DSCR programs accept first-time investors, although the requirements may be more conservative than for an experienced landlord.",
    fullAnswer: [
      "A lender may require stronger credit, more down payment, additional reserves, or a property with a stronger DSCR. Some programs distinguish between a first-time investor and a first-time homebuyer with no history of owning a residence.",
      "The property must be intended and eligible for investment use. Occupancy misrepresentation is serious; a DSCR loan should not be used to finance a home the borrower plans to occupy.",
      "First-time investors should also budget for vacancy, repairs, management, insurance, taxes, and unexpected capital expenses\u2014not only the mortgage payment.",
    ],
    whatAbeReviews: [
      "First-time investor eligibility",
      "First-time homebuyer restrictions",
      "Property cash flow",
      "Experience, reserves, and exit plan",
    ],
    abeTip:
      "Choose a straightforward first property with supportable rent and realistic expenses. Complexity can wait until you have experience.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/dscr-loans/",
      label: "Explore DSCR loans",
    },
    relatedQuestionIds: [
      "q-dscr-loan",
      "q-how-to-qualify-for-dscr-loan",
      "q-good-dscr-for-rental-property",
    ],
  },
  {
    id: "q-how-reverse-mortgage-works",
    slug: "how-does-a-reverse-mortgage-work",
    title: "How does a reverse mortgage work?",
    category: "Reverse Mortgages",
    icon: "house",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "A reverse mortgage allows an eligible older homeowner to access part of the home's equity without a required monthly principal-and-interest payment. The balance becomes due when a maturity event occurs, such as sale of the home or the last borrower permanently leaving it.",
    fullAnswer: [
      "The FHA-insured Home Equity Conversion Mortgage, or HECM, is the most common reverse mortgage. The amount available depends on factors including age, home value, interest rates, existing liens, and program limits. Proceeds may be structured in approved ways such as a line of credit, monthly advances, or a lump sum, depending on the product.",
      "The homeowner keeps title and remains responsible for property taxes, homeowners insurance, maintenance, and other property charges. Failure to meet those obligations can cause the loan to become due and payable.",
      "A reverse mortgage is a loan, not free money. Interest and charges accrue and generally reduce remaining equity. HECM borrowers must complete required counseling before closing.",
    ],
    whatAbeReviews: [
      "Age and principal residence",
      "Available equity and existing liens",
      "Property-charge obligations",
      "Long-term plans and heirs",
    ],
    abeTip:
      "Include family or trusted advisers in the conversation when appropriate, and compare the reverse mortgage with selling, downsizing, or another equity option.",
    programLink: {
      href: "https://www.myloandesk.com/reverse-mortgage/",
      label: "Explore reverse mortgages",
    },
    relatedQuestionIds: [
      "q-who-qualifies-for-reverse-mortgage",
      "q-reverse-mortgage-own-home",
      "q-reverse-mortgage-expenses",
    ],
  },
  {
    id: "q-who-qualifies-for-reverse-mortgage",
    slug: "who-qualifies-for-a-reverse-mortgage",
    title: "Who qualifies for a reverse mortgage?",
    category: "Reverse Mortgages",
    icon: "user",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "For an FHA-insured HECM, borrowers generally must be at least 62, occupy the home as a principal residence, have sufficient equity, complete counseling, and show the ability to meet ongoing property obligations.",
    fullAnswer: [
      "Eligible property types and conditions must meet program rules. Existing mortgages or liens generally must be paid off at closing, often using reverse-mortgage proceeds. The available amount must be sufficient to handle required obligations and transaction costs.",
      "The lender performs a financial assessment, including credit history, income, assets, and property-charge history, to determine whether the borrower can continue paying taxes, insurance, and maintenance. A set-aside may be required in some cases.",
      "Proprietary reverse mortgages may have different ages, property values, and program terms. Eligibility must be reviewed against the specific product.",
    ],
    whatAbeReviews: [
      "Age of the youngest borrower",
      "Principal-residence occupancy",
      "Equity and existing payoff",
      "Taxes, insurance, credit, and financial assessment",
    ],
    abeTip:
      "Start with the payoff, estimated value, ages, and property charges. Those four items quickly show whether the option deserves a full review.",
    programLink: {
      href: "https://www.myloandesk.com/reverse-mortgage/",
      label: "Explore reverse mortgages",
    },
    relatedQuestionIds: [
      "q-how-reverse-mortgage-works",
      "q-reverse-mortgage-own-home",
      "q-reverse-mortgage-expenses",
    ],
  },
  {
    id: "q-reverse-mortgage-own-home",
    slug: "do-i-still-own-my-home-with-a-reverse-mortgage",
    title: "Do I still own my home with a reverse mortgage?",
    category: "Reverse Mortgages",
    icon: "house",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Yes. With a reverse mortgage, you keep title to the home. The lender receives a lien, just as with a traditional mortgage.",
    fullAnswer: [
      "Keeping title also means keeping homeowner responsibilities. You must generally live in the property as required, pay property taxes and insurance, maintain the home, and comply with the loan terms.",
      "The loan balance grows as interest, mortgage-insurance premiums when applicable, and other financed charges accrue. You may sell the home at any time and use the sale proceeds to repay the loan, keeping any remaining equity after payoff and costs.",
      "When the last borrower dies or permanently leaves the home, the loan generally becomes due. Heirs may have options to repay the balance, refinance, sell the property, or allow the lender to proceed under the loan rules. Timing and non-recourse protections should be explained for the specific product.",
    ],
    whatAbeReviews: [
      "Title remains with homeowner",
      "Lien and growing loan balance",
      "Taxes, insurance, maintenance, and occupancy",
      "Repayment and heir options",
    ],
    abeTip:
      "Ask for the projected loan balance and remaining equity at several future dates\u2014not only the cash available today.",
    programLink: {
      href: "https://www.myloandesk.com/reverse-mortgage/",
      label: "Explore reverse mortgages",
    },
    relatedQuestionIds: [
      "q-how-reverse-mortgage-works",
      "q-who-qualifies-for-reverse-mortgage",
      "q-reverse-mortgage-expenses",
    ],
  },
  {
    id: "q-reverse-mortgage-expenses",
    slug: "what-expenses-must-i-keep-paying-with-a-reverse-mortgage",
    title: "What expenses must I keep paying with a reverse mortgage?",
    category: "Reverse Mortgages",
    icon: "dollar",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "You generally must continue paying property taxes, homeowners insurance, association charges, and the cost of maintaining the home. A reverse mortgage removes the required monthly principal-and-interest payment, not the costs of homeownership.",
    fullAnswer: [
      "The property must remain the borrower's principal residence under the loan's occupancy rules. Taxes and insurance must stay current, and the home must be maintained to required standards.",
      "If the lender determines that property charges may be difficult to sustain, part of the available proceeds may be reserved to pay certain expenses. This reduces the amount immediately available to the borrower.",
      "Before closing, build a realistic budget for taxes, insurance increases, HOA dues, repairs, utilities, and daily living costs. The goal is not just to close the loan; it is to make the home sustainable.",
    ],
    whatAbeReviews: [
      "Property taxes",
      "Homeowners and flood insurance when required",
      "HOA or condominium charges",
      "Repairs and maintenance",
    ],
    abeTip:
      "A reverse mortgage works best when the ongoing home expenses remain comfortably affordable.",
    programLink: {
      href: "https://www.myloandesk.com/reverse-mortgage/",
      label: "Explore reverse mortgages",
    },
    relatedQuestionIds: [
      "q-how-reverse-mortgage-works",
      "q-who-qualifies-for-reverse-mortgage",
      "q-reverse-mortgage-own-home",
    ],
  },
  {
    id: "q-reverse-second-mortgage",
    slug: "what-is-a-reverse-second-mortgage",
    title: "What is a reverse second mortgage?",
    category: "Reverse 2nd Mortgages",
    icon: "house",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "A reverse second mortgage is a second-lien equity loan for eligible older homeowners that may allow access to cash without replacing an existing first mortgage and without a required monthly principal-and-interest payment on the new second lien.",
    fullAnswer: [
      "Unlike a traditional reverse mortgage refinance, the existing first mortgage may remain in place. This can be attractive when the homeowner has a favorable first-mortgage rate but wants to access additional equity.",
      "The homeowner must continue making any required payment on the first mortgage and must keep taxes, insurance, maintenance, and other property obligations current. Interest and charges on the reverse second accrue according to the product terms, increasing its balance over time.",
      "This is a proprietary product, not an FHA HECM, so age, property, loan amount, equity, state availability, and financial requirements vary. Review both liens together to understand the total debt against the home.",
    ],
    whatAbeReviews: [
      "Existing first-mortgage balance and payment",
      "Age and available equity",
      "Second-lien terms and accrued balance",
      "State and product availability",
    ],
    abeTip:
      "Compare the reverse second with a HELOC, home equity loan, and full reverse refinance before deciding.",
    programLink: {
      href: "https://www.myloandesk.com/reverse-mortgage/",
      label: "Explore reverse mortgages",
    },
    relatedQuestionIds: [
      "q-reverse-2nd-keep-low-rate",
      "q-reverse-2nd-monthly-payments",
      "q-how-reverse-mortgage-works",
    ],
  },
  {
    id: "q-reverse-2nd-keep-low-rate",
    slug: "can-i-keep-my-low-first-mortgage-rate-with-a-reverse-second-mortgage",
    title:
      "Can I keep my low first-mortgage rate with a reverse second mortgage?",
    category: "Reverse 2nd Mortgages",
    icon: "percent",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Potentially, yes. A reverse second mortgage is designed to sit behind the existing first mortgage, so the first loan and its rate may remain unchanged.",
    fullAnswer: [
      "Keeping a low first-mortgage rate can avoid repricing the entire existing balance simply to access equity. However, the first mortgage does not disappear: its regular payment and all loan obligations continue.",
      "The new second lien has its own interest, fees, maturity events, and eligibility requirements. Even without a required monthly principal-and-interest payment on the reverse second, its balance generally grows over time.",
      "The decision should compare the blended cost of both loans with alternatives. A full reverse refinance may eliminate the required first-mortgage payment but replace the low rate; a HELOC may preserve the first rate but require variable monthly payments.",
    ],
    whatAbeReviews: [
      "First mortgage remains active",
      "New second-lien cost",
      "Combined liens and future equity",
      "Monthly cash-flow goal",
    ],
    abeTip:
      "Preserving a low rate is valuable, but evaluate the whole structure\u2014not the first mortgage in isolation.",
    programLink: {
      href: "https://www.myloandesk.com/reverse-mortgage/",
      label: "Explore reverse mortgages",
    },
    relatedQuestionIds: [
      "q-reverse-second-mortgage",
      "q-reverse-2nd-monthly-payments",
      "q-how-reverse-mortgage-works",
    ],
  },
  {
    id: "q-reverse-2nd-monthly-payments",
    slug: "do-i-make-monthly-payments-on-a-reverse-second-mortgage",
    title: "Do I make monthly payments on a reverse second mortgage?",
    category: "Reverse 2nd Mortgages",
    icon: "dollar",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Some proprietary reverse second mortgages do not require monthly principal-and-interest payments on the second lien. You must still make any required first-mortgage payment and pay taxes, insurance, and property charges.",
    fullAnswer: [
      "Because required payments are not being made on the reverse second, interest and applicable charges generally accrue to the balance. That means the amount owed can grow and remaining equity can decline over time.",
      "The loan becomes due under the product's maturity rules, commonly after a sale, death of the last borrower, or permanent move from the home. Exact terms must be reviewed in the loan documents.",
      "A no-required-payment structure can improve monthly cash flow, but it is not the same as a no-cost loan. Ask for projections showing how the second-lien balance and total home equity may change.",
    ],
    whatAbeReviews: [
      "Payment due on the existing first mortgage",
      "No required P&I on qualifying second-lien products",
      "Accruing interest and charges",
      "Maturity events and repayment",
    ],
    abeTip:
      "Review a future-balance illustration with your family or adviser so everyone understands the equity tradeoff.",
    programLink: {
      href: "https://www.myloandesk.com/reverse-mortgage/",
      label: "Explore reverse mortgages",
    },
    relatedQuestionIds: [
      "q-reverse-second-mortgage",
      "q-reverse-2nd-keep-low-rate",
      "q-how-reverse-mortgage-works",
    ],
  },
  {
    id: "q-months-of-bank-statements",
    slug: "do-i-need-12-or-24-months-of-bank-statements-for-a-mortgage",
    title: "Do I need 12 or 24 months of bank statements for a mortgage?",
    category: "Bank Statement Loans",
    icon: "document",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "It depends on the program. Many bank statement loans use either 12 or 24 months of statements, and the better choice depends on income consistency, pricing, and lender rules.",
    fullAnswer: [
      "A 12-month program focuses on the most recent year and may help when the business has grown. A 24-month review provides a longer history and can smooth normal monthly variations, but it can also include an older period with lower deposits.",
      "The lender will analyze eligible recurring deposits and exclude transfers, borrowed funds, and one-time items. Business statements generally require an expense factor or other approved expense analysis.",
      "Do not assume that fewer statements always produce more qualifying income or better terms. Run both calculations when available and compare the resulting income, rate, down payment, and reserve requirements.",
    ],
    whatAbeReviews: [
      "Deposit trend",
      "12-month versus 24-month average",
      "Expense factor",
      "Pricing and equity differences",
    ],
    abeTip:
      "Choose the statement period after doing the math, not simply because it requires fewer documents.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/bank-statement-loans/",
      label: "Explore bank statement loans",
    },
    relatedQuestionIds: [
      "q-bank-statement-mortgage",
      "q-personal-vs-business-bank-statements",
      "q-self-employed-mortgage",
    ],
  },
  {
    id: "q-personal-vs-business-bank-statements",
    slug: "should-i-use-personal-or-business-bank-statements-for-my-mortgage",
    title:
      "Should I use personal or business bank statements for my mortgage?",
    category: "Bank Statement Loans",
    icon: "document",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Use the account type that most clearly documents your eligible income under the lender's rules. Personal statements and business statements are calculated differently.",
    fullAnswer: [
      "Personal statements may work when business income is regularly transferred to a personal account and the deposits can be documented without double counting. Business statements show gross business cash flow, but lenders generally apply an expense factor because business revenue is not the same as personal income.",
      "Ownership percentage, account activity, transfers, commingled funds, and the nature of the business affect the analysis. Some lenders may allow a combination, but the same income cannot be counted twice.",
      "The cleanest option is the one with consistent, traceable deposits and the strongest supportable monthly income\u2014not necessarily the account with the largest total inflow.",
    ],
    whatAbeReviews: [
      "Where customer revenue is deposited",
      "How the owner pays personal income",
      "Business expense factor",
      "Transfers and non-income deposits",
    ],
    abeTip:
      "Let the lender review sample statements before submitting the full file so the correct method is chosen from the start.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/bank-statement-loans/",
      label: "Explore bank statement loans",
    },
    relatedQuestionIds: [
      "q-bank-statement-mortgage",
      "q-months-of-bank-statements",
      "q-self-employed-mortgage",
    ],
  },
  {
    id: "q-itin-holder-buy-house",
    slug: "can-an-itin-holder-buy-a-house-in-the-united-states",
    title: "Can an ITIN holder buy a house in the United States?",
    category: "ITIN Loans",
    icon: "document",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Yes. An ITIN holder may be able to purchase a home in the United States using an ITIN mortgage program, subject to credit, income, down payment, residency, property, and documentation requirements.",
    fullAnswer: [
      "An Individual Taxpayer Identification Number is issued for federal tax purposes and is not the same as a Social Security number or immigration status. Certain lenders offer portfolio mortgages designed for borrowers who file taxes with an ITIN.",
      "The lender may review U.S. income, tax filings or alternative documentation, bank statements, rental history, identity documents, credit or nontraditional credit, and funds for closing. Requirements vary considerably by lender.",
      "ITIN loans may require more down payment or have different pricing than standard conventional financing. Compare the full payment, cash to close, prepayment terms, and documentation\u2014not just the advertised rate.",
    ],
    whatAbeReviews: [
      "Valid ITIN and identity documents",
      "Income and tax or alternative documentation",
      "Credit or housing-payment history",
      "Down payment, reserves, and property use",
    ],
    abeTip:
      "Have your ITIN, identification, income history, and source of funds reviewed before making an offer.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/itin-loans/",
      label: "Explore ITIN loans",
    },
    relatedQuestionIds: [
      "q-itin-loan-documents-down-payment",
      "q-foreign-national-without-ssn",
      "q-foreign-buyer-documents-down-payment",
    ],
  },
  {
    id: "q-itin-loan-documents-down-payment",
    slug: "what-documents-and-down-payment-are-needed-for-an-itin-loan",
    title: "What documents and down payment are needed for an ITIN loan?",
    category: "ITIN Loans",
    icon: "document",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "ITIN loan requirements vary, but borrowers commonly need identity and ITIN documentation, income records, bank statements, housing-payment history, and verified funds for the down payment, closing costs, and reserves.",
    fullAnswer: [
      "Depending on the program, income may be documented with tax returns, pay records, 1099s, personal or business bank statements, or other approved evidence. Lenders may also consider traditional credit or alternative history such as rent, utilities, and other recurring obligations.",
      "Down payment requirements are lender- and file-specific. Credit strength, occupancy, property type, income method, and reserves can all affect the minimum and pricing. Gift funds may be allowed under some programs if properly documented.",
      "All funds should be traceable. Avoid unexplained cash deposits or last-minute transfers, and tell the loan officer about any gift before moving the money.",
    ],
    whatAbeReviews: [
      "ITIN and government-issued identification",
      "Income documentation",
      "Credit or alternative payment history",
      "Verified down payment, closing funds, and reserves",
    ],
    abeTip:
      "Request a written document checklist for the specific program instead of relying on a generic ITIN-loan list.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/itin-loans/",
      label: "Explore ITIN loans",
    },
    relatedQuestionIds: [
      "q-itin-holder-buy-house",
      "q-foreign-national-without-ssn",
      "q-foreign-buyer-documents-down-payment",
    ],
  },
  {
    id: "q-foreign-national-without-ssn",
    slug: "can-a-foreign-national-get-a-us-mortgage-without-a-social-security-number",
    title:
      "Can a foreign national get a U.S. mortgage without a Social Security number?",
    category: "Foreign National Loans",
    icon: "user",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Yes. Certain foreign-national mortgage programs may finance U.S. property without a Social Security number or established U.S. credit, subject to the lender's eligibility and documentation rules.",
    fullAnswer: [
      "These programs are commonly used for second homes or investment properties. Lenders may review passport and visa information when applicable, foreign income or assets, bank references, international credit, U.S. property cash flow, and the source of funds.",
      "A larger down payment and additional reserves are often required compared with standard domestic financing. Property type, occupancy, country of residence, currency, entity structure, and sanctions or compliance screening can affect eligibility.",
      "The borrower should also obtain independent tax and legal advice about U.S. ownership, rental income, estate planning, and entity structure. Mortgage approval does not answer those separate questions.",
    ],
    whatAbeReviews: [
      "Citizenship and country of residence",
      "Passport, visa, and identification",
      "Foreign income, assets, or property cash flow",
      "Down payment, reserves, and property use",
    ],
    abeTip:
      "Coordinate the lender, title company, bank transfers, and adviser early. International documentation and funds can require extra time.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/foreign-national-loans/",
      label: "Explore foreign national loans",
    },
    relatedQuestionIds: [
      "q-foreign-buyer-documents-down-payment",
      "q-itin-holder-buy-house",
      "q-itin-loan-documents-down-payment",
    ],
  },
  {
    id: "q-foreign-buyer-documents-down-payment",
    slug: "what-documents-and-down-payment-does-a-foreign-buyer-need",
    title: "What documents and down payment does a foreign buyer need?",
    category: "Foreign National Loans",
    icon: "document",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Requirements vary by lender, but a foreign buyer commonly needs identification, proof of address, asset statements, source-of-funds documentation, and evidence supporting income, credit, or property cash flow. Down payments are typically larger than for standard owner-occupied U.S. loans.",
    fullAnswer: [
      "Possible documents include a passport, visa when applicable, foreign bank statements, employment or business records, accountant letters, credit references, purchase contract, and entity documents. Documents may need certified translation or currency conversion.",
      "The minimum down payment depends on the property, occupancy, loan size, country, credit profile, reserves, and program. The borrower may also need a U.S. bank account or other closing arrangements, depending on the lender and settlement agent.",
      "International wires must be planned and documented. Anti-money-laundering, sanctions, and source-of-funds reviews can delay a transaction if addressed late.",
    ],
    whatAbeReviews: [
      "Identity and residency documents",
      "Income, assets, and credit references",
      "Source of funds and currency transfer",
      "Property and entity documentation",
    ],
    abeTip:
      "Start the document and wire plan before signing a short closing deadline.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/foreign-national-loans/",
      label: "Explore foreign national loans",
    },
    relatedQuestionIds: [
      "q-foreign-national-without-ssn",
      "q-itin-holder-buy-house",
      "q-itin-loan-documents-down-payment",
    ],
  },
  {
    id: "q-medical-professionals-no-down-payment",
    slug: "can-medical-professionals-buy-a-home-with-no-down-payment",
    title: "Can medical professionals buy a home with no down payment?",
    category: "Medical Professional Loans",
    icon: "house",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Some medical professional mortgage programs may offer up to 100% financing to eligible borrowers, but availability and maximum loan size depend on profession, credit, income, property, occupancy, and lender guidelines.",
    fullAnswer: [
      "These programs are designed around the career path of physicians and other eligible professionals, who may have strong future earnings but limited savings or significant student debt early in their careers.",
      "Certain programs may provide flexible treatment of student-loan obligations, employment contracts, residency or fellowship income, or future start dates. Not every medical profession qualifies, and not every applicant or property is eligible for zero down.",
      "Compare the payment, rate, mortgage insurance if any, reserves, and total cash needed. Even with no required down payment, closing costs, prepaid taxes and insurance, and reserves may still be necessary.",
    ],
    whatAbeReviews: [
      "Eligible medical designation",
      "Employment contract and start date",
      "Credit and student debt",
      "Loan amount, occupancy, and reserves",
    ],
    abeTip:
      "Send the degree or license, contract, start date, student-loan information, and target price for a program-specific review.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/medical-professional-loans/",
      label: "Explore medical professional loans",
    },
    relatedQuestionIds: [
      "q-which-healthcare-professionals-qualify",
      "q-home-5-percent-down",
      "q-how-much-house-can-i-afford",
    ],
  },
  {
    id: "q-which-healthcare-professionals-qualify",
    slug: "which-healthcare-professionals-qualify-for-medical-professional-loans",
    title:
      "Which healthcare professionals qualify for medical professional loans?",
    category: "Medical Professional Loans",
    icon: "user",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Eligibility depends on the lender. Programs often serve physicians and dentists, while some also include veterinarians, pharmacists, podiatrists, optometrists, physician assistants, nurse practitioners, or other licensed professionals.",
    fullAnswer: [
      "The profession alone is not enough. Lenders also review licensing or degree status, employment, income, credit, debts, assets, loan amount, property, and occupancy.",
      "Some programs accept residents, fellows, or professionals beginning a new job within an approved period after closing. Others require the borrower to be fully licensed and actively employed.",
      "Because lender definitions differ, a borrower rejected by one 'doctor loan' program may fit another medical professional program. The right search starts with the exact credential and employment timeline.",
    ],
    whatAbeReviews: [
      "Degree, license, or professional designation",
      "Resident, fellow, employed, or self-employed status",
      "Contract and start date",
      "Property and loan amount",
    ],
    abeTip:
      "Use the exact professional title when asking for eligibility. Do not assume 'doctor loan' means physicians only\u2014or that every healthcare role is included.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/medical-professional-loans/",
      label: "Explore medical professional loans",
    },
    relatedQuestionIds: [
      "q-medical-professionals-no-down-payment",
      "q-home-5-percent-down",
      "q-how-much-house-can-i-afford",
    ],
  },
  {
    id: "q-construction-loans",
    slug: "how-does-a-construction-loan-work",
    title: "How does a construction loan work?",
    category: "Construction Loans",
    icon: "building",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "A construction loan finances an approved building project in stages. Instead of advancing the entire amount at once, the lender releases funds through draws as verified work is completed.",
    fullAnswer: [
      "Before closing, the lender reviews the borrower, land, plans, specifications, budget, builder, contract, permits, appraisal based on the completed project, and contingency reserves. During construction, inspections support draw requests and confirm progress.",
      "Payments during construction are often based on the amount disbursed, although terms vary. Cost overruns, change orders, delays, and unpaid contractors can create serious problems, so the budget and draw process must be understood before work begins.",
      "Some loans cover construction only and require separate permanent financing. Others are construction-to-permanent loans that convert after completion, subject to their terms.",
    ],
    whatAbeReviews: [
      "Land ownership or purchase",
      "Plans, budget, builder, and permits",
      "Draw and inspection schedule",
      "Permanent financing and contingency",
    ],
    abeTip:
      "Do not start construction or pay major nonrefundable costs until the lender confirms what can be financed and how prior work will be treated.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/construction-loans/",
      label: "Explore construction loans",
    },
    relatedQuestionIds: [
      "q-construction-to-permanent-loan",
      "q-fix-and-flip-loan-qualify",
      "q-fix-and-flip-purchase-and-renovation",
    ],
  },
  {
    id: "q-construction-to-permanent-loan",
    slug: "what-is-a-construction-to-permanent-loan",
    title: "What is a construction-to-permanent loan?",
    category: "Construction Loans",
    icon: "building",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "A construction-to-permanent loan combines construction financing and the long-term mortgage into one planned transaction, then converts to permanent financing after the home is completed and requirements are satisfied.",
    fullAnswer: [
      "This structure can reduce the need to arrange a separate refinance after construction. The lender still reviews plans, builder, budget, appraisal, permits, draw schedule, and borrower qualification.",
      "During construction, funds are disbursed in stages and inspections confirm work. At completion, the lender typically requires final inspections, certificates, lien documentation, insurance, and satisfaction of any conversion conditions.",
      "One-close and two-close structures have different benefits and risks. A one-close loan may provide more certainty about permanent financing, while a separate construction loan may offer flexibility but creates another approval and closing.",
    ],
    whatAbeReviews: [
      "One-close versus two-close structure",
      "Rate during and after construction",
      "Conversion conditions",
      "Overruns, extensions, and change orders",
    ],
    abeTip:
      "Read the extension and conversion provisions carefully. Construction schedules often move, and the loan needs a realistic plan for delays.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/construction-loans/",
      label: "Explore construction loans",
    },
    relatedQuestionIds: [
      "q-construction-loans",
      "q-fix-and-flip-loan-qualify",
      "q-fix-and-flip-purchase-and-renovation",
    ],
  },
  {
    id: "q-fix-and-flip-loan-qualify",
    slug: "how-do-i-qualify-for-a-fix-and-flip-loan",
    title: "How do I qualify for a fix and flip loan?",
    category: "Fix & Flip Loans",
    icon: "building",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Fix and flip lenders typically focus on the property, purchase price, renovation scope, after-repair value, borrower experience, credit, liquidity, and exit strategy.",
    fullAnswer: [
      "The lender reviews the acquisition contract, rehab budget, contractor information, project timeline, current value, and estimated after-repair value. Renovation funds are commonly released through draws after work is verified.",
      "Borrowers generally need cash for part of the purchase, closing costs, initial work, interest, and reserves. Strong experience and liquidity may improve leverage or pricing, while a first project may require more equity.",
      "The exit plan is critical. Most fix and flip loans are short-term and may carry extension fees or default consequences. The plan may be to sell, refinance into a rental loan, or repay from another documented source.",
    ],
    whatAbeReviews: [
      "Purchase price and current value",
      "Rehab budget and after-repair value",
      "Experience, credit, and liquidity",
      "Timeline and exit strategy",
    ],
    abeTip:
      "Build the project around conservative resale value, realistic construction time, carrying costs, and a backup exit\u2014not the most optimistic scenario.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/fix-and-flip-loans/",
      label: "Explore fix & flip loans",
    },
    relatedQuestionIds: [
      "q-fix-and-flip-purchase-and-renovation",
      "q-construction-loans",
      "q-construction-to-permanent-loan",
    ],
  },
  {
    id: "q-fix-and-flip-purchase-and-renovation",
    slug: "can-a-fix-and-flip-loan-cover-both-the-purchase-and-renovation",
    title:
      "Can a fix and flip loan cover both the purchase and renovation?",
    category: "Fix & Flip Loans",
    icon: "house",
    author: "Abe",
    publishedAt: "2026-08-12",
    shortAnswer:
      "Yes. Many fix and flip loans can finance part of the purchase and an approved renovation budget, but the borrower usually must contribute equity and follow a draw process for rehab funds.",
    fullAnswer: [
      "Purchase proceeds are funded at closing according to the approved leverage. Renovation funds are typically held back and released in stages after completed work is inspected. The borrower may need to pay contractors first and receive reimbursement, depending on the lender.",
      "Maximum financing may be limited by purchase price, current value, total project cost, or after-repair value. The lender also evaluates the scope, contractor, permits, contingency, borrower experience, and reserves.",
      "Interest, points, inspection charges, extension fees, taxes, insurance, utilities, and selling costs must be included in the project budget. Financing the rehab does not eliminate the need for working capital.",
    ],
    whatAbeReviews: [
      "Acquisition leverage",
      "Approved rehab holdback",
      "Draw and reimbursement process",
      "Carrying costs and contingency",
    ],
    abeTip:
      "Ask exactly when each draw is released and how much cash must be available before reimbursement. That detail can determine whether the project stays on schedule.",
    programLink: {
      href: "https://www.myloandesk.com/loan-programs/fix-and-flip-loans/",
      label: "Explore fix & flip loans",
    },
    relatedQuestionIds: [
      "q-fix-and-flip-loan-qualify",
      "q-construction-loans",
      "q-construction-to-permanent-loan",
    ],
  },
];
