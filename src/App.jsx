import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Server,
  Globe,
  ChevronDown,
  ExternalLink,
  User,
  Briefcase,
  FolderOpen,
} from "lucide-react";

import { Download } from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    // Calculate and update scroll progress percentage
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    setScrollProgress(progress);

    // Existing code: Determine the currently active section
    const sections = [
      "hero",
      "about",
      "skills",
      "experience",
      "projects",
      "contact",
    ];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  // Attach scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Cleanup event listener on component unmount
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
window.scrollTo({
  top: element.offsetTop - 70,
  behavior: "smooth",
});    }
  };

  const skillCategories = [
  {
    icon: "🚀",
    title: "Backend",
    skills: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "JWT",
      "SQLAlchemy",
      "Pydantic",
    ],
  },
  {
    icon: "🤖",
    title: "AI / Generative AI",
    skills: [
      "LangChain",
      "RAG",
      "LlamaIndex",
      "OpenAI",
      "Gemini",
      "Hugging Face",
      "Groq",
      "Ollama",
    ],
  },
  {
    icon: "🗄",
    title: "Databases",
    skills: [
      "MySQL",
      "SQLite",
      "MariaDB",
      "ChromaDB",
      "FAISS",
      "Pinecone",
    ],
  },
  {
    icon: "⚙",
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Uvicorn",
    ],
  },
  {
    icon: "💻",
    title: "Languages",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "SQL",
    ],
  },
];

