import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { GallerySection } from "@/components/home/GallerySection";
import { HeroSection } from "@/components/home/HeroSection";
import { PathwaysSection } from "@/components/home/PathwaysSection";
import { TeamTeaserSection } from "@/components/home/TeamTeaserSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WorkshopsSection } from "@/components/home/WorkshopsSection";

export function HomePageContent() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <PathwaysSection />
      <TechStackSection />
      <AboutPreviewSection />
      <TeamTeaserSection />
      <WorkshopsSection />
      <GallerySection />
      <TestimonialsSection />
      <FinalCtaSection />
    </div>
  );
}
