import {
  AnimateWhileInViewLeft,
  AnimateWhileInViewRight,
} from "../../components/AnimateInView";

export default function ServiceSection() {
  return (
    <div className="md:px-[10%] px-8 py-8">
      <h2 className="text-4xl text-center mb-4">OUR SERVICES</h2>
      <div className="mt-8">
        {services.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="md:flex items-center">
      <AnimateWhileInViewLeft cName="md:h-[350px] md:w-[45%]">
        <img className="" src={service.image} alt="" />
      </AnimateWhileInViewLeft>
      <AnimateWhileInViewRight cName="flex-1">
        <h2 className="text-2xl font-bold">{service.title}</h2>
        <p>{service.text}</p>
        <button className="px-5 py-2 rounded-md border border-greenbg mx-auto block mt-8">
          Learn more
        </button>
      </AnimateWhileInViewRight>
    </div>
  );
}
const services = [
  {
    title: "Web & App Development",
    text: "Your online presence starts with a captivating website. Our developers blend creativity with technical proficiency to build websites that not only look stunning but also deliver seamless user experiences. Whether it's a corporate site, an e-commerce platform, or a portfolio, we've got the expertise to make it happen.",
    image: process.env.PUBLIC_URL + "/images/app-development.png",
    isAtLeft: true,
  },
  {
    title: "Social Media Marketing",
    text: "In the age of social connectivity, we'll help you make your mark. Our social media mavens craft personalized strategies to elevate your brand on platforms like Facebook, Instagram, Twitter, and LinkedIn. From content creation to community engagement, we've got the social side covered.",
    image: process.env.PUBLIC_URL + "/images/social.jpg",
    isAtLeft: false,
  },
  {
    title: "Domain and Hosting Services",
    text: "Your digital journey starts with the right domain. Our experts guide you through the domain registration process, ensuring you find the perfect online identity. And when it comes to hosting, our reliable and secure services guarantee your website is always accessible to your audience.",
    image: process.env.PUBLIC_URL + "/images/web.png",
    isAtLeft: true,
  },
];
