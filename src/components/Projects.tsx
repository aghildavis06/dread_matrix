import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    category: 'FINTECH',
    title: 'Cloud Migration',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
  },
  {
    id: 2,
    category: 'AI SOLUTION',
    title: 'AI-Powered Chatbot',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
  },
  {
    id: 3,
    category: 'ENTERPRISE',
    title: 'Cloud Migration',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
  },
  {
    id: 4,
    category: 'SECURITY',
    title: 'Cybersecurity Upgrade',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80',
  },
];

export default function FeaturedProjects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full bg-loom-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Header */}
        <div className="text-left mb-12">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 16,
          }}>
            <div style={{ height: 2, width: 36, backgroundColor: '#F97316' }} />
            <span style={{
              color: '#F97316',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              OUR PROJECTS
            </span>
            <div style={{ height: 2, width: 36, backgroundColor: '#F97316' }} />
          </div>
          <h2 style={{
            fontSize: 40,
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.25,
            margin: 0,
          }}>
            Featured projects we're<br />proud to share
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                boxShadow: hovered === project.id
                  ? '0 12px 40px rgba(15,43,90,0.18)'
                  : '0 4px 20px rgba(15,43,90,0.08)',
                transform: hovered === project.id ? 'translateY(-6px)' : 'translateY(0)',
              }}
              className="rounded-2xl overflow-hidden bg-transparent transition-transform duration-300 cursor-pointer"
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', paddingTop: '75%', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    transform: hovered === project.id ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                {/* Category badge */}
                <div style={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: 6,
                  padding: '4px 10px',
                }}>
                  <span style={{
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                  }}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-loom-charcoal">
                <h3 className="mb-2 text-base font-bold text-white">{project.title}</h3>
                <a href="#" className={`inline-flex items-center gap-2 text-sm font-semibold ${hovered === project.id ? 'text-loom-accent' : 'text-gray-400'}`}>
                  View Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}