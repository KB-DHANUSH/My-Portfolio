export const myProjects = [
  {
    id: 1,
    title: "ChefMate – AI Cooking Assistant",
    description:
      "Voice-guided cooking assistant that plans recipes from your ingredients and walks you through steps with agent-based AI.",
    subDescription: [
      "Planner agent matches your ingredients & preferences to the best recipe and suggests swaps.",
      "Action agent gives step-by-step instructions, timers, and follows your confirmations.",
      "Built with Streamlit UI, Langchain , langGraph , and gemini LLM; uses a small recipe DB for quick demos.",
    ],
    href: "", 
    logo: "",
    image: "/assets/projects/chefmate.jpg", 
    tags: [
      { id: 1, name: "Streamlit", path: "/assets/logos/streamlit.svg" },
      { id: 2, name: "LangChain", path: "/assets/logos/langchain.svg" },
      { id: 2, name: "LangGraph", path: "/assets/logos/langchain.svg" }
    ],
  },
  {
    id: 2,
    title: "InkGrade-Automated Answer Sheet Evaluation System",
    description:
      "Evaluates handwritten answer sheets by converting images to text and comparing responses using a Siamese neural network.",
    subDescription: [
      "Used OCR for text extraction and pre-processing from scanned handwritten sheets.",
      "Implemented a Siamese neural network to compare extracted answers with a standard evaluation sheet.",
      "Achieved high accuracy in automated scoring, reducing manual effort significantly.",
    ],
    href: "https://github.com/KB-DHANUSH/InkGrader",
    logo: "",
    image: "/assets/projects/answer-eval.jpg", // Replace with actual image path
    tags: [
      { id: 1, name: "OCR", path: "/assets/logos/ocr.svg" },
      { id: 2, name: "Siamese Network", path: "/assets/logos/siamese.svg" },
      { id: 3, name: "Python", path: "/assets/logos/python.svg" },
      { id: 4, name: "Machine Learning", path: "/assets/logos/ml.svg" },
    ],
  },
  {
    id: 4,
    title: "Real-Time Driver Drowsiness Detection System",
    description:
      "YOLOv11 and OpenCV-based system for detecting driver drowsiness and distractions using live webcam input.",
    subDescription: [
      "Tracked eye closure duration and facial cues to detect fatigue.",
      "Used YOLOv11 for facial and behavioral detection from webcam feeds.",
      "Implemented alerts using Pygame for real-time audio-visual warnings.",
      "Designed for low-latency processing and future integration in vehicle safety systems.",
    ],
    href: "https://github.com/KB-DHANUSH/drowsyness-detection-using-yolo",
    logo: "",
    image: "/assets/projects/drowsiness-detection.jpg", // Replace with actual image path
    tags: [
      { id: 1, name: "YOLOv11", path: "/assets/logos/yolo.svg" },
      { id: 2, name: "OpenCV", path: "/assets/logos/opencv.svg" },
      { id: 3, name: "Python", path: "/assets/logos/python.svg" },
      { id: 4, name: "Pygame", path: "/assets/logos/pygame.svg" },
    ],
  },
  {
    id: 5,
    title: "SmartLeadGen - AI Powered Lead Generation",
    description:
      "An AI-powered lead generation tool that combines Gemini LLM and FireCrawl API in a clean Streamlit interface.",
    subDescription: [
      "Generates business leads based on any topic or industry using Google's Gemini LLM (via LangChain).",
      "Enriches business data with contact info such as emails, phones, and socials using FireCrawl API.",
      "Interactive Streamlit-powered UI with direct CSV export for results.",
    ],
    href: "https://github.com/KB-DHANUSH/SmartLeadGen",
    logo: "",
    image: "/assets/projects/smartleadgen.jpg", // Replace with actual image path
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Streamlit", path: "/assets/logos/streamlit.svg" },
      { id: 3, name: "LangChain", path: "/assets/logos/langchain.svg" },
      { id: 4, name: "Gemini", path: "/assets/logos/gemini.svg" },
      { id: 5, name: "FireCrawl", path: "/assets/logos/firecrawl.svg" },
    ],
  },
  {
    id: 3,
    title: "Real-Time Iris Analysis and Disease Detection",
    description:
      "Live iris scanning system that analyzes eye patterns to detect potential diseases using real-time video feeds.",
    subDescription: [
      "Captured and processed iris data using real-time video input.",
      "Applied image processing and machine learning for disease pattern detection.",
      "Aimed to serve as a diagnostic tool for early detection of eye-related diseases.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/iris-analysis.jpg", // Replace with actual image path
    tags: [
      { id: 1, name: "OpenCV", path: "/assets/logos/opencv.svg" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      { id: 3, name: "Machine Learning", path: "/assets/logos/ml.svg" },
    ],
  }
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/k-b-dhanush-9a1627258",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/KB-DHANUSH",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/teen_505_/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const education = [
  {
    title: "",
    job: "",
    date: "2022 - 2026",
    contents: [
      "RV Institute of Technology and Management",
      "Bachelor of Engineering in Information Science Engineering"
    ],
  },
  {
    title: "",
    job: "",
    date: "2020 - 2022",
    contents: [
      "High School (PUC - Science)",
      "Sri Chaitanya PU College",
      "Percentage : 93.4%"

    ],
  },
];
export const experience = [
  {
    title: "AYTASENSE TECHNOLOGIES PRIVATE LIMITED",
    job: "Research Intern",
    date: "Aug 2024 – Feb 2025",
    contents: [
      "Worked on the Detection of Iris-Pupil Ratio project to analyze eye metrics.",
      "Collaborated with a team to track and monitor task progress across 20 groups.",
      "Developed and implemented algorithms for accurate detection and measurement.",
    ],
  },
   {
    title: "IEEE Student Branch RVITM",
    job: "Treasurer",
    date: "Nov 2024 – Present",
    contents: [
      "Managed branch funds and prepared monthly financial reports.",
      "Organized events and coordinated with team members for smooth operations.",
      "Assisted in budget planning for workshops and competitions.",
    ],
  },
  {
    title: "ALT Stratus Club",
    job: "Student Instructor",
    date: "Feb 2024 – Present",
    contents: [
      "Conducted training sessions for junior students on DSA with Java and software development.",
      "Prepared course materials covering ML/DL concepts and related theoretical foundations.",
      "Mentored students in coding challenges, projects, and practical applications of AI/ML."
    ],
  },
  {
    title: "National Hackathons",
    job: "Organizer",
    date: "2024 – 2025",
    contents: [
    "Conducted 3 national-level hackathons: FantomCode 2024, FantomCode 2025, and PhenixHacks.",
    "Served as Technical Lead, overseeing all technical aspects of the events.",
    "Handled budgeting and led volunteer coordination for smooth execution.",
    ],
  },
  {
    title: "Toyota Hackathon",
    job: "Mentor",
    date: "Jan 2025 – Feb 2025",
    contents: [
      "Guided student teams through project development and real-time debugging.",
      "Provided mentorship on AI, model integration, and team coordination.",
      "Evaluated code and supported innovative solutions during the hackathon."
    ],
  },
  {
    title: "Institute Innovation Cell",
    job: "Member",
    date: "2024 – Present",
    contents: [
      "Participated in workshops and innovation programs organized by the cell.",
      "Collaborated on innovative projects and startup ideas.",
      "Contributed to community outreach and student engagement initiatives.",
    ],
  },
  {
    title: "Rubik’s Cube Club",
    job: "Lead Volunteer",
    date: "Mar 2023 – Dec 2024",
    contents: [
      "Organized weekly puzzle-solving sessions for club members.",
      "Coordinated with other volunteers for club events and competitions.",
      "Helped new members improve their solving speed and techniques.",
    ],
  },
];

export const blogs = [
  {
    id: 1,
    title: "Brain Rot: The Silent Epidemic",
    description: "A personal wake-up call about the hidden cost of endless scrolling.",
    date: "Jun 18, 2025",
    link: "https://medium.com/the-writing-table/brain-rot-the-silent-epidemic-9ec75157e6ab",
  },
  {
    id: 2,
    title: "Do We Really Love Chips… or Just the Seasoning?",
    description:
      "A fun reflection on how sometimes it’s not the thing we truly love, but the ‘seasoning’ around it — from chips to jobs, relationships, and life itself.",
    date: "May 28, 2025",
    link: "https://medium.com/@kbdhanush1528/do-we-really-love-chips-or-just-the-seasoning-540cd61cd800",
  },
  {
    id: 3,
    title: "Two Years in H&M and I Never Knew",
    description: "How a clothing label taught me that value exists long before we notice it.",
    date: "Jun 1, 2025",
    link: "https://medium.com/@kbdhanush1528/two-years-in-h-m-and-i-never-knew-97b5c5eb6636",
  },
  {
    id: 4,
    title: "The Day I Went to the Movies All Alone",
    description: "What happens when you finally take that leap into doing things alone.",
    date: "Jun 10, 2025",
    link: "https://medium.com/@kbdhanush1528/the-day-i-went-to-the-movies-all-alone-7b4e10845fdf",
  },
  {
    id: 5,
    title: "Controlling the Masses Part I",
    description: "",
    date: "",
    link: "",
  },
];

