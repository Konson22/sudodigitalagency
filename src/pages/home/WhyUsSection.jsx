import { FiCheck } from "react-icons/fi";
export default function WhyUsSection() {
  return (
    <div className="bg-greenbg text-white py-16">
      <div className="flex pl-52">
        <div className="flex-1">
          <h2 className="font-bold text-3xl mb-4">Why Sudo Digital Agency</h2>
          {data.map((info) => (
            <div className="flex">
              <div className="h-10 w-10 flex items-center justify-center border border-white text- text-3xl p-2 rounded-full">
                {info.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold">{info.title}</h3>
                <p className="">{info.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[50%] rounded-md overflow-hidden ml-8">
          <img
            src={process.env.PUBLIC_URL + "/images/people-2557396_1280.jpg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    title: "Tailored Solutions",
    text: `We believe in the power of custom solutions. Your business is unique, and so are our strategies.`,
    icon: <FiCheck />,
  },
  {
    title: "Results-Driven",
    text: `Success for us means tangible results for you. We're dedicated to achieving your business goals through our digital initiatives.`,
    icon: <FiCheck />,
  },
  {
    title: "Collaborative Approach",
    text: `Your input matters. We work closely with you throughout the process, from ideation to execution.`,
    icon: <FiCheck />,
  },
];
