import { HeadingText2 } from "../../util/HeadingText";

export default function CallToActionSection() {
  return (
    <div className="md:flex items-center md:px-[10%] p-6 bg-white">
      <div className="flex-1">
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/web-design-template-copy-space-concept.jpg"
          }
          alt=""
        />
      </div>
      <div className="md:w-[45%]">
        <HeadingText2 text="Web Design" cName="text-left" />
        <p>
          Unlock the full potential of your online presence with our expert web
          design and development services. We craft visually stunning,
          user-friendly websites that resonate with your brand and captivate
          your audience.
        </p>
      </div>
    </div>
  );
}
