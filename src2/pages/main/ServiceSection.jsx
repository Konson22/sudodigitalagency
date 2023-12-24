import { Link } from "react-router-dom";
import { servicesInfo } from "../../assets/data";
import { HeadingText, HeadingText3 } from "../../util/HeadingText";
import { animateTopVariants } from "../../assets/staticData";
import { RevealInView } from "../../components/RevealInView";

export default function ServiceSection() {
  return (
    <div className="bg-darkbg text-whit md:px-[5%] px-[10%] py-20 mt-16">
      <HeadingText
        text="Services We Provide"
        cName="text-greenbg text-center"
      />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-16">
        {servicesInfo.map((service) => (
          <ServiceCard service={service} key={service.title} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <RevealInView cName="bg-white p-8 rounded-md" variants={animateTopVariants}>
      <div className="md:h-[160px] md:w-[160px] h-[110px] w-[110px] mx-auto">
        <img src={service.image} alt="" />
      </div>
      <div className="p-">
        <HeadingText3 text={service.title} />
        <p className="line-clamp-6">{service.text}</p>
        <button className="block mt-5 mx-auto px-5 py-2 rounded border border-greenbg text-greenbg">
          <Link to={service.path}>Learn more</Link>
        </button>
      </div>
    </RevealInView>
  );
}
