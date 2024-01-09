import React,{useState, useEffect} from "react";
import "../../assets/scss/Banner.scss"

const smartPhoneBanner = [
  {
    key: 0,
    url: "banner/smartphone1.jpg",
  },
  {
    key: 1,
    url: "banner/smartphone2.jpg",
  },
  {
    key: 2,
    url: "banner/smartphone3.jpg",
  },
  {
    key: 3,
    url: "banner/smartphone4.jpg",
  }
];



const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const MINUTE_MS = 6000;



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



  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, MINUTE_MS);
  
    return () => clearInterval(interval); 
  }, [])

  return (
    <>
      <div className="carousel">
        {smartPhoneBanner.map((data) => {
          return (
            <div className={`dot ${currentIndex === data.key ? "carousel-image active" : "carousel-image"}`} key={data.key}>
              {currentIndex}
              <img  key={currentIndex} src={data.url} className="d-block w-100" alt="..." />
            </div>
          )
        })}
      </div>
      <button className="btn" onClick={handlePrevious}>Prev</button>
      <button className="btn" onClick={handleNext}>Next</button>

    </>
  );
};

export default Banner;
