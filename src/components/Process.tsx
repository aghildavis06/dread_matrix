import { motion } from 'motion/react';

const steps = [
  "Discover",
  "Architect",
  "Design Systems",
  "Engineer",
  "Test & Optimize",
  "Scale & Maintain"
];

export default function Process() {
  return (
    <section id="process" className="w-full bg-loom-charcoal py-32 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-24 border-b border-white/10 pb-8">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            04 — Process Framework
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 hidden h-px w-full -translate-y-1/2 bg-white/10 lg:block" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative z-10 mb-6 flex h-4 w-4 items-center justify-center rounded-full bg-loom-accent shadow-[0_0_10px_rgba(58,134,255,0.5)] lg:mb-8">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
                <span className="mb-2 font-mono text-xs font-bold text-gray-500">0{index + 1}</span>
                <h3 className="font-display text-lg font-medium text-white">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
