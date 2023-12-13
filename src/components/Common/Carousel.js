import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../assets/scss/Carousel.scss";

const CarouselSlider = (props) => {
  return (
    <>
      <Carousel
        responsive={props.responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {props.topMobileData.map((data, index) => {
          return (
            <>
              <div
                className={["slider", props.customClass].join(" ")}
                key={data.key}
              >
                <img src={data.url} alt="movie" />
              </div>
              <h5 className={"mt-4"}>{data.name}</h5>
              <h6>{data.price}</h6>
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselSlider;
