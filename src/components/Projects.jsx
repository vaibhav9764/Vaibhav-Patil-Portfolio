import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Each completed project has a detailed page view.
// TODO: replace placeholder media + copy with real content.

const completed = [
  // {
  //   id: "rag-video-assistant",
  //   name: "RAG Based Video Learning Assistant",
  //   year: "Feb 2026 – Mar 2026",
  //   short:
  //     "RAG-powered system for context-aware search and Q&A over video content using transcription, embeddings, and LLM reasoning.",
  //   tags: ["Python", "RAG", "LLMs", "Whisper", "Embeddings"],
  //   detail: {
  //     tagline: "Turn videos into searchable knowledge.",
  //     problem:
  //       "Video content is hard to search and reuse. Most learning platforms lack fine-grained semantic retrieval over video knowledge.",
  //     build:
  //       "Built a full RAG pipeline: FFmpeg + Whisper for transcription, chunking into structured JSON, bge-m3 embeddings for semantic search, cosine similarity retrieval, and LLaMA-based response generation with context fusion and tuning.",
  //     stack: [
  //       "Python",
  //       "FFmpeg",
  //       "Whisper",
  //       "bge-m3",
  //       "LLaMA",
  //       "Vector Search",
  //     ],
  //     links: [
  //       {
  //         label: "GitHub →",
  //         href: "https://github.com/vaibhav9764/RAG-Based-Video-Learning-Assistant",
  //       },
  //       {
  //         label: "Demo →",
  //         href: "https://drive.google.com/file/d/1Er73z9xgvW7Sra6tOOGyG59yaMzPKYsw/view?usp=sharing",
  //       },
  //     ],
  //     images: [],
  //   },
  // },
  {
    id: "news-research-assistant",
    name: "AI-Powered News Research Assistant",
    year: "Jan 2026 – Feb 2026",
    short:
      "LLM-powered news research system enabling semantic search, summarization, and context-aware Q&A over articles.",
    tags: ["Python", "LangChain", "RAG", "FAISS", "OpenAI"],
    detail: {
      tagline: "Smarter way to read the news.",
      problem:
        "News research is fragmented across sources, making it hard to extract context or track narratives efficiently.",
      build:
        "Developed a RAG pipeline using LangChain, OpenAI embeddings, and FAISS for fast semantic retrieval, enabling low-latency Q&A and source-grounded summarization.",
      stack: ["Python", "LangChain", "FAISS", "OpenAI Embeddings"],
      links: [
        {
          label: "GitHub →",
          href: "https://github.com/vaibhav9764/News-Research-Assistant",
        },
        {
          label: "Demo →",
          href: "https://drive.google.com/file/d/1Yhi7c_zVfIOs6sVS-1CfPak3VCePaE4p/view",
        },
      ],
      images: [],
    },
  },
  {
    id: "sports-classifier",
    name: "Sports Person Classifier",
    year: "Oct 2024 – Nov 2024",
    short:
      "ML system that classifies sportspersons using facial detection, feature extraction, and classical ML models.",
    tags: ["Python", "OpenCV", "Scikit-learn", "ML", "Flask"],
    detail: {
      tagline: "From pixels to prediction.",
      problem:
        "Reliable classification of sports persons from images requires robust feature extraction beyond raw pixels.",
      build:
        "Used Haar cascades for face/eye detection, wavelet transforms for feature extraction, and trained ML models (Logistic Regression, SVM, Random Forest) with tuning. Deployed as a Flask API with a simple frontend.",
      stack: ["Python", "OpenCV", "Scikit-learn", "Flask", "ML"],
      links: [
        {
          label: "GitHub →",
          href: "https://github.com/vaibhav9764/Sports-Person-Classifier",
        },
        {
          label: "Demo →",
          href: "https://drive.google.com/file/d/11Go_IPis_op5u0i6J6LPONeFkKMZvimz/view",
        },
      ],
      images: [],
      achievements: ["Achieved ~84% accuracy with Logistic Regression model"],
    },
  },
  {
    id: "namma-yatri-analytics",
    name: "Namma Yatri Portfolio",
    year: "Feb 2024 – Mar 2024",
    short:
      "Data analytics project analyzing ride patterns, cancellations, payments, and revenue insights using SQL and Power BI.",
    tags: ["SQL", "Excel", "Power BI", "Data Analytics"],
    detail: {
      tagline: "Data-driven urban mobility insights.",
      problem:
        "Ride-hailing platforms generate large datasets but lack actionable visibility into user and driver behavior patterns.",
      build:
        "Analyzed trip datasets using SQL and Excel, extracted key metrics, and built interactive Power BI dashboards for fares, demand hotspots, cancellations, and driver earnings.",
      stack: ["SQL", "Excel", "Power BI"],
      links: [
        {
          label: "GitHub →",
          href: "https://github.com/vaibhav9764/Namma-Yatri-Portfolio",
        },
        {
          label: "Demo →",
          href: "https://drive.google.com/file/d/1v4Y_5p6-TUbSzyvNtpf0j6elmZIiIICE/view",
        },
      ],
      images: [],
    },
  },
  {
    id: "dynamic-notebook",
    name: "Dynamic Notebook Website",
    year: "May 2023 – Jun 2023",
    short:
      "MERN-based note-taking app with authentication, CRUD operations, and responsive UI.",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    detail: {
      tagline: "Simple notes, properly built.",
      problem:
        "Most note apps are either too heavy or lack proper authentication and structured data handling.",
      build:
        "Built a full-stack MERN application with JWT-based authentication, secure CRUD APIs, and a responsive React frontend.",
      stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      links: [
        { label: "GitHub →", href: "https://github.com/vaibhav9764/Notebook" },
        {
          label: "Demo →",
          href: "https://drive.google.com/file/d/10tEw0L998M1-gILbDyfOV7KAM_KdW7br/view",
        },
      ],
      images: [],
    },
  },
];

