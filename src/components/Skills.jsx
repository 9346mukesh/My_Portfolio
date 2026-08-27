import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const SKILL_GROUPS = [
  {
    id: '01',
    title: 'Artificial Intelligence',
    skills: ['LLMs', 'RAG', 'Fine-Tuning', 'Prompt Engineering', 'AI Agents', 'NLP', 'Vector Databases'],
  },
  {
    id: '02',
    title: 'Software Engineering',
    skills: ['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'REST APIs', 'Flask', 'Express'],
  },
  {
    id: '03',
    title: 'Data & Cloud',
    skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Power BI', 'Git', 'CI/CD'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          number="03"
          eyebrow="EXPERTISE"
          title="Skills & expertise"
          note="ORGANIZED BY DOMAIN · CAPABILITY OVER KEYWORDS."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface p-8 rounded-md border border-white/5"
            >
              <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-white/10">
                <span className="font-display text-sm font-semibold text-white">
                  {group.title}
                </span>
                <span className="eyebrow text-accent">{group.id}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
