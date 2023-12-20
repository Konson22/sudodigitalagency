export default function PageHeader({ title, text, image }) {
  return (
    <div className="flex px-[10%] py-16">
      <div className="flex items-center">
        <div className="flex-1 mr-16">
          <h1 className="text-5xl">{title}</h1>
          <h1 className="text-2xl">{text}</h1>
        </div>
        <div className="h-[350px] w-[350px]">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
