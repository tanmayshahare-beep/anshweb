// ============================================================
//  URJA Training Academy — Site Content
//  Edit this file to update all text and images on the website.
//
//  IMAGES: Place your image files in the `public/` folder and
//  update the paths below (e.g. "/my-hero-photo.jpg").
//  Supported formats: .jpg, .jpeg, .png, .webp, .svg
// ============================================================

export const CONTENT = {
  // ----------------------------------------------------------
  // SITE-WIDE
  // ----------------------------------------------------------
  site: {
    name: "URJA Training Academy",
    logoText: "URJA",
    logoSubtitle: "Training Academy",
    tagline: "India's Pm Trading Academy",
  },

  // ----------------------------------------------------------
  // NAVIGATION
  // Links shown in the top nav bar.
  // ----------------------------------------------------------
  nav: {
    links: [
      { name: "About", href: "/about" },
      { name: "Programmes", href: "/programmes" },
      { name: "Why Us", href: "/why-us" },
      { name: "Mentors", href: "/mentors" },
    ],
    ctaLabel: "Enroll Now",
  },

  // ----------------------------------------------------------
  // HERO SECTION
  // image: path to the full-width background image in /public
  // ----------------------------------------------------------
  hero: {
    image: "/hero.png",
    headline: "Execution Matters",
    headlineHighlight: "Profits Follow",
    description:
      "Master the art of disciplined trading with proven strategies, real mentorship, and execution-driven learning.",
    primaryCta: "Start Your Journey",
    secondaryCta: "Explore Programmes",
  },

  // ----------------------------------------------------------
  // STATS BAR
  // Four headline numbers shown below the hero.
  // ----------------------------------------------------------
  stats: [
    { number: "5,000+", label: "Students Trained" },
    { number: "8+", label: "Years Experience" },
    { number: "95%", label: "Success Rate" },
    { number: "10+", label: "Expert Programmes" },
  ],

  // ----------------------------------------------------------
  // ABOUT SECTION
  // image: the coaching studio photo shown on the right side.
  // ----------------------------------------------------------
  about: {
    image: "/about.png",
    headlinePre: "Not a Generic Coaching Center.",
    headlineHighlight: "A Launchpad.",
    paragraphs: [
      '"URJA" means energy. We believe that with the right momentum and structured knowledge, anyone can decode the complexities of the stock market.',
      "Our mission is to make institutional-grade financial education accessible to Indians. We replace textbook theories with live charts, real capital, and battle-tested strategies.",
    ],
    bullets: [
      "Practical, hands-on learning environment",
      "Mentorship from active market participants",
      "Focus on psychology and risk management",
    ],
    badge: {
      title: "SEBI",
      subtitle: "Registered",
      description:
        "Learn from certified professionals with proven track records.",
    },
  },

  // ----------------------------------------------------------
  // PROGRAMMES / COURSES
  // Add, remove, or edit courses here.
  // image: course cover photo in /public
  // level: shown as a badge on the course card (e.g. "Beginner")
  // ----------------------------------------------------------
  programmes: {
    headline: "Mastery Programmes",
    description:
      "From absolute basics to algorithmic automation. Choose the track that aligns with your ambition.",
    courses: [
      {
        title: "Stock Market Fundamentals",
        desc: "Perfect for beginners. Understand market mechanics, basic terminology, and how to start investing safely.",
        duration: "4 Days",
        image: "/course-1.png",
      },
      {
        title: "Technical Analysis Mastery",
        desc: "Read charts like a pro. Master price action, indicators, and chart patterns to time your entries and exits.",
        duration: "12 Weeks",
        image: "/course-2.png",
      },
    ],
  },

  // ----------------------------------------------------------
  // WHY CHOOSE URJA
  // Three differentiator cards. Icons are set in the component.
  // ----------------------------------------------------------
  whyChoose: {
    headline: "Why Choose URJA?",
    description: "We don't just teach theory. We build traders.",
    features: [
      {
        title: "Active Market Mentors",
        desc: "Learn from traders who are in the trenches every day, not just academicians.",
      },
      {
        title: "Live Trading Sessions",
        desc: "Apply concepts in real-time with live market hours hand-holding and analysis.",
      },
      {
        title: "Lifetime Community",
        desc: "Join an elite network of alumni. Get continuous support, trade setups, and market updates.",
      },
    ],
  },

  // ----------------------------------------------------------
  // MENTORS
  // image: mentor headshot in /public
  // ----------------------------------------------------------
  mentors: {
    headline: "Meet Your Mentors",
    description:
      "Guided by industry veterans with decades of collective experience in Indian and global equities.",
    list: [
      {
        name: "Rahul Sharma",
        role: "Chief Market Strategist",
        cred: "15+ Years in Equity Markets • SEBI Registered",
        image: "/mentor-1.jpg",
        bio: "Former institutional desk trader. Specializes in price action and behavioral finance.",
      },
      {
        name: "Priya Desai",
        role: "Head of Derivatives",
        cred: "10+ Years Options Trader • CMT Level 3",
        image: "/mentor-2.jpg",
        bio: "Expert in volatility trading and complex options strategies. Manages a proprietary fund.",
      },
    ],
  },

  // ----------------------------------------------------------
  // TESTIMONIALS
  // Shown as an auto-scrolling marquee. Pauses on hover.
  // image: student avatar photo in /public
  // ----------------------------------------------------------
  testimonials: {
    headline: "Stories of Transformation",
    description:
      "Don't just take our word for it. Hear from those who took the leap.",
    list: [
      {
        quote:
          "URJA didn't just teach me how to read charts; they taught me how to manage my mind. The risk management principles completely changed my trading journey.",
        name: "Vikram S.",
        role: "IT Professional",
        image: "/avatar-1.jpg",
      },
      {
        quote:
          "The Options mastery program is phenomenal. The live sessions gave me the confidence to execute complex spreads that I previously found intimidating.",
        name: "Ananya M.",
        role: "Full-time Trader",
        image: "/avatar-2.jpg",
      },
      {
        quote:
          "From absolute beginner to managing my family's portfolio. The structured approach and lifetime community support are worth their weight in gold.",
        name: "Karan P.",
        role: "Business Owner",
        image: "/avatar-3.jpg",
      },
      {
        quote:
          "The live trading sessions were an eye-opener. Watching the mentors analyze live charts while explaining their reasoning is something no book can replicate.",
        name: "Meera T.",
        role: "Bank Manager",
        image: "/avatar-1.jpg",
      },
      {
        quote:
          "I was skeptical at first, but the fundamentals course paid for itself within the first month. The risk-reward frameworks are simply invaluable.",
        name: "Rohit G.",
        role: "Software Engineer",
        image: "/avatar-2.jpg",
      },
      {
        quote:
          "The lifetime community access is genuinely priceless. Getting daily market insights and trade setups from fellow URJA alumni keeps me sharp every single day.",
        name: "Sunita R.",
        role: "Homemaker & Investor",
        image: "/avatar-3.jpg",
      },
    ],
  },

  // ----------------------------------------------------------
  // FAQ
  // Add or edit questions and answers here.
  // ----------------------------------------------------------
  faq: {
    headline: "Got Questions?",
    list: [
      {
        q: "Do I need prior financial knowledge?",
        a: "Not for our Fundamentals program. We start from absolute scratch. For advanced courses, basic market knowledge is recommended.",
      },
      {
        q: "Are the classes online or offline?",
        a: "We offer both hybrid formats. You can join our live interactive online streams or attend physical batches at our Mumbai center.",
      },
      {
        q: "What is the batch size?",
        a: "We cap our batches at 25 students to ensure personalized attention and effective live trading sessions.",
      },
      {
        q: "Do you provide placement support?",
        a: "Yes. For our advanced algorithmic trading and complete mastery tracks, we assist with placements in prop desks and brokerages.",
      },
      {
        q: "Will I get access to recordings?",
        a: "Absolutely. All live sessions are recorded and available to you for lifetime review.",
      },
    ],
  },

  // ----------------------------------------------------------
  // ENROLL / CONTACT FORM
  // ----------------------------------------------------------
  enroll: {
    headline: "Ready to Transform?",
    description:
      "Fill out the form below and our career counselor will get in touch to guide your next steps.",
    ctaLabel: "Request Callback",
  },

  // ----------------------------------------------------------
  // FOOTER & CONTACT DETAILS
  // Update your real address, phone, email, and social links.
  // ----------------------------------------------------------
  footer: {
    description:
      "Empowering everyday people to master the stock market through structured, practical, and expert-led training. Transform your financial future with us.",
    contact: {
      address: "101, URJA Tower, Financial District, Mumbai, India",
      phone: "+91 98765 43210",
      email: "hello@urjatraining.in",
    },
    social: {
      twitter: "#", // Replace "#" with your actual profile URL
      linkedin: "#",
      instagram: "https://www.instagram.com/urjatradingacademy/",
      facebook: "#",
    },
  },
};
