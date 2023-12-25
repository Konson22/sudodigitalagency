import { servicesInfo } from "../assets/data";
import PageHeader from "../components/PageHeader";
import { HeadingText2 } from "../util/HeadingText";

export default function DigitalMarketingPage() {
  return (
    <div>
      <PageHeader
        title={servicesInfo[1].title}
        text={servicesInfo[1].slogan}
        image={
          process.env.PUBLIC_URL + "/images/Digital-Marketing-PNG-File.png"
        }
        bg="bg-amber-500"
      />

      <div className="bg-white md:mx-[15%] p-8">
        <p className="md:px-[15%]">
          Our web design services focus on creating intuitive, responsive, and
          aesthetically pleasing websites that represent your brand's essence.
          Whether you need a simple informational site, an e-commerce platform,
          or a complex web application, we've got you covered.
        </p>
        <div className="mt-14">
          <HeadingText2
            text="What sets our Web
          Design Services apart?"
          />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {webDesignService.map((service) => (
              <div className="md:bg-white md:p-6">
                <h3 className="text-x">{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const webDesignService = [
  {
    title: "Customized Designs",
    text: `We understand that each business is unique, and we tailor our designs to match your specific requirements, branding, and target audience.`,
    image: "",
  },
  {
    title: "User-Centric Approach",
    text: `Our user-centered design approach ensures that your website is not only visually appealing but also intuitive and easy to navigate, providing a seamless user experience.`,
    image: "",
  },
  {
    title: "Responsive Design",
    text: `With the majority of internet users accessing websites on mobile devices, we ensure your site looks great and functions flawlessly on screens of all sizes.`,
    image: "",
  },
  {
    title: "Search Engine Optimization (SEO)",
    text: `We incorporate SEO best practices during the design process, helping your website rank higher on search engines and drive organic traffic.`,
    image: "",
  },
  {
    title: "Conversion-Oriented Design",
    text: `Our designs are strategically crafted to encourage conversions, whether it's making a purchase, signing up for a newsletter, or filling out a contact form.`,
    image: "",
  },
];
