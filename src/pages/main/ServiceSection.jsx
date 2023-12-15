import { WhileInView } from "../../components/AnimateWhileInView";

export default function ServiceSection() {
  return (
    <div className="px-14 mb-8">
      <h3 className="text-4xl text-center">ميزاتنا</h3>
      <div className="mt-7">
        {data.map((option) => (
          <WhileInView>
            <div className="bg-white md:flex px-8 py-2 rounded-xl shadow-md my-14">
              <div className="h-24 w-24 rotate-45 mx-auto -mt-10 border-8 border-gray-100 bg-white p-4 rounded-md overflow-hidden">
                <img className="-rotate-45" src={option.image} alt="" />
              </div>
              <div className="flex-1 text-center p-6">
                <h4 className="text-xl font-bold">{option.title}</h4>
                <p>{option.text}</p>
              </div>
            </div>
          </WhileInView>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "تشكيلة واسعة",
    text: `
        تضم متجرنا مجموعة متنوعة من الحلوى اللذيذة التي تلبي جميع الأذواق والتفضيلات.`,
    image: process.env.PUBLIC_URL + "/images/icons/store.png",
  },
  {
    title: "توصيل سريع",
    text: `خدمة التوصيل الفعّالة لتوصيل حلوياتكم المفضلة إلى باب منزلكم.`,
    image: process.env.PUBLIC_URL + "/images/icons/about.png",
  },
  {
    title: "جودة عالية",
    text: `نحن نلتزم بتقديم أعلى جودة في كل منتج نقدمه، لضمان رضاكم التام.`,
    image: process.env.PUBLIC_URL + "/images/icons/offer.png",
  },
];
