import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, ArrowUp, Globe } from 'lucide-react';

export default function ContactFooter() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2200);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b0e16] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,145,178,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-semibold md:text-4xl">
          Let’s <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
            <div className="grid gap-4">
              <input required placeholder="Your Name" className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400/60 transition" />
              <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400/60 transition" />
              <textarea required placeholder="Message" rows={5} className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400/60 transition" />
              <button type="submit" className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold shadow-lg shadow-cyan-500/20">
                <Send className="h-4 w-4" />
                <span>Send</span>
                <span className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 hover:translate-x-[100%]" />
              </button>
              {sent && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm text-cyan-200">
                  Message sent! I’ll get back to you soon.
                </motion.div>
              )}
            </div>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
            <div className="flex items-center gap-3 text-white/80">
              <Mail className="h-5 w-5 text-cyan-300" />
              <span>contact@koushik.dev</span>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:text-white"><Github className="h-4 w-4" /> GitHub</a>
              <a href="https://linkedin.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:text-white"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <a href="https://fiverr.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:text-white"><Globe className="h-4 w-4" /> Fiverr</a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-white/60">
          <p>© 2025 Koushik. Crafted with 💙 using React & Motion.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/70 transition hover:text-white">
            <ArrowUp className="h-4 w-4" /> Top
          </button>
        </div>
      </div>
    </section>
  );
}
