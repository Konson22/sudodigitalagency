import { WhileInView } from "../../components/AnimateWhileInView";

export default function PickingOptionSection() {
  return (
    <div className="bg-cl1 text-center md:px-[15%] px-14 md:py-20 py-14 mb-8">
      <div className="text-white md:text-4xl text-2xl md:px-[10%] mb-8">
        <p>في leee3، نحن نفتخر بتقديم طرق اختيار ممتعة لتلبية احتياجاتكم:</p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {deliveryData.map((option) => (
          <WhileInView>
            <div className="bg-white rounded-md p-10 mb-5">
              <div className="md:h-[150px] h-[100px] border border-cl1 md:w-[150px] w-[100px] mx-auto my-0 bg-gra-100 p-3 rounded-full overflow-hidden">
                <img src={option.image} alt="" />
              </div>
              <h4 className="text-2xl font-bold">{option.title}</h4>
              <p>{option.text}</p>
            </div>
          </WhileInView>
        ))}
      </div>
    </div>
  );
}

const deliveryData = [
  {
    title: "الاختيار في المكان",
    text: `
          تعالوا إلى متجرنا واستمتعوا بتجربة اختيار الحلوى بأنفسكم. املؤوا أكياسكم بألوان الحلاوة وتذوقوا متعة اكتشاف النكهات المختلفة.`,
    image: process.env.PUBLIC_URL + "/images/icons/shop.png",
  },
  {
    title: "التوصيل",
    text: `
          إذا كنتم في حاجة إلى الراحة، نقدم خدمة التوصيل لتحظوا بحلوياتكم المفضلة في مكانكم المفضل.`,
    image: process.env.PUBLIC_URL + "/images/icons/delivery.png",
  },
];
