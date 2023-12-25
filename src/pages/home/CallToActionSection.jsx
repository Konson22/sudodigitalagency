import { animateLeft, animateRight } from "../../assets/animationVariants";
import { RevealInView } from "../../components/RevealInView";

export default function CallToActionSection() {
  return (
    <div className="md:flex md:px-[10%] bg-darkbg text-white px-8 md:py-24 py-14 elipe">
      <RevealInView cName="flex-1" variants={animateLeft}>
        <img src={process.env.PUBLIC_URL + "/images/App-PNG-File.png"} alt="" />
      </RevealInView>
      <RevealInView
        cName="md:w-[60%] md:text-left text-center md:ml-16"
        variants={animateRight}
      >
        <h2 className="md:text-4xl text-2xl font-bold mb-3 text-greenbg">
          Get Ready to Elevate Your Digital Presence!
        </h2>
        <p>
          Whether you're taking your first steps into the digital world or
          looking to enhance your existing online strategies, Sudo Digital
          Agency is here to guide you. Let's embark on a journey of digital
          success together.
        </p>
        <button className="border border-greenbg hover:bg-greenbg hover:text-white text-greenbg md:text-xl mt-6 px-5 py-2 rounded-2xl">
          Get Started
        </button>
      </RevealInView>
    </div>
  );
}
