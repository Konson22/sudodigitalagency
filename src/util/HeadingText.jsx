export function HeadingText({ text, cName = "text-center" }) {
  return <h2 className={`md:text-4xl text-2xl ${cName}`}>{text}</h2>;
}

export function HeadingText2({ text, cName = "text-center" }) {
  return <h2 className={`md:text-2xl text-xl ${cName}`}>{text}</h2>;
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
