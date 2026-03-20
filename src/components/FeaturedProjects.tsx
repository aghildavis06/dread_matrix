import { motion } from "motion/react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Nimbus Platform Migration",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop",
    alt: "Cloud migration project",
  },
  {
    title: "ConverseAI Assistant",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1200&q=80&auto=format&fit=crop",
    alt: "AI powered chatbot",
  },
  {
    title: "Aurora Data Platform",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80&auto=format&fit=crop",
    alt: "Cloud platform migration",
  },
  {
    title: "Lockdown SecureMesh",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&q=80&auto=format&fit=crop",
    alt: "Cybersecurity upgrade",
  },
];

const cloneCount = 5;
const slides = Array.from({ length: cloneCount }, () => projects).flat();
const centerIndex = projects.length * Math.floor(cloneCount / 2);

export default function FeaturedProjects() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef(centerIndex);
  const [index, setIndex] = useState(centerIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const getSlideWidth = () => {
    const track = trackRef.current;
    if (!track) return 300;
    const slide = track.querySelector<HTMLDivElement>("[data-slide]");
    return slide?.clientWidth || track.clientWidth / 4 || 300;
  };

  const jumpTo = (next: number, animate: boolean) => {
    const track = trackRef.current;
    if (!track) return;
    const w = getSlideWidth();
    track.style.transition = animate ? "transform 450ms ease" : "none";
    track.style.transform = `translateX(${-next * w}px)`;
    indexRef.current = next;
    setIndex(next);
  };

  const goTo = (next: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    jumpTo(next, true);
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      jumpTo(centerIndex, false);
    });

    const onResize = () => jumpTo(indexRef.current, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleTransitionEnd = () => {
      setIsAnimating(false);
      const current = indexRef.current;

      if (current >= slides.length - projects.length) {
        const reset =
          centerIndex + (current - (slides.length - projects.length));
        jumpTo(reset, false);
      } else if (current < projects.length) {
        const reset = centerIndex + (current - projects.length);
        jumpTo(reset, false);
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      track.removeEventListener("transitionend", handleTransitionEnd);
  }, []);

  useEffect(() => {
    const t = setInterval(() => goTo(indexRef.current + 1), 4000);
    return () => clearInterval(t);
  }, [isAnimating]);

  return (
    <section id="featured" className="w-full bg-loom-black py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured projects we're proud to share
          </h2>
        </div>

        <div className="relative">
          {/* LEFT BUTTON */}
          <button
            onClick={() => goTo(indexRef.current - 1)}
            className="absolute top-1/2 z-50 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg left-3 md:-left-8"
            style={{ color: "var(--color-loom-black)" }}
          >
            <ArrowLeft size={18} />
          </button>

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div ref={trackRef} className="flex">
              {slides.map((project, i) => (
                <div
                  key={i}
                  data-slide
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group flex flex-col"
                  >
                    <div
                      className="mb-6 overflow-hidden rounded-2xl relative"
                      style={{ paddingTop: "66.66%" }}
                    >
                      <img
                        src={project.image}
                        alt={project.alt}
                        onLoad={() => jumpTo(indexRef.current, false)}
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="text-center">
                      <h3 className="text-lg text-white">
                        {project.title}
                      </h3>

                      {/* ✅ FIXED LINK */}
                      <a
                        href="#"
                        className="mt-3 inline-flex items-center gap-2 text-sm text-loom-accent"
                      >
                        View Details <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => goTo(indexRef.current + 1)}
            className="absolute top-1/2 z-50 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg right-3 md:-right-8"
            style={{ color: "var(--color-loom-black)" }}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}