import type { Metadata } from "next";
import Nav from "@/components/grove-and-grain/Nav";
import Hero from "@/components/grove-and-grain/Hero";
import Pillars from "@/components/grove-and-grain/Pillars";
import Dishes from "@/components/grove-and-grain/Dishes";
import About from "@/components/grove-and-grain/About";
import Reserve from "@/components/grove-and-grain/Reserve";
import Footer from "@/components/grove-and-grain/Footer";
import ScrollProgress from "@/components/grove-and-grain/ScrollProgress";
import CustomCursor from "@/components/grove-and-grain/CustomCursor";
import PageIntro from "@/components/grove-and-grain/PageIntro";

export const metadata: Metadata = {
  title: "Grove & Grain — Farm-to-table bistro in Aylesbury",
  description:
    "A neighbourhood bistro serving seasonal British produce, sourced from farms within 30 miles of Aylesbury town centre.",
};

export default function GroveAndGrainPage() {
  return (
    <div className="gg-scope min-h-screen">
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
    </div>
  );
}
