import "../Slider/Slider.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { useState } from "react";

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const images = [
    "Images/slider1.JPG",
    "Images/slider2.JPG",
    "Images/slider3.JPG",
  ];

  const prevSlide = () => {
    setCurrentSlider(currentSlider === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlider(currentSlider === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        <div>
          <div className="title">
            <img src={images[0]} alt="" />
            <h1>Discover Your Style: Unbox Joy with Every Purchase</h1>
          </div>

          <div className="title">
            <img src={images[1]} alt="" />
            <h1>Elevate Your Everyday: Shop the Latest Trends Now!</h1>
          </div>

          <div className="title">
            <img src={images[2]} alt="" />
            <h1>Style Meets Convenience: Elevate Your Wardrobe Today!</h1>
          </div>
        </div>
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <span>
            <KeyboardArrowLeftOutlinedIcon />
          </span>
        </div>
        <div className="icon" onClick={nextSlide}>
          <span>
            <ChevronRightOutlinedIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
