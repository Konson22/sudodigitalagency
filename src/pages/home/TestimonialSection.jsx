import { HeadingText, HeadingTitleText } from "../../util/HeadingText";
import { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

export default function TestimonailSection() {
  const carouselRef = useRef();

  return (
    <div className="md:px-[8%] px-2 py-16 bg-greenb">
      <HeadingTitleText text="Testimonails" />
      <HeadingText text="What Clients Say About Us?" />
      <div className="md:flex text-whitee md:px-16 px-3">
        <div className="mr-8"></div>
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
            <div className="bg-white shadow-md p-6 rounded-xl">
              <p className="line-clamp-4 italic mb-4">{testimony.text}</p>
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full overflow-hidden">
                  <img src={testimony.image} alt="" />
                </div>
                <div className="mx-3 flex-1">
                  <p className="text-xl line-clamp-1">{testimony.name}</p>
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
    text: `here to express our gratitude for the transformative impact Sudo Digital Agency has had on our digital marketing efforts. Their strategic approach has delivered tangible results, including increased website traffic and improved brand visibility. The team's professionalism and commitment to delivering results make them a trusted partner in our business growth journey. We look forward to achieving even greater milestones together!`,
    image: process.env.PUBLIC_URL + "/images/avatars/Image-4.png",
  },
  {
    name: "Konson",
    title: "ABC Widgets",
    text: `As the Marketing Director at ABC Widgets, I can't speak highly enough of our experience with Sudo Digital Agency. Under their guidance, our outdated website underwent a remarkable transformation, thanks to their exceptional web design and development skills. The team's attention to detail and creative flair perfectly captured our brand essence. Sudo Digital Agency is more than just a service provider; they are a valuable partner committed to our success.`,
    image: process.env.PUBLIC_URL + "/images/avatars/Image-1.png",
  },
  {
    name: "Susan Thompson",
    title: "Company CEO",
    text: `Our partnership with Sudo Digital Agency has been a game-changer for our digital presence. Their expertise in digital marketing strategies, including SEO, social media, and content marketing, has significantly boosted our online visibility. Sudo Digital Agency's responsiveness and personalized approach set them apart. It's rare to find a team that not only understands your business needs but also exceeds expectations. We're thrilled with the results and look forward to a continued successful collaboration`,
    image: process.env.PUBLIC_URL + "/images/avatars/Image-2.png",
  },
  {
    name: "Deng Bol",
    title: "Founder of Stellar Brands",
    text: `We engaged Sudo Digital Agency for graphic design services, and the results have been nothing short of spectacular. Their graphic design team possesses a rare blend of creativity and strategic thinking. From social media visuals to marketing collateral, Sudo Digital Agency consistently delivers designs that resonate with our target audience. Collaborating with them has elevated our brand aesthetics and storytelling.`,
    image: process.env.PUBLIC_URL + "/images/avatars/Image-3.png",
  },
  {
    name: "Konson",
    title: "UN HR Director",
    text: `Working with Sudo Digital Agency was a game-changer for our business. Their expertise in web development gave us!`,
    image: process.env.PUBLIC_URL + "/images/avatars/Image-4.png",
  },
];

/*
1. "As the Marketing Director at ABC Widgets, I can't speak highly enough of our experience with Sudo Digital Agency. Under their guidance, our outdated website underwent a remarkable transformation, thanks to their exceptional web design and development skills. The team's attention to detail and creative flair perfectly captured our brand essence. Sudo Digital Agency is more than just a service provider; they are a valuable partner committed to our success. I highly recommend their services to anyone seeking top-notch web solutions."

2. "I'm Susan Thompson, the CEO of XYZ Ventures, and our partnership with Sudo Digital Agency has been a game-changer for our digital presence. Their expertise in digital marketing strategies, including SEO, social media, and content marketing, has significantly boosted our online visibility. Sudo Digital Agency's responsiveness and personalized approach set them apart. It's rare to find a team that not only understands your business needs but also exceeds expectations. We're thrilled with the results and look forward to a continued successful collaboration."

3. "John Stevens here, Founder of Stellar Brands. We engaged Sudo Digital Agency for graphic design services, and the results have been nothing short of spectacular. Their graphic design team possesses a rare blend of creativity and strategic thinking. From social media visuals to marketing collateral, Sudo Digital Agency consistently delivers designs that resonate with our target audience. Collaborating with them has elevated our brand aesthetics and storytelling."

4. "I'm Sarah Miller, the IT Manager at Tech Innovators Ltd., and I can confidently say that Sudo Digital Agency is the go-to partner for all our web development needs. Their seamless integration of web design and development services has significantly enhanced our website's functionality and user experience. The team's technical expertise, coupled with their commitment to client satisfaction, makes them stand out in the digital agency landscape. Sudo Digital Agency is a reliable and innovative partner for web development."

5. "David Rodriguez, Chief Marketing Officer at Global Solutions Inc., here to express our gratitude for the transformative impact Sudo Digital Agency has had on our digital marketing efforts. Their strategic approach has delivered tangible results, including increased website traffic and improved brand visibility. The team's professionalism and commitment to delivering results make them a trusted partner in our business growth journey. We look forward to achieving even greater milestones together."

6. "I'm Emily Harper, the Creative Director at Dynamic Tech Solutions, and our collaboration with Sudo Digital Agency has been nothing short of fantastic. Their graphic design team has an incredible knack for turning ideas into visually stunning creations. From designing eye-catching logos to developing visually appealing marketing materials, Sudo Digital Agency consistently delivers top-notch work. Their creativity and dedication to perfection have elevated our brand image, and we're grateful for the positive impact on our marketing efforts."

7. "Having served as the Head of E-Commerce at Elevation Brands, I can confidently say that Sudo Digital Agency is a true partner in success. Their expertise in web design and development played a pivotal role in revamping our online store. The user-friendly interface and seamless navigation have resulted in a significant boost in online sales. Sudo Digital Agency's commitment to understanding our business needs and delivering tailored solutions makes them a reliable choice for anyone seeking e-commerce excellence."

8. "I'm Michael Turner, CEO of Innovate Dynamics Ltd., and our journey with Sudo Digital Agency has been marked by innovation and excellence. Their digital marketing strategies have not only increased our online presence but have also generated leads that converted into loyal customers. The team's data-driven approach and continuous optimization have made a substantial impact on our ROI. Sudo Digital Agency is more than a service provider; they are a strategic partner in our growth story."

9. "As the Chief Technology Officer at Quantum Innovations, I am pleased to endorse Sudo Digital Agency for their exceptional web development services. Their team's technical prowess and commitment to staying on top of industry trends have resulted in a website that not only meets but exceeds our expectations. Sudo Digital Agency's collaborative approach and transparent communication make them a pleasure to work with, and I highly recommend their services to anyone in need of cutting-edge web solutions."

10. "I'm Jessica Morales, the Marketing Manager at Global Trends Co., and our experience with Sudo Digital Agency has been phenomenal. Their digital marketing expertise has played a crucial role in our brand's online visibility and engagement. From creating compelling content to implementing targeted advertising campaigns, Sudo Digital Agency has consistently delivered results. Their team's dedication and strategic thinking have made them an invaluable asset to our marketing efforts, and we look forward to achieving even greater success together."
*/
