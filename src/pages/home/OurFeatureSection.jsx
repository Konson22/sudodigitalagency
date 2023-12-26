import { FaCheck } from "react-icons/fa";
import {
  animateLeftVariants,
  animateRightVariants,
  whyChooseUseData,
} from "../../assets/staticData";
import { RevealInView } from "../../components/RevealInView";
import { HeadingTitleText } from "../../util/HeadingText";

export default function OurFeatureSection() {
  return (
    <div className=" md:flex items-center md:px-[8%] px-4 md:my-20 my-10">
      <div className="flex-1 md:mb-0 mb-10">
        <HeadingTitleText text="Why Choose Us?" />
        {/* <HeadingText
          text="The Best Decision For Your Business Strategy"
          cName="text-left"
        /> */}

        <div className="md:mr-20">
          {whyChooseUseData.map((info, index) => (
            <RevealInView
              cName="flex items-cente mb-4"
              variants={animateLeftVariants}
              key={index}
            >
              <span className="md:h-10  md:w-10 h-10  w-10  flex items-center justify-center border border-greenbg text-greenbg md:text-2xl text-xl rounded-full mr-6">
                <FaCheck />
              </span>
              <div className="flex-1">
                <span className="text-2xl">{info.title}</span>
                <p className="line-clamp-2">{info.text}</p>
              </div>
            </RevealInView>
          ))}
        </div>
        <p className="my-5">
          Choose Sudo Digital as your digital partner, and let's embark on a
          journey to elevate your brand in the digital sphere. Immerse yourself
          in creativity, functionality, and success with a team that is
          dedicated to turning your digital dreams into reality. Your brand's
          digital evolution starts here!
        </p>
      </div>
      {/* </RevealInView> */}
      <RevealInView
        cName="md:w-[45%] image-container h-full p-3 md:ml-14"
        variants={animateRightVariants}
      >
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/images/bush3.jpeg"}
          alt=""
        />
      </RevealInView>
    </div>
  );
}
