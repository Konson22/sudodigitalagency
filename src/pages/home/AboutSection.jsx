import { FaCheck } from "react-icons/fa";
import { HeadingText, HeadingTitleText } from "../../util/HeadingText";
import { RevealInView } from "../../components/RevealInView";
import {
  animateLeftVariants,
  animateRightVariants,
} from "../../assets/staticData";

export default function AboutSection() {
  return (
    <div className="md:flex md:px-[8%] px-4 md:my-24 my-14">
      <HeadingTitleText text="Why Choose Us?" cName="md:hidden mx-auto block" />
      <RevealInView
        cName="md:w-[45%] rounded-xl border-t-8 border-r-8 border-greenbg overflow-hidden p-3"
        variants={animateLeftVariants}
      >
        <img
          className="rounded-xl"
          src={process.env.PUBLIC_URL + "/images/bush.jpeg"}
          alt=""
        />
      </RevealInView>
      <div className="flex-1 md:p-8 px-3">
        <RevealInView variants={animateRightVariants}>
          <HeadingTitleText text="Why Choose Us?" cName="md:block hidden" />
          <HeadingText
            text="We will do our best to grow your business"
            cName="text-left"
          />
        </RevealInView>
        <RevealInView variants={animateRightVariants}>
          <p>
            Your online presence starts with a captivating website. Our
            developers blend creativity with technical proficiency to build
            websites that not only look stunning but
          </p>
        </RevealInView>

        <RevealInView
          cName="flex md:justify-start justify-between mt-6"
          variants={animateRightVariants}
        >
          <div className="md:mr-20">
            <h3 className="md:text-2xl text-xl mb-4">Our Vission</h3>
            {[...new Array(4)].map(() => (
              <li className="flex items-center mb-4">
                <span className="md:text-2xl text-xl border border-greenbg text-greenbg p-2 rounded-full">
                  <FaCheck />
                </span>
                Testing yours
              </li>
            ))}
          </div>
          <div className="">
            <h3 className="md:text-2xl text-xl mb-4">Our Mission</h3>
            {[...new Array(4)].map(() => (
              <li className="flex items-center mb-4">
                <span className="md:text-2xl text-xl border border-greenbg text-greenbg p-2 rounded-full">
                  <FaCheck />
                </span>
                Testing yours
              </li>
            ))}
          </div>
        </RevealInView>
      </div>
    </div>
  );
}
