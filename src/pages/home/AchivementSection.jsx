import { FaAward, FaCalendarDay } from "react-icons/fa";
import { HeadingText, HeadingTitleText } from "../../util/HeadingText";

export default function AchivementSection() {
  const achivementContent = (cName = "md:grid hidden") => (
    <div className={`${cName} grid-cols-2 md:gap-8 gap-4 flex-1 text-gray-700`}>
      {data.map((info) => (
        <div className={`${info.bg} flex flex-col items-center p-5 rounded-md`}>
          <div className="md:text-4xl text-3xl">{info.icon}</div>
          <span className="md:text-4xl text-2xl font-bold my-2">
            {info.count}+
          </span>
          <p className="md:text-xl">{info.text}</p>
        </div>
      ))}
    </div>
  );
  return (
    <div className="md:flex items-center bg-greenbg text-white md:px-[10%] px-4 md:py-16 py-8 md:mb-0 mb-14">
      {achivementContent()}
      <div className="flex-1 md:ml-10 md:text-left text-center">
        <HeadingTitleText
          text="ACHIVEMENTS"
          cName="bg-white/50 text-gray-600 md:mx-0 mx-auto"
        />
        <HeadingText
          text="Some Of The Wards We Got"
          cName="md:text-left text-center"
        />
        <p className="md:my-4 py-3">
          Your online presence starts with a captivating website. Our developers
          blend creativity with technical proficiency to build websites that not
          only look stunning but
        </p>
        {/* <Button text="Read More" /> */}
      </div>
      {achivementContent("md:hidden grid")}
    </div>
  );
}

const data = [
  {
    text: "Years of experience",
    count: 15,
    bg: "bg-rose-200",
    icon: <FaCalendarDay />,
  },
  {
    text: "Professional Team",
    count: 4,
    bg: "bg-green-200",
    icon: <FaAward />,
  },
  {
    text: "Satisfied Clients",
    count: 8,
    bg: "bg-green-200",
    icon: <FaAward />,
  },
  {
    text: "Award Winning",
    count: 2,
    bg: "bg-rose-200",
    icon: <FaAward />,
  },
];
