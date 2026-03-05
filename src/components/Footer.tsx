"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-semibold text-white mb-4 tracking-tight">
              Tri-Sports Academy Kharar
            </h3>
            <p className="text-white/60 mb-8 max-w-md text-sm leading-relaxed font-light">
              Professional turf sports arena for cricket, football & badminton. Play,
              train, and compete in the heart of Kharar.
            </p>
            <div className="space-y-3 text-sm text-white/70 font-light">
              <p>
                <a
                  href="tel:+919781373636"
                  className="hover:text-accent transition-colors"
                >
                  9781373636
                </a>
              </p>
              <p>
                <a
                  href="tel:+919914410407"
                  className="hover:text-accent transition-colors"
                >
                  9914410407
                </a>
              </p>
              <p>
                <a
                  href="mailto:trisportskharar@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  trisportskharar@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://instagram.com/trisportsacademykharar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @trisportsacademykharar
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-white/90 uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-4">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#gallery", label: "Gallery" },
                { href: "#location", label: "Location" },
                { href: "#contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white/60 hover:text-accent transition-colors text-sm font-light"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm font-light"
        >
          © {new Date().getFullYear()} Tri-Sports Academy Kharar. All rights
          reserved.
        </motion.div>
      </div>
    </footer>
  );
}
