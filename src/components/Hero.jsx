import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brown/[0.06] blur-[120px]" />
      </div>

      <div className="container-custom py-28 md:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-[900px]"
        >
          <motion.p variants={item} className="eyebrow mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            HELLO, I'M
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] font-bold tracking-tight text-white"
          >
            MUKESH
            <br />
            KUMAR REDDY
          </motion.h1>

          <motion.p
            variants={item}
            className="font-display text-xl md:text-2xl text-accent mt-6 font-medium"
          >
            AI / SOFTWARE ENGINEER
          </motion.p>

          <motion.p
            variants={item}
            className="text-mist text-lg md:text-xl mt-4 max-w-[560px] leading-relaxed"
          >
            Building intelligent digital products using LLMs, retrieval systems, and modern full-stack technologies.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="btn-primary">
              VIEW MY WORK
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn-outline">
              LET'S CONNECT
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="eyebrow">SCROLL</span>
        <motion.span
          className="w-px h-8 bg-mist/50"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
