export function Heading1({ text, cName = "text-center" }) {
  return (
    <h2
      className={`text-bluelight md:text-4xl text-2xl heading-border w-max ${cName}`}
    >
      {text}
    </h2>
  );
}

export function Heading2({ text, cName = "" }) {
  return (
    <h3
      className={`md:text-2xl font-semibold text-xl heading-border w-max ${cName} mb-2`}
    >
      {text}
    </h3>
  );
}
export function Heading3({ text, cName = "" }) {
  return <h4 className={`text-xl ${cName} mb-1`}>{text}</h4>;
}
