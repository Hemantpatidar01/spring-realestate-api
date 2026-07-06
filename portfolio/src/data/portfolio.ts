export const personalInfo = {
  name: "Hemant Patidar",
  title: "Java Full Stack Developer",
  typingTitles: [
    "Spring Boot Developer",
    "Backend Engineer",
    "React Developer",
    "Software Engineer",
    "LLM Post-Training Engineer",
    "Full Stack Web Developer",
  ],
  email: "hemant95756092@gmail.com",
  phone: "+91-9575609213",
  location: "Indore, Madhya Pradesh",
  github: "https://github.com/Hemantpatidar01",
  linkedin: "https://linkedin.com/in/hemant-patidar-921193235",
  resumeUrl: "/Hemant_Patidar_Resume.pdf",
  summary:
    "Java Full Stack Developer with hands-on experience architecting secure, role-based web applications using Java, Spring Boot, Spring Security, JWT, React.js, MySQL, and RESTful APIs. Delivered end-to-end features spanning authentication, transaction workflows, and admin systems using MVC architecture and JPA/Hibernate. Complements full-stack engineering with applied AI experience in LLM evaluation and instruction tuning. MCA candidate with strong foundations in Data Structures, Algorithms, OOP, and DBMS, focused on shipping scalable, production-minded software.",
};

export const aboutHighlights = [
  "Java Full Stack Development",
  "Spring Boot & Spring Security",
  "React.js & REST APIs",
  "JWT Authentication & RBAC",
  "Enterprise Application Design",
  "Database Design & Optimization",
  "LLM Evaluation & Instruction Tuning",
  "Continuous Learning & Growth Mindset",
  "Leadership & Team Collaboration",
];

export const skillCategories = [
  {
    title: "Languages",
    icon: "Code2",
    skills: ["Java", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      "Spring Boot",
      "Spring Security",
      "REST API",
      "JWT",
      "JPA/Hibernate",
      "Servlet",
      "JSP",
      "JDBC",
      "MVC Architecture",
    ],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["React.js", "Tailwind CSS", "Responsive Web Design"],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MySQL", "Query Optimization"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "NetBeans", "Postman", "SQLyog"],
  },
  {
    title: "AI / ML",
    icon: "Brain",
    skills: [
      "LLM Evaluation",
      "RLHF",
      "Instruction Tuning",
      "Benchmark Design",
      "Model Alignment",
      "Data Annotation",
    ],
  },
  {
    title: "Computer Science",
    icon: "Cpu",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "DBMS",
      "System Design Fundamentals",
    ],
  },
];

export const experience = [
  {
    company: "Ethara AI",
    role: "LLM Post-Training Intern",
    period: "March 2026 – June 2026",
    type: "AI/ML",
    highlights: [
      "Designed and executed 100+ structured LLM evaluations across 5+ domains using standardized scoring rubrics",
      "Curated and annotated 500+ high-quality instruction-tuning training samples",
      "Identified and documented 50+ recurring failure patterns through systematic root-cause analysis",
      "Applied prompt engineering, failure analysis, and quality assurance workflows",
      "Contributed to benchmark design, model alignment, and training dataset creation",
    ],
    technologies: [
      "LLM Evaluation",
      "Instruction Tuning",
      "Prompt Engineering",
      "Benchmark Design",
      "Model Alignment",
    ],
  },
];

export const projects = [
  {
    id: "real-estate-hub",
    title: "Real Estate Hub",
    subtitle: "Full-Stack Real Estate Marketplace Platform",
    description:
      "A production-grade real estate marketplace supporting customers, property owners, and admins with secure authentication, booking workflows, wallet payments, and negotiation features.",
    image: "/projects/real-estate-hub.svg",
    github: "https://github.com/Hemantpatidar01/spring-realestate-api",
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "Spring Security",
      "JWT",
      "REST API",
      "JPA/Hibernate",
      "Tailwind CSS",
    ],
    features: [
      "Role-based authentication for customer, owner, and admin",
      "JWT-secured REST APIs with Spring Security RBAC",
      "Property booking, wallet payments, and sale inquiries",
      "Negotiation workflows and admin approval system",
      "Responsive React frontend with Tailwind CSS",
      "MySQL persistence via JPA/Hibernate",
    ],
    challenges: [
      "Securing multi-role workflows against unauthorized access",
      "Coordinating complex transaction flows across frontend and backend",
      "Ensuring API reliability before frontend integration",
    ],
    solutions: [
      "Implemented JWT-based authentication with role-based access control",
      "Built modular REST APIs tested in Postman before integration",
      "Designed responsive UI with clear role-specific dashboards",
    ],
    impact:
      "Delivered a complete marketplace platform demonstrating enterprise-grade full-stack architecture, secure authentication, and end-to-end property transaction workflows.",
    architecture: [
      "React.js SPA",
      "Spring Boot REST API",
      "Spring Security + JWT",
      "JPA/Hibernate ORM",
      "MySQL Database",
    ],
  },
  {
    id: "tata-gearhub",
    title: "TATA GearHub",
    subtitle: "Online Car Showroom Web Application",
    description:
      "A full-stack car showroom platform enabling real-time online booking with authenticated login workflows and structured session handling on MVC architecture.",
    image: "/projects/tata-gearhub.svg",
    github: "https://github.com/Hemantpatidar01",
    technologies: [
      "Java",
      "JSP",
      "Servlet",
      "JDBC",
      "MySQL",
      "HTML",
      "CSS",
      "MVC Architecture",
    ],
    features: [
      "Java Servlets and JSP views on MVC architecture",
      "JDBC-backed MySQL persistence layer",
      "Authenticated login and session management",
      "Real-time online car booking workflow",
      "Responsive web design",
    ],
    challenges: [
      "Building secure session handling without modern frameworks",
      "Managing booking state across servlet-based architecture",
    ],
    solutions: [
      "Implemented structured authentication and session workflows",
      "Applied MVC separation for maintainable servlet/JSP code",
    ],
    impact:
      "Strengthened application security and reliability while delivering a complete car showroom booking experience.",
    architecture: [
      "JSP Views",
      "Java Servlets",
      "MVC Controller Layer",
      "JDBC Data Access",
      "MySQL Database",
    ],
  },
];

export const achievements = [
  { value: 100, suffix: "+", label: "LLM Evaluations" },
  { value: 500, suffix: "+", label: "Training Samples" },
  { value: 50, suffix: "+", label: "Failure Patterns Identified" },
  { value: 2, suffix: "", label: "Production-Level Projects" },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "DAVV – School of Computer Science & IT, Indore",
    period: "2024 – 2026",
    cgpa: "7.0",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "DAVV – School of Computer Science & IT, Indore",
    period: "2021 – 2024",
    cgpa: "7.0",
  },
];

export const leadership = [
  {
    role: "Vice President",
    organization: "DAVV University (ABVP)",
    period: "2022 – 2024",
    description:
      "Represented the student community and coordinated with university administration, demonstrating leadership, communication, and organizational skills.",
  },
  {
    role: "Head Coordinator",
    organization: "College Annual Cultural Fest",
    period: "Annual Event",
    description:
      "Led end-to-end planning and logistics for a large-scale, multi-volunteer campus event, showcasing teamwork and event management capabilities.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];
