"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  {
    value: "3",
    label: "Sports",
    subtext: "Cricket, Football & Badminton",
  },
  {
    value: "Professional",
    label: "Turf Quality",
    subtext: "Synthetic turf ground",
  },
  {
    value: "Evening",
    label: "Night Matches",
    subtext: "Full lighting available",
  },
  {
    value: "Safe",
    label: "Fenced Ground",
    subtext: "Secure for all ages",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary text-center leading-tight">
            Why Tri-Sports Academy?
          </h2>
        </AnimatedSection>
        <p className="mt-6 text-center text-[#1d1d1f]/70 text-lg max-w-2xl mx-auto font-light">
          The best turf sports facility in Kharar for cricket, football, and badminton enthusiasts.
        </p>
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.label} delay={i + 1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8 rounded-2xl bg-[#fafaf9] hover:bg-primary/5 transition-colors duration-300"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-accent">
                  {item.value}
                </p>
                <p className="mt-3 font-display text-xl font-semibold text-primary">
                  {item.label}
                </p>
                <p className="mt-2 text-[#1d1d1f]/60 text-sm font-light">
                  {item.subtext}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
