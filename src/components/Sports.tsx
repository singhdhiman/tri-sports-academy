import Image from "next/image";

const sports = [
  {
    title: "Cricket Turf",
    description:
      "Play exciting box cricket matches with friends on our professional turf.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800",
    alt: "Cricket on turf",
  },
  {
    title: "Football Turf",
    description:
      "Enjoy fast-paced football games on our high-quality synthetic turf field.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800",
    alt: "Football on turf",
  },
];

export default function Sports() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-sport-green text-center mb-12">
          Sports Available
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {sports.map((sport) => (
            <div
              key={sport.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={sport.image}
                  alt={sport.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-sport-green/40 group-hover:bg-sport-green/30 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {sport.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{sport.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
