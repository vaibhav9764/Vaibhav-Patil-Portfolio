import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import Timeline from '../components/Timeline.jsx';
import Contact from '../components/Contact.jsx';

// "Pick a corner" grid — only the sections that aren't already rendered below.
const sections = [
  { to: '/projects', label: 'Projects', tag: '01', desc: 'Selected case studies and in-progress work.' },
  { to: '/skills', label: 'Skills', tag: '02', desc: 'The stack I reach for, day to day.' },
  { to: '/experience', label: 'Experience', tag: '03', desc: 'Where I’ve worked and what I built there.' },
  { to: '/certifications', label: 'Certifications', tag: '04', desc: 'Coursework and credentials.' },
  { to: '/awards', label: 'Awards', tag: '05', desc: 'Competitions and recognitions.' },
  { to: '/publications', label: 'Publications', tag: '06', desc: 'Things I\'ve written down properly.' },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="relative px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            // sections
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-serif text-4xl md:text-5xl font-semibold mt-3 mb-4 text-ink"
          >
            Explore
          </motion.h2>
          <p className="text-muted max-w-xl mb-14 text-[15px] leading-relaxed">
            Six pages, each focused on a different facet of the work. Pick
            whichever one interests you — the rest will still be here.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ show: { transition: { staggerChildren: 0.05 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {sections.map((s) => (
              <motion.div
                key={s.to}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Link
                  to={s.to}
                  className="group block rounded-2xl bg-card border border-rule p-6 h-full hover:border-ink/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] tracking-[0.22em] text-muted">
                      {s.tag}
                    </span>
                    <span className="font-mono text-[11px] text-muted group-hover:text-pink transition-colors">
                      open →
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-ink mb-2">
                    {s.label}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Timeline />
      <Contact />
    </>
  );
}
