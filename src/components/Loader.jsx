import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center">
        <motion.div
          className="w-12 h-12 border border-white/20 rounded-md flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.span
            className="font-display text-lg font-semibold text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            MKR
          </motion.span>
        </motion.div>

        <motion.p
          className="font-sans text-xs tracking-[0.2em] text-bone mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          2026
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
