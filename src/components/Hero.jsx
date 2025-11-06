import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Download, ChevronDown } from 'lucide-react';

const words = [
  'I design.',
  'I code.',
  'I create.',
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#05060a] text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and particle overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.10),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.10),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-sm tracking-widest text-cyan-300/80">WELCOME TO MY WORLD</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Koushik <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Last Name</span>
          </h1>
          <p className="text-lg text-white/80 md:text-xl">
            CSE Student | Developer | Innovator | Freelancer
          </p>

          {/* Typing/morphing word effect */}
          <div className="h-10 overflow-hidden text-2xl font-medium md:text-3xl">
            <AnimatePresence mode="wait">
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{words[index]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Actions */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={() => handleScrollTo('projects')} className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500/90 to-blue-600/90 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40">
              <span className="relative z-10">View My Work</span>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-white/10 to-purple-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
            <a href="/Koushik_Resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-cyan-400/40 px-6 py-3 text-sm font-semibold text-cyan-300 backdrop-blur hover:border-cyan-300 hover:text-cyan-200 transition inline-flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => handleScrollTo('about')}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 inline-flex items-center gap-2 text-cyan-200/80 hover:text-cyan-100"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
          Scroll
        </motion.button>
      </div>
    </section>
  );
}
