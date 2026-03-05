"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import AnimatedSection from "./AnimatedSection";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800",
    alt: "Professional turf ground at Tri-Sports Academy",
    caption: "Turf Ground",
  },
  {
    src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800",
    alt: "Cricket on turf",
    caption: "Cricket Turf",
  },
  {
    src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800",
    alt: "Football match on turf",
    caption: "Football Turf",
  },
  {
    src: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800",
    alt: "Badminton court at Tri-Sports Academy",
    caption: "Badminton Court",
  },
  {
    src: "https://images.unsplash.com/photo-1512719993082-7e7409d1cd0b?q=80&w=800",
    alt: "Sports equipment for cricket, football and badminton",
    caption: "Sports Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=800",
    alt: "Night lighting for evening matches",
    caption: "Night Lighting",
  },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = galleryImages.map((img) => ({
    src: img.src.replace("w=800", "w=1200"),
    alt: img.alt,
    title: img.caption,
  }));

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#fafaf9]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary text-center leading-tight">
            Gallery
          </h2>
        </AnimatedSection>
        <p className="mt-6 text-center text-[#1d1d1f]/70 text-lg max-w-2xl mx-auto font-light">
          Our turf ground, courts, and facilities in Kharar
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <AnimatedSection key={index} delay={index + 1}>
              <div className="group">
                <motion.button
                  type="button"
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative block aspect-[4/3] overflow-hidden rounded-2xl w-full text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#fafaf9]"
                  aria-label={`View ${image.caption} - Click to enlarge`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </span>
                </motion.button>
                <p className="mt-4 font-display text-lg font-semibold text-primary text-center">
                  {image.caption}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  );
}
