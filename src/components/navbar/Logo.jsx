export default function Logo() {
  return (
    <div className="flex items-center">
      <img
        className="h-[3.5rem] md:w-[3.5rem] w-[2.5rem]"
        src={process.env.PUBLIC_URL + "/images/logo.jpg"}
        alt=""
      />
      <div className="flex-1 ml-3">
        <span className="block md:text-xl text-greenbg">Sudo Digital</span>
        <p className="text-white text-sm text-right">Agency</p>
      </div>
    </div>
    // <div className="bg-greenbg h-full logo black-clip relative pr-3">
    //   <div className="bg-darkbd md:h-[7rem] green-clip h-full flex items-center md:hh-[4rem] pl-4 pr-16 md:py-0 py-2">
    //     <img
    //       className="md:h-[7rem] h-[2.5rem] md:w-[6.5rem] w-[2.5rem]"
    //       src={process.env.PUBLIC_URL + "/images/logo.jpg"}
    //       alt=""
    //     />
    //     <div className="flex-1 ml-3">
    //       <span className="block md:text-xl text-greenbg">Sudo Digital</span>
    //       <p className="text-white text-sm text-right">Agency</p>
    //     </div>
    //   </div>
    // </div>
  );
}
