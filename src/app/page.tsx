import Hero from "@/components/Hero";
import About from "@/components/About";
import Sports from "@/components/Sports";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Sports />
      <Facilities />
      <Gallery />
      <Location />
      <Contact />
    </main>
  );
}
