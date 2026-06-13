import { useState } from 'react';
import { motion } from 'framer-motion';
import CertificateModal from './CertificateModal';

function TrophyBadge() {
  return (
    <div className="relative w-12 h-12 shrink-0 rounded-full bg-warm border border-rule flex items-center justify-center">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B84D6A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
        <path d="M5 5H3v2a3 3 0 0 0 3 3" />
        <path d="M19 5h2v2a3 3 0 0 1-3 3" />
        <path d="M9 17h6" />
      </svg>
    </div>
  );
}

// To attach an award certificate: place the file in `public/awards/`
// and set `image: '/awards/your-file.png'` below.
const awards = [
  // {
  //   title: 'Runner — Hacktech 2023',
  //   org: 'IKST · Indo-Korea Science and Technology Centre',
  //   date: 'Dec 2023',
  //   // note: "First real hackathon. My sibling helped me through the panic. Learned more than a whole semester.",
  //   icon: '🥈',
  //   image: '/awards/hacktech-2023.jpg',
  // },
  // {
  //   title: 'Winner — Science Exhibition',
  //   org: 'School of Sciences, Christ University',
  //   date: 'Mar 2024',
  //   // note: "Pulled the whole thing together in a week. Had way too much fun. Felt completely worth it in the end.",
  //   icon: '🔬',
  //   image: null,
  // },
  // {
  //   title: 'Winner — Pitch Please',
  //   org: 'FamJam 2.0, FamPay',
  //   date: 'Nov 2020',
  //   // note: "A business pitch — fully outside my comfort zone. Got lucky with the best team of seniors who carried me through it.",
  //   icon: '🎤',
  //   image: '/awards/pitch-please.jpeg',
  // },
  // {
  //   title: 'Participant — Inspire Awards',
  //   org: 'Ministry of Science and Technology, Govt. of India (Mysore)',
  //   date: 'Dec 2019',
  //   // note: "Learned that complex problems often have surprisingly simple solutions. Also, the trip to Mysore was a blast.",
  //   icon: '💡',
  //   image: '/awards/inspire-awards.jpeg',
  // },
  // {
  //   title: 'Representative of Bangalore',
  //   org: 'Tata Energy Quiz · National level, Mumbai',
  //   date: 'May 2018',
  //   // note: "A wild, lavish trip to Mumbai and one step short of the finals. I was in 8th grade. I'm still proud of it.",
  //   icon: '🧠',
  //   image: '/awards/tata-energy-quiz.jpeg',
  // },
  // TODO: add additional awards / achievements as they come in
];

export default function Awards() {
  const [active, setActive] = useState(null);
  return (
    <section id="awards" className="relative px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          // awards &amp; achievements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="display-serif text-4xl md:text-5xl font-semibold mt-3 mb-12 text-ink"
        >
          Awards & recognition
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="relative rounded-2xl p-6 md:p-7 bg-card border border-rule hover:border-ink/30 transition-colors"
            >
              <div className="relative flex items-start gap-5">
                <TrophyBadge />
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-pink text-sm mt-1">{a.org}</p>
                  <p className="font-mono text-xs text-muted mt-1">{a.date}</p>
                  {a.note && (
                    <p className="text-muted text-sm mt-4 leading-relaxed italic">
                      “{a.note}”
                    </p>
                  )}
                  {a.image && (
                    <button
                      type="button"
                      onClick={() => setActive(a)}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CertificateModal
        open={!!active}
        onClose={() => setActive(null)}
        image={active?.image}
        title={active?.title}
        subtitle={active ? `${active.org} · ${active.date}` : ''}
      />
    </section>
  );
}
