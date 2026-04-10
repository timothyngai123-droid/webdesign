import type { Metadata } from "next";
import Nav from "@/components/keymaster-24/Nav";
import Hero from "@/components/keymaster-24/Hero";
import ResponseBand from "@/components/keymaster-24/ResponseBand";
import Services from "@/components/keymaster-24/Services";
import Guarantee from "@/components/keymaster-24/Guarantee";
import Trust from "@/components/keymaster-24/Trust";
import CtaSection from "@/components/keymaster-24/CtaSection";
import Footer from "@/components/keymaster-24/Footer";
import ScrollProgress from "@/components/keymaster-24/ScrollProgress";
import CustomCursor from "@/components/keymaster-24/CustomCursor";
import PageIntro from "@/components/keymaster-24/PageIntro";

export const metadata: Metadata = {
  title: "KeyMaster 24 — 24/7 Emergency Locksmith. 30 Minutes or Less.",
  description:
    "Emergency locksmith covering the whole region. On your doorstep in 30 minutes or less. Fully insured, DBS checked, no call-out fee. Available 24 hours, 7 days a week.",
};

export default function KeyMaster24Page() {
  return (
    <div className="km-scope min-h-screen">
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
    </div>
  );
}
