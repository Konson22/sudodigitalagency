import { FiMail } from "react-icons/fi";
import PageHeader from "../../components/PageHeader";
import MarketingFeatureSection from "./MarketingFeatureSection";
import WhyChooseUsSection, { ourMarketingFeatures } from "./WhyChooseUsSection";

export default function SocialMediaMarketingPage() {
  return (
    <div>
      <PageHeader
        title="Social Media Marketing"
        image={process.env.PUBLIC_URL + "/images/social-media.jpg"}
        text="digital marketing is the key to reaching your target audience, building brand awareness, and driving business growth"
      />
      <div className="md:px-[18%] px-4">
        <div className="md:text-center my-16">
          <p>
            In today's competitive landscape, digital marketing is the key to
            reaching your target audience, building brand awareness, and driving
            business growth. Our comprehensive digital marketing services are
            designed to elevate your online presence and maximize your ROI.
          </p>
        </div>
        <MarketingFeatureSection />
        <WhyChooseUsSection />
      </div>
    </div>
  );
}
