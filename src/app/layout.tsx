import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://trisportsacademykharar.com";
const OG_IMAGE = "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tri-Sports Academy Kharar | Cricket, Football & Badminton Turf",
  description:
    "Play cricket, football, and badminton at Tri-Sports Academy Kharar. Professional turf, badminton courts, night lighting, equipment available. Book in Kharar, Punjab.",
  keywords: [
    "cricket turf Kharar",
    "football turf Kharar",
    "badminton court Kharar",
    "sports academy Punjab",
    "box cricket Kharar",
    "turf booking Kharar",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Tri-Sports Academy Kharar | Professional Turf Sports Arena",
    description:
      "Professional turf for cricket, football & badminton in Kharar. Play, train, compete!",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tri-Sports Academy Kharar | Professional Turf Sports Arena",
    description: "Professional turf for cricket, football & badminton in Kharar.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Tri-Sports Academy Kharar",
  description:
    "Professional turf sports arena for cricket, football & badminton in Kharar. Synthetic turf, courts, night lighting, equipment available.",
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
      className={`${inter.variable} ${outfit.variable}`}
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
