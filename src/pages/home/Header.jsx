import { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Header() {
  const carouselRef = useRef();

  return (
    <div className="header-container flex items-center md:h-[75vh] md:px-[8%] md:py-0 py-16">
      <button
        className="md:text-2xl text-2xl text-white hover:bg-greenbg/30"
        onClick={() => carouselRef.current.slidePrev()}
      >
        <FiChevronLeft />
      </button>
      <Carousel
        className="overflow-hidde z-20"
        ref={carouselRef}
        showArrows={false}
        outerSpacing={0}
        pagination={false}
        enableAutoPlay={true}
      >
        {slogans.map((slogan) => (
          <div className="md:w-[80%]">
            <h1 className="md:text-6xl text-3xl font-bold text-greenbg mb-3">
              {slogan.title}
            </h1>
            <h1 className="md:text-4xl text-white">{slogan.text}</h1>
            <button className="bg-greenbg text-white px-5 py-2 rounded text-xl mt-5 text-whit">
              {slogan.btnText}
            </button>
          </div>
        ))}
      </Carousel>
      <button
        className="md:text-2xl text-2xl text-white hover:bg-greenbg/30"
        onClick={() => carouselRef.current.slideNext()}
      >
        <FiChevronRight />
      </button>
    </div>
  );
}

const slogans = [
  {
    title: "Sudo Digital Agency",
    text: `your trusted partner in elevating your digital presence and creating
    memorable experiences for your audience.`,
    btnText: "Get started",
  },
  {
    title: "Social media ads",
    text: `Our mission is to transform your ideas into stunning digital experiences that captivate and engage your audience.`,
    btnText: "Get started",
  },
  {
    title: "Web & mobile app developement",
    text: `We understand that each business is unique, and we tailor our designs to match your specific requirements, branding, and target audience`,
    btnText: "Get started",
  },
];
