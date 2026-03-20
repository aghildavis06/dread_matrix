import { motion } from "motion/react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const projects = [
  {
    title: "Nimbus Platform Migration",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop",
    alt: "Cloud migration project with cloud infrastructure",
  },
  {
    title: "ConverseAI Assistant",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1200&q=80&auto=format&fit=crop",
    alt: "AI powered chatbot interface and conversation UI",
  },
  {
    title: "Aurora Data Platform",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80&auto=format&fit=crop",
    alt: "Cloud platform migration and infrastructure",
  },
  {
    title: "Lockdown SecureMesh",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&q=80&auto=format&fit=crop",
    alt: "Cybersecurity upgrade with secure lock imagery",
  },
];

export default function FeaturedProjects() {
  // Create multiple clones of the projects array to provide a larger buffer
  // so the carousel can scroll left/right infinitely without visible gaps.
  const cloneCount = 5; // odd number keeps a center copy
  const slides = Array.from({ length: cloneCount }, () => projects).flat();
  const centerIndex = projects.length * Math.floor(cloneCount / 2);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(centerIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (next: number) => {
    if (!trackRef.current) return;
    setIsAnimating(true);
    setIndex(next);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    const t = setInterval(() => next(), 4000);
    return () => clearInterval(t);
  }, [index]);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const getSlideWidth = () => {
      const slide = track.querySelector<HTMLDivElement>("[data-slide]");
      const w = slide ? slide.clientWidth : Math.floor(track.clientWidth / 4);
      return w && w > 10 ? w : Math.floor(track.clientWidth / 4) || 300;
    };

    const slideWidth = getSlideWidth();
    track.style.transition = isAnimating ? "transform 450ms ease" : "none";
    track.style.transform = `translateX(${-index * slideWidth}px)`;

    const handleTransitionEnd = () => {
      setIsAnimating(false);

      if (index >= slides.length - projects.length) {
        const resetIndex =
          centerIndex + (index - (slides.length - projects.length));
        track.style.transition = "none";
        track.style.transform = `translateX(${-resetIndex * slideWidth}px)`;
        setIndex(resetIndex);
      } else if (index < projects.length) {
        const resetIndex = centerIndex + (index - projects.length);
        track.style.transition = "none";
        track.style.transform = `translateX(${-resetIndex * slideWidth}px)`;
        setIndex(resetIndex);
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    // Recalculate on resize (addresses images/layout changes)
    const onResize = () => {
      const w = getSlideWidth();
      track.style.transition = "none";
      track.style.transform = `translateX(${ -index * w }px)`;
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);
    return () => {
      track.removeEventListener("transitionend", handleTransitionEnd);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
    };
  }, [index]);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const getSlideWidth = () => {
      const firstSlide = track.querySelector<HTMLDivElement>("[data-slide]");
      const w = firstSlide ? firstSlide.clientWidth : Math.floor(track.clientWidth / 4);
      return w && w > 10 ? w : Math.floor(track.clientWidth / 4) || 300;
    };

    const slideWidth = getSlideWidth();
    track.style.transition = "none";
    track.style.transform = `translateX(${-centerIndex * slideWidth}px)`;
    // ensure correct position after images load
    const onLoad = () => {
      const w = getSlideWidth();
      track.style.transform = `translateX(${ -centerIndex * w }px)`;
    };
    window.addEventListener('load', onLoad);
    window.addEventListener('resize', onLoad);
    return () => {
      window.removeEventListener('load', onLoad);
      window.removeEventListener('resize', onLoad);
    };
  }, []);

  return (
    <section id="featured" className="w-full bg-loom-black py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured projects we're proud to share
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={prev}
            className="absolute top-1/2 z-50 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg left-3 md:-left-8"
            style={{ color: 'var(--color-loom-black)' }}
          >
            <ArrowLeft size={18} />
          </button>

          <div className="overflow-hidden">
            <div ref={trackRef} className="flex">
              {slides.map((project, i) => (
                <div key={i} data-slide className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group flex flex-col"
                  >
                    <div className="mb-6 overflow-hidden rounded-2xl relative" style={{ paddingTop: '66.66%' }}>
                      <img
                        src={project.image}
                        alt={project.alt}
                        onLoad={() => {
                          const track = trackRef.current;
                          if (!track) return;
                          const slide = track.querySelector<HTMLDivElement>("[data-slide]");
                          const w = slide ? slide.clientWidth : Math.floor(track.clientWidth / 4) || 300;
                          track.style.transition = 'none';
                          track.style.transform = `translateX(${ -index * w }px)`;
                        }}
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="text-center">
                      <h3 className="text-lg text-white">{project.title}</h3>

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

          <button
            onClick={next}
            className="absolute top-1/2 z-50 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg right-3 md:-right-8"
            style={{ color: 'var(--color-loom-black)' }}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}