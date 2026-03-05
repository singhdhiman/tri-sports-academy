"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-sport-green/95 backdrop-blur-md border-b border-sport-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="#home"
            className="font-display text-xl md:text-2xl font-bold text-sport-yellow tracking-wide hover:text-white transition-colors"
          >
            Tri-Sports Academy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-sport-yellow font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919781373636"
              className="bg-sport-yellow text-sport-green px-4 py-2 rounded-lg font-semibold hover:bg-sport-yellow-dark transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-sport-yellow/20 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/90 hover:text-sport-yellow font-medium transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+919781373636"
                className="bg-sport-yellow text-sport-green px-4 py-3 rounded-lg font-semibold text-center hover:bg-sport-yellow-dark transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
