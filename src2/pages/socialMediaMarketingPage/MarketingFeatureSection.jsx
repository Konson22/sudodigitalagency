import { FiMail } from "react-icons/fi";
import { HeadingText2 } from "../../util/HeadingText";

export default function MarketingFeatureSection() {
  return (
    <div className="">
      <HeadingText2 text="Our Digital Marketing Expertise" cName="text-left" />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
        {digitalMarketingData.map((service) => (
          <div className="md:flex mb-2">
            <div className="h-[4.5rem] w-[4.5rem] flex items-center justify-center text-5xl mr-3 bg-white rounded-full">
              <FiMail />
            </div>
            <div className="">
              <h3 className="flex-1 md:text-xl">{service.title}</h3>
              <p>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const digitalMarketingData = [
  {
    title: "Search Engine Optimization (SEO)",
    text: `
      Boost your website's visibility on search engines and drive organic traffic with our SEO services. Our team of experts employs proven strategies to optimize your website, enhance its ranking, and ensure it's easily discoverable by your target audience.
     `,
  },
  {
    title: "Email Marketing",
    text: `
      Nurture relationships and drive conversions with our effective email marketing campaigns. From personalized newsletters to targeted automation, we help you stay top-of-mind with your audience and drive measurable results.`,
  },
  {
    title: "Social Media Marketing",
    text: `
      Engage and connect with your audience on popular social media platforms. Our social media marketing strategies are crafted to build brand loyalty, increase engagement, and drive conversions through compelling content and strategic campaigns.`,
  },
  // {
  //   title: "Content Marketing",
  //   text: `
  //     Fuel your digital presence with valuable and relevant content. Our content marketing services include content creation, distribution, and optimization to establish your brand as an authority in your industry and attract your ideal audience.`,
  // },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    text: `
      Maximize your reach and achieve instant results with our PPC advertising campaigns. From keyword research to ad creation and optimization, we create targeted campaigns that drive qualified traffic to your website and deliver measurable results.`,
  },
];
