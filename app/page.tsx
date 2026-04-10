import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Dishes from "@/components/Dishes";
import About from "@/components/About";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import PageIntro from "@/components/PageIntro";

export default function Page() {
  return (
    <>
      <PageIntro />
      <ScrollProgress />
      <CustomCursor />
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
