import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from "react-elastic-carousel";
import { useRef } from "react";

const breakPoints = [
  { width: 0, itemsToShow: 1, itemPadding: [0, 3] },
  {
    width: 550,
    itemsToShow: 1,
    itemsToScroll: 1,
    itemPadding: [5, 5],
    pagination: false,
  },
  {
    width: 850,
    itemsToShow: 2,
    itemPadding: [10, 10],
  },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
];

export default function Header() {
  const carouselRef = useRef();

  return (
    <header className="header-container flex justify-end md:px-[10%] px-4 md:py-32 py-20 text-white">
      <div className="md:w-[80%] w-full flex items-center">
        <button
          className="
                md:h-10 md:w-10 h-7 w-7 flex items-center justify-center
                md:text-2xl text-2xl md:opacity-100 opacity-50
                bg-cl1 text-white hover:bg-cl1 rounded-full z-30
              "
          onClick={() => carouselRef.current.slidePrev()}
        >
          <FiChevronLeft />
        </button>
        <Carousel
          className="overflow-hidde flex-1 z-20"
          breakPoints={breakPoints}
          ref={carouselRef}
          showArrows={false}
          outerSpacing={0}
          pagination={false}
        >
          {slogans.map((slogan) => (
            <h1
              className="md:text-7xl text-2xl md:text-right text-center"
              key={slogan}
            >
              {slogan}
            </h1>
          ))}
        </Carousel>
        <button
          className="
              md:h-10 md:w-10 h-7 w-7 flex items-center justify-center
              md:text-2xl text-2xl md:opacity-100 opacity-50 z-20
              bg-cl1 text-white hover:bg-cl1 rounded-full
            "
          onClick={() => carouselRef.current.slideNext()}
        >
          <FiChevronRight />
        </button>
      </div>
    </header>
  );
}

const slogans = [
  "1حيث الحلاوة تلتقي بالسعادة، والتميز هو عنواننا",
  "2حيث الحلاوة تلتقي بالسعادة، والتميز هو عنواننا",
  "3حيث الحلاوة تلتقي بالسعادة، والتميز هو عنواننا",
];
