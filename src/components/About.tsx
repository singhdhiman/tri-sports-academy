"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#fafaf9]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary text-center leading-tight tracking-tight">
            Welcome to Tri-Sports Academy
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={1}>
          <div className="mt-16 space-y-8 text-lg md:text-xl text-[#1d1d1f]/80 leading-relaxed text-center font-light">
            <p>
              Tri-Sports Academy Kharar is a modern turf sports facility designed for sports lovers.
              Whether you want to play cricket with friends, enjoy football matches, or play badminton,
              our professional turf ground and courts offer the perfect environment for fun and fitness.
            </p>
            <p>
              Our facility provides safe, high-quality turf, fencing for secure gameplay, and powerful
              night lights for evening matches.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
