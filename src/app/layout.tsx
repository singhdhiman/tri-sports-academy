import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Tri-Sports Academy Kharar | Professional Turf for Cricket & Football",
  description:
    "Play cricket and football at Tri-Sports Academy Kharar. Professional synthetic turf, night lighting, equipment available. Book your match in Kharar, Punjab.",
  keywords: [
    "cricket turf Kharar",
    "football turf Kharar",
    "sports academy Punjab",
    "box cricket Kharar",
    "turf booking Kharar",
  ],
  openGraph: {
    title: "Tri-Sports Academy Kharar | Professional Turf Sports Arena",
    description:
      "Professional turf ground for cricket and football in Kharar. Play, train, compete!",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Tri-Sports Academy Kharar",
  description:
    "Professional turf sports arena for cricket and football in Kharar. Synthetic turf, night lighting, equipment available.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Bhagat Ghat Mandir, Guru Teg Bahadur Nagar",
    addressLocality: "Kharar",
    addressRegion: "Punjab",
    postalCode: "140301",
  },
  telephone: "+919781373636",
  email: "trisportskharar@gmail.com",
  url: "https://trisportsacademykharar.com",
  image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable}`}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
