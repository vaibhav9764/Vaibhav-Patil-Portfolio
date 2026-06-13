import { motion } from 'framer-motion';

const items = [
  'Forbes 30 Under 30',
  'TechCrunch',
  'YourStory',
  'LinkedIn Top Voice',
  'Shark Tank',
  'Product Hunt',
  'The New York Times',
  'Wired',
  'Y Combinator',
];

function Row() {
  return (
    <div className="flex items-center gap-10 px-5">
      {items.map((it, i) => (
        <span
          key={i}
          className="font-mono text-sm md:text-base line-through text-muted whitespace-nowrap"
        >
          {it}
        </span>
      ))}
      <span className="font-mono text-sm md:text-base text-pink whitespace-nowrap">
        · yet ·
      </span>
    </div>
  );
}

export default function Ticker() {
  return (
    <section className="relative py-14 border-y border-rule bg-warm">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="eyebrow text-center mb-5"
      >
        // as never featured in
      </motion.p>
      <div className="overflow-hidden">
        <div className="marquee-track">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
