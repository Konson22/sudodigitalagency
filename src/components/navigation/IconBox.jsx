export default function IconBox({
  icon,
  count = 0,
  cName = "text-cl1 md:text-3xl text-2xl",
}) {
  return (
    <span
      className={`md:h-8 md:w-8 flex items-center justify-center relative rounded-full ${cName}`}
    >
      {count > 0 && (
        <span
          className="h-4 w-4 flex items-center justify-center bg-red-500 text-[.6rem]
            text-white rounded-full absolute top-[-.4rem] md:right-[-.5rem] left-[-.5rem]
          "
        >
          {count}
        </span>
      )}
      {icon}
    </span>
  );
}
