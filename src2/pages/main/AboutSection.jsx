import { FaCheck } from "react-icons/fa";
import { RevealInView } from "../../components/RevealInView";
import { HeadingText, HeadingText3 } from "../../util/HeadingText";
import { animateLeftVariants } from "../../assets/staticData";

export default function AboutSection() {
  return (
    <div className="md:px-[8%] px-4 md:flex py-16">
      <RevealInView
        cName="md:w-[45%] md:h-auto h-[200px image-container md:p-5 p-3 "
        variants={animateLeftVariants}
      >
        <img
          className="md:rounded-tl-[5%] md:rounded-br-[5%]"
          src={process.env.PUBLIC_URL + "/images/bush3.jpeg"}
          alt=""
        />
      </RevealInView>
      <RevealInView cName="flex-1 md:px-8" variants={animateLeftVariants}>
        <HeadingText
          cName="text-left"
          text="We will do our best to grow your business"
        />
        <p className="my-6">
          Whether you need a web application, mobile app, or a complex
          enterprise solution, Sudo Digital Agency has the expertise to bring
          your vision to life. Contact us today to discuss your custom app
          development needs and take the first step towards digital
          transformation.
        </p>
        <div className="">
          <HeadingText3 text="Our Values" cName="text-left" />
          <div className="flex mt-5">
            <span className="border mr-3 border-greenbg h-8 w-8 flex items-center justify-center rounded-full">
              <FaCheck />
            </span>
            <div className="flex-1">
              <h4 className="font-bold">Integrity</h4>
              We operate with the highest level of integrity, transparency, and
              honesty in all our interactions.
            </div>
          </div>
          <div className="flex mt-5">
            <span className="border mr-3 bg-white border-greenbg text-greenbg h-8 w-8 flex items-center justify-center rounded-full">
              <FaCheck />
            </span>
            <div className="flex-1">
              <h4 className="font-bold">Client-Centric</h4>
              <p>
                Your success is our success. We prioritize understanding your
                unique challenges and goals to deliver tailor-made solutions.
              </p>
            </div>
          </div>
          <div className="flex mt-5">
            <span className="border mr-3 border-greenbg h-8 w-8 flex items-center justify-center rounded-full">
              <FaCheck />
            </span>
            <div className="flex-1">
              <h4 className="font-bold">Continuous Improvement</h4>
              <p>
                We are committed to continuous learning and improvement,
                ensuring that our clients benefit from the latest and most
                effective technologies.
              </p>
            </div>
          </div>
        </div>
      </RevealInView>
    </div>
  );
}
