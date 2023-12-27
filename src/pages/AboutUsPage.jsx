import OurTeam from "../components/OurTeam";
import { Heading2, Heading3 } from "../util/HeadingTitle";

export default function AboutUsPage() {
  return (
    <div className="md:mx-[20%] md:bg-white  md:p-14 p-4">
      {/* INTRODUCTION SECTION */}
      <div className="">
        <h3 className="md:text-6xl text-3xl md:mr-8">ABOUT US</h3>
        <p>
          At Sudo Digital Agency, we are more than just a tech company; we are
          your dedicated partner in navigating the dynamic and ever-evolving
          digital landscape. Established with a vision to revolutionize the tech
          industry, we bring together a team of passionate professionals who are
          committed to delivering excellence in every project.
        </p>
      </div>
      {/* OUT STORY */}
      <div className="my-10">
        <Heading2 text="Our Story" />
        <p>
          Founded in 2022, Sudo Digital Agency began as a small initiative
          fueled by a shared passion for technology and a vision to empower
          businesses through digital solutions. Over the years, we've evolved
          into a dynamic force in the industry, continually pushing boundaries
          and embracing cutting-edge technologies.
        </p>
      </div>
      <div className="">
        <Heading2 text="Our Mission" />
        <p>
          Our mission is simple yet powerful - to empower businesses to thrive
          in the digital era. We believe in the transformative power of
          technology and its ability to simplify complexities, drive growth, and
          enhance overall business performance.
        </p>
      </div>
      {/* WHAT SET US APRT */}
      <div className="mt-10">
        <Heading2 text="What Sets Us Apart" />
        <div className="">
          <Heading3 text="Expertise" />
          <p>
            Our team comprises skilled professionals with expertise in web
            design, app development, digital marketing, and more. We are
            committed to staying at the forefront of technological advancements.
          </p>
        </div>
        <div className="my-5">
          <Heading3 text="Collaboration" />
          <p>
            We see our clients as partners and believe that collaboration is the
            key to success. We work closely with you, combining your insights
            with our technical know-how to achieve remarkable results.
          </p>
        </div>
        <div className="">
          <Heading3 text="Innovation" />
          <p>
            In a rapidly changing digital landscape, innovation is not just an
            option—it's a necessity. We pride ourselves on our innovative
            approach to solving problems and creating solutions that stand out.
          </p>
        </div>
      </div>
      {/* OUR VALUES */}
      <div className="mt-10">
        <Heading2 text="Our Values" />
        <div className="">
          <Heading3 text="Integrity" />
          <p>
            We operate with the highest level of integrity, transparency, and
            honesty in all our interactions.
          </p>
        </div>
        <div className="my-5">
          <Heading3 text="Client-Centric" />
          <p>
            Your success is our success. We prioritize understanding your unique
            challenges and goals to deliver tailor-made solutions.
          </p>
        </div>
        <div className="">
          <Heading3 text="Continuous Improvement" />
          <p>
            We are committed to continuous learning and improvement, ensuring
            that our clients benefit from the latest and most effective
            technologies.
          </p>
        </div>
      </div>
      <OurTeam />
      {/* Join us on this exciting journey as we continue to redefine the
      possibilities of technology and help businesses thrive in the digital age. */}
    </div>
  );
}
