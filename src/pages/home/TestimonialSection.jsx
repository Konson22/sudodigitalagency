import { useRef } from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 0, itemsToShow: 1, itemPadding: [0, 3] },
  {
    width: 550,
    itemsToShow: 2,
    itemsToScroll: 1,
    itemPadding: [5, 5],
    pagination: false,
  },
];

export default function TestimonialSection() {
  const carouselRef = useRef();

  return (
    <div className="md:flex items-center bg-white md:px-[8%] py-16">
      <div className="md:w-[35%] md:px-0 px-5">
        <p>
          Understanding your target audience is at the core of our design
          process. We prioritize user experience to ensure that every
          interaction with your digital platform is intuitive, engaging, and
          delightful, leading to higher user satisfaction and retention.
        </p>
      </div>
      <div className="flex-1">
        <Carousel
          className="overflow-hidde z-20"
          breakPoints={breakPoints}
          ref={carouselRef}
          showArrows={false}
          outerSpacing={0}
          pagination={false}
        >
          {data.map((user) => (
            <div className="bg-gray-50 w-full p-2" key={user.name}>
              <div className="h-[250px] ">
                <img src={user.image} alt="" />
              </div>
              <div className="p-5">
                <h3 className="text-xl">{user.name}</h3>
                <p>{user.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

const data = [
  {
    name: "James Dut",
    text: "we are a passionate team of creative minds specializing in web, mobile app, and graphic design. Our mission is to transform your ideas into stunning digital experiences",
    image: process.env.PUBLIC_URL + "/images/Image-1.png",
  },
  {
    name: "Suzy John",
    text: "we are a passionate team of creative minds specializing in web, mobile app, and graphic design. Our mission is to transform your ideas into stunning digital experiences",
    image: process.env.PUBLIC_URL + "/images/Image-2.png",
  },
  {
    name: "Aliz MArtin",
    text: "we are a passionate team of creative minds specializing in web, mobile app, and graphic design. Our mission is to transform your ideas into stunning digital experiences",
    image: process.env.PUBLIC_URL + "/images/Image-3.png",
  },
  {
    name: "Konson Ak",
    text: "we are a passionate team of creative minds specializing in web, mobile app, and graphic design. Our mission is to transform your ideas into stunning digital experiences",
    image: process.env.PUBLIC_URL + "/images/Image-4.png",
  },
];
