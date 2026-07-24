import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    { name: 'Programming Languages', skills: ['Python', 'SQL', 'C++'] },
    { name: 'Databases', skills: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    { name: 'Data Analysis & Visualization', skills: ['Power BI', 'DAX', 'Excel', 'Data Modeling', 'KPI Analysis'] },
    { name: 'Machine Learning', skills: ['Supervised Learning', 'Unsupervised Learning', 'Classification', 'Feature Engineering'] },
    { name: 'Data Handling', skills: ['Data Preprocessing', 'EDA', 'Cleaning'] },
    { name: 'Libraries & Frameworks', skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'] },
    { name: 'Version Control', skills: ['Git', 'GitHub'] },
    { name: 'CS Fundamentals', skills: ['DSA', 'DBMS', 'Computer Networks', 'OOPs', 'Operating Systems'] },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/80">
      <div className="container-custom" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <h4 className="mb-2 font-mono text-sm uppercase tracking-[0.25em] text-muted">Expertise</h4>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Technical Skills</h2>
          <div className="h-[2px] w-16 bg-light/60" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[1.5rem] border border-white/10 bg-primary/70 p-6"
            >
              <h3 className="mb-4 border-b border-white/10 pb-2 text-lg font-semibold">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-secondary/80 px-3 py-1 text-sm text-light/80">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 flex flex-col items-start justify-between gap-5 rounded-[1.5rem] border border-white/10 bg-primary/70 p-6 md:flex-row md:items-center" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <div>
            <h3 className="text-xl font-semibold">Ready to collaborate?</h3>
            <p className="mt-2 max-w-2xl text-muted">I’d love to bring my data-driven approach and development skills into a meaningful project with you.</p>
          </div>
          <a href="#contact" className="btn btn-primary whitespace-nowrap">
            Get in Touch <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
