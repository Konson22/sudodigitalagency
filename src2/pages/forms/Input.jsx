export default function Input({ type, bg = "bg-transparent", ...res }) {
  return (
    <div className="mb-6">
      {type === "text" ? (
        <input
          className={`h-[3rem] w-full ${bg} border border-cl1/50 focus:outline-none focus:border-cl1 text-right px-4`}
          {...res}
        />
      ) : (
        <textarea
          className={`h-[6rem] w-full ${bg} border border-cl1 focus:outline-none focus:border-cl1 text-right px-4`}
          {...res}
        ></textarea>
      )}
    </div>
  );
}
