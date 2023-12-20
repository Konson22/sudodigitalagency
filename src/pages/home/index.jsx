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
      <div className="md:flex items-center md:px-[16%] px-4 md:my-16 my-5">
        <div className="md:w-[45%] md:text-5xl text-2xl">
          <HeadingText
            text="Welcome to Sudo Digital Agency"
            cName="md:text-left text-center"
          />
        </div>
        <div className="flex-1 md:text-left text-center">
          <p>
            We're not just in the business of providing digital solutions; we're
            in the business of helping you succeed in the digital world. Our
            passion for innovation, commitment to excellence, and client-centric
            approach set us apart as your trusted digital partner.
          </p>
        </div>
      </div>
      <ServiceSection />
      <AboutSection />
      <OurFeatureSection />
      <AchivementSection />
      <TestimonailSection />
      <BlogingSection />
    </div>
  );
}
