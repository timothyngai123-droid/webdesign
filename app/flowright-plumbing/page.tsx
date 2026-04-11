import PageIntro from "@/components/flowright-plumbing/PageIntro";
import Nav from "@/components/flowright-plumbing/Nav";
import Hero from "@/components/flowright-plumbing/Hero";
import PromiseBand from "@/components/flowright-plumbing/PromiseBand";
import Services from "@/components/flowright-plumbing/Services";
import Guarantee from "@/components/flowright-plumbing/Guarantee";
import Trust from "@/components/flowright-plumbing/Trust";
import CtaSection from "@/components/flowright-plumbing/CtaSection";
import Footer from "@/components/flowright-plumbing/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";
import CustomCursor from "@/components/animations/CustomCursor";

export default function FlowRightPage() {
  return (
    <div className="fr-scope min-h-screen bg-fr-canvas">
      <PageIntro />
      <ScrollProgress color="#378ADD" />
      <CustomCursor color="#185FA5" />
      <Nav />
      <main id="main">
        <Hero />
        <PromiseBand />
        <Services />
        <Guarantee />
        <Trust />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
