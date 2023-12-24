export function Button({
  text,
  bg = "bg-greenbg text-white",
  iconLeft = null,
  iconRight = null,
}) {
  return (
    <button
      className={`${bg} w-full flex items-center justify-center rounded-md px-5 py-3`}
    >
      {iconLeft && <span className="mx-2">{iconLeft}</span>}
      {text}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
}
