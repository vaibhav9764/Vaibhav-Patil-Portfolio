import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/awards', label: 'Awards' },
  { to: '/publications', label: 'Publications' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Esc closes
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-[80] flex items-center justify-between px-6 md:px-10 py-5 pointer-events-none">
        <button
          onClick={() => navigate('/')}
          className="pointer-events-auto font-mono text-xs text-muted hover:text-pink transition-colors tracking-[0.2em] uppercase"
        >
          VP
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="pointer-events-auto relative w-12 h-12 rounded-full border border-rule bg-card/85 backdrop-blur-md hover:border-ink transition-colors flex items-center justify-center group"
        >
          <span className="sr-only">Menu</span>
          <div className="relative w-5 h-4">
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 right-0 top-0 h-[1.5px] bg-ink"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-ink"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-ink"
            />
          </div>
        </button>
      </div>

      {/* Overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-bg/95 backdrop-blur-xl flex items-start md:items-center justify-center overflow-y-auto py-20"            onClick={() => setOpen(false)}
          >
            <motion.nav
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full max-w-md px-8 my-auto"
            >
              <p className="eyebrow mb-6 text-center">// jump to</p>
              <ul className="space-y-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) =>
                        `group w-full flex items-center justify-between py-2 border-b border-rule hover:border-ink transition-colors ${
                          isActive ? 'border-ink' : ''
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            className={`font-serif text-lg md:text-xl transition-colors ${
                              isActive
                                ? 'text-pink'
                                : 'text-ink-soft group-hover:text-ink'
                            }`}
                          >
                            {l.label}
                          </span>
                          <span
                            className={`font-mono text-[10px] transition-colors ${
                              isActive
                                ? 'text-pink'
                                : 'text-muted group-hover:text-pink'
                            }`}
                          >
                            {String(i).padStart(2, '0')} →
                          </span>
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="font-mono text-[11px] text-muted text-center mt-6"
              >
                press · esc · to close
              </motion.p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