const projects = [
  {
    title: "SEO Audit Platform",
    category: "Backend + Generative AI",
    github: "https://github.com/harkirat-singh2/SEO-audit-platform",

    description:
      "AI-powered SEO auditing platform that crawls websites, performs technical and on-page SEO analysis, generates AI recommendations, and exports PDF & Excel reports.",

    highlights: [
      "AI Recommendation Engine",
      "Technical SEO Analysis",
      "Async Website Crawler",
      "PDF & Excel Reports",
    ],

    technologies: [
      "FastAPI",
      "Python",
      "AsyncIO",
      "BeautifulSoup",
      "Gemini",
      "SQLAlchemy",
      "SQLite",
    ],

image: `${import.meta.env.BASE_URL}images/seo-audit.png`,  },

  {
    title: "MedIntel AI CRM",

    category: "Healthcare AI",

    github: "https://github.com/harkirat-singh2/medintel-ai-crm",

    description:
      "AI-powered healthcare CRM integrating LLM capabilities to streamline workflows, automate responses, and improve productivity.",

    highlights: [
      "LLM Integration",
      "Healthcare CRM",
      "Prompt Engineering",
      "FastAPI Backend",
    ],

    technologies: [
      "Python",
      "FastAPI",
      "OpenAI",
      "MySQL",
      "Docker",
    ],

image: `${import.meta.env.BASE_URL}images/medintel.png`,  },

  {
    title: "Multi-Agent Research",

    category: "AI Systems",

    github: "https://github.com/harkirat-singh2/multi-agent-research",

    description:
      "Multi-agent orchestration platform using LangChain that routes user requests to specialized AI agents for intelligent task execution.",

    highlights: [
      "Planner Agent",
      "Memory",
      "Tool Routing",
      "RAG",
    ],

    technologies: [
      "LangChain",
      "FastAPI",
      "Python",
      "OpenAI",
      "Docker",
    ],

image: `${import.meta.env.BASE_URL}images/multi-agent.png`,  },

  {
    title: "RAG Document Assistant",

    category: "Generative AI",

    github: "https://github.com/harkirat-singh2/rag-system",

    description:
      "Retrieval-Augmented Generation application enabling users to upload PDFs and ask contextual questions using vector search and LLMs.",

    highlights: [
      "PDF Chat",
      "Vector Search",
      "ChromaDB",
      "Semantic Search",
    ],

    technologies: [
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Python",
      "HuggingFace",
    ],

image: `${import.meta.env.BASE_URL}images/rag-system.png`,  },
];

  return (
    <div className="bg-black text-white min-h-screen bg-gradient-mesh">
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[9999]">

  <div

    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-150"

    style={{ width: `${scrollProgress}%` }}

  />

</div>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-800/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Harkirat Singh
            </div>
            <div className="hidden md:flex space-x-8">
              {[
  "about",
  "skills",
  "experience",
  "projects",
  "certifications",
  "contact",
].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize hover:text-blue-400 transition-colors ${
                      activeSection === section
                        ? "text-blue-400"
                        : "text-gray-300"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
transition={{
  duration: 0.55,
  ease: "easeOut",
}}        className="min-h-screen pt-20 flex items-center justify-center relative bg-gradient-radial"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-black"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-glow">
                Harkirat Singh
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
  Backend Engineer • Python Developer • GenAI Enthusiast
</p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
  I design and build scalable backend systems, AI-powered applications,
and production-ready APIs using Python, FastAPI, LangChain,
Retrieval-Augmented Generation (RAG), Docker, and modern LLMs.
</p><div className="flex flex-wrap justify-center gap-3 mb-12">
  {[
    "Python",
  "FastAPI",
  "AsyncIO",
  "BeautifulSoup",
  "Gemini",
  "REST APIs",
  "JWT",
  "SQLAlchemy",
  "MySQL",
  "Docker",
  "Git",
  ].map((tech) => (
    <span
      key={tech}
      className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm"
    >
      {tech}
    </span>
  ))}
</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 duration-200 shadow-glow hover:shadow-glow-purple"
              >
View Projects
              </button>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">



  <a
    href={`${import.meta.env.BASE_URL}resume.pdf`}
    download="Harkirat_Backend_Resume.pdf"
    className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all text-center"
  >
    💻 Backend Resume
  </a>

  <a
    href={`${import.meta.env.BASE_URL}genai_resume.pdf`}
    download="Harkirat_GenAI_Resume.pdf"
    className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all text-center"
  >
    🤖 GenAI Resume
  </a>

</div>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://github.com/harkirat-singh2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/harkiratsingh11/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a
                href="mailto:harkirat.email@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
              >
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce float">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <User className="h-8 w-8 text-blue-400 text-glow" />
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto shadow-glow"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
             <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-glow">
  Hello! I'm Harkirat Singh
</h3>

<p className="text-gray-300 leading-relaxed mb-6">
  I'm a Computer Engineering student with a strong interest in Backend
  Development, Generative AI, and scalable software engineering. I enjoy
  building secure REST APIs, designing efficient backend systems, and
  developing AI-powered applications that solve real-world problems.
</p>

<p className="text-gray-300 leading-relaxed mb-6">
  During my internship as a Backend Developer, I worked on FastAPI,
  SQLAlchemy, JWT Authentication, database integration, and AI-based
  applications using LangChain and Retrieval-Augmented Generation (RAG).
  I'm continuously improving my skills in Data Structures & Algorithms,
  Docker, cloud technologies, and modern backend architecture.
</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <a
                    href="https://www.google.com/maps/place/Pune,+Maharashtra,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Pune, India
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Code className="h-4 w-4 text-blue-400" />
<span>Backend Engineer • GenAI Enthusiast</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://github.com/harkirat-singh2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/harkiratsingh11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:harkirat.email@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto relative overflow-hidden shadow-glow float">
                <img
                  src="./profile.jpg"
                  alt="Harkirat Singh - Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-4 sm:px-6 lg:px-8 glass"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Code className="h-8 w-8 text-blue-400 text-glow" />
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto shadow-glow"></div>
          </div>
<div className="max-w-5xl mx-auto space-y-8">
  {skillCategories.map((category) => (
    <div
      key={category.title}
      className="
        glass
        rounded-2xl
        border
        border-gray-700
        p-8
        hover:border-blue-500
        hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
        transition-all
        duration-300
      "
    >
      <h3 className="text-2xl font-semibold text-blue-400 mb-6">
        <span className="mr-3">{category.icon}</span>
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-4">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="
              px-5
              py-2
              rounded-full
              bg-blue-500/10
              border
              border-blue-500/30
              text-gray-200
              hover:bg-blue-500
              hover:text-white
              hover:scale-105
              duration-200
              transition-all
              duration-300
              cursor-default
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-radial"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Briefcase className="h-8 w-8 text-blue-400 text-glow" />
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto shadow-glow"></div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-400 to-purple-600 shadow-glow"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="glass border-4 border-blue-400 rounded-full p-6 shadow-glow pulse-glow">
                  <Server className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              <div className="
glass
rounded-2xl
p-10
shadow-xl
max-w-4xl
mx-auto
border
border-gray-700
hover:border-blue-500
transition-all
duration-500
hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
">
<h3 className="text-2xl font-bold mb-2 text-blue-400">
   Backend Developer Intern
</h3>

<h4 className="text-xl font-semibold mb-2 text-purple-400">
  HCL Technologies
</h4>

<div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
  <span>📅 June 2026 – Present</span>
  <span>📍 Pune, India</span>
</div>
<div className="space-y-4 text-gray-300 leading-relaxed mb-8">

  <p>
    • Contributing to the development of an <span className="text-blue-400 font-medium">AI-powered SEO Audit Platform</span> capable of performing technical and on-page SEO analysis at scale.
  </p>

  <p>
    • Engineered scalable backend services using <span className="text-blue-400 font-medium">Python</span> and <span className="text-blue-400 font-medium">FastAPI</span>, following modular architecture and clean coding practices.
  </p>

  <p>
    • Developed asynchronous website crawling and content extraction modules using <span className="text-blue-400 font-medium">AsyncIO</span> and <span className="text-blue-400 font-medium">BeautifulSoup</span>.
  </p>

  <p>
    • Integrated <span className="text-blue-400 font-medium">Gemini AI</span> to generate SEO scores, optimization suggestions, and automated content recommendations.
  </p>

  <p>
    • Designed secure REST APIs, implemented JWT Authentication, and automated PDF & Excel report generation for enterprise SEO audits.
  </p>

</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
  "FastAPI",
  "SQLAlchemy",
  "JWT",
  "REST APIs",
  "LangChain",
  "MySQL",
  "SQLite",
  "Git",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-4 sm:px-6 lg:px-8 glass"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <FolderOpen className="h-8 w-8 text-blue-400 text-glow" />
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto shadow-glow"></div>
          </div>
          <motion.div
            className="grid lg:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 30 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
transition={{
  duration: 0.35,
}}                className="
glass
rounded-2xl
overflow-hidden
border
border-gray-700
hover:border-blue-500
transition-all
duration-300
hover:-translate-y-2
hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
"
              >
                <div className="relative overflow-hidden">
<div className="relative overflow-hidden">

  <img
    src={project.image}
    alt={project.title}
    className="
      w-full
      h-56
      object-cover
      transition-transform
      duration-500
      hover:scale-110
    "
  />

  {/* Category Badge */}
  <div className="absolute top-4 left-4">
    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold">
      {project.category}
    </span>
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

</div>
                </div>
                <div className="p-8 flex flex-col h-full">
                  
                  <h3 className="text-xl font-bold mb-3 text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-5 space-y-2">
  {project.highlights.map((item) => (
    <div
      key={item}
      className="flex items-center gap-2 text-sm text-gray-300"
    >
      <span className="text-green-400">✔</span>

      <span>{item}</span>
    </div>
  ))}
</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
px-3
py-1.5
rounded-full
bg-blue-500/10
border
border-blue-500/30
text-blue-300
text-xs
hover:bg-blue-500
hover:text-white
transition-all
duration-300
"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>GitHub Repository</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      <motion.section
  id="certifications"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="py-20 px-4 sm:px-6 lg:px-8"
>
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        AWS Certifications
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Foundations of Prompt Engineering",
          issuer: "AWS Training & Certification",
          date: "July 2026",
        },

        {
          title: "Fundamentals of Machine Learning & AI",
          issuer: "AWS Training & Certification",
          date: "July 2026",
        },

        {
          title: "Amazon Connect Routing Fundamentals",
          issuer: "AWS Training & Certification",
          date: "July 2026",
        },

      ].map((cert) => (

        <div
          key={cert.title}
          className="glass rounded-2xl border border-gray-700 p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
        >

          <div className="text-5xl mb-5">
            🏆
          </div>

          <h3 className="text-xl font-bold text-blue-400 mb-4">
            {cert.title}
          </h3>

          <p className="text-gray-300 mb-2">
            {cert.issuer}
          </p>

          <p className="text-sm text-gray-500">
            Completed {cert.date}
          </p>

        </div>

      ))}

    </div>

  </div>
</motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-radial"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Mail className="h-8 w-8 text-blue-400 text-glow" />
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto shadow-glow"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind or just want to say hello,
                I'd love to hear from you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:harkirat.email@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <span className="bg-blue-600 p-3 rounded-full group-hover:bg-blue-700 transition-colors">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <p className="font-semibold">Email</p>
                      <span className="text-gray-300 group-hover:text-blue-400 transition-colors">
                        harkirat.email@gmail.com
                      </span>
                    </span>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="tel:+919453675860"
                    className="flex items-center gap-4 group"
                  >
                    <span className="bg-purple-600 p-3 rounded-full group-hover:bg-purple-700 transition-colors">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <p className="font-semibold">Phone</p>
                      <span className="text-gray-300 group-hover:text-blue-400 transition-colors">
                        +91 9453675860
                      </span>
                    </span>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.google.com/maps/place/Pune,+Maharashtra,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <span className="bg-green-600 p-3 rounded-full group-hover:bg-green-700 transition-colors">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span>
                      <p className="font-semibold">Location</p>
                      <span className="text-gray-300 group-hover:text-blue-400 transition-colors">
                        Pune, India
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
<div className="glass rounded-2xl border border-gray-700 p-8 hover:border-blue-500 transition-all duration-300">

  <h3 className="text-2xl font-bold text-blue-400 mb-8">
    Open to Opportunities
  </h3>

  <div className="space-y-6">

    <div>
      <p className="text-gray-400 text-sm">
        CURRENT STATUS
      </p>

      <p className="text-green-400 font-semibold">
        🟢 Backend Engineer Intern @ HCL Technologies
      </p>
    </div>

    <div>
      <p className="text-gray-400 text-sm">
        LOOKING FOR
      </p>

      <p className="text-white">
        Backend Engineer
      </p>

      <p className="text-white">
        Generative AI Engineer
      </p>
    </div>

    <div>
      <p className="text-gray-400 text-sm">
        LOCATION
      </p>

      <p>Pune, Maharashtra, India</p>
    </div>

    <div>
      <p className="text-gray-400 text-sm">
        EMAIL
      </p>

      <p>
        harkirat.email@gmail.com
      </p>
    </div>

    <div>
      <p className="text-gray-400 text-sm">
        AVAILABILITY
      </p>

      <p className="text-green-400">
        Available for Full-Time Opportunities
      </p>
<div className="mt-10">

  <h4 className="text-lg font-semibold text-blue-400 mb-5">
    Resume Downloads
  </h4>

  <div className="space-y-4">

    <a
      href={`${import.meta.env.BASE_URL}resume.pdf`}
      download="Harkirat_Backend_Resume.pdf"
      className="
        flex
        items-center
        justify-between
        px-5
        py-4
        rounded-xl
        border
        border-blue-500/30
        hover:border-blue-500
        hover:bg-blue-500/10
        transition-all
        duration-300
      "
    >
      <div>
        <p className="font-semibold text-white">
          💻 Backend Engineer Resume
        </p>

        <p className="text-sm text-gray-400">
          Python • FastAPI • REST APIs • System Design
        </p>
      </div>

     <Download className="w-5 h-5 text-blue-400" />

    </a>

    <a
      href={`${import.meta.env.BASE_URL}genai_resume.pdf`}
      download="Harkirat_Generative_AI_Resume.pdf"
      className="
        flex
        items-center
        justify-between
        px-5
        py-4
        rounded-xl
        border
        border-purple-500/30
        hover:border-purple-500
        hover:bg-purple-500/10
        transition-all
        duration-300
      "
    >
      <div>
        <p className="font-semibold text-white">
          🤖 Generative AI Resume
        </p>

        <p className="text-sm text-gray-400">
          LangChain • RAG • Multi-Agent • LLMs
        </p>
      </div>

      <Download className="w-5 h-5 text-blue-400" />

    </a>

  </div>

</div>
<div className="mt-10">

<h4 className="text-lg font-semibold text-blue-400 mb-4">

Currently Building

</h4>

<div className="space-y-2">

<p>🚀 AI-powered SEO Audit Platform</p>

<p>🤖 Multi-Agent AI Systems</p>

<p>📄 Retrieval-Augmented Generation (RAG)</p>

</div>

</div>
    </div>

  </div>

</div>
          </div>
        </div>
      </motion.section>

   {/* Footer */}
<motion.footer
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
  className="glass border-t border-gray-700/50 py-8"
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      
      {/* Professional Signature */}
      <div className="text-center md:text-left">
        <p className="text-sm text-gray-400">
          Designed & Built by <span className="text-blue-400 font-medium">Harkirat Singh</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Backend Engineer • FastAPI • Python • Generative AI
        </p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6">
        <a
          href="https://github.com/harkirat-singh2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/harkiratsingh11/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:harkirat.email@gmail.com"
          className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

    </div>
  </div>
</motion.footer>

    </div>
  );
}

export default App;
