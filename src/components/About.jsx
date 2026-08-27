import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          number="02"
          eyebrow="ABOUT ME"
          title="Who I am"
          note="SOFTWARE / AI ENGINEER FOCUSED ON BUILDING INTELLIGENT PRODUCTS."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Large intro text */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-bone leading-relaxed font-light">
              I'm a software/AI engineer focused on building intelligent products and solving complex technical problems. I work across the full stack — from designing backend architectures and ML pipelines to crafting clean, performant user interfaces.
            </p>

            <div className="mt-10 space-y-6 text-mist leading-relaxed">
              <p>
                I enjoy working across the entire development lifecycle — understanding user needs, designing system architectures, implementing robust solutions, and iterating based on real feedback. My work spans generative AI, full-stack development, automation, and data-driven systems.
              </p>
              <p>
                Currently, I'm focused on building AI-powered applications using LLMs, retrieval-augmented generation, and modern frameworks. I believe in building software that solves real problems with clarity and precision.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: 'FOCUS', value: 'AI / Full Stack / Data' },
                { label: 'LOCATION', value: 'Bengaluru, India' },
                { label: 'EDUCATION', value: 'B.Tech CSE — GITAM' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="eyebrow mb-1">{item.label}</p>
                  <p className="text-bone text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Metrics + image placeholder */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '7+', label: 'PROJECTS' },
                { number: '3+', label: 'AI APPLICATIONS' },
                { number: '10+', label: 'TECHNOLOGIES' },
                { number: '250+', label: 'DSA PROBLEMS SOLVED' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-surface p-6 rounded-md border border-white/5"
                >
                  <p className="font-display text-3xl md:text-4xl font-bold text-accent">
                    {stat.number}
                  </p>
                  <p className="eyebrow mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Profile image */}
            <div className="mt-8 rounded-md overflow-hidden border border-white/5">
              <img
                src="/images/portrait.jpg"
                alt="Portrait of Mukesh Kumar Reddy"
                className="w-full h-auto object-cover aspect-[4/5] opacity-90"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
