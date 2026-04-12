import HeroSection from '@/components/hero/HeroSection';
import Marquee from '@/components/sections/Marquee';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ProjectsSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </>
  );
}
