import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    { institution: 'GITAM Deemed to be University, Bengaluru', degree: 'Bachelor of Engineering', field: 'Computer Science and Engineering (CSE)', period: '2022 - 2026' },
    { institution: 'Sri Chaitanya Junior College', degree: 'Intermediate', field: 'MPC', period: '2020 - 2022' },
    { institution: 'Bhashyam Public School', degree: 'Secondary School Certificate (SSC)', field: '10th Class', period: '2019 - 2020' },
  ];

  const achievements = [
    'Solved 250+ DSA and SQL problems on LeetCode with a strong acceptance rate.',
    'Participated in college hackathons and competitive coding contests.',
    'Acted as a student coordinator and led collaborative campus initiatives.',
  ];

  return (
    <section id="education" className="section-padding bg-primary/90">
      <div className="container-custom" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <h4 className="mb-2 font-mono text-sm uppercase tracking-[0.25em] text-muted">Background</h4>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Education & Achievements</h2>
          <div className="h-[2px] w-16 bg-light/60" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="rounded-[1.5rem] border border-white/10 bg-secondary/70 p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-semibold">Education</h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.period} className="border-l border-white/10 pl-5">
                  <p className="text-sm font-mono uppercase tracking-[0.25em] text-muted">{edu.period}</p>
                  <h4 className="mt-2 text-lg font-semibold">{edu.institution}</h4>
                  <p className="mt-1 text-muted">{edu.degree} {edu.field && `• ${edu.field}`}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-[1.5rem] border border-white/10 bg-secondary/70 p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-semibold">Achievements</h3>
            <ul className="space-y-4">
              {achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-3 text-sm text-light/80">
                  <span className="mt-1 text-lg text-emerald-300">✦</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-white/10 bg-primary/70 p-4">
              <h4 className="text-sm font-semibold">Always learning</h4>
              <p className="mt-2 text-sm text-muted">I’m constantly exploring new technologies, tools, and problem-solving approaches to stay sharp and build more impactful work.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
