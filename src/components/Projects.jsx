import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "FitBill - Gym Management System",
      description: "A comprehensive cross-platform mobile solution for modern gym businesses that streamlines membership management, attendance tracking, and financial operations. Features automated membership renewal notifications, daily check-in/check-out monitoring, and insightful financial analytics through intuitive dashboards.",
      tech: ["React Native", "Express.js", "Prisma", "PostgreSQL", "AWS Lambda"],
      demoLink: "http://youtube.com/watch?v=Dbkf_2kh1ho",
      githubLink: "",
      highlights: [
        "Automated membership renewal alerts",
        "Daily check-in/check-out tracking",
        "Financial dashboards with analytics",
        "Supports hundreds of daily active users"
      ]
    },
    {
      title: "Student Attendance Tracking System",
      description: "A serverless attendance solution leveraging AWS Lambda and Python for cost-effective, real-time attendance tracking. Uses HTML parsing with BeautifulSoup to extract data from various sources and delivers accurate results to thousands of users daily at zero operational cost.",
      tech: ["AWS Lambda", "Python", "WebSocket", "DynamoDB", "BeautifulSoup"],
      demoLink: "",
      githubLink: "https://github.com/sri-ganeshk/Attendance_tracker",
      highlights: [
        "Handles ~3,000 unique daily users",
        "10,000+ requests/day at zero cost",
        "Avg response time of 1.5-2 seconds",
        "Real-time HTML parsing"
      ]
    },
    {
      title: "StudySphere - Curated Learning Platform",
      description: "An AI-powered educational platform that revolutionizes self-paced learning through intelligent content organization. Automatically generates customized flashcards, comprehensive notes, and interactive quizzes using Google Gemini API for content summarization and knowledge extraction.",
      tech: ["Next.js", "Prisma", "Google Gemini API", "TailwindCSS", "PostgreSQL"],
      demoLink: "https://hackthon-six.vercel.app/",
      githubLink: "",
      highlights: [
        "AI-powered flashcards & notes generation",
        "Dynamic quiz generation",
        "Intelligent content summarization",
        "Self-paced, structured learning paths"
      ]
    },
    {
      title: "Movie Review Platform",
      description: "A modern, fully responsive web application for movie enthusiasts to discover, review, and engage with film content. Integrates with The Movie Database API for real-time movie data and features secure JWT-based authentication for personalized user experiences.",
      tech: ["React", "Node.js", "MongoDB", "TMDB API", "JWT", "Tailwind CSS"],
      demoLink: "https://movie-review-omega-seven.vercel.app/",
      githubLink: "",
      highlights: [
        "Real-time TMDB API integration",
        "Secure JWT authentication",
        "Fully responsive design",
        "User favorites and review system"
      ]
    },
    {
      title: "Pressure Cooker Whistle Counter",
      description: "An innovative offline-first Android app that automates counting pressure cooker whistles during cooking. Uses sophisticated audio processing with FFT and Tarsos DSP library to detect whistles in real-time without storing any audio data, ensuring complete privacy.",
      tech: ["Java", "Kotlin", "FFT", "Tarsos DSP", "Android Audio API"],
      demoLink: "",
      githubLink: "",
      highlights: [
        "Offline operation with no internet required",
        "Privacy-focused with no data storage",
        "Real-time audio frequency analysis",
        "Accurate whistle detection amid background noise"
      ]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">PORTFOLIO</h4>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Project selector - mobile version */}
          <motion.div 
            className="md:hidden w-full mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted">SELECT PROJECT</p>
              <div className="text-xs text-muted">{activeProject + 1}/{projects.length}</div>
            </div>
            <div className="flex overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`snap-start flex-shrink-0 w-[75%] mr-3 p-4 cursor-pointer transition-all duration-300 ${
                    activeProject === index 
                      ? "bg-secondary bg-opacity-50 border border-light border-opacity-20" 
                      : "bg-secondary bg-opacity-10 border border-muted border-opacity-10"
                  }`}
                  onClick={() => setActiveProject(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className={`font-medium text-sm mb-1 ${
                    activeProject === index ? "text-light" : "text-muted"
                  }`}>
                    {project.title.split(" - ")[0]}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1">
                    {project.tech.slice(0, 3).join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project selector - desktop version */}
          <motion.div 
            className="hidden md:block md:col-span-4" 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-l border-muted ${
                  activeProject === index ? "border-opacity-100" : "border-opacity-20"
                } p-4 cursor-pointer transition-all duration-300 ${
                  activeProject === index ? "bg-secondary bg-opacity-30" : ""
                }`}
                onClick={() => setActiveProject(index)}
                whileHover={{
                  backgroundColor: "rgba(26, 26, 26, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className={`font-medium text-sm mb-1 ${
                  activeProject === index ? "text-light" : "text-muted"
                }`}>
                  {project.title.split(" - ")[0]}
                </h3>
                <p className="text-xs text-muted line-clamp-1">
                  {project.tech.slice(0, 3).join(", ")}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project details */}
          <motion.div 
            className="col-span-1 md:col-span-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeProject}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-secondary bg-opacity-20 p-4 md:p-6 border border-muted border-opacity-10"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">{projects[activeProject].title}</h3>
              <p className="text-sm md:text-base text-muted mb-4 md:mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>
              
              <div className="mb-4 md:mb-6">
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">KEY HIGHLIGHTS</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projects[activeProject].highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-light opacity-50 mt-1">→</span>
                      <span className="text-xs md:text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs py-1 px-2 md:px-3 bg-primary border border-muted border-opacity-20 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(projects[activeProject].demoLink || projects[activeProject].githubLink) && (
                <div className="mt-6 md:mt-8 flex flex-wrap gap-3 justify-center md:justify-end">
                  {projects[activeProject].demoLink && (
                    <a 
                      href={projects[activeProject].demoLink}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-mono text-xs inline-flex items-center px-5 py-2 md:px-6 md:py-2 border border-light hover:bg-light hover:bg-opacity-10 transition-all duration-300 group"
                    >
                      VIEW DEMO
                      <svg className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  )}
                  {projects[activeProject].githubLink && (
                    <a 
                      href={projects[activeProject].githubLink}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-mono text-xs inline-flex items-center px-5 py-2 md:px-6 md:py-2 border border-light hover:bg-light hover:bg-opacity-10 transition-all duration-300 group"
                    >
                      VIEW CODE
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;