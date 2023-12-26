export default function WebDesignCallToActionSection() {
  return (
    <div className="md:flex items-center md:px-[10%] px-4 py-8 bg-greenbg text-white">
      <div className="flex-1">
        <img src={process.env.PUBLIC_URL + "/images/web-call.png"} alt="" />
      </div>
      <div className="flex-1 md:ml-8">
        <h3 className="text-3xl text-black">
          Unlock Your Online Potential with Stunning Web Design!
        </h3>
        <p className="text-xl">
          We understand the critical role that a well-crafted website plays in
          establishing a strong online presence. Our team of seasoned designers
          is dedicated to unlocking the full potential of your brand through
          visually stunning and strategically crafted web designs.
        </p>
      </div>
    </div>
  );
}
