import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BootScreen from './components/BootScreen.jsx';
import Nav from './components/Nav.jsx';
import Ticker from './components/Ticker.jsx';

export default function Layout() {
  const location = useLocation();

  const [booting, setBooting] = useState(() => {
    if (typeof window === 'undefined') return true;
    return sessionStorage.getItem('booted') !== '1';
  });

  useEffect(() => {
    if (!booting) return;
    const t = setTimeout(() => {
      sessionStorage.setItem('booted', '1');
      setBooting(false);
    }, 1600);
    return () => clearTimeout(t);
  }, [booting]);

  // scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <AnimatePresence mode="wait">
        {booting && <BootScreen key="boot" />}
      </AnimatePresence>

      {!booting && <Nav />}

      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

        {location.pathname !== '/' && <Ticker />}
      </main>

      {!booting && (
        <footer className="px-6 md:px-16 py-6 border-t border-rule text-center">
          <p className="font-mono text-[11px] text-muted">
            Last updated on June 13, 2026
          </p>
        </footer>
      )}
    </div>
  );
}
