import OurTeam from "../../components/OurTeam";
import AboutSection from "./AboutSection";
import CallToActionSection from "./CallToActionSection";
import Header from "./Header";
import OurFeatureSection from "./OurFeatureSection";
import ServiceSection from "./ServiceSection";
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
      <div className="px-[8%]">
        <OurTeam />
      </div>
      <TestimonailSection />
    </div>
  );
}
