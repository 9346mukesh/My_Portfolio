import { motion } from 'framer-motion';
import Avatar from './Avatar';

const Hero = () => {
  const highlights = ['Full-stack Projects', 'Data Analytics', 'Machine Learning', 'Open to Collaboration'];

  const stats = [
    { label: 'Projects built', value: '10+' },
    { label: 'DSA problems solved', value: '250+' },
    { label: 'Current focus', value: 'Web + Data' },
    { label: 'Learning goal', value: 'AI solutions' },
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-2 py-20 sm:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-gradient-to-tr from-[#202020] to-transparent opacity-30 blur-3xl"
          animate={{ x: [0, 12, 0], y: [0, -12, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[8%] h-64 w-64 rounded-full bg-gradient-to-bl from-[#252525] to-transparent opacity-20 blur-3xl"
          animate={{ x: [0, -15, 0], y: [0, 15, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-muted">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Student • Developer • Problem Solver
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Hello, I’m{' '}
              <span className="block text-gradient mt-3">MUSTURU MUKESH KUMAR REDDY</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              I’m a Computer Science student building practical web apps, insightful dashboards, and AI-friendly solutions that turn ideas into real-world impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="nothing-btn group">
                View Projects
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="/Mukesh_Kumar_Reddy_Resume.pdf" target="_blank" rel="noopener noreferrer" className="nothing-btn">
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-light/80">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              <a href="https://github.com/9346mukesh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-light">
                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.84 9.49.5.091.682-.196.682-.464 0-.215-.008-.94-.01-1.779-2.782.605-3.365-1.288-3.365-1.288-.444-.87-.98-1.137-.98-1.137-.81-.553.06-.542.06-.542.9.063 1.37.922 1.37.922.79 1.352 2.07 1.92 2.57 1.47.08-.63.31-1.05.56-1.29-2.22-.253-4.556-1.112-4.556-4.95 0-1.09.39-1.985 1.03-2.688-.103-.254-.447-1.274.097-2.654 0 0 .84-.271 2.75 1.026A9.57 9.57 0 0 1 12 6.84c.85.004 1.705.115 2.504.338 1.91-1.297 2.75-1.026 2.75-1.026.545 1.38.201 2.4.098 2.654.64.703 1.03 1.598 1.03 2.688 0 3.847-2.337 4.694-4.566 4.945.36.31.68.926.68 1.866 0 1.35-.012 2.438-.012 2.767 0 .27.18.58.69.482A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mukeshkumarreddy-musturu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-light">
                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12zm-1.33 1.1h2.66V18H5.61V9.6zm4.22 0h2.55v1.13h.04c.35-.67 1.22-1.37 2.5-1.37 2.68 0 3.17 1.76 3.17 4.05V18h-2.66v-7.56c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.89 1.96-2.89 3.98V18H9.83V9.6z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-mono uppercase tracking-[0.25em] text-muted">Current focus</p>
                <p className="mt-2 text-lg font-semibold">Building smart, useful products</p>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                Open to opportunities
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-primary/70 p-4">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-secondary/60 p-5">
              <div className="flex items-center justify-center">
                <Avatar />
              </div>
              <p className="mt-4 text-sm text-muted">
                I enjoy turning data, design, and code into experiences that feel simple, useful, and polished.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;