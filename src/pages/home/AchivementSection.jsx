import { FaAward, FaCalendarDay } from "react-icons/fa";
import { HeadingText } from "../../util/HeadingText";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AchivementSection() {
  return (
    <div className="bg-darkbg text-white md:px-[10%] px-4 md:py-16 py-8">
      <div className="text-center md:px-[20%]">
        <HeadingText text="SUCCESS & ACHIVEMENTS" cName="text-center" />
        <p>
          Whether you're taking your first steps into the digital world or
          looking to enhance your existing online strategies, Sudo Digital
          Agency is here to guide you. Let's embark on a journey of digital
          success together.
        </p>
      </div>
      <div
        className={`grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4 flex-1 text-gray-700 md:mt-8 mt-6`}
      >
        {data.map((achivement, index) => (
          <AchivementCard achivement={achivement} key={index} />
        ))}
      </div>
    </div>
    // <div className="bg-darkbg text-white md:flex items-center md:px-[10%] px-4 md:py-16 py-8 md:mb-0 mb-14">
    //   <AchivementContent />
    //   <div className="flex-1 md:ml-10 md:text-left text-center">
    //     <HeadingTitleText
    //       text="ACHIVEMENTS"
    //       cName="bg-greenbg/20 text-white md:mx-0 mx-auto"
    //     />
    //     <HeadingText
    //       text="SUCCESS & ACHIVEMENTS"
    //       cName="md:text-left text-center text-black"
    //     />
    //     <p className="md:my-4 py-3">
    //       Your online presence starts with a captivating website. Our developers
    //       blend creativity with technical proficiency to build websites that not
    //       only look stunning but
    //     </p>
    //     {/* <Button text="Read More" /> */}
    //   </div>
    //   <AchivementContent cName="md:hidden grid" />
    // </div>
  );
}

// function AchivementContent({ cName = "md:grid hidden" }) {
//   return (
//     <div className={`grid grid-cols-4 md:gap-8 gap-4 flex-1 text-gray-700`}>
//       {data.map((achivement, index) => (
//         <AchivementCard achivement={achivement} key={index} />
//       ))}
//     </div>
//   );
// }

function AchivementCard({ achivement }) {
  const [count, setCount] = useState(0);

  const ref = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isView = useInView(ref, { amount: 0.7 });

  useEffect(() => {
    if (isView) {
      const intervalId = setInterval(() => {
        if (count < achivement.count) {
          setCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(intervalId);
        }
      }, 90); // Change the interval (in milliseconds) as needed
      return () => clearInterval(intervalId);
    }
  }, [count, achivement.count, isView]);

  return (
    <div
      className={`${achivement.bg} flex flex-col items-center p-5 rounded-md`}
      ref={ref}
    >
      <div className="md:text-4xl text-3xl">
        <FaCalendarDay />
      </div>
      <span className="md:text-4xl text-2xl font-bold my-2">{count}+</span>
      <p className="md:text-xl">{achivement.text}</p>
    </div>
  );
}
const data = [
  {
    text: "Years of experience",
    count: 14,
    bg: "bg-green-200",
    icon: <FaAward />,
  },
  {
    text: "Professional Team",
    count: 4,
    bg: "bg-rose-200",
    icon: <FaAward />,
  },
  {
    text: "Satisfied Clients",
    count: 8,
    bg: "bg-rose-200",
    icon: <FaAward />,
  },
  {
    text: "Award Winning",
    count: 2,
    bg: "bg-sky-200",
    icon: <FaAward />,
  },
];
