"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const ADDRESS =
  "Near Bhagat Ghat Mandir, Guru Teg Bahadur Nagar, Kharar Punjab 140301";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Near+Bhagat+Ghat+Mandir+Guru+Teg+Bahadur+Nagar+Kharar+Punjab+140301";

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary text-center leading-tight">
            Find Us
          </h2>
        </AnimatedSection>
        <p className="mt-6 text-center text-[#1d1d1f]/70 text-lg max-w-2xl mx-auto font-light">
          Visit us at Guru Teg Bahadur Nagar, Kharar
        </p>
        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection delay={1}>
            <div className="rounded-2xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] h-80 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1671954686345!2d76.6474!3d30.7416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ0JzMwLjAiTiA3NsKwMzgnNTAuNiJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tri-Sports Academy Kharar Location"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={2}>
            <div>
              <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                Address
              </h3>
              <p className="text-[#1d1d1f]/80 text-lg leading-relaxed mb-8 font-light">
                {ADDRESS}
              </p>
              <motion.a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-medium rounded-full hover:bg-accent-light transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Open in Google Maps
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
