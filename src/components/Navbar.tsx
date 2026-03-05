"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="#home"
            className={`font-display text-lg md:text-xl font-semibold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Tri-Sports Academy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:opacity-80 ${
                    isActive
                      ? "text-accent font-semibold"
                      : scrolled
                        ? "text-primary"
                        : "text-white/90"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:+919781373636"
              className="text-sm font-medium px-5 py-2.5 bg-accent text-primary rounded-full hover:bg-accent-light transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919781373636?text=Hi!%20I'd%20like%20to%20book%20the%20turf%20at%20Tri-Sports%20Academy%20Kharar."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-5 py-2.5 bg-[#25D366] text-white rounded-full hover:bg-[#20BD5A] transition-colors"
            >
              Book
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${
              scrolled ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 border-t border-primary/10 flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-primary font-medium py-2 hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <a
                  href="tel:+919781373636"
                  className="mt-2 inline-flex justify-center px-6 py-3 bg-accent text-primary font-medium rounded-full"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919781373636?text=Hi!%20I'd%20like%20to%20book%20the%20turf%20at%20Tri-Sports%20Academy%20Kharar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex justify-center px-6 py-3 bg-[#25D366] text-white font-medium rounded-full"
                >
                  Book via WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
