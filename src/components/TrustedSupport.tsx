import { motion } from 'motion/react';
import { Target, Eye, Clock } from 'lucide-react';

const support = [
  {
    title: "Our Mission",
    icon: Target,
    desc: "Deliver engineering excellence that empowers businesses to grow with confidence."
  },
  {
    title: "Our Vision",
    icon: Eye,
    desc: "Be the trusted partner for companies building the future of digital experiences."
  },
  {
    title: "Our History",
    icon: Clock,
    desc: "Founded in 2010, we've consistently pushed the boundaries of performance and reliability."
  }
];

export default function TrustedSupport() {
  return (
    <section id="support" className="w-full bg-loom-black py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 border-b border-white/10 pb-8">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Our Trusted Support
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {support.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden border border-white/5 bg-loom-charcoal p-8 transition-colors hover:border-loom-accent/50 hover:bg-white/5"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-white group-hover:bg-white group-hover:text-loom-black transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="mb-3 font-display text-xl font-medium text-white">
                {item.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-loom-accent transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
