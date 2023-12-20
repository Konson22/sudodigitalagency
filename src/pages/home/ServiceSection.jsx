import { Link } from "react-router-dom";
import { animateTopVariants, servicesData } from "../../assets/staticData";
import { RevealInView } from "../../components/RevealInView";
import { HeadingText, HeadingTitleText } from "../../util/HeadingText";

export default function ServiceSection() {
  return (
    <div className="px-[8%] text-center my-16">
      <HeadingTitleText text="Services" cName="mx-auto" />
      <HeadingText text="Our Services Provided" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-[150px]">
        {servicesData.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <RevealInView
      cName="bg-greenbg/5 ttext-white rounded-md p-3"
      variants={animateTopVariants}
    >
      <div className="h-[120px] w-[120px] mx-auto rounded-full bg-white overflow-hidden p-2">
        <img className="" src={service.image} alt="" />
      </div>
      <div className="text-center p-4">
        <h3 className="text-2xl mb-2">{service.title}</h3>
        <p className="line-clamp-3">{service.text}</p>
        <div className="mt-4">
          <Link
            className="border px-5 py-2 rounded-md mx-auto"
            to={service.path}
          >
            learn ore
          </Link>
        </div>
      </div>
    </RevealInView>
  );
}
