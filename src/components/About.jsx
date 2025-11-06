import { motion } from 'framer-motion';
import { Atom, Code2, Database, Cpu } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: 24 },
  { label: 'Certifications Earned', value: 6 },
  { label: 'Hours of Coding', value: 1200 },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0e16] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl text-lg text-white/80"
        >
          I’m Koushik, a Computer Science and Engineering student passionate about crafting intelligent digital solutions, blending creativity with technology.
        </motion.p>

        {/* Stats */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
            >
              <div className="text-4xl font-semibold text-cyan-300">
                {s.value.toLocaleString()}
              </div>
              <div className="mt-2 text-sm text-white/70">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl font-medium text-white/90"
          >
            Tech Stack
          </motion.h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { name: 'React', Icon: Atom },
              { name: 'Python', Icon: Code2 },
              { name: 'MySQL', Icon: Database },
              { name: 'AI/ML', Icon: Cpu },
            ].map(({ name, Icon }) => (
              <motion.div
                key={name}
                whileHover={{ y: -6, rotate: 2 }}
                className="group rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
              >
                <Icon className="mx-auto h-8 w-8 text-cyan-300 transition-transform group-hover:scale-110" />
                <div className="mt-2 text-sm text-white/80">{name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
