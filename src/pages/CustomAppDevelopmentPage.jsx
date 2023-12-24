import { servicesInfo } from "../assets/data";
import PageHeader from "../components/PageHeader";
import { HeadingText2 } from "../util/HeadingText";

export default function CustomAppDevelopmentPage() {
  const info = servicesInfo[5];
  return (
    <div>
      <PageHeader
        title={info.title}
        text={info.slogan}
        // image={info.image}
        image={process.env.PUBLIC_URL + "/images/App-PNG-File.png"}
      />

      <div className="bg-white md:mx-[15%] p-8">
        <p className="md:px-[15%] text-center">{info.text}</p>
        <div className="mt-14">
          <HeadingText2
            text="What sets our Web Design apart?"
            cName="md:text-center text-left"
          />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-4">
            {webDesignService.map((service) => (
              <div className="md:bg-white md:p-6 md:border">
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
