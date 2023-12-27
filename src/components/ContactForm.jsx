import { FaPaperPlane } from "react-icons/fa";
import { Button } from "../util/Buttons";
import { HeadingText2 } from "../util/HeadingText";

export default function ContactForm() {
  return (
    <div className="contact-circle bg-greenbg text-white md:flex items-center md:px-[10%] px-5 md:py-14 py-8">
      <div className="flex-1 md:p-8 p-4 md:mb-0 mb-10">
        <HeadingText2
          text="Get Ready to Transform Your Digital Presence!"
          cName="md:text-left text-gray-700 mb-3"
        />
        <p className="md:text-xl">
          Ready to take your business to new heights in the digital realm?
          Contact us today, and let's embark on a journey of innovation, growth,
          and success together.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-xl flex-1 md:p-10 p-8 mb-16">
        <HeadingText2
          text="Let's Get In touch"
          cName="text-center md:mb-6 mb-5"
        />
        <form>
          <div className="h-[3rem] border border-greenbg rounded overflow-hidden bg-gray-100 mb-5">
            <input
              className="h-full w-full bg-transparent border-none focus:border-none focus:outline-none px-3"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="h-[3rem] border border-greenbg rounded overflow-hidden bg-gray-100 mb-5">
            <input
              className="h-full w-full bg-transparent border-none focus:border-none focus:outline-none px-3"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="h-[6.5rem] border border-greenbg rounded overflow-hidden bg-gray-100 mb-5">
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
