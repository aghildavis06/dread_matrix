import { Shield, Layers } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-loom-black py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Left: Overlapping Images */}
          <div className="relative h-[420px]">
            {/* Top-left larger image */}
            <div className="absolute left-0 top-0 w-[58%] overflow-hidden rounded-2xl shadow-lg z-10">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop"
                alt="Professional working on computer"
                className="w-full h-[300px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom-right smaller image */}
            <div className="absolute bottom-0 right-0 w-[58%] overflow-hidden rounded-2xl shadow-lg z-20">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format&fit=crop"
                alt="Team collaborating around screens"
                className="w-full h-[240px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 25+ badge */}
            <div className="absolute bottom-6 left-4 z-30 flex items-center gap-2">
              <span
                style={{ fontFamily: 'Georgia, serif' }}
                className="text-5xl font-bold leading-none text-white"
              >
                25+
              </span>
              <span className="text-sm font-medium leading-tight text-white">
                Year Of Working<br />Experience
              </span>
            </div>

            {/* Decorative orange squiggle */}
            <div className="absolute top-[40px] right-[calc(42%-30px)] z-30">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30 8 C20 8, 10 18, 20 28 C30 38, 50 28, 40 18 C35 13, 28 20, 34 26"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M38 30 L42 48"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="h-px w-8 bg-orange-500" />
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                Businesses Trust Our IT Expertise
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-4xl font-bold leading-tight text-white"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Our Digital Solutions Are<br />The Most Innovative
            </h2>

            {/* Body */}
            <p className="text-sm leading-relaxed text-gray-400">
              It is a long established fact that a reader will be distracted by the readable content of a
              page when looking at layout. The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters.
            </p>

            {/* Features */}
            <div className="space-y-5 pt-2">
              {/* Security */}
              <div className="flex items-start gap-4">
                <div
                  className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border"
                  style={{ borderColor: '#e5e7eb', color: '#f97316' }}
                >
                  <Shield className="h-4 w-4" />
                </div>
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <div>
                    <h4 className="font-semibold text-sm text-white">
                      Security-First<br />Approach
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Advanced cybersecurity and compliance to protect your data and systems.
                  </p>
                </div>
              </div>

              {/* Scalable */}
              <div className="flex items-start gap-4">
                <div
                  className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border"
                  style={{ borderColor: '#e5e7eb', color: '#f97316' }}
                >
                  <Layers className="h-4 w-4" />
                </div>
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <div>
                    <h4 className="font-semibold text-sm text-white">
                      Scalable &amp; Flexible<br />Solutions
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Years of experience in delivering enterprise-level IT solutions across industries.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom tagline */}
            <p className="text-sm font-medium pt-2 text-white">
              We work diligently and responsibly on our assignments, producing high-quality results.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}