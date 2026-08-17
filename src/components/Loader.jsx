import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-abyss">
      <div className="flex flex-col items-center">
        {/* Registration mark drawing itself in, inside frosted glass */}
        <div className="glass glass--deep w-20 h-20 flex items-center justify-center">
          <div className="relative w-12 h-12">
            <motion.span
              className="absolute left-0 top-1/2 h-px w-full bg-prussian origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            <motion.span
              className="absolute top-0 left-1/2 w-px h-full bg-prussian origin-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            />
            <motion.span
              className="absolute inset-0 rounded-md border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.3 }}
            />
            <motion.span
              className="absolute left-1/2 top-1/2 w-2 h-2 bg-iron -translate-x-1/2 -translate-y-1/2 rounded-[1px]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.55, duration: 0.25 }}
            />
          </div>
        </div>

        <motion.p
          className="font-mono text-xs tracking-plate text-bone mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          MMKR · 2026
        </motion.p>
        <motion.p
          className="eyebrow mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          Calibrating instruments…
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
