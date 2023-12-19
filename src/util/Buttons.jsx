export function Button({ text, bg = "bg-greenbg text-white" }) {
  return <button className={`${bg} rounded-md px-5 py-2`}>{text}</button>;
}
