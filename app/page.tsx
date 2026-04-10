import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Dishes from "@/components/Dishes";
import About from "@/components/About";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Pillars />
      <Dishes />
      <About />
      <Reserve />
      <Footer />
    </main>
  );
}
