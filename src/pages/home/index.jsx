import ContactSection from "./ContactSection";
import Header from "./Header";
import OurApprocachSection from "./OurApprocachSection";
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="bg-greenbg text-white text-center md:px-[15%] px-5 md:pt-20 pt-6 md:pb-32 pb-24">
        <h3 className="md:text-3xl text-xl font-bold">
          Sudo Digital Agency your creative partner
        </h3>
        <p className="md:text-xl">
          we are a passionate team of creative minds specializing in web, mobile
          app, and graphic design. Our mission is to transform your ideas into
          stunning digital experiences that captivate and engage your audience.
        </p>
      </div>
      <OurApprocachSection />
      <ServiceSection />
      <TestimonialSection />
      <ContactSection />
      <div className=""></div>
    </div>
  );
}
