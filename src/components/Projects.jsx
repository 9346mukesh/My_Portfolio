import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import InstrumentReading from './InstrumentReading';

const PROJECTS = [
  {
    title: "RideShare Pro – Vehicle Tracking System Using GPS",
    description:
      "A full-stack ride-sharing and vehicle tracking platform with real-time GPS monitoring, role-based dashboards, and trip management workflows.",
    tech: ["Python", "Flask", "SQLite", "HTML", "JavaScript", "CSS"],
    liveLink: "https://github.com/9346mukesh/Vehicle-Tracking-System-Using-GPS-Tracking",
    highlights: [
      "Real-time vehicle and ride tracking",
      "Role-based dashboards for admin, driver, and customer",
      "Ride booking, assignment, and status updates",
      "Integrated database-backed user and trip management",
    ],
  },
  {
    title: "InventoTrack – Inventory Management System",
    description:
      "A full-stack inventory management system designed to track products, manage stock levels, and streamline inventory operations for small to medium businesses.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://github.com/9346mukesh/inventotrack",
    highlights: [
      "Centralized product and stock tracking",
      "Real-time inventory updates",
      "CRUD operations for inventory items",
      "Scalable backend architecture",
    ],
  },
  {
    title: "Phishing URL Detection System",
    description:
      "A machine learning-based cybersecurity application that detects phishing URLs by extracting features and classifying them using supervised learning models.",
    tech: ["Python", "Flask", "Machine Learning", "Scikit-learn"],
    liveLink: "https://github.com/9346mukesh/phishing_app",
    highlights: [
      "Automated phishing URL classification",
      "URL feature extraction pipeline",
      "Real-time predictions using Flask",
      "Practical cybersecurity use case",
    ],
  },
  {
    title: "ResolveX – Issue & Complaint Management System",
    description:
      "A web-based issue and complaint management platform that enables users to raise, track, and resolve issues through a structured workflow.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://github.com/9346mukesh/ResolveX",
    highlights: [
      "Structured issue tracking workflow",
      "Role-based complaint handling",
      "Status updates and resolution logs",
      "Designed for organizational use cases",
    ],
  },
  {
    title: "Awesome Chocolate Power BI Dashboard",
    description:
      "An interactive Power BI dashboard that analyzes chocolate sales data to uncover revenue trends, performance metrics, and business insights.",
    tech: ["Power BI", "DAX", "Data Visualization", "Business Intelligence"],
    liveLink: "https://github.com/9346mukesh/Awesome-Chocolate-Power-BI-Dashboard",
    highlights: [
      "Interactive and dynamic dashboards",
      "Sales and revenue trend analysis",
      "KPI-based business reporting",
      "Professional BI visual design",
    ],
  },
  {
    title: "Task Manager Application",
    description:
      "A task management web application that helps users organize, track, and manage daily tasks with a clean and intuitive interface.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    liveLink: "https://github.com/9346mukesh/Task_Manager",
    highlights: [
      "Task creation and completion tracking",
      "Clean and minimal UI design",
      "State management using React hooks",
      "Improves personal productivity",
    ],
  },
  {
    title: "Zomato Bangalore Restaurant Analysis",
    description:
      "A data analytics project analyzing Zomato Bangalore restaurant data to identify trends in ratings, pricing, cuisines, and customer preferences.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    liveLink: "https://github.com/9346mukesh/zomato-bangalore-analysis",
    highlights: [
      "Exploratory Data Analysis (EDA)",
      "Data cleaning and preprocessing",
      "Visualization of restaurant trends",
      "Real-world dataset analysis",
    ],
  },
];

const roman = (n) => ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][n - 1] || n;

