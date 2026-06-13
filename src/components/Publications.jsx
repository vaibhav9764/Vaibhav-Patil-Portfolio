import { motion } from 'framer-motion';

// TODO: replace with real publication details + URL
const publications = [
  // {
  //   title: 'Everything You Need to Know About Microsoft Copilot',
  //   venue: 'Medium',
  //   year: 'April 2026',
  //   summary:
  //     "A complete guide to Microsoft Copilot - what it is, how it works, and where it's headed. Written for everyone, from everyday users to developers, this article breaks down the technology behind Copilot in plain language, without the jargon.",
  //   href: 'https://medium.com/@jainanjaly08/everything-you-need-to-know-about-microsoft-copilot-20c565770c36', // TODO: add article link
  //   tags: ['LLM','Copilot', 'Generative AI'],
  // },
];

export default function Publications() {
  return (
    <section id="publications" className="relative px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          // publications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="display-serif text-4xl md:text-5xl font-semibold mt-3 mb-4 text-ink"
        >
          Writing
        </motion.h2>
        <p className="text-muted max-w-xl mb-12 text-[15px] leading-relaxed">
          {/* Each one took longer than I'd like to admit. */}
        </p>

        <div className="space-y-6">
          {publications.map((p, i) => (
            <motion.a
              key={i}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group rounded-2xl bg-card border border-rule hover:border-ink/30 transition-colors p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-6"
            >
              {/* paper icon */}
              <div className="w-14 h-16 shrink-0 rounded-md border border-rule bg-warm flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B84D6A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                  <path d="M14 3v6h6" />
                  <path d="M8 13h8M8 16h8M8 19h5" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-mono text-[11px] text-muted uppercase tracking-[0.22em]">
                  {p.venue} · {p.year}
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-ink mt-2 leading-snug group-hover:text-pink transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted text-sm mt-3 leading-relaxed">
                  {p.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-ink-soft bg-warm border border-rule"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <span className="font-mono text-sm text-ink group-hover:text-pink transition-colors shrink-0">
                Read →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
