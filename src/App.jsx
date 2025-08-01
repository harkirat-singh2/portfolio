import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  FolderOpen
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'HTML', level: 90, icon: Code },
    { name: 'CSS', level: 85, icon: Code },
    { name: 'JavaScript', level: 88, icon: Code },
    { name: 'React', level: 85, icon: Code },
    { name: 'Node.js', level: 80, icon: Server },
    { name: 'Express', level: 78, icon: Server },
    { name: 'MongoDB', level: 75, icon: Database },
  ];

  const projects = [
    {
      title: 'Cyvoria Cybersecurity Landing Page',
      description: 'Professional landing page for cybersecurity company featuring modern design, responsive layout, and optimized user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      link: '#',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Full Stack Web Application',
      description: 'Complete web application built with MERN stack featuring user authentication, database integration, and modern UI.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: '#',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen bg-gradient-mesh">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-800/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Harkirat Singh
            </div>
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="min-h-screen flex items-center justify-center relative bg-gradient-radial"
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
              Full Stack Developer & Third Year Student
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Passionate about creating modern web applications with cutting-edge technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-glow hover:shadow-glow-purple"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-colors hover:text-blue-400 glass hover:shadow-glow"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <a href="https://github.com/harkirat-singh2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                <Github className="h-7 w-7" />
              </a>
              <a href="https://www.linkedin.com/in/harkirat-singh-83862a27a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="mailto:harkirat.email@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
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
        transition={{ duration: 0.8, ease: 'easeOut' }}
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
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-glow">Hello! I'm Harkirat Singh</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate third-year student specializing in full-stack web development. 
                I love creating digital experiences that combine beautiful design with robust functionality.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My journey in web development started with curiosity about how websites work, 
                and it has evolved into a deep passion for creating modern, scalable applications 
                using the latest technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <a href="https://www.google.com/maps/place/Pune,+Maharashtra,+India" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Pune, India</a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Code className="h-4 w-4 text-blue-400" />
                  <span>Third Year Student</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="https://github.com/harkirat-singh2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/harkirat-singh-83862a27a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:harkirat.email@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto relative overflow-hidden shadow-glow float">
                <img 
                  src={`${import.meta.env.VITE_BASE_URL}harkirat-portrait.jpg`} 
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
        transition={{ duration: 0.8, ease: 'easeOut' }}
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
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <skill.icon className="h-5 w-5 text-blue-400" />
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-blue-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
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
                  <Globe className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              <div className="glass rounded-lg p-8 shadow-xl max-w-2xl mx-auto border-gradient">
                <h3 className="text-2xl font-bold mb-2 text-blue-400">Freelance Web Developer</h3>
                <h4 className="text-xl font-semibold mb-4 text-purple-400">Cyvoria Cybersecurity</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Developed and delivered a professional landing page for a cybersecurity company. 
                  Collaborated directly with the client to understand their vision and implemented 
                  a modern, responsive design that effectively communicates their services and expertise.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">
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
        transition={{ duration: 0.8, ease: 'easeOut' }}
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
            className="grid md:grid-cols-2 gap-8 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18
                }
              }
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 30 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="glass rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 hover:shadow-glow"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-600/30 text-purple-300 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
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
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to say hello, 
                I'd love to hear from you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <a href="mailto:harkirat.email@gmail.com" className="flex items-center gap-4 group">
                    <span className="bg-blue-600 p-3 rounded-full group-hover:bg-blue-700 transition-colors">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <p className="font-semibold">Email</p>
                      <span className="text-gray-300 group-hover:text-blue-400 transition-colors">harkirat.email@gmail.com</span>
                    </span>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <a href="tel:+919453675860" className="flex items-center gap-4 group">
                    <span className="bg-purple-600 p-3 rounded-full group-hover:bg-purple-700 transition-colors">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <p className="font-semibold">Phone</p>
                      <span className="text-gray-300 group-hover:text-blue-400 transition-colors">+91 9453675860</span>
                    </span>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <a href="https://www.google.com/maps/place/Pune,+Maharashtra,+India" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <span className="bg-green-600 p-3 rounded-full group-hover:bg-green-700 transition-colors">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span>
                      <p className="font-semibold">Location</p>
                      <span className="text-gray-300 group-hover:text-blue-400 transition-colors">Pune, India</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="glass rounded-lg p-8 border-gradient">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-glow hover:shadow-glow-purple"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="glass border-t border-gray-700/50 py-8"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/harkirat-singh2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/harkirat-singh-83862a27a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:harkirat.email@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
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