const ongoing = [
  {
    id: "rag-video-assistant",
    name: "RAG-Based Video Learning Assistant",
    year: "2026",
    short:
      "RAG-powered system for context-aware search and Q&A over video content using transcription, embeddings, and LLM reasoning.",
    tags: ["Python", "RAG", "LLMs", "Whisper", "Embeddings"],
  },
];

function ProjectCard({ p, onOpen, isOngoing }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
      onClick={isOngoing ? undefined : onOpen}
      className={`group rounded-2xl bg-card border border-rule p-6 md:p-7 flex flex-col h-full transition-colors hover:border-ink/30 ${
        isOngoing ? "" : "cursor-pointer"
      }`}
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          {p.year}
        </span>
        {isOngoing && (
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            in progress
          </span>
        )}
      </div>
      <h3 className="font-serif text-2xl text-ink leading-tight">{p.name}</h3>
      <p className="text-muted text-[15px] mt-3 leading-relaxed flex-1">
        {p.short}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-5">
        {p.tags.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded text-[11px] font-mono text-ink-soft bg-warm border border-rule"
          >
            {t}
          </span>
        ))}
      </div>
      {!isOngoing && (
        <div className="mt-6 pt-5 border-t border-rule">
          <span className="inline-flex items-center gap-1.5 text-sm text-ink group-hover:text-pink transition-colors font-medium">
            Read case study
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </div>
      )}
    </motion.article>
  );
}

function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const d = project.detail;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[120] bg-bg/95 backdrop-blur-md overflow-y-auto"
    >
      {" "}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 md:px-10 py-12"
      >
        <button
          onClick={onClose}
          className="font-mono text-xs text-muted hover:text-pink transition-colors mb-10"
        >
          ← back to projects
        </button>

        <p className="eyebrow">// case study · {project.year}</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 text-ink leading-tight">
          {project.name}
        </h1>
        <p className="font-serif italic text-xl md:text-2xl text-pink mt-6">
          {d.tagline}
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="eyebrow mb-3">// the problem</h2>
            <p className="text-ink/90 text-base md:text-lg leading-relaxed">
              {d.problem}
            </p>
          </section>

          <section>
            <h2 className="eyebrow mb-3">// what I built</h2>
            <p className="text-ink/90 text-base md:text-lg leading-relaxed">
              {d.build}
            </p>
          </section>

          <section>
            <h2 className="eyebrow mb-3">// stack</h2>
            <div className="flex flex-wrap gap-2">
              {d.stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-sm border border-rule bg-card text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          {d.images && d.images.length > 0 && (
            <section>
              <h2 className="eyebrow mb-3">// glimpses</h2>
              <div
                className={`grid gap-3 ${
                  d.images.length === 1
                    ? "grid-cols-1"
                    : d.images.length === 2
                      ? "grid-cols-1 sm:grid-cols-2"
                      : "grid-cols-2 md:grid-cols-3"
                }`}
              >
                {d.images.map((src, i) => (
                  <a
                    key={i}
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-xl border border-rule hover:border-ink/30 transition-colors"
                  >
                    <img
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </a>
                ))}
              </div>
            </section>
          )}

          {d.achievements && d.achievements.length > 0 && (
            <section>
              <h2 className="eyebrow mb-3">// achievements</h2>
              <ul className="space-y-3">
                {d.achievements.map((a, i) => (
                  <li
                    key={i}
                    className="rounded-xl p-4 text-ink-soft text-sm md:text-base flex gap-3 bg-card border border-rule"
                  >
                    <span className="text-pink">★</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {d.links && d.links.length > 0 && (
            <section className="pt-4 flex flex-wrap gap-3">
              {d.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full text-sm font-medium bg-ink text-bg hover:bg-pink transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </section>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState(null);
  const openProject = completed.find((p) => p.id === openId);

  return (
    <section id="projects" className="relative px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          // projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="display-serif text-4xl md:text-5xl font-semibold mt-3 mb-4 text-ink"
        >
          Projects
        </motion.h2>
        <p className="text-muted mb-14 max-w-xl text-[15px] leading-relaxed">
          A mix of shipped projects and things still in progress. Click any of
          the completed ones for the full write-up.
        </p>

        <div className="mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-5">
            In progress
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {ongoing.map((p) => (
              <ProjectCard key={p.id} p={p} isOngoing />
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-5">
            Shipped
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {completed.map((p) => (
              <ProjectCard key={p.id} p={p} onOpen={() => setOpenId(p.id)} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openProject && (
          <ProjectDetail
            key={openProject.id}
            project={openProject}
            onClose={() => setOpenId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
