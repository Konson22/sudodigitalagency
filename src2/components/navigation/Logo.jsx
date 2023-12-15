import { Link } from "react-router-dom";

export function Logo({ cName }) {
  return (
    <Link className={`items-center ${cName}`} to="/">
      <p className="md:block hidden logo-text text-2xl font-bold w-full">
        لي ثري
      </p>
      <img
        className="md:h-10 md:w-14 h-10 w-10"
        src={process.env.PUBLIC_URL + "/images/cupcake.png"}
        alt="Leee3"
      />
    </Link>
  );
}
