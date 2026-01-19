import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "InventoTrack – Inventory Management System",
      description:
        "A full-stack inventory management system designed to track products, manage stock levels, and streamline inventory operations for small to medium businesses.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "/images/inventotrack.png",
      liveLink: "https://github.com/9346mukesh/inventotrack",
      highlights: [
        "Centralized product and stock tracking",
        "Real-time inventory updates",
        "CRUD operations for inventory items",
        "Scalable backend architecture"
      ]
    },
    {
      title: "Phishing URL Detection System",
      description:
        "A machine learning-based cybersecurity application that detects phishing URLs by extracting features and classifying them using supervised learning models.",
      tech: ["Python", "Flask", "Machine Learning", "Scikit-learn"],
      image: "/images/phishing.png",
      liveLink: "https://github.com/9346mukesh/phishing_app",
      highlights: [
        "Automated phishing URL classification",
        "URL feature extraction pipeline",
        "Real-time predictions using Flask",
        "Practical cybersecurity use case"
      ]
    },
    {
      title: "ResolveX – Issue & Complaint Management System",
      description:
        "A web-based issue and complaint management platform that enables users to raise, track, and resolve issues through a structured workflow.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "/images/resolvex.png",
      liveLink: "https://github.com/9346mukesh/ResolveX",
      highlights: [
        "Structured issue tracking workflow",
        "Role-based complaint handling",
        "Status updates and resolution logs",
        "Designed for organizational use cases"
      ]
    },
    {
      title: "Awesome Chocolate Power BI Dashboard",
      description:
        "An interactive Power BI dashboard that analyzes chocolate sales data to uncover revenue trends, performance metrics, and business insights.",
      tech: ["Power BI", "DAX", "Data Visualization", "Business Intelligence"],
      image: "/images/powerbi.png",
      liveLink:
        "https://github.com/9346mukesh/Awesome-Chocolate-Power-BI-Dashboard",
      highlights: [
        "Interactive and dynamic dashboards",
        "Sales and revenue trend analysis",
        "KPI-based business reporting",
        "Professional BI visual design"
      ]
    },
    {
      title: "Task Manager Application",
      description:
        "A task management web application that helps users organize, track, and manage daily tasks with a clean and intuitive interface.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      image: "/images/taskmanager.png",
      liveLink: "https://github.com/9346mukesh/Task_Manager",
      highlights: [
        "Task creation and completion tracking",
        "Clean and minimal UI design",
        "State management using React hooks",
        "Improves personal productivity"
      ]
    },
    {
      title: "Zomato Bangalore Restaurant Analysis",
      description:
        "A data analytics project analyzing Zomato Bangalore restaurant data to identify trends in ratings, pricing, cuisines, and customer preferences.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      image: "/images/zomato.png",
      liveLink: "https://github.com/9346mukesh/zomato-bangalore-analysis",
      highlights: [
        "Exploratory Data Analysis (EDA)",
        "Data cleaning and preprocessing",
        "Visualization of restaurant trends",
        "Real-world dataset analysis"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Mobile Selector */}
          <motion.div
            className="md:hidden w-full mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted">SELECT PROJECT</p>
              <div className="text-xs text-muted">
                {activeProject + 1}/{projects.length}
              </div>
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
                >
                  <h3 className="font-medium text-sm mb-1">
                    {project.title.split(" – ")[0]}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1">
                    {project.tech.slice(0, 3).join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Desktop Selector */}
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
                className={`border-l border-muted p-4 cursor-pointer ${
                  activeProject === index
                    ? "border-opacity-100 bg-secondary bg-opacity-30"
                    : "border-opacity-20"
                }`}
                onClick={() => setActiveProject(index)}
              >
                <h3 className="font-medium text-sm mb-1">
                  {project.title.split(" – ")[0]}
                </h3>
                <p className="text-xs text-muted line-clamp-1">
                  {project.tech.slice(0, 3).join(", ")}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Details */}
          <motion.div
            className="col-span-1 md:col-span-8"
            key={activeProject}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-secondary bg-opacity-20 p-4 md:p-6 border border-muted border-opacity-10">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {projects[activeProject].title}
              </h3>
              <p className="text-sm md:text-base text-muted mb-6">
                {projects[activeProject].description}
              </p>

              <h4 className="text-sm font-mono mb-3">KEY HIGHLIGHTS</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                {projects[activeProject].highlights.map((h, i) => (
                  <li key={i} className="text-sm">
                    → {h}
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-mono mb-3">TECHNOLOGIES</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeProject].tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs py-1 px-3 border border-muted rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={projects[activeProject].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs inline-flex items-center px-6 py-2 border border-light hover:bg-light hover:bg-opacity-5 transition-all"
              >
                VIEW PROJECT →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;