"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const WHATSAPP_URL =
  "https://wa.me/919781373636?text=Hi!%20I'd%20like%20to%20book%20the%20turf%20at%20Tri-Sports%20Academy%20Kharar.%20Can%20you%20please%20share%20the%20availability?";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center leading-tight">
            Contact Us
          </h2>
        </AnimatedSection>
        <p className="mt-6 text-center text-white/80 text-lg max-w-2xl mx-auto font-light">
          Call, message, or visit — we&apos;d love to hear from you
        </p>
        <div className="mt-16">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <AnimatedSection delay={1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 text-center hover:bg-white/10 transition-colors duration-300">
                <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
                  Phone
                </p>
                <a
                  href="tel:+919781373636"
                  className="text-white text-lg font-light hover:text-accent transition-colors block"
                >
                  9781373636
                </a>
                <a
                  href="tel:+919914410407"
                  className="text-white text-lg font-light hover:text-accent transition-colors block mt-2"
                >
                  9914410407
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 text-center hover:bg-white/10 transition-colors duration-300">
                <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
                  Email
                </p>
                <a
                  href="mailto:trisportskharar@gmail.com"
                  className="text-white text-lg font-light hover:text-accent transition-colors break-all"
                >
                  trisportskharar@gmail.com
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={3}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 text-center hover:bg-white/10 transition-colors duration-300">
                <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
                  Operating Hours
                </p>
                <p className="text-white text-lg font-light">
                  Mon – Sun
                </p>
                <p className="text-white/90 text-base font-light mt-1">
                  6:00 AM – 10:00 PM
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={3}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 text-center hover:bg-white/10 transition-colors duration-300">
                <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/trisportsacademykharar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-light hover:text-accent transition-colors"
                >
                  @trisportsacademykharar
                </a>
              </div>
            </AnimatedSection>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+919781373636"
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-medium text-lg rounded-full hover:bg-accent-light transition-colors"
            >
              Call Now
            </motion.a>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#25D366] text-white font-medium text-lg rounded-full hover:bg-[#20BD5A] transition-colors"
            >
              Book via WhatsApp
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
