import { useState } from 'react';
import { motion } from 'framer-motion';
import CertificateModal from './CertificateModal';

// TODO: add real certifications. These are illustrative placeholders.
// To attach a certificate image: place the file in `public/certificates/`
// and set `image: '/certificates/your-file.png'` below.
const certs = [
  {
    name: 'GitHub Copilot Certification (GH-300)',
    issuer: 'Microsoft',
    year: 'May 2025',
    skills: ['GitHub Copilot', 'AI-Assisted Development', 'Developer Productivity'],
    color: 'from-pink to-violet',
    image: '/certificates/github-copilot-gh300.jpg',
  },
  {
    name: 'Agile Delivery Model – Foundational Course',
    issuer: 'MetLife',
    year: 'Apr 2025',
    skills: ['Agile', 'Scrum', 'Software Delivery', 'Project Collaboration'],
    color: 'from-pink-soft to-violet',
    image: '/certificates/agile-delivery-model.jpg',
  },
    {
    name: 'The Ultimate Job Ready Data Science Course',
    issuer: 'CodeWithHarry',
    year: 'Mar 2025',
    skills: ['Machine Learning', 'Data Science', 'Python', 'Data Analysis'],
    color: 'from-violet to-pink',
    image: '/certificates/data-science-codewithharry.jpg',
  },
];

function CertBadge() {
  return (
    <div className="relative w-12 h-12 shrink-0 rounded-full bg-warm border border-rule flex items-center justify-center">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B84D6A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.39 4.84L20 8l-4 3.9.94 5.5L12 14.77 7.06 17.4 8 11.9 4 8l5.61-1.16L12 2z" />
      </svg>
    </div>
  );
}

export default function Certifications() {
  const [active, setActive] = useState(null);
  return (
    <section id="certifications" className="relative px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          // certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="display-serif text-4xl md:text-5xl font-semibold mt-3 mb-4 text-ink"
        >
          Certifications
        </motion.h2>
        <p className="text-muted max-w-xl mb-14 text-[15px] leading-relaxed">
          Coursework I’ve completed alongside school and work — the kind of
          knowledge that pays off slowly.
        </p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {certs.map((c) => (
            <motion.div
              key={c.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              whileHover={{ y: -3 }}
              className="rounded-2xl bg-card border border-rule hover:border-ink/30 transition-colors p-6 flex gap-5 items-start"
            >
              <CertBadge />
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-lg md:text-xl text-ink leading-snug">
                  {c.name}
                </h3>
                <p className="text-muted text-sm mt-1">{c.issuer}</p>
                {c.year.toLowerCase() === 'ongoing' ? (
                  <span className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded-full border border-emerald-600/30 bg-emerald-50 font-mono text-[11px] text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Ongoing
                  </span>
                ) : (
                  <p className="font-mono text-xs text-pink mt-2">{c.year}</p>
                )}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-ink-soft bg-warm border border-rule"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {c.image && (
                  <button
                    type="button"
                    onClick={() => setActive(c)}
                    className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-ink border border-rule hover:border-ink transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M4 9h16M9 6V4M15 6V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                    View certificate
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <CertificateModal
        open={!!active}
        onClose={() => setActive(null)}
        image={active?.image}
        title={active?.name}
        subtitle={active ? `${active.issuer} · ${active.year}` : ''}
        note={active?.note}
      />
    </section>
  );
}
