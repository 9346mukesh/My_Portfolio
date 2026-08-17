import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const CATEGORIES = [
  { name: "Programming Languages", skills: ["Python", "SQL", "C++"] },
  { name: "Databases", skills: ["MySQL", "PostgreSQL"] },
  { name: "Data Analysis & Visualization", skills: ["Power BI", "DAX", "Excel", "Data Modeling", "KPI Analysis"] },
  { name: "Machine Learning", skills: ["Supervised Learning", "Unsupervised Learning", "Classification", "Feature Engineering", "Model Evaluation"] },
  { name: "Data Handling", skills: ["Data Preprocessing", "Exploratory Data Analysis (EDA)"] },
  { name: "Libraries & Frameworks", skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"] },
  { name: "Version Control", skills: ["Git", "GitHub"] },
  { name: "CS Fundamentals", skills: ["DSA", "DBMS", "Computer Networks", "OOPs", "Operating Systems"] },
  { name: "Soft Skills", skills: ["Analytical Thinking", "Business Understanding", "Clear Communication", "Insight Presentation"] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          plate="PLATE III"
          eyebrow="EXPERTISE"
          title="The instrument kit"
          note="NINE COMPARTMENTS · KEPT IN DAILY USE"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="glass p-6 dot-field overflow-hidden"
            >
              <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-white/10">
                <h3 className="font-mono text-xs tracking-plate text-bone">
                  {cat.name}
                </h3>
                <span className="eyebrow text-prussian">III.{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 glass glass--deep px-8 py-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div>
            <h3 className="font-display text-2xl text-bone">Open a line of correspondence</h3>
            <p className="text-mist mt-1">
              Have a dataset, dashboard, or product idea worth surveying? Let's talk.
            </p>
          </div>
          <a href="#contact" className="btn-glass btn-glass--solid whitespace-nowrap">
            GET IN TOUCH <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
