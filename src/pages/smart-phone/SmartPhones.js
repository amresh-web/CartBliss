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
const mobileData = [
  { key: 0, name: "Samsung", url: "images/mobile/mb-5.webp" },
  { key: 1, name: "LAVA", url: "images/mobile/mb-1.webp" },
  { key: 2, name: "LG", url: "images/mobile/mb-3.webp" },
  { key: 3, name: "MI", url: "images/mobile/mb-8.webp" },
];

const title = "Smart Phones";

const SmartPhones = () => {
  
  return (
    <>
      <Category title={title} banner={smartPhoneBanner} data={mobileData} />
    </>
  );
};

export default SmartPhones;
