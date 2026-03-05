import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sport-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold text-sport-yellow mb-4">
              Tri-Sports Academy Kharar
            </h3>
            <p className="text-white/80 mb-4 max-w-md">
              Professional turf sports arena for cricket and football. Play, train, and compete in
              the heart of Kharar.
            </p>
            <div className="space-y-2 text-white/90">
              <p>
                <a href="tel:+919781373636" className="hover:text-sport-yellow transition-colors">
                  📞 9781373636
                </a>
              </p>
              <p>
                <a href="tel:+919914410407" className="hover:text-sport-yellow transition-colors">
                  📞 9914410407
                </a>
              </p>
              <p>
                <a
                  href="mailto:trisportskharar@gmail.com"
                  className="hover:text-sport-yellow transition-colors"
                >
                  ✉️ trisportskharar@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://instagram.com/trisportsacademykharar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sport-yellow transition-colors"
                >
                  📸 @trisportsacademykharar
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-sport-yellow mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="text-white/80 hover:text-sport-yellow transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-white/80 hover:text-sport-yellow transition-colors">
                About
              </Link>
              <Link href="#gallery" className="text-white/80 hover:text-sport-yellow transition-colors">
                Gallery
              </Link>
              <Link href="#location" className="text-white/80 hover:text-sport-yellow transition-colors">
                Location
              </Link>
              <Link href="#contact" className="text-white/80 hover:text-sport-yellow transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Tri-Sports Academy Kharar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
