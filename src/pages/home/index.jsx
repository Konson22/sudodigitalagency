import AboutSection from "./AboutSection";
import AchivementSection from "./AchivementSection";
import CallToActionSection from "./CallToActionSection";
import Header from "./Header";
import OurFeatureSection from "./OurFeatureSection";
import ServiceSection from "./ServiceSection";
import TeamSection from "./TeamSection";
import TestimonailSection from "./TestimonialSection";
import WebDesignCallToActionSection from "./WebDesignCallToActionSection";

export default function HomePage() {
  return (
    <div>
      <div className="bg-greenbg">
        <Header />
        <AboutSection />
      </div>
      <ServiceSection />
      <CallToActionSection />
      <WebDesignCallToActionSection />
      <OurFeatureSection />
      <TeamSection />
      <AchivementSection />
      <TestimonailSection />
    </div>
  );
}
