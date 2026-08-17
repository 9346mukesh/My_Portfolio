import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from './SectionHeader';

const EDUCATION = [
  {
    institution: "GITAM Deemed to be University, Bengaluru",
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering (CSE)",
    period: "2022 – 2026",
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "Intermediate",
    field: "MPC",
    period: "2020 – 2022",
  },
  {
    institution: "Bhashyam Public School",
    degree: "Secondary School Certificate (SSC)",
    field: "10th Class",
    period: "2019 – 2020",
  },
];

const ACHIEVEMENTS = [
  "Solved 250+ DSA and SQL problems on LeetCode with a 90% acceptance rate.",
  "Participated in college hackathons and competitive coding contests.",
  "Acted as a student coordinator at GITAM University.",
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="education" className="section-padding">
      <div className="container-custom" ref={ref}>
        <SectionHeader
          plate="PLATE IV"
          eyebrow="CHRONOLOGY"
          title="Education & achievements"
          note="THREE SURVEYS · RECORDED IN ORDER"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Timeline */}
          <div className="md:col-span-7">
            <div className="glass glass--deep p-8 md:p-10 relative">
              <span className="reg-cross -top-1.5 -left-1.5" />
              <span className="reg-cross -top-1.5 -right-1.5" />
              <span className="reg-cross -bottom-1.5 -left-1.5" />
              <span className="reg-cross -bottom-1.5 -right-1.5" />
              <div className="relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/15" />
                <div className="space-y-10">
                  {EDUCATION.map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -14 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.55, delay: i * 0.12 }}
                      className="relative pl-9"
                    >
                      <span
                        className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-[3px] bg-abyss rotate-45 ${
                          i === 0
                            ? 'border border-prussian shadow-[0_0_14px_rgba(91,143,188,0.55)]'
                            : 'border border-white/25'
                        }`}
                      />
                      <p className="eyebrow text-prussian mb-2">{edu.period}</p>
                      <h3 className="font-display text-2xl text-bone leading-tight">
                        {edu.institution}
                      </h3>
                      <p className="text-mist mt-1">
                        {edu.degree}
                        {edu.field ? ` — ${edu.field}` : ''}
                      </p>
                      {i === 0 && (
                        <p className="eyebrow mt-3 text-prussian">CURRENT SURVEY · IN PROGRESS</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass glass--deep p-8 relative"
            >
              <span className="reg-cross -top-1.5 -left-1.5" />
              <span className="reg-cross -top-1.5 -right-1.5" />
              <span className="reg-cross -bottom-1.5 -left-1.5" />
              <span className="reg-cross -bottom-1.5 -right-1.5" />
              <h3 className="eyebrow mb-6">NOTABLE ENTRIES</h3>
              <ul className="space-y-5">
                {ACHIEVEMENTS.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-bone/90">
                    <span className="mt-[0.5em] inline-block w-[7px] h-[7px] rounded-full bg-prussian shadow-[0_0_8px_rgba(91,143,188,0.6)] flex-none" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="eyebrow mb-2">CONTINUOUS LEARNING</p>
                <p className="text-mist text-sm">
                  Always exploring new technologies and participating in
                  hackathons to expand my knowledge and practical experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
