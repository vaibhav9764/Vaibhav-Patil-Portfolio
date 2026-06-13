import { motion } from 'framer-motion';

const events = [
  {
    year: '2021',
    title: 'Started B.Tech at NIT Nagpur',
    note: 'Mechanical Engineering with growing interest in software, systems, and problem solving.',
  },
  {
    year: '2024',
    title: 'Software Engineering Intern at Zeus Numerix',
    note: 'Built cross-platform GUI applications using C++, Qt, and QML across multiple devices.',
  },
  {
    year: '2025',
    title: 'LLM Trainer at Turing',
    note: 'Designed competitive programming problems and adversarial test cases to evaluate LLM reasoning.',
  },
  {
    year: '2025',
    title: 'Software Engineer at MetLife',
    note: 'Modernizing legacy systems into Spring Boot microservices and React-based platforms.',
  },
  {
    year: 'Now',
    title: 'Still building...',
    note: 'Focused on scalable systems, AI tooling, and production-ready software.',
    italic: true,
  },
];
export default function Timeline() {
  return (
    <section id="timeline" className="relative px-6 md:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          // timeline
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="display-serif text-4xl md:text-5xl font-semibold mt-3 mb-14 text-ink"
        >
          Timeline
        </motion.h2>

        <ol className="relative">
          {events.map((e, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 pb-10 relative"
            >
              <div
                className={`font-mono text-sm pt-1 ${
                  e.italic ? 'italic text-muted' : 'text-pink'
                }`}
              >
                {e.year}
              </div>
              <div className="relative pl-6 border-l border-rule">
                <span
                  className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ring-4 ring-bg ${
                    e.italic ? 'bg-rule' : 'bg-pink'
                  }`}
                />
                <h3
                  className={`font-serif text-lg md:text-xl ${
                    e.italic ? 'italic text-muted' : 'text-ink'
                  }`}
                >
                  {e.title}
                </h3>
                {e.note && <p className="text-muted text-sm mt-1">{e.note}</p>}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
