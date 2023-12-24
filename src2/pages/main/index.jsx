import { HeadingText } from "../../util/HeadingText";
import Header from "./Header";
import ServiceSection from "./ServiceSection";
import TeamSection from "./TeamSection";
import AboutSection from "./AboutSection";
import TestimonailSection from "./TestimonailSection";
import CallToActionSection from "./CallToActionSection";
import OurFeatureSection from "./OurFeatureSection";

export default function Main() {
  return (
    <div>
      <Header />
      <div className="md:flex items-center md:px-[14%] px-4 md:pt-20 pt-10 md:pb-28 pb-14">
        <div className="md:w-[45%] md:text-5xl text-2xl">
          <HeadingText
            text="Welcome to Sudo Digital Agency"
            cName="md:text-left text-center text-greenbg"
          />
        </div>
        <div className="flex-1 md:text-left text-center">
          <p>
            We are passionate about transforming ideas into digital experiences.
            As a leading tech company, we offer a comprehensive suite of
            services to meet the evolving needs of businesses in today's digital
            landscape.
          </p>
        </div>
      </div>
      <AboutSection />
      <ServiceSection />
      <OurFeatureSection />
      <CallToActionSection />
      <TeamSection />
      <TestimonailSection />
    </div>
  );
}
