import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    client: "FinStruct",
    title: "Global Banking Interface",
    category: "Fintech",
    stats: "400% faster loads",
    // Unsplash — Finance/trading (free, no attribution required)
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format&fit=crop",
    alt: "Financial dashboard with stock market data and trading interface"
  },
  {
    client: "Velos",
    title: "Automotive Commerce",
    category: "E-Commerce",
    stats: "+25% conversion",
    // Unsplash — Luxury car
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80&auto=format&fit=crop",
    alt: "Luxury sports car on a winding road for automotive e-commerce platform"
  },
  {
    client: "Nexus",
    title: "Data Visualization Platform",
    category: "SaaS",
    stats: "Real-time processing",
    // Unsplash — Data / analytics workspace
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
    alt: "Data analytics dashboard and visualization charts on monitor screens"
  },
  {
    client: "Aether",
    title: "Healthcare Portal",
    category: "Enterprise",
    stats: "HIPAA Compliant",
    // Unsplash — Healthcare / medical
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop",
    alt: "Modern healthcare portal interface on tablet in a medical setting"
  }
];

export default function CaseStudies() {
  return (
    <section id="work" className="w-full bg-loom-black py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
          <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">
            03 — Case Studies
          </h2>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hidden font-mono text-xs text-loom-accent hover:text-white md:block"
          >
            View All Projects →
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-loom-charcoal">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-loom-black/90 via-loom-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 w-full translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-loom-signal uppercase tracking-wider">{item.stats}</span>
                    <div className="flex items-center gap-1 text-xs font-medium text-white">
                      View <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-white/10 pt-3">
                <h3 className="font-display text-lg font-medium text-white leading-tight group-hover:text-loom-accent transition-colors">{item.title}</h3>
                <p className="mt-1 font-mono text-xs text-gray-500">{item.client} / {item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
