import { motion } from 'framer-motion';

const SectionHeader = ({ number, eyebrow, title, note }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow mb-4">
            {number} — {eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none">
            {title}
          </h2>
        </div>
        {note && (
          <p className="eyebrow hidden md:block text-right mt-2 max-w-[12rem] leading-relaxed">
            {note}
          </p>
        )}
      </div>
      <div className="mt-8 h-px bg-white/10" />
    </motion.div>
  );
};

export default SectionHeader;
