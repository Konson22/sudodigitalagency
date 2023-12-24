import { Link } from "react-router-dom";
import { animateTopVariants, servicesData } from "../../assets/staticData";
import { RevealInView } from "../../components/RevealInView";
import { HeadingText, HeadingTitleText } from "../../util/HeadingText";

export default function ServiceSection() {
  return (
    <div className="px-[12%] text-center my-8">
      <HeadingTitleText text="Services" cName="mx-auto" />
      <HeadingText text="Empower Your Business with Our Services" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-6">
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
      cName="bg-greenbg/20 rounded-md"
      variants={animateTopVariants}
    >
      <div className="h-28 bbg-gradient-to-t bg-gradients from-white to-greenbg/90 "></div>
      <div className="mx-8 -mt-[75px]">
        <div className="h-[150px] w-[150px] bg-white p-4 mx-auto rounded-full z-10 overflow-hidden border-4 border-bluebg -mb-[73px]">
          <img src={service.image} alt="" />
        </div>
      </div>
      <div className="p-5 mt-4 m-l-4 pt-[80px]">
        <h3 className="line-clamp-1 text-2xl mb-2">{service.title}</h3>
        <p className="line-clamp-3">{service.text}</p>
        <div className="mt-4">
          <Link
            className="px-5 py-2 border border-greenbg rounded-md mx-auto"
            to={service.path}
          >
            learn ore
          </Link>
        </div>
      </div>
    </RevealInView>
  );
}
