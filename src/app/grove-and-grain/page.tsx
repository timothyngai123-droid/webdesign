import Nav from "@/components/grove-and-grain/Nav";
import Hero from "@/components/grove-and-grain/Hero";
import Pillars from "@/components/grove-and-grain/Pillars";
import Dishes from "@/components/grove-and-grain/Dishes";
import About from "@/components/grove-and-grain/About";
import Reserve from "@/components/grove-and-grain/Reserve";
import Footer from "@/components/grove-and-grain/Footer";
import PageIntro from "@/components/grove-and-grain/PageIntro";
import ScrollProgress from "@/components/animations/ScrollProgress";
import CustomCursor from "@/components/animations/CustomCursor";

export default function GroveAndGrainPage() {
  return (
    <>
      <PageIntro />
      <ScrollProgress className="bg-green-light" />
      <CustomCursor className="bg-green-mid" />
      <Nav />
      <main id="main">
        <Hero />
        <Pillars />
        <Dishes />
        <About />
        <Reserve />
      </main>
      <Footer />
    </>
  );
}
