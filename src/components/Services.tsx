import { motion } from 'motion/react';
import { Server, ShoppingCart, Layers, Layout, Database, Zap } from 'lucide-react';

const services = [
  {
    title: "Web Architecture",
    icon: Server,
    desc: "Scalable, resilient systems built for high-traffic environments."
  },
  {
    title: "Commerce Engineering",
    icon: ShoppingCart,
    desc: "Headless commerce solutions optimized for conversion and speed."
  },
  {
    title: "SaaS Product Systems",
    icon: Layers,
    desc: "Full-cycle product development from MVP to enterprise scale."
  },
  {
    title: "UI/UX Frameworks",
    icon: Layout,
    desc: "Design systems that ensure consistency and rapid iteration."
  },
  {
    title: "API Infrastructure",
    icon: Database,
    desc: "Robust backend architectures and microservices."
  },
  {
    title: "Performance",
    icon: Zap,
    desc: "Core Web Vitals optimization and load time reduction."
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-loom-black py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 border-b border-white/10 pb-8">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            02 — Engineering Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden border border-white/5 bg-loom-charcoal p-8 transition-colors hover:border-loom-accent/50 hover:bg-white/5"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-white group-hover:bg-white group-hover:text-loom-black transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="mb-3 font-display text-xl font-medium text-white">
                {service.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-gray-400">
                {service.desc}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-loom-accent transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
