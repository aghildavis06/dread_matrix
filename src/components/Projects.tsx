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
    <section style={{
      padding: '64px 0 80px',
      width: '100%',
      background: '#0F0F12',
      color: '#ffffff',
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}>
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                background: 'transparent',
                boxShadow: hovered === project.id
                  ? '0 12px 40px rgba(15,43,90,0.18)'
                  : '0 4px 20px rgba(15,43,90,0.08)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                transform: hovered === project.id ? 'translateY(-6px)' : 'translateY(0)',
                cursor: 'pointer',
              }}
            >
              {/* Image */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '75%',
                overflow: 'hidden',
              }}>
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
              <div style={{
                padding: '18px 20px 20px',
                background: '#071127',
              }}>
                <h3 style={{
                  margin: '0 0 10px',
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#ffffff',
                }}>
                  {project.title}
                </h3>
                <a
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    color: hovered === project.id ? '#F97316' : '#9aa4b3',
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
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