"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax-ready container */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1920"
            alt="Professional turf sports ground"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-white tracking-tight leading-[1.05]"
        >
          Play. Train. Compete.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mt-8 text-xl sm:text-2xl md:text-3xl text-accent font-light tracking-wide"
        >
          Professional Turf Sports Arena in Kharar
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mt-14 flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="tel:+919781373636"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-medium text-lg rounded-full hover:bg-accent-light transition-colors duration-300"
          >
            Call Now
          </motion.a>
          <motion.a
            href="https://wa.me/919781373636?text=Hi!%20I%27d%20like%20to%20book%20the%20turf%20at%20Tri-Sports%20Academy%20Kharar.%20Can%20you%20please%20share%20the%20availability?"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-10 py-4 bg-[#25D366] text-white font-medium text-lg rounded-full hover:bg-[#20BD5A] transition-colors duration-300"
          >
            Book via WhatsApp
          </motion.a>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#location"
              className="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-md text-white font-medium text-lg rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              View Location
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
