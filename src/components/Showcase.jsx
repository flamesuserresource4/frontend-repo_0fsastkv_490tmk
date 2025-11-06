import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, BadgeCheck } from 'lucide-react';

const projects = [
  {
    title: 'Streamlit Notes Summarizer App',
    desc: 'AI-powered summarization for text, audio, and video.',
    stack: ['Python', 'Streamlit', 'OpenAI'],
    github: '#',
    demo: '#',
    accent: 'from-cyan-500/30 to-purple-500/30',
  },
  {
    title: 'Inventory Management System (C)',
    desc: 'CLI program with CRUD & report generation.',
    stack: ['C', 'Data Structures'],
    github: '#',
    demo: '#',
    accent: 'from-blue-500/30 to-cyan-500/30',
  },
  {
    title: 'Synthex Chrome Extension',
    desc: 'Interactive flashcard learning tool.',
    stack: ['JavaScript', 'Chrome APIs'],
    github: '#',
    demo: '#',
    accent: 'from-fuchsia-500/30 to-cyan-500/30',
  },
];

const certificates = [
  { title: 'Python Certificate', issuer: 'Skill India' },
  { title: 'Machine Learning Basics', issuer: 'Placeholder Institute' },
];

const milestones = [
  { year: '2024', text: 'Built first AI summarizer app' },
  { year: '2025', text: 'Started “Evernxt” and offered digital services' },
  { year: '2025', text: 'Published first Chrome Extension' },
];

export default function Showcase() {
  return (
    <section id="projects" className="relative w-full bg-[#0a0c12] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.06),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.06),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Projects */}
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-semibold md:text-4xl">
          Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg`}
              style={{ perspective: '1000px' }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <Sparkles className="h-4 w-4 text-cyan-300/80" />
                </div>
                <p className="mt-2 text-sm text-white/80">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80">{s}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.github} className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:text-white">
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a href={p.demo} className="inline-flex items-center gap-1 rounded-full border border-cyan-400/40 px-3 py-1.5 text-xs text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 text-2xl font-semibold">
          Certifications
        </motion.h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {certificates.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, rotateY: -15, y: 20 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative origin-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-purple-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-cyan-300">
                  <BadgeCheck className="h-5 w-5" />
                  <span className="text-sm">Verified</span>
                </div>
                <div className="mt-2 text-lg font-medium">{c.title}</div>
                <div className="text-sm text-white/70">{c.issuer}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 text-2xl font-semibold">
          Achievements & Timeline
        </motion.h3>
        <div className="mt-8 relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div key={m.text} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="relative pl-12">
                <div className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
                <div className="text-sm text-cyan-200/80">{m.year}</div>
                <div className="text-white/90">{m.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
