"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    title: "Grow and Connect with Friends Around the World",
    subtitle: "與世界各地的朋友一起成長與連結",
    description:
      "Join our international program and experience a world-class computer science education in Taiwan.",
    bg: "from-primary to-primary-light",
  },
  {
    title: "Celebrating Cultural Exchange",
    subtitle: "慶祝文化交流",
    description:
      "Immerse yourself in a diverse learning environment with students from around the globe.",
    bg: "from-primary-light to-[#1a5a6c]",
  },
  {
    title: "Build Your Future in Technology",
    subtitle: "在科技領域建立你的未來",
    description:
      "Gain practical skills and knowledge through our comprehensive computer science curriculum.",
    bg: "from-[#1a5a6c] to-primary",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden">
      <div
        key={current}
        className={`bg-gradient-to-r ${slide.bg} text-white py-24 md:py-32 animate-fade-in`}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {slide.title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/80">
            {slide.subtitle}
          </p>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
            {slide.description}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/admission"
              className="bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-3 rounded-lg transition shadow-lg"
            >
              Apply Now 立即申請
            </a>
            <a
              href="/about"
              className="border-2 border-white/50 hover:border-white text-white px-8 py-3 rounded-lg transition"
            >
              Learn More 了解更多
            </a>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-accent w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
