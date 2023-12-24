import { FaPaperPlane } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function WhyChooseUsSection() {
  return (
    <div className="my-16">
      <h3 className="md:text-3xl text-xl">
        Why Choose Us For Digital Marketing?
      </h3>
      {/* <p>
        Whether you're looking to increase website traffic, improve conversion
        rates, or enhance your brand's online visibility, Sudo Digital Agency is
        here to help. Contact us today to discuss how our digital marketing
        services can accelerate your business growth.
      </p> */}
      <div className="grid md:grid-cols-2 grid-cols gap-5">
        {ourMarketingFeatures.map((service) => (
          <div className="md:bg-sky-300 md:p-5 rounded-md mb-2">
            <div className="flex items-center">
              <div className="md:p-3 p-2 md:text-5xl text-xl mr-3 md:bg-white bg-bluebg md:text-gray-600 text-white rounded-full">
                <FiMail />
              </div>
              <h3 className="md:text-xl">{service.title}</h3>
            </div>
            <div className="flex-1 ">
              <p>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const ourMarketingFeatures = [
  {
    title: "Customized Strategies",
    text: `We understand that every business is unique. Our digital marketing strategies are tailored to your specific goals, target audience, and industry.`,
    icon: <FaPaperPlane />,
  },
  {
    title: "Data-Driven Approach",
    text: `We leverage data and analytics to make informed decisions and continuously optimize our campaigns for maximum performance.`,
    icon: <FaPaperPlane />,
  },
  {
    title: "Transparent Reporting",
    text: `Stay informed about the performance of your digital marketing campaigns with detailed and transparent reporting. We believe in accountability and keeping our clients in the loop.`,
    icon: <FaPaperPlane />,
  },
  // {
  //   title: "Transparent Reporting",
  //   text: `Stay informed about the performance of your digital marketing campaigns with detailed and transparent reporting. We believe in accountability and keeping our clients in the loop.`,
  //   icon: <FaPaperPlane />,
  // },
];
