import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const EXPERIENCE = [
  {
    year: '2026',
    role: 'AI / Software Engineer',
    company: 'Building AI-Powered Applications',
    description: 'Developing intelligent systems using LLMs, retrieval-augmented generation, and modern full-stack technologies. Focused on building scalable, production-ready AI applications.',
  },
  {
    year: '2025',
    role: 'Software Developer',
    company: 'Full Stack Development',
    description: 'Built full-stack web applications using React, Node.js, and Python. Designed RESTful APIs, implemented database architectures, and delivered end-to-end solutions.',
  },
  {
    year: '2024',
    role: 'Software Development Intern',
    company: 'Industry Experience',
    description: 'Gained hands-on experience in software development, testing, and deployment. Contributed to real-world projects and learned industry best practices.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          number="04"
          eyebrow="EXPERIENCE"
          title="Work history"
          note="HANDS-ON · INDUSTRY EXPOSURE"
        />

        <div className="space-y-0">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 border-b border-white/10"
            >
              {/* Year */}
              <div className="md:col-span-3">
                <p className="font-display text-5xl md:text-6xl font-bold text-accent/30">
                  {exp.year}
                </p>
              </div>

              {/* Details */}
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="text-accent mt-1 font-display text-sm tracking-wide">
                  {exp.company}
                </p>
                <p className="text-mist mt-4 max-w-2xl leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
