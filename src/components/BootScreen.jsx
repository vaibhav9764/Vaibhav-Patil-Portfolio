import { motion } from 'framer-motion';

export default function BootScreen() {
  const text = 'LOADING SEQUENCE . . .';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-bg flex items-center justify-center"
    >
      <div className="font-mono text-pink text-sm md:text-base tracking-[0.3em]">
        {text.split('').map((ch, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.06, duration: 0.05 }}
          >
            {ch}
          </motion.span>
        ))}
        <span className="inline-block w-[8px] h-[14px] bg-pink ml-1 align-middle animate-blink" />
      </div>
    </motion.div>
  );
}
