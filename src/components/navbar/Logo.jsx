export default function Logo() {
  return (
    <div className="flex items-center">
      <img
        className="md:h-[3.5rem] h-[3rem] md:w-[3.5rem] w-[3rem]"
        src={process.env.PUBLIC_URL + "/images/logo.jpg"}
        alt=""
      />
      <div className="flex-1 ml-3">
        <span className="block md:text-xl text-greenbg">Sudo Digital</span>
        <p className="text-white text-sm text-right">Agency</p>
      </div>
    </div>
  );
}
