import { AboutContrastSection } from "@/components/about/AboutContrastSection";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutOriginSection } from "@/components/about/AboutOriginSection";
import { AboutTenetsSection } from "@/components/about/AboutTenetsSection";

export function AboutPageContent() {
  return (
    <div className="flex flex-col w-full">
      <AboutHeroSection />
      <AboutOriginSection />
      <AboutContrastSection />
      <AboutTenetsSection />
      <AboutCtaSection />
    </div>
  );
}
