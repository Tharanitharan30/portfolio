export const personal = {
  name: "Tharanitharan S",
  title: "Full Stack Developer | ML Engineer",
  tagline: "If you crack the system, first understand the system.",
  location: "Coimbatore, India",
  email: "tharanitharan3011@gmail.com",
  github: "https://github.com/Tharanitharan30",
  linkedin: "https://www.linkedin.com/in/tharanitharan-s-902365324/",
  resume: "/resume.pdf",
  bio: "I'm a Full Stack Developer and ML Engineer who loves building end-to-end systems—from mobile apps to AI-powered backends. I enjoy decoding complex problems, whether that's designing scalable REST APIs, training neural networks, or architecting cross-platform apps. Based in Coimbatore, I'm driven by clean code, sharp design, and the satisfaction of a system that just works.",
  funFact: "I once solved a Sudoku puzzle programmatically from a photo — and that rabbit hole led me deep into constraint satisfaction algorithms.",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Flutter", icon: "🐦" },
      { name: "React Native", icon: "📱" },
      { name: "Vite", icon: "⚡" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Django", icon: "🐍" },
      { name: "Express.js", icon: "🚂" },
    ],
  },
  {
    category: "database",
    items: [
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" },
      { name: "SQLite", icon: "🗄️" },
    ],
  },
  {
    category: "Languages & Tools",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Dart", icon: "🎯" },
      { name: "C", icon: "©️" },
      { name: "SQL", icon: "🗄️" },
      { name: "Git", icon: "🔀" },
    ],
  },
];

export const hackathonCertificates = [
  {
    title: "VIHANSA",
    organizer: "Sri Ramakrishana institute of technology",
    year: "2026",
    summary: "Built a real-time problem-solving prototype under 24 hours and presented it to industry mentors.",
    image: "/certificates/VIHANSA.jpeg",
    link: "#",
  },
  {
    title: "Theerv'ATHON",
    organizer: "PSG College of Arts and Science",
    year: "2025",
    summary: "Developed an AI-assisted full-stack sprint constraints.",
    image: "/certificates/theervathon.png",
    link: "#",
  },
  {
    title: "Vidyut'25",
    organizer: "karpagam college of engineering",
    year: "2025",
    summary: "Collaborated on an ML-backed solution and delivered a complete demo.",
    image: "/certificates/Vidyut.jpg",
    link: "#",
  },
  {
    title: "Hack 4 impact",
    organizer: "karpagam academy of higher education",
    year: "2025",
    summary: "Collaborated on an ML-backed solution and delivered a complete demo.",
    image: "/certificates/hack4impact.png",
    link: "#",
  },
];

export const projects = [
  {
    name: "AquaSense",
    tagline: "Smart water quality monitoring system with real-time alerts",
    stack: ["React Native", "Django", "ML",],
    features: ["Real-time sensor data", "ML-based anomaly detection", "Push notifications"],
    github: "https://github.com/Tharanitharan30/aquasense",
    demo: null,
    gradient: "from-sky-500/15 to-cyan-500/15",
    accentColor: "#38BDF8",
  },
  {
    name: "TaxPal",
    tagline: "Calculate tax and track expenses with smart categorization",
    stack: ["React", "Express.js", "MongoDB"],
    features: ["Tax calculator", "Expense tracking", "Report export"],
    github: "https://github.com/Tharanitharan30/Taxpal",
    demo: null,
    gradient: "from-emerald-500/15 to-lime-500/15",
    accentColor: "#34D399",
  },
  {
    name: "Brain Tumor Classifier",
    tagline: "EfficientNet-B4 MRI classification with GradCAM visualization",
    stack: ["Python", "EfficientNet-B4", "TensorFlow", "OpenCV"],
    features: ["4-class MRI classification", "GradCAM heatmaps", "Kaggle dataset pipeline"],
    github: "https://github.com/Tharanitharan30/Disease-prediction",
    demo: null,
    gradient: "from-rose-500/15 to-orange-500/15",
    accentColor: "#FB7185",
  },
  {
    name: "Weather App",
    tagline: "Full-stack weather app with geolocation and dynamic UI",
    stack: ["React", "Vite", "OpenWeatherMap"],
    features: ["Geolocation weather", "Dynamic backgrounds", "7-day forecast"],
    github: "https://github.com/Tharanitharan30/Weather-App",
    demo: null,
    gradient: "from-cyan-500/15 to-teal-500/15",
    accentColor: "#2DD4BF",
  },
  {
  name: "Movie Recommendation System",
  tagline: "AI-powered full-stack movie discovery platform with real-time data and personalized recommendations.",
  gradient: "from-violet-500/20 via-purple-500/10 to-indigo-500/20",
  accentColor: "#8B5CF6",
  github: "https://github.com/Tharanitharan30/Movie-Recommendation",
  demo: "https://your-app.vercel.app",  // ← replace with your Vercel URL
  features: [
    "Content-based + collaborative filtering ML recommendation engine",
    "Live trending, search and movie details via TMDB API",
    "JWT authentication with user ratings and watch history",
    "YouTube trailers embedded on movie detail pages",
  ],
  stack: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Django",
    "DRF",
    "scikit-learn",
    "PostgreSQL",
    "TMDB API",
    "Render",
    "Vercel",
  ],
},
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "infosys",
    period: "3 Months",
    description:
      "",
    tags: ["react", "Express.js", "MongoDB"],
  },
  {
    role: "ML Engineer Intern",
    company: "Nativeva",
    period: "Present",
    description:
      "",
    tags: ["Python", "PyTorch", "TensorFlow", "OpenCV"],
  },
];

export const education = [
  {
    institution: "karpagam academy of higher education",
    degree: "B.E. Computer Science and Engineering",
    year: "2024 – 2028",
  },
];
