import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, lines }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
    <div
      style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.10)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {icon}
    </div>
    <div>
      <div
        style={{
          fontWeight: 700,
          fontSize: 15,
          color: "#0f2b5a",
          marginBottom: 4,
        }}
      >
        {title}
      </div>
      {lines.map((line, i) => (
        <div
          key={i}
          style={{ fontSize: 13.5, color: "#6b7a99", lineHeight: 1.6 }}
        >
          {line}
        </div>
      ))}
    </div>
  </div>
);

const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "#f0f3fa",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "background 0.2s",
    }}
  >
    <span style={{ fontSize: 14, color: "#0f2b5a", fontWeight: 700 }}>
      {children}
    </span>
  </div>
);

export default function FreeConsultation() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section id="free-consultation" className="bg-loom-black py-10 text-white">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* LEFT COLUMN */}
        <div>
          {/* Label */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-0.5 w-9 bg-loom-accent" />
            <span className="text-xxs md:text-xs text-loom-accent font-bold tracking-widest uppercase">
              FREE CONSULTATION
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-3">
            Book A Free IT Consultation
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-lg mb-6">
            It is a long established fact that a reader will be distracted the
            readab content of a page when looking at layout the point.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8">
            <InfoCard
              icon={
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
              title="Location"
              lines={["1321 Gateway Kerala,", "India – 678541"]}
            />
            <InfoCard
              icon={
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.59-.59a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                </svg>
              }
              title="Phone"
              lines={["(+91) 8078 561 913", "(+91) 7012 551 854"]}
            />
            <InfoCard
              icon={
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              }
              title="Email"
              lines={["info@dreadmatrix.in", "hello@dreadmatrix.in"]}
            />
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "var(--color-loom-charcoal)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#FFFFFF",
                    marginBottom: 10,
                  }}
                >
                  Social
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <SocialIcon>f</SocialIcon>
                  <SocialIcon>𝕏</SocialIcon>
                  <SocialIcon>◎</SocialIcon>
                  <SocialIcon>in</SocialIcon>
                </div>
              </div>
            </div>
          </div>

          {/* Map removed per request */}
        </div>

        {/* RIGHT COLUMN — Form Card */}
        <div className="bg-loom-charcoal rounded-2xl p-6 md:p-8 shadow-lg mt-6 md:mt-0">
          <h3 className="text-lg md:text-xl font-bold text-white mb-6">
            Send Us message
          </h3>

          {[
            {
              label: "Full Name*",
              name: "name",
              placeholder: "Full Name*",
              type: "text",
            },
            {
              label: "Email Address*",
              name: "email",
              placeholder: "Email Address*",
              type: "email",
            },
            {
              label: "Company Name*",
              name: "company",
              placeholder: "Company Name*",
              type: "text",
            },
          ].map((field) => (
            <div key={field.name} style={{ marginBottom: 18 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: 8,
                }}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={handleChange}
                className="w-full px-3 py-3 border rounded-lg text-white bg-[#0b1220] border-white/6 text-sm"
                onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
                  (e.currentTarget.style.borderColor = "#F97316")
                }
                onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")
                }
              />
            </div>
          ))}

          {/* Message */}
          <div style={{ marginBottom: 26 }}>
            <label
              style={{
                display: "block",
                fontSize: 13.5,
                fontWeight: 600,
                color: "#FFFFFF",
                marginBottom: 8,
              }}
            >
              Message*
            </label>
            <textarea
              name="message"
              placeholder="Write Your Message Here"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-3 py-3 border rounded-lg text-white bg-[#0b1220] border-white/6 text-sm resize-y"
              onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) =>
                (e.currentTarget.style.borderColor = "#F97316")
              }
              onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")
              }
            />
          </div>

          {/* Submit */}
          <button className="w-full py-3 rounded-full bg-loom-accent text-white font-bold tracking-wide flex items-center justify-center gap-2 hover:opacity-95 active:scale-95 transition">
            Send A Request
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
