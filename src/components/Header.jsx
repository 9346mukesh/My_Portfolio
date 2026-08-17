import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { id: 'home', label: 'HOME', plate: 'I' },
  { id: 'projects', label: 'WORKS', plate: 'II' },
  { id: 'skills', label: 'EXPERTISE', plate: 'III' },
  { id: 'education', label: 'RECORD', plate: 'IV' },
  { id: 'contact', label: 'CONTACT', plate: 'V' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
          ? 'bg-abyss/70 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-[72px]">
        {/* Monogram with registration mark */}
        <a href="#home" className="flex items-center gap-3 group" aria-label="Back to top">
          <span className="relative flex items-center justify-center w-8 h-8 rounded-lg border border-white/20 bg-white/[0.04]">
            <span className="absolute inset-0 m-auto w-px h-5 bg-prussian/70" />
            <span className="absolute inset-0 m-auto h-px w-5 bg-prussian/70" />
            <span className="w-1.5 h-1.5 bg-prussian group-hover:bg-iron transition-colors rounded-[1px]" />
          </span>
          <span className="font-mono text-sm tracking-plate text-bone">
            MMKR<span className="text-prussian">·</span>26
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group relative font-mono text-[11px] tracking-plate text-mist hover:text-bone transition-colors py-2"
                >
                  <span className="text-prussian mr-2">{item.plate}</span>
                  {item.label}
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-iron group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative z-50 w-10 h-10 rounded-lg border border-white/10 bg-white/[0.04] flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-px bg-bone transition-all duration-300 ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-5 h-px bg-bone transition-all duration-300 ${open ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile overlay — portaled to <body> so no transformed ancestor
          becomes its containing block and collapses it. */}
      {createPortal(
        <AnimatePresence>
          {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-16 bg-abyss/85 backdrop-blur-2xl z-40"
          >
            <div className="absolute inset-4 pointer-events-none">
              <span className="reg-cross -top-1.5 -left-1.5" />
              <span className="reg-cross -top-1.5 -right-1.5" />
              <span className="reg-cross -bottom-1.5 -left-1.5" />
              <span className="reg-cross -bottom-1.5 -right-1.5" />
            </div>
            <nav className="relative h-full flex flex-col justify-center px-10" aria-label="Mobile">
              <ul className="space-y-2">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-3 border-b border-white/10 group"
                    >
                      <span className="font-mono text-xs tracking-plate text-prussian">{item.plate}</span>
                      <span className="font-display text-3xl text-bone group-hover:text-prussian transition-colors">
                        {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <p className="eyebrow mt-10">AN ATLAS OF A WORKING LIFE · VOL. I</p>
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
