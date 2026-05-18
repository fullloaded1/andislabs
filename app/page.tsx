import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedProductsSection from "@/components/sections/FeaturedProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
