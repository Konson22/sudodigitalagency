export function HeadingText({ text, cName = "text-center" }) {
  return (
    <h2 className={`text-bluelight md:text-4xl text-2xl ${cName}`}>{text}</h2>
  );
}

export function HeadingText2({ text, cName = "text-center" }) {
  return (
    <h3 className={`text-bluelight md:text-2xl text-xl ${cName}`}>{text}</h3>
  );
}
export function HeadingText3({ text, cName = "" }) {
  return <h4 className={`text-xl ${cName}`}>{text}</h4>;
}

export function HeadingTitleText({ text, cName = "md:mx-0 mx-auto" }) {
  return (
    <div
      className={`bg-greenbg/50 px-4 py-1 rounded-xl w-[max-content] mb-3 ${cName}`}
    >
      {text}
    </div>
  );
}
