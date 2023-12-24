import { FaPaperPlane } from "react-icons/fa";
import { Button } from "../util/Buttons";
import { HeadingText2 } from "../util/HeadingText";

export default function ContactForm() {
  return (
    <div className="bg-darkbg/90 text-white md:flex items-center md:px-[10%] px-5 py-14">
      <div className="flex-1 md:p-8 p-4">
        <HeadingText2
          text="Get Ready to Transform Your Digital Presence!"
          cName="md:text-left"
        />
        <p>
          Ready to take your business to new heights in the digital realm?
          Contact us today, and let's embark on a journey of innovation, growth,
          and success together.
        </p>
      </div>
      <div className="flex-1 md:p-8 p-4">
        <HeadingText2 text="Let's Get In touch" cName="text-center" />
        <form>
          <div className="h-[3rem] border border-greenbg mb-5">
            <input
              className="h-full w-full bg-transparent border-none focus:border-none focus:outline-none px-3"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="h-[3rem] border border-greenbg mb-5">
            <input
              className="h-full w-full bg-transparent border-none focus:border-none focus:outline-none px-3"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="h-[6.5rem] border border-greenbg mb-5">
            <textarea
              className="h-full w-full bg-transparent border-none focus:border-none focus:outline-none px-3"
              placeholder="Your message..."
            ></textarea>
          </div>
          <Button text="Send" iconLeft={<FaPaperPlane />} />
        </form>
      </div>
    </div>
  );
}
