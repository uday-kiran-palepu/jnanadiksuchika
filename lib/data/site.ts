export type KbPlanId = "free" | "one" | "ten" | "subscription";

export type KbPlan = {
  id: KbPlanId;
  priceLabel: string;
  priceTe: string;
  period?: string;
  featured?: boolean;
  features: string[];
  featuresTe: string[];
};

export const kbPlans: KbPlan[] = [
  {
    id: "free",
    priceLabel: "₹0",
    priceTe: "₹0",
    features: [
      "Core platform guides",
      "Raft visualizer walkthrough",
      "Community wiki access",
    ],
    featuresTe: [
      "కోర్ ప్లాట్‌ఫామ్ గైడ్‌లు",
      "రాఫ్ట్ విజువలైజర్ వాక్‌త్రూ",
      "కమ్యూనిటీ వికీ యాక్సెస్",
    ],
  },
  {
    id: "one",
    priceLabel: "₹1",
    priceTe: "₹1",
    features: [
      "One premium article unlock",
      "Downloadable checklist",
      "Valid 30 days",
    ],
    featuresTe: [
      "ఒక ప్రీమియం ఆర్టికల్ అన్‌లాక్",
      "డౌన్‌లోడ్ చేయదగిన చెక్‌లిస్ట్",
      "30 రోజులు చెల్లుబాటు",
    ],
  },
  {
    id: "ten",
    priceLabel: "₹10",
    priceTe: "₹10",
    featured: true,
    features: [
      "10 premium credits",
      "Mix articles across categories",
      "Credits roll 60 days",
    ],
    featuresTe: [
      "10 ప్రీమియం క్రెడిట్‌లు",
      "కేటగిరీల మధ్య మిక్స్",
      "60 రోజులు క్రెడిట్‌లు",
    ],
  },
  {
    id: "subscription",
    priceLabel: "₹199",
    priceTe: "₹199",
    period: "/mo",
    features: [
      "Unlimited premium KB",
      "Early access drafts",
      "Cancel anytime",
    ],
    featuresTe: [
      "అన్‌లిమిటెడ్ ప్రీమియం KB",
      "డ్రాఫ్ట్‌లకు ముందస్తు యాక్సెస్",
      "ఎప్పుడైనా రద్దు",
    ],
  },
];

export type HomepageStat = {
  value: string;
  labelKey: "hero.statMentored" | "hero.statPlacement" | "hero.statRating";
};

export const homepageStats: HomepageStat[] = [
  { value: "4,800+", labelKey: "hero.statMentored" },
  { value: "94%", labelKey: "hero.statPlacement" },
  { value: "4.9★", labelKey: "hero.statRating" },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "The Raft lab forced me to watch elections break — then fix them. That stuck harder than any slide deck.",
    name: "Ananya R.",
    role: "Platform Engineer",
  },
  {
    id: "2",
    quote:
      "Jnana Diksuchika workshops feel like production incident review, not classroom theater. Exactly what our team needed.",
    name: "Karthik M.",
    role: "SRE Lead",
  },
  {
    id: "3",
    quote:
      "Bilingual knowledge base meant my mentees in Vizag could keep pace without translating every term twice.",
    name: "Sravani P.",
    role: "Engineering Manager",
  },
];

export type FaqItem = {
  qKey: string;
  aKey: string;
};

export const homepageFaqs: FaqItem[] = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
];
