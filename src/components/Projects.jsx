import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const PROJECTS = [
  {
    id: '01',
    title: 'RideShare Pro',
    subtitle: 'Vehicle Tracking System Using GPS',
    description: 'A full-stack ride-sharing and vehicle tracking platform with real-time GPS monitoring, role-based dashboards, and trip management workflows.',
    discipline: 'FULL STACK',
    tech: ['Python', 'Flask', 'SQLite', 'HTML', 'JavaScript', 'CSS'],
    link: 'https://github.com/9346mukesh/Vehicle-Tracking-System-Using-GPS-Tracking',
  },
  {
    id: '02',
    title: 'InventoTrack',
    subtitle: 'Inventory Management System',
    description: 'A full-stack inventory management system designed to track products, manage stock levels, and streamline inventory operations for small to medium businesses.',
    discipline: 'FULL STACK',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/9346mukesh/inventotrack',
  },
  {
    id: '03',
    title: 'Phishing URL Detection',
    subtitle: 'ML-Based Cybersecurity Application',
    description: 'A machine learning-based cybersecurity application that detects phishing URLs by extracting features and classifying them using supervised learning models.',
    discipline: 'AI / ML',
    tech: ['Python', 'Flask', 'Scikit-learn', 'Machine Learning'],
    link: 'https://github.com/9346mukesh/phishing_app',
  },
  {
    id: '04',
    title: 'ResolveX',
    subtitle: 'Issue & Complaint Management',
    description: 'A web-based issue and complaint management platform that enables users to raise, track, and resolve issues through a structured workflow.',
    discipline: 'FULL STACK',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/9346mukesh/ResolveX',
  },
  {
    id: '05',
    title: 'Power BI Dashboard',
    subtitle: 'Chocolate Sales Analytics',
    description: 'An interactive Power BI dashboard that analyzes chocolate sales data to uncover revenue trends, performance metrics, and business insights.',
    discipline: 'DATA & BI',
    tech: ['Power BI', 'DAX', 'Data Visualization', 'Business Intelligence'],
    link: 'https://github.com/9346mukesh/Awesome-Chocolate-Power-BI-Dashboard',
  },
  {
    id: '06',
    title: 'Task Manager',
    subtitle: 'Productivity Application',
    description: 'A task management web application that helps users organize, track, and manage daily tasks with a clean and intuitive interface.',
    discipline: 'FRONTEND',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/9346mukesh/Task_Manager',
  },
  {
    id: '07',
    title: 'Zomato Analysis',
    subtitle: 'Restaurant Data Analytics',
    description: 'A data analytics project analyzing Zomato Bangalore restaurant data to identify trends in ratings, pricing, cuisines, and customer preferences.',
    discipline: 'DATA & ML',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    link: 'https://github.com/9346mukesh/zomato-bangalore-analysis',
  },
];

const Projects = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          number="01"
          eyebrow="SELECTED WORK"
          title="Projects I've built"
          note="A COLLECTION OF PROJECTS WHERE I SOLVED REAL PROBLEMS WITH TECHNOLOGY AND DESIGN."
        />

        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group block relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-b border-white/10 hover:border-accent/30 transition-colors duration-300">
                {/* Project number + discipline */}
                <div className="md:col-span-2 flex md:flex-col gap-3 md:gap-0">
                  <span className="font-display text-sm font-semibold text-accent">
                    {project.id}
                  </span>
                  <span className="eyebrow">{project.discipline}</span>
                </div>

                {/* Project info */}
                <div className="md:col-span-7">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-mist mt-1 text-sm md:text-base">
                    {project.subtitle}
                  </p>
                  <p className="text-mist/70 mt-3 max-w-xl text-sm leading-relaxed hidden md:block">
                    {project.description}
                  </p>
                </div>

                {/* Tech + arrow */}
                <div className="md:col-span-3 flex flex-col md:items-end justify-between">
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="chip text-[10px]">{t}</span>
                    ))}
                  </div>
                  <span className="hidden md:inline-flex items-center gap-2 text-mist group-hover:text-accent transition-colors duration-300 text-sm font-display mt-4">
                    VIEW CASE STUDY
                    <motion.span
                      className="inline-block"
                      animate={{ x: 0 }}
                      whileHover={{ x: 6 }}
                    >
                      →
                    </motion.span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
