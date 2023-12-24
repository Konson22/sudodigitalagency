import AboutSection from "./AboutSection";
import AchivementSection from "./AchivementSection";
import CallToActionSection from "./CallToActionSection";
import Header from "./Header";
import OurFeatureSection from "./OurFeatureSection";
import ServiceSection from "./ServiceSection";
import TestimonailSection from "./TestimonialSection";

export default function HomePage() {
  return (
    <div>
      <Header />
      <AboutSection />
      <ServiceSection />
      <CallToActionSection />
      <OurFeatureSection />
      <AchivementSection />
      <TestimonailSection />
    </div>
  );
}
