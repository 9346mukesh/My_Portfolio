import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'RideShare Pro – Vehicle Tracking System Using GPS',
      description: 'A full-stack ride-sharing and vehicle tracking platform with real-time GPS monitoring, role-based dashboards, and trip management workflows.',
      tech: ['Python', 'Flask', 'SQLite', 'JavaScript', 'CSS'],
      liveLink: 'https://github.com/9346mukesh/Vehicle-Tracking-System-Using-GPS-Tracking',
      highlights: ['Real-time vehicle and ride tracking', 'Role-based dashboards', 'Trip booking workflow'],
    },
    {
      title: 'InventoTrack – Inventory Management System',
      description: 'A full-stack inventory management system designed to track products, manage stock levels, and streamline inventory operations for small businesses.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveLink: 'https://github.com/9346mukesh/inventotrack',
      highlights: ['Centralized stock tracking', 'CRUD-based inventory operations', 'Scalable backend'],
    },
    {
      title: 'Phishing URL Detection System',
      description: 'A machine learning-based cybersecurity application that detects phishing URLs by extracting features and classifying them using supervised models.',
      tech: ['Python', 'Flask', 'ML', 'Scikit-learn'],
      liveLink: 'https://github.com/9346mukesh/phishing_app',
      highlights: ['Automated phishing classification', 'Feature extraction pipeline', 'Practical cybersecurity use case'],
    },
    {
      title: 'ResolveX – Issue & Complaint Management System',
      description: 'A web-based issue and complaint management platform that enables users to raise, track, and resolve issues through a structured workflow.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveLink: 'https://github.com/9346mukesh/ResolveX',
      highlights: ['Structured issue workflow', 'Role-based complaint handling', 'Resolution tracking'],
    },
    {
      title: 'Awesome Chocolate Power BI Dashboard',
      description: 'An interactive dashboard that analyzes sales data to uncover revenue trends, performance metrics, and business insights.',
      tech: ['Power BI', 'DAX', 'Data Visualization'],
      liveLink: 'https://github.com/9346mukesh/Awesome-Chocolate-Power-BI-Dashboard',
      highlights: ['Dynamic KPI reporting', 'Revenue trend analytics', 'Professional BI design'],
    },
    {
      title: 'Task Manager Application',
      description: 'A task management web app that helps users organize, track, and manage daily tasks with a clean and intuitive interface.',
      tech: ['React', 'JavaScript', 'HTML', 'CSS'],
      liveLink: 'https://github.com/9346mukesh/Task_Manager',
      highlights: ['Task creation and tracking', 'Minimal UI', 'Productivity-focused design'],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-primary/90">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h4 className="mb-2 font-mono text-sm uppercase tracking-[0.25em] text-muted">Portfolio</h4>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Projects</h2>
          <div className="h-[2px] w-16 bg-light/60" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group rounded-[1.5rem] border border-white/10 bg-secondary/70 p-6 shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-muted">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <span className="text-sm text-muted">{project.tech[0]}</span>
              </div>

              <h3 className="text-xl font-semibold text-light">{project.title}</h3>
              <p className="mt-3 text-sm text-muted">{project.description}</p>

              <ul className="mt-5 space-y-2 text-sm text-light/80">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 text-light/50">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-primary/70 px-3 py-1 text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>

              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center text-sm font-medium text-light transition-colors hover:text-emerald-300">
                View project
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;