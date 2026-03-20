import { motion } from 'motion/react';

const metrics = [
  { label: "Uptime Architecture", value: "99.9%" },
  { label: "Performance Optimization", value: "40%+" },
  { label: "Security Principles", value: "Enterprise" },
  { label: "Scalability", value: "Global" },
];

export default function Authority() {
  return (
    <section className="w-full bg-loom-black py-24 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col border-l border-white/10 pl-6"
            >
              <span className="font-display text-4xl font-bold text-white md:text-5xl">
                {metric.value}
              </span>
              <span className="mt-2 font-mono text-xs uppercase tracking-wider text-gray-500">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
