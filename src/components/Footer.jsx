import { motion } from 'framer-motion';

const NAV = [
  { id: 'home', label: 'HOME' },
  { id: 'projects', label: 'WORKS' },
  { id: 'skills', label: 'EXPERTISE' },
  { id: 'education', label: 'RECORD' },
  { id: 'contact', label: 'CONTACT' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-abyss/40 backdrop-blur-xl">
      <div className="container-custom py-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-prussian" />
            END OF SURVEY
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-display text-3xl md:text-4xl text-bone tracking-wide">
                MUSTURU MUKESH
                <span className="block italic text-iron">KUMAR REDDY</span>
              </p>
              <p className="font-sans italic text-mist mt-3">
                nothing is wasted.
              </p>
            </div>

            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-7 gap-y-3">
                {NAV.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="font-mono text-[11px] tracking-plate text-mist hover:text-prussian transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="eyebrow">
              © {year} MUSTURU MUKESH KUMAR REDDY · ALL RECORDS KEPT
            </p>
            <p className="eyebrow">
              AN ATLAS OF A WORKING LIFE · <span className="text-prussian">VOL. I</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
