import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import logo from "../assets/images/4-Photoroom1.png";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-loom-accent origin-left"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-loom-black/90 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="Dread Matrix Logo"
              className="h-15 w-40 object-contain"
            />

            {/* <span className="font-display text-xl font-bold text-white tracking-tight">
              Dread Matrix
            </span> */}
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollTo("services")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo("work")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollTo("process")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="border border-white/20 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-loom-black transition-all"
            >
              Start Project
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
