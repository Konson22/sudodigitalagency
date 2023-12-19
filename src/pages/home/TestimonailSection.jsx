import { HeadingText, HeadingTitleText } from "../../util/HeadingText";
import { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const breakPoints = [
  { width: 0, itemsToShow: 1, itemPadding: [0, 3] },
  {
    width: 550,
    itemsToShow: 3,
    itemsToScroll: 1,
    itemPadding: [5, 5],
    pagination: false,
  },
];

export default function TestimonailSection() {
  const carouselRef = useRef();

  return (
    <div className="md:px-[8%] px-2 py-16 bg-greenb">
      <div className="md:flex text-whitee md:px-16 px-3">
        <div className="mr-8">
          <HeadingTitleText text="Testimonails" />
          <HeadingText text="What Clients Say About Us?" />
        </div>
        <div className="flex-1 md:text-left text-center">
          <p>
            Your online presence starts with a captivating website. Our
            developers blend creativity with technical
          </p>
          <button className="md:block hidden bg-white/50 px-5 py-2 rounded-md mt-4">
            All Rreview
          </button>
        </div>
      </div>
      <div className="flex items-center mt-8">
        <button
          className="md:text-3xl text-2xl rounded-full bg-white/30 hover:bg-white/50 md:p-2 p-1"
          onClick={() => carouselRef.current.slidePrev()}
        >
          <FiChevronLeft />
        </button>
        <Carousel
          className="overflow-hidde z-20"
          breakPoints={breakPoints}
          ref={carouselRef}
          showArrows={false}
          outerSpacing={0}
          pagination={false}
        >
          {testimonails.map((testimony) => (
            <div className="bg-gray-100 shadow-md p-6 rounded-xl">
              <p className="italic mb-4">{testimony.text}</p>
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full overflow-hidden">
                  <img src={testimony.image} alt="" />
                </div>
                <div className="mx-3 flex-1">
                  <p className="text-xl">{testimony.name}</p>
                  <span className="text-sm">{testimony.title}</span>
                </div>
                <FaQuoteRight className="text-4xl opacity-50" />
              </div>
            </div>
          ))}
        </Carousel>
        <button
          className="md:text-3xl text-2xl rounded-full bg-white/30 hover:bg-white/50 md:p-2 p-1"
          onClick={() => carouselRef.current.slideNext()}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export const testimonails = [
  {
    name: "James John",
    title: "MTN CEO",
    text: `Working with Sudo Digital Agency was a game-changer for our business. Their expertise in web development gave us!`,
    image: process.env.PUBLIC_URL + "/images/Image-4.png",
  },
  {
    name: "Konson",
    title: "NCA Ministry",
    text: `Working with Sudo Digital Agency was a game-changer for our business. Their expertise in web development gave us!`,
    image: process.env.PUBLIC_URL + "/images/Image-1.png",
  },
  {
    name: "Alison Juma",
    title: "Company CEO",
    text: `Working with Sudo Digital Agency was a game-changer for our business. Their expertise in web development gave us!`,
    image: process.env.PUBLIC_URL + "/images/Image-2.png",
  },
  {
    name: "Deng Bol",
    title: "UN HR Director",
    text: `Working with Sudo Digital Agency was a game-changer for our business. Their expertise in web development gave us!`,
    image: process.env.PUBLIC_URL + "/images/Image-3.png",
  },
  {
    name: "Konson",
    title: "UN HR Director",
    text: `Working with Sudo Digital Agency was a game-changer for our business. Their expertise in web development gave us!`,
    image: process.env.PUBLIC_URL + "/images/Image-4.png",
  },
];
