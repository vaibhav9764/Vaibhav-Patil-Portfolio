import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CertificateModal({ open, onClose, image, title, subtitle, note }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 backdrop-blur-sm"
            style={{ background: 'rgba(27, 27, 31, 0.55)' }}
          />

          {/* frame */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-2xl bg-card border border-rule overflow-hidden shadow-[0_24px_60px_-20px_rgba(27,27,31,0.25)]"
          >
            {/* header */}
            <div className="flex items-start justify-between gap-4 px-6 pt-5 pb-4 border-b border-rule">
              <div className="min-w-0">
                <p className="eyebrow !mt-0">// certificate</p>
                {title && (
                  <h3 className="font-serif text-lg md:text-xl text-ink leading-snug mt-1 truncate">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-muted text-xs md:text-sm mt-0.5 truncate">
                    {subtitle}
                  </p>
                )}
                {note && (
                  <p className="text-[11px] md:text-xs text-ink-soft mt-2 max-w-xl">
                    {note}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 w-9 h-9 rounded-full border border-rule bg-warm text-ink-soft hover:border-ink hover:text-ink transition flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* image */}
            <div className="p-4 md:p-6 bg-warm">
              <div className="rounded-xl overflow-hidden border border-rule bg-card">
                {image ? (
                  <img
                    src={image}
                    alt={title || 'Certificate'}
                    className="block w-full h-auto max-h-[70vh] object-contain"
                  />
                ) : (
                  <div className="aspect-[4/3] flex items-center justify-center text-muted text-sm font-mono">
                    no image provided
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
