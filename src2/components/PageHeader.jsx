export default function PageHeader({
  title,
  text,
  image,
  cName = "md:py-16 py-8",
}) {
  return (
    <div
      className={`flex md:px-[10%] px-5 ${cName} bg-bluebg text-white`}
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className="md:w-[70%]">
        <h1 className="md:text-5xl text-3xl">{title}</h1>
        <h1 className="md:text-2xl">{text}</h1>
      </div>
    </div>
  );
}
