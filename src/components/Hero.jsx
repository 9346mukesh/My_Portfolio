import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ------------------------------------------------------------------ */
/* Stippled concentration field — a deterministic "survey" of dots     */
/* that densify toward the portrait, in the console's three inks.      */
/* ------------------------------------------------------------------ */

const FOCAL = { x: 0.66, y: 0.46 };

function fieldValue(x, y) {
  const dx = (x - FOCAL.x) / 0.30;
  const dy = (y - FOCAL.y) / 0.26;
  return Math.exp(-(dx * dx + dy * dy));
}

function FieldSVG() {
  const dots = useMemo(() => {
    const out = [];
    const cols = 44;
    const rows = 28;
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const x = ((i + 0.5) / cols) * 1440;
        const y = ((j + 0.5) / rows) * 900;
        const d = fieldValue(x / 1440, y / 900);
        let r, fill, opacity;
        if (d < 0.3) { r = 1.4; fill = 'rgba(233,230,223,0.10)'; opacity = 1; }
        else if (d < 0.55) { r = 1.8; fill = 'var(--prussian)'; opacity = 0.38; }
        else if (d < 0.78) { r = 2.3; fill = 'var(--prussian)'; opacity = 0.6; }
        else { r = 2.8; fill = 'var(--iron)'; opacity = 0.75; }
        out.push({ x, y, r, fill, opacity });
      }
    }
    return out;
  }, []);

  const contours = [0.85, 0.6, 0.35].map((th) => {
    const rx = 0.30 * 1440 * Math.sqrt(-2 * Math.log(th));
    const ry = 0.26 * 900 * Math.sqrt(-2 * Math.log(th));
    return { rx, ry, th };
  });

  const fx = FOCAL.x * 1440;
  const fy = FOCAL.y * 900;

  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full"
      aria-hidden="true"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.fill} opacity={d.opacity} />
      ))}
      {contours.map((c) => (
        <ellipse
          key={c.th}
          cx={fx}
          cy={fy}
          rx={c.rx}
          ry={c.ry}
          fill="none"
          stroke="var(--prussian)"
          strokeWidth="1"
          opacity="0.14"
        />
      ))}
      <line x1="0" y1={fy} x2="1440" y2={fy} stroke="var(--prussian)" strokeWidth="0.75" opacity="0.12" />
      <line x1={fx} y1="0" x2={fx} y2="900" stroke="var(--prussian)" strokeWidth="0.75" opacity="0.1" />
      {[0.2, 0.35, 0.5, 0.65, 0.8, 0.95].map((t) => (
        <line
          key={t}
          x1={fx + t * (1440 - fx)}
          y1={fy - 6}
          x2={fx + t * (1440 - fx)}
          y2={fy + 6}
          stroke="var(--mist)"
          strokeWidth="1"
          opacity="0.35"
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */

const STATS = [
  { value: '250+', label: 'PROBLEMS SOLVED' },
  { value: '90%', label: 'ACCEPTANCE RATE' },
  { value: '7', label: 'PROJECTS RECORDED' },
  { value: "'26", label: 'B.TECH CSE' },
];

const SOCIALS = [
  { label: 'GITHUB', href: 'https://github.com/9346mukesh' },
  { label: 'LEETCODE', href: 'https://leetcode.com/u/mukesh9963/' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/mukeshkumarreddy-musturu/' },
];

/* The surveyor's portrait — framed in frosted glass */
const Portrait = ({ className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="glass glass--deep p-3">
      <span className="reg-cross -top-1.5 -left-1.5" />
      <span className="reg-cross -top-1.5 -right-1.5" />
      <span className="reg-cross -bottom-1.5 -left-1.5" />
      <span className="reg-cross -bottom-1.5 -right-1.5" />
      <div className="absolute -inset-8 -z-10 rounded-full bg-prussian-deep/30 blur-3xl" aria-hidden="true" />
      <img
        src="/images/portrait.jpg"
        alt="Portrait of Mukesh Kumar Reddy"
        className="w-full h-auto rounded-xl object-cover"
        width="740"
        height="906"
      />
    </div>
  </div>
);

const Hero = () => {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [canParallax, setCanParallax] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setCanParallax(!mq.matches);
    const onMove = (e) => {
      if (mq.matches) return;
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      setParallax({ x: nx * -18, y: ny * -12 });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Concentration field */}
      <div
        className="absolute inset-0 -z-10"
        style={canParallax ? { transform: `translate(${parallax.x}px, ${parallax.y}px)`, transition: 'transform 0.4s ease-out' } : undefined}
      >
        <FieldSVG />
      </div>

      {/* Hero glow orbs — color for the glass to frost */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -left-24 top-1/4 w-96 h-96 rounded-full bg-prussian-deep/40 blur-[110px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-iron/25 blur-[100px]"
          animate={{ x: [0, -24, 0], y: [0, -16, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Plate header strip */}
      <div className="absolute top-16 md:top-[72px] left-0 right-0 pointer-events-none">
        <div className="container-custom flex justify-between items-center">
          <p className="eyebrow">AN ATLAS OF A WORKING LIFE</p>
          <p className="eyebrow hidden sm:block">
            PLATE I · <span className="text-prussian">SELF-SURVEY</span>
          </p>
        </div>
        <div className="mt-3 border-t border-white/10" />
      </div>

      {/* Vertical marginal socials */}
      <div className="hidden xl:flex absolute right-7 top-1/2 -translate-y-1/2 z-10">
        <div className="flex items-center gap-7" style={{ writingMode: 'vertical-rl' }}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow hover:text-prussian transition-colors"
            >
              {s.label}
            </a>
          ))}
          <span className="w-px h-10 bg-white/15" />
        </div>
      </div>

      <div className="container-custom grid lg:grid-cols-12 gap-10 items-center py-28 md:py-32">
        {/* Mobile portrait */}
        <motion.div
          className="lg:hidden flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Portrait className="w-48" />
        </motion.div>

        {/* Left — frosted panel with the self-survey */}
        <motion.div
          className="lg:col-span-7"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="glass glass--deep p-8 md:p-12">
            <span className="reg-cross -top-1.5 -left-1.5" />
            <span className="reg-cross -top-1.5 -right-1.5" />
            <span className="reg-cross -bottom-1.5 -left-1.5" />
            <span className="reg-cross -bottom-1.5 -right-1.5" />

            <motion.p variants={item} className="eyebrow mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-prussian" />
              SURVEYOR OF DATA & SOFTWARE
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-[clamp(2.9rem,7.5vw,5.4rem)] leading-[0.98] tracking-wide text-bone"
            >
              MUKESH KUMAR
              <span className="block italic text-iron">REDDY</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 font-sans italic text-xl md:text-2xl text-bone/90 max-w-xl leading-snug"
            >
              Data analyst & software engineer — surveying raw data into
              dashboards, models, and tools people can act on.
            </motion.p>

            <motion.p variants={item} className="mt-4 text-mist max-w-lg">
              I chart data the way a mapmaker charts terrain: carefully, one
              pass at a time. Bengaluru · B.Tech CSE, GITAM University.
            </motion.p>

            {/* Self-survey record — glass chips */}
            <motion.div variants={item} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-sm">
                  <p className="font-mono text-2xl md:text-[1.6rem] font-semibold tracking-wide text-prussian">
                    {s.value}
                  </p>
                  <p className="eyebrow mt-1.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="btn-glass btn-glass--solid">
                VIEW THE WORKS <span aria-hidden="true">↓</span>
              </a>
              <a
                href="/Mukeshkumarreddy_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
              >
                OPEN RESUME <span aria-hidden="true">↗</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right — portrait in glass */}
        <motion.div
          className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Portrait className="w-60 xl:w-64" />
          <p className="eyebrow mt-4">FIG. A — THE SURVEYOR</p>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="eyebrow">SCROLL TO CONTINUE THE SURVEY</span>
        <motion.span
          className="inline-block w-px h-8 bg-iron"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
