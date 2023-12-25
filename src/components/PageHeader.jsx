import { RevealInView } from "./RevealInView";

const variants = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    x: 60,
    transition: {
      duration: 0.3,
    },
  },
};

const variants2 = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    x: 60,
    transition: {
      duration: 0.3,
    },
  },
};

export default function PageHeader({ title, text, image, bg = "bg-greenbg" }) {
  const imageContainer = (cName) => (
    <RevealInView cName={`md:h-[80%] flex-1 ${cName}`} variants={variants2}>
      <img src={image} alt="" />
    </RevealInView>
  );
  return (
    <div
      className={`md:h-[65vh] md:flex items-center md:px-[10%] px-6 py-8 ${bg} text-white`}
    >
      {imageContainer("md:hidden block mb-4")}
      <RevealInView
        cName="md:w-[50%] md:text-left text-center"
        variants={variants}
      >
        <h1 className="md:text-5xl text-3xl mb-2">{title}</h1>
        <span className="block md:text-3xl text-xl">{text}</span>
        <button className="border px-5 py-3 mt-6 rounded-md md:text-xl">
          Get Quotation
        </button>
      </RevealInView>
      {imageContainer("md:block hidden")}
    </div>
  );
}
