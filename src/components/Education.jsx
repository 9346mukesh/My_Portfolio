import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const EDUCATION = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science and Engineering (CSE)',
    institution: 'GITAM Deemed to be University, Bengaluru',
    period: '2022 – 2026',
    grade: '8.43 / 10.00 CGPA',
  },
  {
    degree: 'Intermediate',
    field: 'MPC',
    institution: 'Narayana Junior College, Hyderabad',
    period: '2020 – 2022',
    grade: '96.6%',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    field: '10th Class',
    institution: 'Bhashyam Public School, Tirupati',
    period: '2019 – 2020',
    grade: '99.1%',
  },
];

const CERTIFICATIONS = [
  'Machine Learning',
  'Cloud Computing',
  'Generative AI',
  'Data Analysis',
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          number="05"
          eyebrow="EDUCATION"
          title="Education & certifications"
          note="B.TECH CSE · GITAM UNIVERSITY"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="py-8 border-b border-white/10"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <p className="eyebrow text-accent mb-2">{edu.period}</p>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-mist mt-1">
                        {edu.degree} — {edu.field}
                      </p>
                    </div>
                    <p className="font-sans text-sm text-bone bg-surface px-4 py-2 rounded-md border border-white/5 self-start">
                      {edu.grade}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-surface p-8 rounded-md border border-white/5">
              <h3 className="eyebrow mb-6">CERTIFICATIONS</h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent flex-none" />
                    <span className="text-bone text-sm">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="eyebrow mb-2">ACHIEVEMENTS</p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-3 text-mist text-sm">
                    <span className="mt-1 w-1.5 h-1.5 bg-accent rounded-full flex-none" />
                    250+ DSA problems solved on LeetCode
                  </li>
                  <li className="flex items-start gap-3 text-mist text-sm">
                    <span className="mt-1 w-1.5 h-1.5 bg-accent rounded-full flex-none" />
                    College hackathon participant
                  </li>
                  <li className="flex items-start gap-3 text-mist text-sm">
                    <span className="mt-1 w-1.5 h-1.5 bg-accent rounded-full flex-none" />
                    Student coordinator at GITAM
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
