import { Hero } from "@/components/sections/Hero";
import { ProgramOrientador } from "@/components/sections/ProgramOrientador";
import { MethodologyEditorial } from "@/components/sections/MethodologyEditorial";
import { ProgramsCompare } from "@/components/sections/ProgramsCompare";
import { LearningJourney } from "@/components/sections/LearningJourney";
import { About } from "@/components/sections/About";
import { EmpresaCta } from "@/components/sections/EmpresaCta";
import { Orientation } from "@/components/sections/Orientation";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProgramOrientador />
      <MethodologyEditorial />
      <ProgramsCompare />
      <LearningJourney />
      <About />
      <EmpresaCta />
      <Orientation />
      <ContactSection />
    </>
  );
}
