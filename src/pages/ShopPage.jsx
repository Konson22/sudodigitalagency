import { useEffect, useState } from "react";
import { useGlobalApi } from "../manager/ContextProvider";
import { useSearchParams } from "react-router-dom";
import { categories } from "../assets/staticData";
import { FiChevronLeft, FiSearch } from "react-icons/fi";
import ItemCard from "../components/ItemCard";

export default function ShopPage() {
  const { isLoading, candy } = useGlobalApi();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [param, setQuery] = useSearchParams(false);
  const query = param.get("category");

  const handleCategory = (e) => {
    setMessage("");
    if (e === "جميع") {
      setQuery();
    } else {
      setQuery({ category: e });
    }
  };
  useEffect(() => {
    if (!query) {
      setData(candy);
      setMessage("");
    } else {
      if (candy.length > 0) {
        const results = candy.filter((item) => item.category.startsWith(query));
        if (results.length > 0) {
          setData(results);
        } else {
          setMessage("No Item found");
        }
      }
    }
  }, [candy, query]);

  return (
    <div className="md:px-[2%] px-2 md:mt-14 mt-3 flex">
      <div className="flex-1 md:mr-6">
        <div className="md:hidden flex items-center justify-between">
          {categories.map((category) => (
            <div
              className={`flex-1 flex justify-center rounded p-2 ${
                category.name === query ? "border border-cl1/50" : ""
              }`}
              key={category.name}
              onClick={() => handleCategory(category.name)}
            >
              {category.name}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between my-4">
          <span>فرز حسب</span>
          <div className="flex items-center justify-end">
            <span>{query && query}</span>
            <FiChevronLeft />
            <span className="md:text-3xl">منتجاتنا</span>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2">
          {isLoading && <div className="">Loading...</div>}
          {data.length > 0 &&
            !message &&
            data.map((item) => <ItemCard item={item} key={item.productID} />)}
        </div>
      </div>
      <div className="md:block hidden w-[25%]">
        <div className="text-right mb-6">
          <span className="text-xl font-semibold">البحث عن المنتجات</span>
          <div className="bg-white/90 flex items-center pr-3 mt-2">
            <input
              className="h-[3rem] w-full bg-transparent text-sm text-right px-3 border-none focus:border-none"
              type="search"
              placeholder="...أدخل اسم المنتج"
            />
            <button type="submit">
              <FiSearch />
            </button>
          </div>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold text-right mb-2">
            فئات الكيك لدينا
          </h3>
          {categories.map((category) => (
            <div
              className="flex items-center justify-end bg-white/90 rounded border border-cl1/50 p-3 mb-3"
              key={category.name}
              onClick={() => handleCategory(category.name)}
            >
              <div className="flex-1 text-right mr-2">
                <h3 className="text-xl font-bold">{category.name}</h3>
                <p className="line-clamp-2">{category.text}</p>
              </div>
              <div className="h-24 w-24 rounded">
                <img className="rounded-full" src={category.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
