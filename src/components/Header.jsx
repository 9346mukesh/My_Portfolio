import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { id: 'work', label: 'WORK' },
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'contact', label: 'CONTACT' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('work');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-bg/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group" aria-label="Back to top">
          <span className="font-display text-xl font-semibold text-white tracking-tight">
            MKR
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                active === item.id ? 'text-white' : 'text-mist hover:text-bone'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-xs py-3 px-6">
            Let's Talk
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative z-50 flex flex-col items-end gap-1.5"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block h-px bg-bone transition-all duration-300 ${open ? 'w-6 rotate-45 translate-y-[3.5px]' : 'w-6'}`} />
          <span className={`block h-px bg-bone transition-all duration-300 ${open ? 'w-6 -rotate-45 -translate-y-[3.5px]' : 'w-4'}`} />
        </button>
      </div>

      {/* Mobile overlay */}
      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 top-16 bg-bg/95 backdrop-blur-2xl z-40"
            >
              <nav className="relative h-full flex flex-col justify-center px-10" aria-label="Mobile">
                <ul className="space-y-1">
                  {NAV.map((item, i) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * i, duration: 0.4 }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline gap-4 py-4 border-b border-white/10 group"
                      >
                        <span className="font-display text-4xl font-semibold text-bone group-hover:text-accent transition-colors">
                          {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-12 flex gap-4">
                  <a href="https://github.com/9346mukesh" target="_blank" rel="noopener noreferrer" className="eyebrow hover:text-accent transition-colors">GITHUB</a>
                  <a href="https://www.linkedin.com/in/mukeshkumarreddy-musturu/" target="_blank" rel="noopener noreferrer" className="eyebrow hover:text-accent transition-colors">LINKEDIN</a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.header>
  );
};

export default Header;
