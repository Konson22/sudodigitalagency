import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from "react-elastic-carousel";

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

export default function TestimonailSection() {
  const carouselRef = useRef();

  return (
    <div className="md:px-[10%] px-3 mb-8">
      <h3 className="text-4xl text-center mb-2">Testimonail</h3>
      <div className="flex items-center mt-8">
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
        <div className="relative flex items-center"></div>
        <Carousel
          className="overflow-hidde flex-1 z-20"
          breakPoints={breakPoints}
          ref={carouselRef}
          showArrows={false}
          outerSpacing={0}
          pagination={false}
        >
          {testimonails.map((user) => (
            <div className="md:flex items-center bg-white rounded-md p-5">
              <div className="h-[180px] md:w-[180px] message-style">
                <img src={user.image} alt="" />
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-xl">{user.name}</h3>
                <p>{user.text}</p>
              </div>
            </div>
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
    </div>
  );
}

const testimonails = [
  {
    name: "Konson",
    text: `استمتع بتجربة فريدة من نوعها عبر استكشاف مجموعتنا الرائعة من الحلوى المختارة بعناية. تضم مجموعتنا مجموعة متنوعة من الحلوى الطرية، الحلوى الحامضة، `,
    image: process.env.PUBLIC_URL + "/images/Image.png",
  },
  {
    name: "Konson",
    text: `استمتع بتجربة فريدة من نوعها عبر استكشاف مجموعتنا الرائعة من الحلوى المختارة بعناية. تضم مجموعتنا مجموعة متنوعة من الحلوى الطرية، الحلوى الحامضة، `,
    image: process.env.PUBLIC_URL + "/images/Image-1.png",
  },
  {
    name: "Konson",
    text: `استمتع بتجربة فريدة من نوعها عبر استكشاف مجموعتنا الرائعة من الحلوى المختارة بعناية. تضم مجموعتنا مجموعة متنوعة من الحلوى الطرية، الحلوى الحامضة، `,
    image: process.env.PUBLIC_URL + "/images/Image-2.png",
  },
  {
    name: "Konson",
    text: `استمتع بتجربة فريدة من نوعها عبر استكشاف مجموعتنا الرائعة من الحلوى المختارة بعناية. تضم مجموعتنا مجموعة متنوعة من الحلوى الطرية، الحلوى الحامضة، `,
    image: process.env.PUBLIC_URL + "/images/Image-3.png",
  },
  {
    name: "Konson",
    text: `استمتع بتجربة فريدة من نوعها عبر استكشاف مجموعتنا الرائعة من الحلوى المختارة بعناية. تضم مجموعتنا مجموعة متنوعة من الحلوى الطرية، الحلوى الحامضة، `,
    image: process.env.PUBLIC_URL + "/images/Image-4.png",
  },
];
