import { HeadingText } from "../../util/HeadingText";

export default function AboutSection() {
  return (
    <div className="md:flex items-center md:px-[14%] px-4 py-10 bg-white border-b-4 border-greenbg">
      <div className="md:w-[45%] md:text-5xl text-2xl">
        <HeadingText
          text="Welcome to Sudo Digital Agency"
          cName="md:text-left text-center text-greenbg"
        />
      </div>
      <div className="flex-1 md:text-left text-center">
        <p>
          We are passionate about transforming ideas into digital experiences.
          As a leading tech company, we offer a comprehensive suite of services
          to meet the evolving needs of businesses in today's digital landscape.
        </p>
      </div>
    </div>
  );
}
