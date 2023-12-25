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
      <div className="bg-greenbg">
        <Header />
        <AboutSection />
      </div>
      <ServiceSection />
      <CallToActionSection />
      <OurFeatureSection />
      <AchivementSection />
      <TestimonailSection />
    </div>
  );
}
