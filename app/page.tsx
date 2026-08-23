import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CourseExplorer } from "@/components/sections/CourseExplorer";
import { About } from "@/components/sections/About";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <CourseExplorer />
      <About />
      <FinalCta />
      <ContactSection />
    </>
  );
}
