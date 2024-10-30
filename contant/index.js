const NavLinks = [
  { id: "1", title: "How it Works", link: "#How-it-Works" },
  { id: "2", title: "Portfolio", link: "#Portfolio" },
  { id: "3", title: "Pricing", link: "#Pricing" },
  { id: "4", title: "Contact", link: "#Contact" },
];

const HowItWorksContent = [
  {
    id: 1,
    icon: "number1.svg",
    title: "Upload Your VSL",
    content: "Start by uploading your English VSL and the transcription file.",
  },
  {
    id: 2,
    icon: "number2.svg",
    title: "Add Your Translation",
    content:
      "Upload the transcription of the language you want to target (e.g., German, French, Italian).",
  },
  {
    id: 3,
    icon: "number3.svg",
    title: "Integrate with AI Voices",
    content:
      "Just provide your Eleven Labs API key and voice ID for the voiceover in the new language.",
  },
  {
    id: 4,
    icon: "number4.svg",
    title: "Process",
    content:
      "VSLTranslator.io will generate a perfectly synchronized voiceover that matches each scene of your original VSL",
  },
];

const portfolio = [
  {
    id: 1,
    title: "italien",
    image: "1.jpg",
  },
  {
    id: 2,
    title: "english",
    image: "2.jpg",
  },
  {
    id: 3,
    title: "japanese",
    image: "3.jpg",
  },
  {
    id: 4,
    title: "french",
    image: "4.jpg",
  },
];

const pricing = [
  {
    id: 1,
    title: "Free Trial Plan",
    price: "Free",
    description: "Learn How VidTranslator.io Works",
    features: [
      "Create and manage a personal profile",
      "Access to free content",
      "2GB file storage ",
      "Email support",
      "Access to a Help Center or FAQs",
    ],
  },
  {
    id: 2,
    title: "Pro Plan",
    price: "$15",
    description: "Perfect for Individual Advertisers and Small Teams",
    features: [
      "All Basic Plan features",
      "Access to premium content ",
      "20GB file storage",
      "Real-time collaboration with other Pro users",
      "Priority email support with quicker response times",
    ],
  },
  {
    id: 3,
    title: "Premium Plan",
    price: "$35",
    description: "Ideal for Agencies and Businesses",
    features: [
      "All Pro Plan features",
      "Team management with user roles and permissions",
      "+100GB file storage",
      "Advanced offline and sync capabilities",
      "24/7 dedicated support team",
    ],
  },
];

const affiliate = [
  {
    id: 1,
    icon: "number1.svg",
    title: "Sign Up",
    content:
      "Joining is quick and easy — and it's free to become an affiliate!",
  },
  {
    id: 2,
    icon: "number2.svg",
    title: "Share Your Link",
    content:
      "Promote VSLTranslator.io on your website, blog, social media, or with your network.",
  },
  {
    id: 3,
    icon: "number3.svg",
    title: "Earn Commissions",
    content:
      "Earn 30% of each customer's monthly payments for as long as they stay, when they sign up through your link.",
  },
  {
    id: 4,
    icon: "number4.svg",
    title: "Track Your Earnings",
    content:
      "Easily monitor your earnings and commissions through our user-friendly dashboard.",
  },
];

export { NavLinks, HowItWorksContent, portfolio, pricing, affiliate };
