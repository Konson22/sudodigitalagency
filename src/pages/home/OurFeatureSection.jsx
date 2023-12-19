import {
  animateLeftVariants,
  animateRightVariants,
  whyChooseUseData,
} from "../../assets/staticData";
import { RevealInView } from "../../components/RevealInView";
import { HeadingText, HeadingTitleText } from "../../util/HeadingText";

export default function OurFeatureSection() {
  return (
    <div className="md:flex px-[8%] md:my-20 my-10">
      <RevealInView cName="flex-1 md:mb-0 mb-10" variants={animateLeftVariants}>
        <HeadingTitleText text="Why Choose Us?" />
        <HeadingText
          text="The Best Decision For Your Business Strategy"
          cName="text-left"
        />
        <p className="my-5">
          In the age of social connectivity, we'll help you make your mark. Our
          social media mavens craft personalized
        </p>
        <div className="md:mr-20">
          {whyChooseUseData.map((info, index) => (
            <li className="flex items-center mb-4" key={index}>
              <span className="bg-greenbg text-white text-4xl p-3 rounded-xl mr-6">
                {info.icon}
              </span>
              <div className="flex-1">
                <span className="text-2xl">{info.title}</span>
                <p className="line-clamp-2">{info.text}</p>
              </div>
            </li>
          ))}
        </div>
      </RevealInView>
      <RevealInView
        cName="md:w-[45%] rounded-xl border-t-8 border-r-8 border-greenbg overflow-hidden p-3"
        variants={animateRightVariants}
      >
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/images/pexels-ali-pazani-2777898.jpg"}
          alt=""
        />
      </RevealInView>
    </div>
  );
}
