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
    key: 0,
    url: "images/television/tv-1.webp",
    name: "Samsung",
    price: "20000",
  },
  {
    key: 1,
    url: "images/television/tv-2.webp",
    name: "LG",
    price: "18000",
  },
  {
    key: 2,
    url: "images/television/tv-3.webp",
    name: "Xiaomi",
    price: "15000",
  },
  {
    key: 3,
    url: "images/television/tv-4.webp",
    name: "Oppo",
    price: "14000",
  },

  {
    key: 4,
    url: "images/television/tv-5.webp",
    name: "Realme",
    price: "15000",
  },
  {
    key: 5,
    url: "images/television/tv-6.webp",
    name: "Lava",
    price: "12000",
  },
  {
    key: 6,
    url: "images/television/tv-7.webp",
    name: "Samsung",
    price: "15000",
  },
  {
    key: 7,
    url: "images/television/tv-8.webp",
    name: "LG",
    price: "17000",
  },
  {
    key: 8,
    url: "images/television/tv-9.webp",
    name: "Xiaomi",
    price: "18000",
  },
];

const customClass = "top-mobile";

const TopTelevision = () => {
  return (
    <>
      <article>
        <div className={style.topmobile}>
          <h3 className={"text-center mb-4"}>Top Television</h3>
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

export default TopTelevision;
