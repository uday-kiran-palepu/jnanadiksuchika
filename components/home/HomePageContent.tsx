import { FaqSection } from "@/components/home/FaqSection";
import { FeaturedLearningSection } from "@/components/home/FeaturedLearningSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { KbPreviewSection } from "@/components/home/KbPreviewSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ServicesPreviewSection } from "@/components/home/ServicesPreviewSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyHowSection } from "@/components/home/WhyHowSection";
import { WorkshopsSection } from "@/components/home/WorkshopsSection";

export function HomePageContent() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <PillarsSection />
      <FeaturedLearningSection />
      <KbPreviewSection />
      <ServicesPreviewSection />
      <WorkshopsSection />
      <WhyHowSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
