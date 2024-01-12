import React, { useState, useEffect } from "react";
import "../../assets/scss/Banner.scss"





const Banner = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const MINUTE_MS = 6000;

  const smartPhoneBanner = props.banner

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === smartPhoneBanner.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? smartPhoneBanner.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <div className="carouselBanner">
        {smartPhoneBanner.map((data) => {
          return (
            <div className={`dot ${currentIndex === data.key ? "carousel-image active" : "carousel-image"}`} key={data.key}>
              <img key={currentIndex} src={data.url} className="" alt="..." />
            </div>
          )

        })}

        <div className="controls">
          <button className="btn btn-left" onClick={handlePrevious}><i class="bi bi-chevron-left"></i></button>
          <button className="btn btn-right" onClick={handleNext}><i class="bi bi-chevron-right"></i></button>
        </div>
      </div>

      <div className="indicator">
        {smartPhoneBanner.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Banner;
