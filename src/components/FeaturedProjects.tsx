import { motion } from "motion/react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Cloud Migration",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
    alt: "Cloud migration project with team collaborating",
  },
  {
    title: "AI-Powered Chatbot",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
    alt: "AI-powered chatbot interface",
  },
  {
    title: "Cloud Migration",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
    alt: "Cloud migration project implementation",
  },
  {
    title: "Cybersecurity Upgrade",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
    alt: "Cybersecurity upgrade and protection",
  },
];

export default function FeaturedProjects() {
  const slides = [...projects, ...projects, ...projects];
  const centerIndex = projects.length;

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
    const slide = track.querySelector<HTMLDivElement>("[data-slide]");
    const slideWidth = slide ? slide.clientWidth : track.clientWidth / 4;

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
    return () =>
      track.removeEventListener("transitionend", handleTransitionEnd);
  }, [index]);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const firstSlide = track.querySelector<HTMLDivElement>("[data-slide]");
    const slideWidth = firstSlide ? firstSlide.clientWidth : track.clientWidth / 4;

    track.style.transition = "none";
    track.style.transform = `translateX(${-centerIndex * slideWidth}px)`;
  }, []);

  return (
    <section id="featured" className="w-full bg-loom-black py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured projects we're proud to share
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white p-2"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="overflow-hidden">
            <div ref={trackRef} className="flex">
              {slides.map((project, i) => (
                <div key={i} data-slide className="w-[25%] flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group flex flex-col"
                  >
                    <div className="mb-6 overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
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
            className="absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white p-2"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}