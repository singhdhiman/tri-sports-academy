import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800",
    alt: "Professional turf ground at Tri-Sports Academy",
    caption: "Turf Ground",
  },
  {
    src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800",
    alt: "Cricket setup on turf",
    caption: "Cricket Setup",
  },
  {
    src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800",
    alt: "Football match on turf",
    caption: "Football Setup",
  },
  {
    src: "https://images.unsplash.com/photo-1512719993082-7e7409d1cd0b?q=80&w=800",
    alt: "Sports equipment for cricket and football",
    caption: "Sports Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=800",
    alt: "Night lighting for evening matches",
    caption: "Night Lighting",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-sport-green text-center mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sport-green/90 via-sport-green/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 font-display text-lg font-bold text-white">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
