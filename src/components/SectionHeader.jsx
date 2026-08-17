import { motion } from 'framer-motion';

/**
 * Standard console header used by every section:
 * eyebrow ("PLATE II — SELECTED WORKS"), a display title, and a ruled field
 * with a plate index readout on the right.
 */
const SectionHeader = ({ plate, eyebrow, title, note }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow mb-4">
            <span className="text-prussian">{plate}</span>
            <span className="mx-3 inline-block w-8 h-px bg-white/20 align-middle" />
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-5xl tracking-wide leading-none text-bone">
            {title}
          </h2>
        </div>
        {note && (
          <p className="eyebrow hidden md:block text-right mt-2 max-w-[10rem] leading-relaxed">
            {note}
          </p>
        )}
      </div>
      <div className="mt-8">
        <div className="rule" />
        <div className="flex justify-between mt-2">
          <span className="eyebrow">RECORDED · MMXXII–MMXXVI</span>
          <span className="eyebrow text-prussian">{plate}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionHeader;
