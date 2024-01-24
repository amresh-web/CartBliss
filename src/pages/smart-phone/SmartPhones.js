import Category from "../../components/Common/Category";
import datas from "../../assets/data.json";
console.log(datas);
const smartPhoneBanner = [
  {
    key: 0,
    url: "banner/smartphone1.jpg",
  },
  {
    key: 1,
    url: "banner/smartphone4.jpg",
  },
];
const title = "Smart Phones";

const SmartPhones = () => {
  return (
    <>
      <Category title={title} banner={smartPhoneBanner} data={datas.mobile} />
    </>
  );
};

export default SmartPhones;
