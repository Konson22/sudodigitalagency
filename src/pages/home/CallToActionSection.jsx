export default function CallToActionSection() {
  return (
    <div
      className="md:px-[10%] bg-darkbg text-white px-4 md:py-24 py-10"
      //   style={{
      //     backgroundImage: `url(${
      //       process.env.PUBLIC_URL + "/images/pexels-mateusz-dach-450035.jpg"
      //     })`,
      //     backgroundPosition: "center",
      //     backgroundSize: "cover",
      //   }}
    >
      <div className="md:w-[55%]">
        <h2 className="md:text-5xl text-2xl font-bold mb-3 text-greenbg">
          Get Ready to Elevate Your Digital Presence!
        </h2>
        <p>
          Whether you're taking your first steps into the digital world or
          looking to enhance your existing online strategies, Sudo Digital
          Agency is here to guide you. Let's embark on a journey of digital
          success together.
        </p>
        <button className="border border-greenbg text-greenbg text-xl mt-6 px-5 py-2 rounded-sm">
          Get Started
        </button>
      </div>
    </div>
  );
}
