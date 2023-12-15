export default function ServiceSection() {
  return (
    <div className="md:px-[10%] px-8 py-8">
      <div className="md:px-[20%] text-center mb-7">
        <h2 className="text-4xl text-center mb-4">OUR SERVICES</h2>
        <p>
          we are a passionate team of creative minds specializing in web, mobile
          app, and graphic design. Our mission is to transform your ideas into
          stunning digital experiences that captivate and engage your audience.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4">
        {services.map((service, index) => (
          <div className="bg-white p-7 rounded-md" key={index}>
            <div className="h-[120px] w-[120px] rounded-full mx-auto">
              <img className="" src={service.image} alt="" />
            </div>
            <p className="text-center">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              Our mission is to transform your ideas into stunning digital
              experiences that captivate and engage your audience.
            </p>
            <button className="px-5 py-2 rounded-md border border-greenbg mx-auto block mt-8">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    title: "Web & App Development",
    text: "",
    image: process.env.PUBLIC_URL + "/images/app-development.png",
  },
  {
    title: "Social media advertisement",
    text: "",
    image: process.env.PUBLIC_URL + "/images/ux.png",
  },
  {
    title: "App Development",
    text: "",
    image: process.env.PUBLIC_URL + "/images/web.png",
  },
];
