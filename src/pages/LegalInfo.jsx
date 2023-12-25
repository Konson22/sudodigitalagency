import { HeadingText2 } from "../util/HeadingText";

export default function LegalInfo() {
  return (
    <div className="md:mx-[20%] md:p-10 p-5 bg-white">
      <HeadingText2 text="LEGAL INFORMATION" cName="text-left" />
      {data.map((info) => (
        <div className="mb-5">
          <h3 className="text">{info.title}</h3>
          <p>{info.text}</p>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    title: "Legal Structure:",
    text: `
    Sudo Digital Agency is a [choose one: sole proprietorship, partnership, limited liability company (LLC), corporation]. The legal structure has been established in accordance with the laws and regulations governing businesses in the [jurisdiction].`,
  },
  {
    title: "Business Registration:",
    text: `
    Sudo Digital Agency is registered with the appropriate government authorities, and it operates in compliance with all applicable business registration requirements.`,
  },
  {
    title: "Intellectual Property:",
    text: `
    All intellectual property, including but not limited to logos, designs, and content created by Sudo Digital Agency, is protected by copyright and other relevant intellectual property laws. Clients are granted a license to use the intellectual property for the intended purpose outlined in the respective service agreements.`,
  },
  {
    title: "Service Agreements:",
    text: `
    Clients engaging Sudo Digital Agency for web design, graphic design, or digital marketing services will be required to enter into a formal service agreement. This agreement will outline the scope of services, project timelines, payment terms, and any other relevant details.`,
  },
  {
    title: "Confidentiality:",
    text: `
    Sudo Digital Agency values the confidentiality of client information. Any information shared by the client that is not publicly available will be treated as confidential and will not be disclosed to third parties without explicit consent, except as required by law.`,
  },
  {
    title: "Data Protection and Privacy:",
    text: `
    Sudo Digital Agency adheres to applicable data protection and privacy laws. Client data, including personal information, will be handled in accordance with the company's privacy policy. Clients are encouraged to review the privacy policy for more information.`,
  },
  {
    title: "Payment Terms:",
    text: `
    Payment terms for Sudo Digital Agency's services will be detailed in the service agreement. Typically, a deposit or upfront payment may be required, with the remaining balance due upon completion of the project or as otherwise specified.`,
  },
  {
    title: "Dispute Resolution:",
    text: `
    In the event of any disputes arising from the services provided by Sudo Digital Agency, both parties agree to attempt to resolve the matter amicably through negotiation. If a resolution cannot be reached, the dispute will be subject to mediation or arbitration as specified in the service agreement.`,
  },
  {
    title: "Governing Law:",
    text: `
    The legal relationship between Sudo Digital Agency and its clients is governed by the laws of the [jurisdiction] without regard to its conflict of law principles.`,
  },
  {
    title: "Changes to Terms:",
    text: `
    Sudo Digital Agency reserves the right to update these legal terms and conditions as necessary. Clients will be notified of any significant changes, and continued use of the services implies acceptance of the updated terms.`,
  },
];
