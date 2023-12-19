import { animateTopVariants } from "../../assets/staticData";
import { RevealInView } from "../../components/RevealInView";
import { HeadingText, HeadingTitleText } from "../../util/HeadingText";

export default function ServiceSection() {
  return (
    <div className="px-[8%] text-center my-16">
      <HeadingTitleText text="Services" cName="mx-auto" />
      <HeadingText text="Our Services Provided" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-[150px]">
        {services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <RevealInView
      cName="bg-greenbg/50 text-white rounded-xl md:mb-0 mb-[120px]"
      variants={animateTopVariants}
    >
      <div className="h-[170px] mx-6 -mt-[100px] border-8 border-white bg-red-300 rounded-xl">
        <img src={service.image} alt="" />
      </div>
      <div className="text-center p-4">
        <h3 className="text-2xl mb-2">{service.title}</h3>
        <p className="line-clamp-3">{service.text}</p>
        <button className="border px-5 py-2 rounded-md mx-auto">
          learn ore
        </button>
      </div>
    </RevealInView>
  );
}
const services = [
  {
    title: "Web & App Development",
    text: "Your online presence starts with a captivating website. Our developers blend creativity with technical proficiency to build websites that not only look stunning but also deliver seamless user experiences. Whether it's a corporate site, an e-commerce platform, or a portfolio, we've got the expertise to make it happen.",
    image: process.env.PUBLIC_URL + "/images/money-gcbbbadce1_12802.jpg",
    isAtLeft: true,
  },
  {
    title: "Social Media Marketing",
    text: "In the age of social connectivity, we'll help you make your mark. Our social media mavens craft personalized strategies to elevate your brand on platforms like Facebook, Instagram, Twitter, and LinkedIn. From content creation to community engagement, we've got the social side covered.",
    image: process.env.PUBLIC_URL + "/images/pexels-mateusz-dach-450035.jpg",
    isAtLeft: false,
  },
  {
    title: "Domain and Hosting",
    text: "Your digital journey starts with the right domain. Our experts guide you through the domain registration process, ensuring you find the perfect online identity. And when it comes to hosting, our reliable and secure services guarantee your website is always accessible to your audience.",
    image: process.env.PUBLIC_URL + "/images/pexels-lukas-574073.jpg",
    isAtLeft: true,
  },
];
