import { HeadingText, HeadingTitleText } from "../../util/HeadingText";
import { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonails } from "./TestimonailSection";

const breakPoints = [
  { width: 0, itemsToShow: 2, itemPadding: [0, 3] },
  {
    width: 550,
    itemsToShow: 3,
    itemsToScroll: 1,
    itemPadding: [10, 10],
    pagination: false,
  },
];

export default function BlogingSection() {
  const carouselRef = useRef();

  return (
    <div className="md:px-[8%]">
      <div className="text-center md:px-[23%] px-4">
        <HeadingTitleText text="Why Choose Us?" cName="mx-auto" />
        <HeadingText text="Bloggin & News" cName="text-center" />
        <p>
          Your online presence starts with a captivating website. Our developers
          blend creativity with technical proficiency to build websites that not
          only look stunning but
        </p>
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
            <div className="">
              <div className="md:h-[260px] h-[160px] rounded-2xl overflow-hidden">
                <img src={testimony.image} alt="" />
              </div>
              <div className="py-3">
                <p className="">{testimony.text}</p>
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
