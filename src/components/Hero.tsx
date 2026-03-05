import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1920"
          alt="Professional turf sports ground"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-sport-green/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight animate-slide-up">
          Play. Train. Compete.
        </h1>
        <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-sport-yellow font-medium animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Professional Turf Sports Arena in Kharar
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <a
            href="tel:+919781373636"
            className="inline-flex items-center justify-center px-8 py-4 bg-sport-yellow text-sport-green font-bold text-lg rounded-lg hover:bg-sport-yellow-dark transition-all hover:scale-105 shadow-lg"
          >
            Call Now
          </a>
          <Link
            href="#location"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg border-2 border-sport-yellow hover:bg-sport-yellow hover:text-sport-green transition-all hover:scale-105"
          >
            View Location
          </Link>
        </div>
      </div>

      {/* Decorative turf pattern overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-sport-green to-transparent z-10" />
    </section>
  );
}
