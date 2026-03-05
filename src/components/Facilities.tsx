"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const facilities = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    title: "Expert Coaching",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    title: "Skill Development & Fitness",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    title: "Box Cricket & Friendly Matches",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
    title: "Professional Turf Ground",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    ),
    title: "Night Lighting",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    title: "Safe Fenced Ground",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
    ),
    title: "Badminton Courts",
  },
];

export default function Facilities() {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center leading-tight">
            Our Facilities
          </h2>
        </AnimatedSection>
        <p className="mt-6 text-center text-white/80 text-lg max-w-2xl mx-auto font-light">
          Everything you need for cricket, football & badminton
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facilities.map((facility, i) => (
            <AnimatedSection key={facility.title} delay={i + 1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col items-center text-center p-8 md:p-10 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300"
              >
                <div className="mb-6 w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/30 transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {facility.icon}
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {facility.title}
                </h3>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
