"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const sports = [
  {
    title: "Cricket Turf",
    description:
      "Play exciting box cricket matches with friends on our professional turf.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800",
    alt: "Cricket on turf",
  },
  {
    title: "Football Turf",
    description:
      "Enjoy fast-paced football games on our high-quality synthetic turf field.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800",
    alt: "Football on turf",
  },
  {
    title: "Badminton Court",
    description:
      "Play badminton on our well-maintained courts. Perfect for singles, doubles, or practice sessions.",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800",
    alt: "Badminton court",
  },
];

export default function Sports() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary text-center leading-tight">
            Sports Available
          </h2>
        </AnimatedSection>
        <p className="mt-6 text-center text-[#1d1d1f]/70 text-lg max-w-2xl mx-auto font-light">
          Cricket, Football & Badminton — play your favorite sport at our turf
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-8">
          {sports.map((sport, i) => (
            <AnimatedSection key={sport.title} delay={i + 1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] transition-shadow duration-500"
              >
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <Image
                    src={sport.image}
                    alt={sport.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-3xl md:text-4xl font-semibold text-white">
                      {sport.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-[#1d1d1f]/70 text-lg leading-relaxed font-light">
                    {sport.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
