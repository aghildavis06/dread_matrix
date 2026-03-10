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
    <section
      style={{
        width: '100%',
        backgroundColor: '#0F0F12',
        padding: '64px 0',
        color: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>

        {/* Top row: heading left, rating right */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
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
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 48, fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>4.9</div>
            <div style={{ margin: '6px 0 4px' }}>
              <StarRating size={18} />
            </div>
            <div style={{ fontSize: 13, color: '#9aa4b3' }}>Based on 150 reviews</div>
          </div>
        </div>

        {/* Bottom row: dark stats card + testimonial cards */}
        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>

          {/* Dark card */}
          <div
            style={{
              minWidth: 220,
              backgroundColor: '#0f1f3d',
              borderRadius: 16,
              padding: '28px 24px',
              color: '#fff',
              flexShrink: 0,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 10 }}>Success stories</div>
            <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1 }}>98%</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 6, marginBottom: 24 }}>
              Client Retention Rate
            </div>

            <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.12)', marginBottom: 20 }} />

            {/* Trustpilot row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#00b67a">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Trustpilot</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ display: 'flex' }}>
                {avatarUrls.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt=""
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      border: '2px solid #0f1f3d',
                      marginLeft: i === 0 ? 0 : -8,
                      objectFit: 'cover',
                    }}
                  />
                ))}
              </div>
              <StarRating size={12} />
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginLeft: 4 }}>450+ reviews</span>
            </div>
          </div>

          {/* Testimonial cards */}
              <div style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 4, flex: 1 }}>
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  minWidth: 220,
                  maxWidth: 240,
                  flexShrink: 0,
                  backgroundColor: '#071127',
                  borderRadius: 14,
                  padding: '20px 18px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.6)',
                }}
              >
                {/* Stars */}
                <div style={{ marginBottom: 12 }}>
                  <StarRating size={14} />
                </div>

                {/* Quote */}
                <p style={{ fontSize: 13, color: '#cbd5e1', lineHeight: 1.6, marginBottom: 18 }}>
                  {r.quote}
                </p>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img
                    src={r.avatar}
                    alt={r.author}
                    style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#ffffff' }}>{r.author}</div>
                    <div style={{ fontSize: 11, color: '#9aa4b3' }}>{r.role}</div>
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