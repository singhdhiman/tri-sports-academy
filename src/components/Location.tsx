const ADDRESS = "Near Bhagat Ghat Mandir, Guru Teg Bahadur Nagar, Kharar Punjab 140301";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Near+Bhagat+Ghat+Mandir+Guru+Teg+Bahadur+Nagar+Kharar+Punjab+140301";

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-sport-green text-center mb-12">
          Find Us
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden shadow-lg h-80 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1671954686345!2d76.6474!3d30.7416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ0JzMwLjAiTiA3NsKwMzgnNTAuNiJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tri-Sports Academy Kharar Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold text-sport-green mb-4">
              Address
            </h3>
            <p className="text-gray-700 text-lg mb-6">{ADDRESS}</p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 bg-sport-yellow text-sport-green font-bold rounded-lg hover:bg-sport-yellow-dark transition-colors w-fit"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
