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
    key: "h0",
    url: "images/appliances/ha-1.webp",
    name: "Samsung",
    price: "20000",
  },
  {
    key: "h1",
    url: "images/appliances/ha-2.webp",
    name: "LG",
    price: "18000",
  },
  {
    key: "h2",
    url: "images/appliances/ha-3.webp",
    name: "Xiaomi",
    price: "15000",
  },
  {
    key: "h3",
    url: "images/appliances/ha-4.webp",
    name: "Oppo",
    price: "14000",
  },

  {
    key: "h4",
    url: "images/appliances/ha-5.webp",
    name: "Realme",
    price: "15000",
  },
  {
    key: "h5",
    url: "images/appliances/ha-6.webp",
    name: "Lava",
    price: "12000",
  },
  {
    key: "h6",
    url: "images/appliances/ha-7.webp",
    name: "Samsung",
    price: "15000",
  },
  {
    key: "h7",
    url: "images/appliances/ha-8.webp",
    name: "LG",
    price: "17000",
  },
  {
    key: "h8",
    url: "images/appliances/ha-9.webp",
    name: "Xiaomi",
    price: "18000",
  },
];

const customClass = "top-mobile";

const TopHomeAppliances = () => {
  return (
    <>
      <article>
        <div className={style.topmobile}>
          <h3 className={"text-center mb-4"}>Top Home Appliances</h3>
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

export default TopHomeAppliances;
