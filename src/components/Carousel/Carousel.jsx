import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {images.length > 1 && (
        <>
          <button onClick={prevSlide} className="carousel-button prev-button">
            &#10094;
          </button>
          <button onClick={nextSlide} className="carousel-button next-button">
            &#10095;
          </button>
          <div className="carousel-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="carousel-image"
      />
    </div>
  );
};

export default Carousel;