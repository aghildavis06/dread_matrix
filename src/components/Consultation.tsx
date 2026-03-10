import React, { useState } from 'react';

type FormState = { name: string; email: string; company: string; message: string };

const MapEmbed: React.FC = () => (
  <iframe
    title="location-map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
    width="100%"
    height="200"
    style={{ border: 0, borderRadius: 12, display: 'block' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, lines }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
    <div style={{
      width: 42, height: 42, borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.10)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      {icon}
    </div>
    <div>
      <div style={{ fontWeight: 700, fontSize: 15, color: '#0f2b5a', marginBottom: 4 }}>{title}</div>
      {lines.map((line, i) => (
        <div key={i} style={{ fontSize: 13.5, color: '#6b7a99', lineHeight: 1.6 }}>{line}</div>
      ))}
    </div>
  </div>
);

const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{
    width: 32, height: 32, borderRadius: '50%',
    background: '#f0f3fa',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.2s',
  }}>
    <span style={{ fontSize: 14, color: '#0f2b5a', fontWeight: 700 }}>{children}</span>
  </div>
);

export default function FreeConsultation() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  return (
    <section style={{
      minHeight: '100vh',
      background: '#0F0F12',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 24px',
      fontFamily: "'Segoe UI', sans-serif",
      color: '#ffffff',
    }}>
      <div style={{
        maxWidth: 1100,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        gap: 40,
        alignItems: 'start',
      }}>

        {/* LEFT COLUMN */}
        <div>
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ height: 2, width: 36, background: '#F97316' }} />
            <span style={{ color: '#F97316', fontWeight: 700, fontSize: 12, letterSpacing: '2px', textTransform: 'uppercase' }}>
              FREE CONSULTATION
            </span>
          </div>

          {/* Title */}
          <h2 style={{ fontSize: 38, fontWeight: 800, color: '#FFFFFF', margin: '0 0 14px', lineHeight: 1.2 }}>
            Book A Free IT Consultation
          </h2>

          {/* Subtitle */}
          <p style={{ fontSize: 14, color: '#9aa4b3', lineHeight: 1.7, maxWidth: 480, margin: '0 0 32px' }}>
            It is a long established fact that a reader will be distracted the readab content of a page when looking at layout the point.
          </p>

          {/* Info Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px 32px',
            marginBottom: 32,
          }}>
            <InfoCard
              icon={<svg width="18" height="18" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>}
              title="Location"
              lines={['1321 Gateway Atlantic City,', 'Florida, 54012']}
            />
            <InfoCard
              icon={<svg width="18" height="18" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.59-.59a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>}
              title="Phone"
              lines={['(+256) 214 203 215', '(+256) 214 203 216']}
            />
            <InfoCard
              icon={<svg width="18" height="18" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
              title="Email"
              lines={['info@company.com', 'Fexo.info@gmail.comm']}
            />
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{
                width: 42, height: 42, borderRadius: '50%',
                background: '#071127',
                boxShadow: '0 2px 10px rgba(0,0,0,0.6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="18" height="18" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#FFFFFF', marginBottom: 10 }}>Social</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <SocialIcon>f</SocialIcon>
                  <SocialIcon>𝕏</SocialIcon>
                  <SocialIcon>◎</SocialIcon>
                  <SocialIcon>in</SocialIcon>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <MapEmbed />
        </div>

        {/* RIGHT COLUMN — Form Card */}
        <div style={{
          background: '#071127',
          borderRadius: 20,
          padding: '36px 32px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
        }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: '#FFFFFF', margin: '0 0 28px' }}>
            Send Us message
          </h3>

          {[
            { label: 'Full Name*', name: 'name', placeholder: 'Full Name*', type: 'text' },
            { label: 'Email Address*', name: 'email', placeholder: 'Email Address*', type: 'email' },
            { label: 'Company Name*', name: 'company', placeholder: 'Company Name*', type: 'text' },
          ].map((field) => (
            <div key={field.name} style={{ marginBottom: 18 }}>
              <label style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: '#FFFFFF', marginBottom: 8 }}>
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1.5px solid rgba(255,255,255,0.06)',
                  borderRadius: 10,
                  fontSize: 14,
                  color: '#ffffff',
                  outline: 'none',
                  boxSizing: 'border-box',
                  background: '#0b1220',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.currentTarget.style.borderColor = '#F97316'}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              />
            </div>
          ))}

          {/* Message */}
          <div style={{ marginBottom: 26 }}>
            <label style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: '#FFFFFF', marginBottom: 8 }}>
              Message*
            </label>
            <textarea
              name="message"
              placeholder="Write Your Message Here"
              value={form.message}
              onChange={handleChange}
              rows={5}
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1.5px solid rgba(255,255,255,0.06)',
                borderRadius: 10,
                fontSize: 14,
                color: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
                background: '#0b1220',
                resize: 'vertical',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => e.currentTarget.style.borderColor = '#F97316'}
              onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
            />
          </div>

          {/* Submit */}
          <button
            style={{
              width: '100%',
              padding: '14px 0',
              background: '#F97316',
              color: '#fff',
              border: 'none',
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              letterSpacing: '0.3px',
              transition: 'background 0.2s, transform 0.1s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#ea6500'}
            onMouseLeave={e => e.currentTarget.style.background = '#F97316'}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Send A Request
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}