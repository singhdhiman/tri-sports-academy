export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-sport-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-sport-yellow text-center mb-12">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 text-center">
            <div className="bg-sport-green-light/50 rounded-xl p-6">
              <p className="text-sport-yellow font-bold mb-2">Phone</p>
              <a href="tel:+919781373636" className="text-white hover:text-sport-yellow transition-colors block">
                9781373636
              </a>
              <a href="tel:+919914410407" className="text-white hover:text-sport-yellow transition-colors block mt-1">
                9914410407
              </a>
            </div>
            <div className="bg-sport-green-light/50 rounded-xl p-6">
              <p className="text-sport-yellow font-bold mb-2">Email</p>
              <a
                href="mailto:trisportskharar@gmail.com"
                className="text-white hover:text-sport-yellow transition-colors break-all"
              >
                trisportskharar@gmail.com
              </a>
            </div>
            <div className="sm:col-span-2 bg-sport-green-light/50 rounded-xl p-6">
              <p className="text-sport-yellow font-bold mb-2">Instagram</p>
              <a
                href="https://instagram.com/trisportsacademykharar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sport-yellow transition-colors"
              >
                @trisportsacademykharar
              </a>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="tel:+919781373636"
              className="inline-flex md:hidden items-center justify-center px-8 py-4 bg-sport-yellow text-sport-green font-bold text-lg rounded-lg hover:bg-sport-yellow-dark transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
