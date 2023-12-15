import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard";
import { useGlobalApi } from "../../manager/ContextProvider";

export default function ProductSection() {
  const { isLoading, candy } = useGlobalApi();

  return (
    <div className="md:px-[8%] px-4 my-8">
      <h2 className="md:text-3xl text-xl text-cl1 font-bold text-center mb-4">
        تصفح مجموعتنا الواسعة
      </h2>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2">
        {isLoading && <div className="">Loading...</div>}
        {candy.length > 0 &&
          candy
            .slice(0, 8)
            .map((item) => <ItemCard item={item} key={item.productID} />)}
      </div>
      <div className="flex justify-center mt-8">
        <Link className="bg-cl1 text-white rounded px-7 py-2" to="/store">
          المزيد
        </Link>
      </div>
    </div>
  );
}