const Projects = () => {
  const [active, setActive] = useState(0);
  const project = PROJECTS[active];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          plate="PLATE II"
          eyebrow="SELECTED WORKS"
          title="Projects in the record"
          note="7 SPECIMENS · INDEXED ON GITHUB · EACH WITH A READING"
        />

        {/* Mobile selector */}
        <div className="md:hidden mb-8">
          <div className="flex items-center justify-between mb-3">
            <p className="eyebrow">SELECT SPECIMEN</p>
            <p className="eyebrow text-prussian">
              {active + 1} / {PROJECTS.length}
            </p>
          </div>
          <div className="flex overflow-x-auto pb-3 snap-x snap-mandatory no-scrollbar">
            {PROJECTS.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`snap-start flex-shrink-0 w-[72%] mr-3 text-left p-4 rounded-xl backdrop-blur-md transition-colors ${
                  active === i
                    ? 'border border-prussian/50 bg-prussian/10'
                    : 'border border-white/10 bg-white/[0.04]'
                }`}
              >
                <p className="eyebrow text-prussian mb-1">II.{roman(i + 1)}</p>
                <h3 className="font-display text-lg text-bone leading-tight">
                  {p.title.split(' – ')[0]}
                </h3>
                <p className="font-mono text-[10px] tracking-wider text-mist mt-1">
                  {p.tech.slice(0, 3).join(' · ')}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Desktop index */}
          <motion.div
            className="hidden md:block md:col-span-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-2">
              <ol>
                {PROJECTS.map((p, i) => (
                  <li key={i}>
                    <button
                      onClick={() => setActive(i)}
                      className={`group w-full text-left py-4 pl-6 pr-4 rounded-xl relative transition-colors ${
                        active === i ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-prussian transition-transform duration-300 origin-top ${
                          active === i ? 'scale-y-100' : 'scale-y-0'
                        }`}
                      />
                      <span className="flex items-baseline gap-3">
                        <span className={`font-mono text-[11px] tracking-plate ${active === i ? 'text-prussian' : 'text-mist'}`}>
                          II.{roman(i + 1)}
                        </span>
                        <span className="flex-1">
                          <span className={`font-display text-lg leading-tight block ${active === i ? 'text-bone' : 'text-mist'}`}>
                            {p.title.split(' – ')[0]}
                          </span>
                          <span className="font-mono text-[10px] tracking-wider text-mist/70 mt-1 block">
                            {p.tech.slice(0, 3).join(' · ')}
                          </span>
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
              <p className="eyebrow mx-4 my-3 border-t border-white/10 pt-3">INDEX COMPLETE — 7 OF 7</p>
            </div>
          </motion.div>

          {/* Specimen detail */}
          <motion.div className="md:col-span-8" layout>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="glass glass--deep p-6 md:p-10"
              >
                <span className="reg-cross -top-1.5 -left-1.5" />
                <span className="reg-cross -top-1.5 -right-1.5" />
                <span className="reg-cross -bottom-1.5 -left-1.5" />
                <span className="reg-cross -bottom-1.5 -right-1.5" />

                <div className="flex items-center justify-between mb-4">
                  <p className="eyebrow text-prussian">SPECIMEN II.{roman(active + 1)}</p>
                  <p className="eyebrow">STATUS · <span className="text-prussian">SURVEYED</span></p>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-bone leading-tight">
                  {project.title}
                </h3>
                <p className="text-mist mt-4 max-w-2xl">
                  {project.description}
                </p>

                <div className="grid md:grid-cols-5 gap-6 mt-8">
                  <div className="md:col-span-3">
                    <h4 className="eyebrow mb-4">KEY OBSERVATIONS</h4>
                    <ul className="space-y-3">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-bone/90">
                          <span className="mt-[0.55em] inline-block w-2 h-2 border border-prussian rotate-45 flex-none" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <InstrumentReading title={project.title} />
                  </div>
                </div>

                <h4 className="eyebrow mt-8 mb-4">INSTRUMENTS USED</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="chip">{t}</span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <p className="eyebrow">FIELD NOTES · OPEN-SOURCE · RECORDED MMXXII–MMXXVI</p>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass"
                  >
                    VIEW RECORD <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
