import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Editorial hero — quiet, confident, photo-led.
// No typewriter, no flip card, no neon gradient buttons, no scroll arrow.

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center px-6 md:px-16 pt-28 pb-20"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* Left: copy */}
        <div className="md:col-span-7 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-600/30 bg-emerald-50 text-emerald-700 text-xs mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Open to roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="display-serif text-[2.6rem] sm:text-5xl md:text-[4.25rem] font-semibold text-ink"
          >
            Vaibhav Patil — software engineer.{' '}
            <span className="italic text-pink">Full-Stack</span> &amp;  AI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 text-ink-soft text-lg leading-relaxed max-w-xl"
          >
           Experience at MetLife, Turing, and Zeus Numerix. I build scalable backend, AI/LLM, and full-stack systems that are simple, maintainable, and production-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap gap-3 items-center"
          >
            <Link
              to="/projects"
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-ink text-bg hover:bg-pink transition-colors"
            >
              View selected work
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full text-sm font-medium text-ink border border-rule hover:border-ink transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>

        {/* Right: portrait — quiet frame, no glow, no flip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-5 order-1 md:order-2 flex md:justify-end justify-center"
        >
          <div className="relative w-[240px] sm:w-[280px] md:w-[320px] aspect-[4/5]">
            <div
              className="absolute -inset-3 rounded-[1.6rem] -z-10"
              style={{ background: '#F2EDE5' }}
              aria-hidden
            />
            <div className="relative w-full h-full rounded-[1.3rem] overflow-hidden border border-rule bg-card">
              <img
                src="/me.jpg"
                alt="Vaibhav Patil"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
