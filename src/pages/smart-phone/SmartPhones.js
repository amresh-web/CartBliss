import Category from "../../components/Common/Category";

const smartPhoneBanner = [
  {
    key: 0,
    url: "banner/smartphone1.jpg",
  },
  {
    key: 1,
    url: "banner/smartphone4.jpg",
  }
];
const title = "Smart Phones";
const SmartPhones = () => {
  
  return (
    <>
      <Category title={title} banner={smartPhoneBanner} />
    </>
  );
};

export default SmartPhones;
