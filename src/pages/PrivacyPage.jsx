import { Heading2 } from "../util/HeadingTitle";

export default function PrivacyPage() {
  return (
    <div className="md:mx-[20%] md:p-10 p-5 bg-white">
      <h3 className="text-4xl mb-2">Privacy Policy</h3>
      <span>Last Updated: 25/12/2023</span>
      <p className="my-4">
        At Sudo Digital Agency, we are committed to protecting the privacy and
        security of your personal information. This Privacy Policy outlines how
        we collect, use, and safeguard your information when you engage with our
        services, including web design and development, graphic design, and
        digital marketing. By using our services, you consent to the practices
        described in this policy.
      </p>
      <div className="my-8">
        <Heading2 text="Information We Collect" />
        <div className="mt-3">
          {infoData.map((info) => (
            <div className="mb-5">
              <h3 className="font-semibold">{info.title}</h3>
              <p>{info.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <Heading2 text="How We Use Your Information" />
        <div className="mt-3">
          {infoUsageData.map((info) => (
            <div className="mb-5">
              <h3 className="font-semibold">{info.title}</h3>
              <p>{info.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8">
        <Heading2 text="Information Sharing" />
        <div className="mt-3">
          {infoSharingData.map((info) => (
            <div className="mb-5">
              <h3 className="font-semibold">{info.title}</h3>
              <p>{info.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8">
        <Heading2 text="Security" />
        <p className="mt-3">
          We implement industry-standard security measures to protect your
          personal information from unauthorized access, disclosure, alteration,
          and destruction.
        </p>
      </div>
      <div className="">
        <Heading2 text="Your Choices" />
        <p className="mt-3">
          You have the right to access, correct, or delete your personal
          information. If you have any questions or concerns about our privacy
          practices, please contact us at customercare@sudodigitalagency.com.
        </p>
      </div>
      <div className="mt-8">
        <Heading2 text="Changes to this Privacy Policy" />
        <p className="my-3">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. The most current version will be posted on our website with
          the effective date.
        </p>
      </div>
      <div className="mt-4 border bg-gray-200 md:p-10 p-5">
        <p className="">
          By using our services, you acknowledge that you have read and
          understood this Privacy Policy.
        </p>
        <p className="mt-5">Thank you for choosing Sudo Digital Agency.</p>
      </div>
    </div>
  );
}

const infoData = [
  {
    title: "Personal InformationS",
    text: `
    When you contact us or use our services, we may collect personal information such as your name, email address, phone number, and other relevant details.
 `,
  },
  {
    title: "Usage Data",
    text: `
    We may collect information about how you interact with our website and services, including IP addresses, browser type, pages viewed, and the duration of your visit.`,
  },
  {
    title: "Client Data",
    text: `
    - In the course of providing our services, we may collect and process data provided by our clients, including content, images, and other materials necessary for web design, development, and digital marketing campaigns.`,
  },
];

const infoUsageData = [
  {
    title: "Service Delivery",
    text: `
    We use your personal information to deliver the services you have requested, such as web design, development, graphic design, and digital marketing.`,
  },
  {
    title: "Communication",
    text: `
    We may use your contact information to communicate with you about our services, updates, and relevant information.`,
  },
  {
    title: "Improvement of Services",
    text: `
    We analyze usage data to improve our website, services, and user experience.`,
  },
  {
    title: "Legal Compliance",
    text: `
    - We may process your information to comply with legal obligations and respond to lawful requests from government authorities.`,
  },
];

const infoSharingData = [
  {
    title: "Third-Party Service Providers",
    text: `
    We may share your information with third-party service providers who assist us in delivering our services, such as hosting providers, analytics services, and marketing platforms.
 `,
  },
  {
    title: "Legal Requirements",
    text: `
    We may disclose your information in response to a legal request or as required by law to protect our rights, property, or safety.`,
  },
];
