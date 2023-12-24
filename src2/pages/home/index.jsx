import { HeadingText } from "../../util/HeadingText";
import AboutSection from "./AboutSection";
import AchivementSection from "./AchivementSection";
import BlogingSection from "./BlogingSection";
import Header from "./Header";
import OurFeatureSection from "./OurFeatureSection";
import ServiceSection from "./ServiceSection";
import TestimonailSection from "./TestimonailSection";

export default function Home() {
  return (
    <div>
      <Header />
      <ServiceSection />
      <AboutSection />
      <OurFeatureSection />
      <AchivementSection />
      <TestimonailSection />
      <BlogingSection />
    </div>
  );
}
