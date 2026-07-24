import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Projects', 'Skills', 'Education', 'Contact'];

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 border-0 transition-all duration-300 ${scrolled ? 'glassmorphism-no-border py-3' : 'bg-transparent py-5'}`}
      initial={{ y: -100 }}
      animate={{ y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-semibold">
            MK
          </div>
          <div className="leading-none">
            <div className="text-sm font-semibold tracking-[0.25em]">MUKESH</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted">Student Developer</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-light/80 transition-colors duration-300 hover:text-light"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="rounded-full border border-white/15 bg-white/5 p-2 text-light md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span className="h-px w-full bg-light transition-all" style={{ transform: mobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
            <span className="h-px w-full bg-light transition-all" style={{ opacity: mobileMenuOpen ? 0 : 1 }} />
            <span className="h-px w-full bg-light transition-all" style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
          </div>
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full mt-2 w-full border border-white/10 bg-secondary/95 px-6 py-4 shadow-2xl backdrop-blur md:hidden"
            >
              <ul className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block text-sm font-medium text-light/80"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;