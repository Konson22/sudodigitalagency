export default function OurApprocachSection() {
  return (
    <div className="md:px-[10%] px-4 md:-mt-24 -mt-16">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3 mt6">
        {data.map((info, index) => (
          <div className="bg-white rounded-xl shadow-md p-5" key={index}>
            <h3 className="text-2xl">{info.title}</h3>
            <p>{info.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "Creativity",
    text: `We are passionate about creativity and think outside the box to deliver unique and captivating designs. Whether it's a website, a mobile app, or graphic design project, we infuse creativity into every aspect to make your brand stand out in the digital landscape.`,
    image: "",
  },
  {
    title: "User-Centric",
    text: `Understanding your target audience is at the core of our design process. We prioritize user experience to ensure that every interaction with your digital platform is intuitive, engaging, and delightful, leading to higher user satisfaction and retention.`,
    image: "",
  },
  {
    title: "Custom Solutions",
    text: `We understand that every business is unique and has its own set of challenges. That's why we offer tailor-made solutions that align with your specific requirements, branding, and objectives, giving you a competitive edge in the market.`,
    image: "",
  },
  {
    title: "Cutting-Edge Technology",
    text: `Our team stays up-to-date with the latest trends and technologies in web, mobile app, and graphic design. From responsive web design to the latest app development frameworks, we utilize cutting-edge tools and techniques to bring your vision to life.`,
    image: "",
  },
  //   {
  //     title: "Transparent Communication",
  //     text: `We believe in fostering strong client relationships through transparent communication and open collaboration. We keep you involved throughout the design and development process, ensuring that your feedback and ideas are always valued.`,
  //     image: "",
  //   },
];
