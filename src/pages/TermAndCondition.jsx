export default function TermAndCondition() {
  return (
    <div className="md:mx-[20%] md:p-10 p-5 bg-white">
      <h3 className="text-2xl mb-2">SUDO DIGITAL AGENCY TERMS & CONDITIONS</h3>
      <span>Last Updated: 25/12/2023</span>
      <div className="my-8">
        {data.map((info) => (
          <div className="mb-5">
            <h3 className="font-thin">{info.title}</h3>
            <p>{info.text}</p>
          </div>
        ))}
      </div>
      <div className="">
        CONTACT INFORMATION For questions or concerns regarding these Terms and
        Conditions, please contact: Sudo Digital Agency [Contact Information]
        <p>
          Thank you for choosing Sudo Digital Agency. We look forward to
          providing you with high-quality digital services.
        </p>
      </div>
    </div>
  );
}

const data = [
  {
    title: "ACCEPTANCE OF TERMS",
    text: `By engaging in business with Sudo Digital Agency, you agree to comply with and be bound by the following Terms and Conditions. These terms may be updated from time to time without notice. It is your responsibility to review these terms periodically.`,
  },
  {
    title: "SERVICES OFFERED",
    text: `
        Sudo Digital Agency provides services including but not limited to web design, graphic design, and digital marketing. The scope of work, deliverables, and timelines will be agreed upon in writing before the commencement of any project.`,
  },
  {
    title: "CLIENT RESPONSIBILITIES",
    text: `
    Clients are required to provide all necessary information, materials, and approvals to facilitate the timely completion of projects. Delays caused by the client may result in adjustments to project timelines and additional costs.`,
  },
  {
    title: "PROJECT ACCEPTANCE",
    text: `
    Upon completion of a project, the client will be provided with an opportunity to review and accept the work. Any modifications or revisions requested after acceptance may incur additional charges.`,
  },
  {
    title: "PAYMENT TERMS",
    text: `
    Payment terms will be outlined in the project proposal and invoice. Failure to make payments in a timely manner may result in the suspension of services and/or the imposition of late fees.`,
  },
  {
    title: "INTELLECTUAL PROPERTY",
    text: `
    Upon full payment, the client will own the intellectual property rights to the final design or marketing materials produced by Sudo Digital Agency. Sudo Digital Agency retains the right to display and promote the work in its portfolio and marketing materials.`,
  },
  {
    title: "CONFIDENTIALITY",
    text: `
    Both parties agree to keep confidential any proprietary or sensitive information disclosed during the course of the project.`,
  },
  {
    title: "LIMITATION OF LIABILITY",
    text: `
    Sudo Digital Agency is not liable for any indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of its services.`,
  },
  {
    title: "FORCE MAJEURE",
    text: `
    Sudo Digital Agency is not liable for any failure or delay in performance due to circumstances beyond its control, including but not limited to acts of God, war, terrorism, natural disasters, and labor disputes.`,
  },
  {
    title: "TERMINATION",
    text: `
    Either party may terminate a project with written notice if the other party breaches any material term of these Terms and Conditions. In the event of termination, the client is responsible for payment for all services rendered up to the termination date.`,
  },
  {
    title: "GOVERNING LAW",
    text: `
    These Terms and Conditions are governed by the laws of [Jurisdiction]. Any disputes arising from these terms will be resolved in the courts of [Jurisdiction].`,
  },
];
