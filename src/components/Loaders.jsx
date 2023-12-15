export default function LoaderContent() {
  return (
    <div className="h-[dvh] fixed inset-0 z-50 backdrop-blur-2xl bg-black/50 flex items-center justify-center">
      <div className="md:w-[30%] w-[80%] bg-white rounded p-10">
        <p className="text-center font-bold">تحميل جاري </p>
        <div className="flex justify-center mt-6">
          <div className="rounded-full mx-2 loader l1 md:h-10 h-5 md:w-10 w-5"></div>
          <div className="rounded-full mx-2 loader l2 md:h-10 h-5 md:w-10 w-5"></div>
          <div className="rounded-full mx-2 loader l3 md:h-10 h-5 md:w-10 w-5"></div>
          <div className="rounded-full mx-2 loader l4 md:h-10 h-5 md:w-10 w-5"></div>
        </div>
      </div>
    </div>
  );
}
