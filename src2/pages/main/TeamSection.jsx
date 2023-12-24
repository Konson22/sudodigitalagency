import { HeadingText } from "../../util/HeadingText";

export default function TeamSection() {
  return (
    <div className="md:px-[8%] px-4 md:my-16 my-9">
      <div className="md:px-[20%] text-center">
        <HeadingText text="Meet the Team" />
        <p>
          Behind every successful project is a team of dedicated professionals.
          Get to know the faces behind Sudo Digital Agency, each contributing
          their unique skills and perspectives to our collective success.
        </p>
      </div>
    </div>
  );
}
