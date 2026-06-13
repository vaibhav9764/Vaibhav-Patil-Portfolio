import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="eyebrow mb-4">// 404</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink mb-4">
          Lost in the void
        </h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          That page doesn&apos;t exist. Probably my fault, probably yours, but
          definitely fixable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-ink bg-gradient-to-r from-pink to-violet shadow-[0_8px_30px_-10px_rgba(232,121,160,0.6)] hover:shadow-[0_12px_40px_-10px_rgba(168,85,247,0.7)] transition-shadow"
        >
          ← back home
        </Link>
      </div>
    </section>
  );
}
