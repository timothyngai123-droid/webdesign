import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ResponseBand from "@/components/ResponseBand";
import Services from "@/components/Services";
import Guarantee from "@/components/Guarantee";
import Trust from "@/components/Trust";
import CtaSection from "@/components/CtaSection";
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
        <ResponseBand />
        <Services />
        <Guarantee />
        <Trust />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
