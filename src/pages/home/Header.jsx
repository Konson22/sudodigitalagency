export default function Header() {
  return (
    <div className="header-container flex items-center md:h-[75vh] px-[8%] md:py-0 py-16">
      <div className="md:w-[70%]">
        <h1 className="md:text-6xl text-3xl font-bold text-greenbg mb-3">
          Sudo Agency, your creative partner
        </h1>
        <h1 className="md:text-4xl text-white">
          for all your web, mobile app, and graphic design needs!
        </h1>
        <button className="bg-greenbg px-5 py-2 rounded text-xl mt-5 text-whit">
          Get Started
        </button>
      </div>
    </div>
  );
}
