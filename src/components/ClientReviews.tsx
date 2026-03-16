import { motion } from 'motion/react';

function svgDataUri(initials: string, bg = '#005a2b', size = 48) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'><rect width='100%' height='100%' fill='${bg}' rx='20'/><text x='50%' y='50%' dy='.1em' font-family='Helvetica, Arial, sans-serif' font-size='${Math.floor(
    size / 2.4
  )}' fill='#ffffff' text-anchor='middle' dominant-baseline='middle'>${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const reviews = [
  {
    quote:
      "This is why having reviews and client testimonials is important for your business. So, in thiarticle, go over some client testimonial examples you should be aware of and how you can go",
    author: 'Michel Carlos',
    role: 'UI/UX Designer',
    avatar: svgDataUri('MC', '#0b6b4f', 72),
  },
  {
    quote:
      "This is why having reviews and client testimonials is important for your business. So, in thiarticle, go over some client testimonial examples you should be aware of and how you can go",
    author: 'Michel Carlos',
    role: 'UI/UX Designer',
    avatar: svgDataUri('MC', '#0a66c2', 72),
  },
  {
    quote:
      "This is why having reviews and client testimonials is important for your business. So, in thiarticle, go over some client testimonial examples you should be aware of and how you can go",
    author: 'Michel Carlos',
    role: 'UI/UX Designer',
    avatar: svgDataUri('MC', '#6a3fb8', 72),
  },
  {
    quote:
      "This is why having reviews and client testimonials is important for your business. So, in thiarticle, go over some client testimonial examples you should be aware of and how you can go",
    author: 'Michel Carlos',
    role: 'UI/UX Designer',
    avatar: svgDataUri('MC', '#d05a2d', 72),
  },
];

const avatarUrls = [
  svgDataUri('A', '#0b6b4f', 48),
  svgDataUri('B', '#0a66c2', 48),
  svgDataUri('C', '#6a3fb8', 48),
  svgDataUri('D', '#d05a2d', 48),
];

function StarRating({ color = '#F97316', size = 16 }: { color?: string; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={color}>
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

export default function ClientReviews() {
  return (
    <section className="w-full bg-loom-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Top row: heading left, rating right */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
          {/* Left: label + heading */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ color: '#F97316', fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: 'uppercase' }}>
                OUR CLIENT'S
              </span>
              <div style={{ height: 2, width: 40, backgroundColor: '#F97316' }} />
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, margin: 0 }}>
              Here's What Customer<br />our clients say
            </h2>
          </div>

          {/* Right: aggregate rating */}
          <div className="text-center md:text-right">
            <div className="text-4xl md:text-5xl font-extrabold leading-tight">4.9</div>
            <div className="my-1">
              <StarRating size={18} />
            </div>
            <div className="text-sm text-gray-400">Based on 150 reviews</div>
          </div>
        </div>

        {/* Bottom row: dark stats card + testimonial cards */}
        <div className="flex flex-col md:flex-row gap-6 items-start">

          {/* Dark card */}
          <div className="min-w-[220px] bg-[#0f1f3d] rounded-lg p-6 text-white flex-shrink-0">
            <div className="text-sm font-semibold mb-2">Success stories</div>
            <div className="text-3xl font-extrabold leading-tight">98%</div>
            <div className="text-xs text-white/60 mt-2 mb-4">Client Retention Rate</div>

            <div className="h-px bg-white/12 mb-4" />

            <div className="flex items-center gap-3 mb-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#00b67a" className="flex-shrink-0">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="text-sm font-bold">Trustpilot</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatarUrls.map((url, i) => (
                  <img key={i} src={url} alt="" className="w-7 h-7 rounded-full border-2 border-[#0f1f3d] object-cover" />
                ))}
              </div>
              <StarRating size={12} />
              <span className="text-xs text-white/60">450+ reviews</span>
            </div>
          </div>
          {/* Testimonial cards */}
          <div className="flex gap-4 overflow-x-auto pb-4 flex-1">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="min-w-[220px] max-w-[240px] flex-shrink-0 bg-loom-charcoal rounded-lg p-5 shadow-md"
              >
                {/* Stars */}
                <div style={{ marginBottom: 12 }}>
                  <StarRating size={14} />
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-300 leading-relaxed mb-4">{r.quote}</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.author} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-bold">{r.author}</div>
                    <div className="text-xs text-gray-400">{r.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}