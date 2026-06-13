import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Software Engineer',
    company: 'MetLife',
    where: 'Hyderabad, TS',
    duration: 'Aug 2025 — Present',
    points: [
      'Modernized the legacy CDF platform by migrating VB.NET monolith components to Spring Boot microservices with a React.js frontend.',
      'Unified iLink, CDF, and SoldCase into a centralized GCA microservices platform.',
      'Developed REST APIs with Spring Boot and DB2 integration for scalable backend communication.',
      'Built responsive React.js interfaces with optimized data fetching and improved UI performance.',
      'Enhanced backend workflows, reducing customer onboarding time and improving operational efficiency.',
    ],
  },
  {
    role: 'LLM Trainer',
    company: 'Turing',
    where: 'Remote',
    duration: 'Jul 2025',
    points: [
      'Designed Div1/Div2-level competitive programming problems to evaluate Alibaba Qwen’s reasoning capabilities.',
      'Built end-to-end problem pipelines, including constraints, C++ solutions, and comprehensive test cases.',
      'Performed adversarial testing using complex and edge-case scenarios to expose model weaknesses.',
      'Developed automated test generators and analyzed model failures to improve LLM evaluation quality.',
    ],
  },
  {
    role: 'SDE Intern',
    company: 'Zeus Numerix',
    where: 'Pune, MH',
    duration: 'May 2024 — Jul 2024',
    points: [
      'Developed cross-platform GUI applications using C++ and Qt/QML.',
      'Designed and deployed UI for PGK Simulation Software across Windows, Ubuntu, Android, and Raspberry Pi.',
      'Implemented responsive UI components using Qt Creator and Qt Design Studio.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          // experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="display-serif text-4xl md:text-5xl font-semibold mt-3 mb-12 text-ink"
        >
          Experience
        </motion.h2>

        <ol className="relative border-l border-rule pl-6 md:pl-8 space-y-12">
          {experience.map((e, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span
                className="absolute -left-[33px] md:-left-[41px] top-2 w-3 h-3 rounded-full bg-pink ring-4 ring-bg"
              />
              <div className="rounded-2xl bg-card border border-rule p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl md:text-2xl text-ink">
                    {e.role} <span className="text-muted">·</span>{' '}
                    <span className="text-pink">{e.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {e.duration} · {e.where}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {e.points.map((pt, j) => (
                    <li
                      key={j}
                      className="text-muted text-sm leading-relaxed flex gap-3"
                    >
                      <span className="text-pink mt-1.5 shrink-0">·</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
