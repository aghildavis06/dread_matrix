import { motion } from 'motion/react';
import { Code2, Database, Globe, Cpu, Cloud, LayoutTemplate, Box, Terminal } from 'lucide-react';

const stack = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "Node.js", icon: Terminal },
  { name: "Shopify", icon: Box },
  { name: "Webflow", icon: LayoutTemplate },
  { name: "AWS", icon: Cloud },
  { name: "PostgreSQL", icon: Database },
  { name: "Tailwind", icon: Cpu },
];

export default function TechStack() {
  return (
    <section className="w-full bg-loom-black py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 border-b border-white/10 pb-8">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            05 — Technology Stack
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px bg-white/5 sm:grid-cols-4">
          {stack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group flex aspect-square flex-col items-center justify-center bg-loom-black p-8 transition-colors hover:bg-loom-charcoal"
            >
              <item.icon className="mb-4 h-10 w-10 text-gray-500 transition-colors group-hover:text-white" strokeWidth={1.5} />
              <span className="font-mono text-sm text-gray-400 group-hover:text-white">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
