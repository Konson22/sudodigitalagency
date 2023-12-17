export default function SectionHeader({ title, bgImg }) {
  return (
    <header className={`flex items-center justify-center h-[30vh]`}>
      <img className="object-fill" src={bgImg} alt="" />
      <div className="">
        <h3 className="text-4xl">{title}</h3>
      </div>
    </header>
  );
}
