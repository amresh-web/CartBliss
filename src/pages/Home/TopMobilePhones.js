import CarouselSlider from "../../components/Common/Carousel";
import style from "./Home.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const topMobileData = [
  {
    key: "m0",
    url: "images/mobile/mb-1.webp",
    name: "Samsung",
    price: "20000",
  },
  {
    key: "m1",
    url: "images/mobile/mb-2.webp",
    name: "LG",
    price: "18000",
  },
  {
    key: "m2",
    url: "images/mobile/mb-3.webp",
    name: "Xiaomi",
    price: "15000",
  },
  {
    key: "m3",
    url: "images/mobile/mb-4.webp",
    name: "Oppo",
    price: "14000",
  },

  {
    key: "m4",
    url: "images/mobile/mb-5.webp",
    name: "Realme",
    price: "15000",
  },
  {
    key: "m5",
    url: "images/mobile/mb-6.webp",
    name: "Lava",
    price: "12000",
  },
  {
    key: "m6",
    url: "images/mobile/mb-7.webp",
    name: "Samsung",
    price: "15000",
  },
  {
    key: "m7",
    url: "images/mobile/mb-8.webp",
    name: "LG",
    price: "17000",
  },
  {
    key: "m8",
    url: "images/mobile/mb-9.webp",
    name: "Xiaomi",
    price: "18000",
  },
];

const customClass = "top-mobile";

const TopMobilePhones = () => {
  return (
    <>
      <article>
        <div className={style.topmobile}>
          <h3 className={"text-center mb-4"}>Top Mobile Phones</h3>
          <CarouselSlider
            topMobileData={topMobileData}
            responsive={responsive}
            customClassName={customClass}
          />
        </div>
      </article>
    </>
  );
};

export default TopMobilePhones;
