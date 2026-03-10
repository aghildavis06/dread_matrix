import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Digital Loom didn't just build a website; they engineered a scalable platform that handles our massive traffic spikes with zero downtime.",
    author: "Sarah Chen",
    role: "CTO, FinStruct"
  },
  {
    quote: "The precision and attention to detail in their code is unmatched. A true engineering partner.",
    author: "Marcus Thorne",
    role: "VP of Engineering, Nexus"
  },
  {
    quote: "We needed a system, not a template. Digital Loom delivered a robust architecture that powers our entire operation.",
    author: "Elena Rodriguez",
    role: "Director of Product, Velos"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-loom-charcoal py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 border-b border-white/10 pb-8">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            08 — Client Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col justify-between"
            >
              <p className="mb-8 font-sans text-lg leading-relaxed text-gray-300">
                "{item.quote}"
              </p>
              <div>
                <div className="font-display text-base font-bold text-white">{item.author}</div>
                <div className="font-mono text-xs text-gray-500">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
