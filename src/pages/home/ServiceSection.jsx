import { Link } from "react-router-dom";
import { servicesInfo } from "../../assets/data";
import { HeadingText, HeadingText3 } from "../../util/HeadingText";
import { RevealInView } from "../../components/RevealInView";
import { animateTop } from "../../assets/animationVariants";

export default function ServiceSection() {
  return (
    <div className="px-[10%] py-16">
      <HeadingText text="Services We Provide" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-10">
        {servicesInfo.map((service) => (
          <RevealInView cName="bg-white p-6" variants={animateTop}>
            <div className="md:h-[160px] ww-[250px] mx-auto">
              <img src={service.image} alt="" />
            </div>
            <div className="p-">
              <HeadingText3 text={service.title} />
              <p className="line-clamp-5">{service.text}</p>
              <button className="border border-greenbg text-greenbg px-6 py-2 text-xl block mt-5 mx-auto">
                <Link to={service.path}>Learn more</Link>
              </button>
            </div>
          </RevealInView>
        ))}
      </div>
    </div>
  );
}
