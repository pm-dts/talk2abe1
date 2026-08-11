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
    publishedAt: "2024-05-20",
    video: {
      thumbnail: "/images/questions/can-i-buy-a-home-with-5-percent-down.jpg",
    },
    shortAnswer:
      "Yes, in many cases you can buy a home with as little as 5% down.",
    fullAnswer: [
      "Commercial loans, some first-time home buyer programs, and certain loan options can make 5% down possible.",
      "Keep in mind, factors like credit score, debt-to-income ratio, and loan type will impact your options and monthly payment.",
      "The good news is there are more options today than most people realize.",
    ],
    abeTip:
      "Even if you think you need 20% down, it's worth checking your options. You might be able to buy sooner than you think.",
    relatedQuestionIds: ["q-how-much-house-can-i-afford", "q-down-payment-options"],
  },
  {
    id: "q-self-employed-mortgage",
    slug: "can-i-get-a-mortgage-if-im-self-employed",
    title: "Can I get a mortgage if I'm self-employed?",
    category: "Self-Employed Loans",
    popular: true,
    icon: "user",
    author: "Abe",
    publishedAt: "2024-05-14",
    video: {
      thumbnail: "/images/questions/can-i-get-a-mortgage-if-im-self-employed.jpg",
    },
    shortAnswer:
      "Yes, self-employed borrowers can qualify for a mortgage with the right documentation.",
    fullAnswer: [
      "Lenders typically verify self-employed income with two years of tax returns, profit and loss statements, and sometimes bank statements.",
      "Bank statement loan programs let you qualify based on business or personal deposits instead of traditional tax documents.",
      "The key is keeping clean financial records and working with a lender who understands self-employed income.",
    ],
    abeTip:
      "Don't assume you need to show two full years of profits. Many lenders use average income over the last two years, so a strong recent year can help.",
    relatedQuestionIds: ["q-bank-statement-mortgage", "q-home-5-percent-down"],
  },
  {
    id: "q-dscr-loan",
    slug: "what-is-a-dscr-loan",
    title: "What is a DSCR loan?",
    category: "DSCR Loans",
    popular: true,
    icon: "building",
    author: "Abe",
    publishedAt: "2024-05-08",
    video: {
      thumbnail: "/images/questions/what-is-a-dscr-loan.jpg",
    },
    shortAnswer:
      "A DSCR loan lets real estate investors qualify based on rental income instead of personal income.",
    fullAnswer: [
      "DSCR stands for debt-service coverage ratio, which compares the property's rental income to its monthly debt obligations.",
      "Because qualification is based on the property's cash flow, DSCR loans don't require traditional income verification or W-2s.",
      "They are popular with investors who want to scale a rental portfolio without showing personal tax returns.",
    ],
    abeTip:
      "A DSCR above 1.0 means the property's income covers its debt payments. Higher DSCRs usually unlock better rates.",
    relatedQuestionIds: ["q-self-employed-mortgage", "q-how-much-house-can-i-afford"],
  },
  {
    id: "q-how-much-house-can-i-afford",
    slug: "how-much-house-can-i-afford",
    title: "How much house can I afford?",
    category: "Purchase Loans",
    popular: true,
    icon: "houseplus",
    author: "Abe",
    publishedAt: "2024-04-29",
    video: {
      thumbnail: "/images/questions/how-much-house-can-i-afford.jpg",
    },
    shortAnswer:
      "A comfortable target is a home priced at roughly 3 times your gross annual income.",
    fullAnswer: [
      "Lenders look at your debt-to-income ratio, which compares your total monthly debts to your gross monthly income. A ratio below 43% is generally required.",
      "Your down payment, credit score, and current interest rate also shape what you can afford and your monthly payment.",
      "Getting pre-approved gives you a clear number you can trust before you start shopping.",
    ],
    abeTip:
      "Don't buy at the top of your pre-approval amount. Leave room in your budget for taxes, insurance, and maintenance.",
    relatedQuestionIds: ["q-home-5-percent-down", "q-down-payment-options"],
  },
  {
    id: "q-bank-statement-mortgage",
    slug: "can-i-get-a-mortgage-with-bank-statements",
    title: "Can I get a mortgage with bank statements?",
    category: "Bank Statement Loans",
    popular: true,
    icon: "document",
    author: "Abe",
    publishedAt: "2024-04-22",
    video: {
      thumbnail: "/images/questions/can-i-get-a-mortgage-with-bank-statements.jpg",
    },
    shortAnswer:
      "Yes, bank statement loans let self-employed borrowers qualify using deposits instead of tax returns.",
    fullAnswer: [
      "Instead of traditional income verification, you provide 12 to 24 months of bank statements showing consistent deposits.",
      "Lenders average your deposits and may allow business or personal deductions to account for expenses.",
      "This option is ideal for 1099 earners, gig workers, and business owners whose tax returns understate their true income.",
    ],
    abeTip:
      "Keep your business and personal finances separate. Cleaner statements make the underwriting process much smoother.",
    relatedQuestionIds: ["q-self-employed-mortgage", "q-dscr-loan"],
  },
  {
    id: "q-2-1-buydown",
    slug: "how-does-a-2-1-buydown-work",
    title: "How does a 2-1 buydown work?",
    category: "Purchase Loans",
    popular: true,
    icon: "dollar",
    author: "Abe",
    publishedAt: "2024-04-15",
    video: {
      thumbnail: "/images/questions/how-does-a-2-1-buydown-work.jpg",
    },
    shortAnswer:
      "A 2-1 buydown lowers your rate by 2% in year one and 1% in year two before returning to the full rate.",
    fullAnswer: [
      "In the first year your interest rate is reduced by 2 percentage points, and in the second year by 1 percentage point.",
      "From year three onward you pay the full, permanent rate. The temporary interest is often funded by the seller or builder.",
      "It can lower your early monthly payments and make it easier to qualify while you build equity.",
    ],
    abeTip:
      "A 2-1 buydown can be a smart move if your income is expected to grow over the first couple of years.",
    relatedQuestionIds: ["q-home-5-percent-down", "q-how-much-house-can-i-afford"],
  },
  {
    id: "q-down-payment-options",
    slug: "what-are-the-down-payment-options",
    title: "What are the down payment options?",
    category: "Purchase Loans",
    popular: true,
    icon: "house",
    author: "Abe",
    publishedAt: "2024-04-08",
    video: {
      thumbnail: "/images/questions/what-are-the-down-payment-options.jpg",
    },
    shortAnswer:
      "Down payments range from 0% for VA loans to 3-5% for many conventional and FHA programs.",
    fullAnswer: [
      "FHA loans allow as little as 3.5% down, while many conventional programs start around 3% to 5%.",
      "Qualified veterans can use a VA loan with zero down payment, and some rural and first-time buyer programs offer 0% options too.",
      "The right choice depends on your credit profile, budget, and how much you want to borrow.",
    ],
    abeTip:
      "Putting less down isn't always worse. Consider your monthly payment and how soon you need the equity before choosing a program.",
    relatedQuestionIds: ["q-home-5-percent-down", "q-2-1-buydown"],
  },
];
