const projects = [
  {
    name: "Campus",
    eyebrow: "College Super-App",
    featured: true,
    metric: "400+ users · PWA",
    desc: "Full-stack college super-app — anonymous feed, professor ratings, PYQ vault, bunk meter (75% threshold tracking), live global chat via Socket.io. Installable as a PWA.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "PWA"],
    live: "https://campus-three-black.vercel.app/feed",
    github: "https://github.com/Abdullah-ext1/Rate-My-Professor-",
    screenshots: [
      "/screenshots/campus-1.png",
      "/screenshots/campus-2.png",
      "/screenshots/campus-3.png",
    ]
  },
  {
    name: "Bharat Watch",
    eyebrow: "News · Real-time",
    featured: false,
    metric: "150 users · month 1",
    desc: "MERN news aggregator scraping 20+ articles per cronjob (every 30 min). Split Vercel + Render architecture. Zero manual content management.",
    tech: ["React", "Node.js", "MongoDB", "CronJobs", "Vercel", "Render"],
    live: "https://bharat-watch.vercel.app/",
    github: "https://github.com/Abdullah-ext1/BHARAT-WATCH",
    screenshots: [
      "/screenshots/bharatwatch-1.png",
      "/screenshots/bharatwatch-2.png",
      "/screenshots/bharatwatch-3.png",
    ]
  },
  {
    name: "VTube",
    eyebrow: "Video Platform",
    featured: false,
    metric: "sub-5s load time",
    desc: "Full-stack video platform — upload, playback, comments, likes, subscriptions. Optimised Express/MongoDB API. MVC backend with Cloudinary.",
    tech: ["React", "Express", "MongoDB", "Cloudinary", "JWT", "MVC"],
    live: "https://v-tube-lemon.vercel.app/",
    github: "https://github.com/Abdullah-ext1/VTube",
    screenshots: [
      "/screenshots/vtube-1.png",
      "/screenshots/vtube-2.png",
      "/screenshots/vtube-3.png",
    ]
  },
  {
    name: "Two-Ate",
    eyebrow: "Client · E-Commerce",
    featured: false,
    metric: "15+ API endpoints",
    desc: "End-to-end client delivery — cart, JWT auth, order processing, payments in production MVC. React frontend with side-cart drawer and scroll animations.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "MVC", "REST API"],
    live: null,
    github: null,
    screenshots: [
      "/screenshots/twoate-1.png",
      "/screenshots/twoate-2.png",
      "/screenshots/twoate-3.png",
    ]
  },
  {
    name: "Clinicians",
    eyebrow: "AI · Healthcare",
    featured: false,
    metric: "AI-powered · ideathon build",
    desc: "Real-time clinical transcription tool with SOAP note generation, diagnosis and prescription extraction. Built for healthcare workflows — doctors speak, the app writes.",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB", "Express"],
    live: "https://clinicians.vercel.app/",
    github: "https://github.com/Abdullah-ext1/Clinicians",
    screenshots: []
  },
  {
    name: "DataVista",
    eyebrow: "Data · Hackathon",
    featured: false,
    metric: "Built at TechNext 2025",
    desc: "Data pipeline and visualization project built at TechNext Minithon 2025. Transforms raw datasets into interactive visual dashboards.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    live: "https://datavistaminithon.vercel.app/",
    github: "https://github.com/Abdullah-ext1/DataVista",
    screenshots: []
  },
  {
    name: "Weather Web App",
    eyebrow: "Utility · API",
    featured: false,
    metric: "Live weather data",
    desc: "Real-time weather app pulling live data from a weather API. Clean UI showing temperature, conditions, humidity, and forecasts by city.",
    tech: ["React", "Weather API", "CSS"],
    live: null,
    github: "https://github.com/Abdullah-ext1/Weather-Web-App",
    screenshots: []
  },
  {
    name: "Landing Page",
    eyebrow: "Frontend · Client",
    featured: false,
    metric: "Production UI",
    desc: "Pixel-perfect responsive landing page with scroll animations, clean layout, and production-ready frontend code.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: null,
    github: "https://github.com/Abdullah-ext1/Landing-page",
    screenshots: []
  }
]

export default projects