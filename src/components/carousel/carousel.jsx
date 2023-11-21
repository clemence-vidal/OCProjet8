import './carousel.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function previousClick() {
    setCurrentIndex(
      (previousIndex) => (previousIndex - 1 + images.length) % images.length
    );
  }

  function nextClick() {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length);
  }

  return (
    <div className="carousel">
      {images.length > 1 ? (
        <>
          <div className="chevron-left" onClick={previousClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          {images.map((image, index) => (
            <div className="image-carousel">
              <img
                key={index}
                src={image}
                alt={index}
                className={index === currentIndex ? 'active' : 'inactive'}
              />
              <div
                className={`image-number ${
                  index === currentIndex ? 'active' : 'inactive'
                }`}
              >
                {`${currentIndex + 1}/${images.length}`}
              </div>
            </div>
          ))}
          <div className="chevron-right" onClick={nextClick}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </>
      ) : (
        <img src={images[0]} alt="aperçu de l'appartement" className="active" />
      )}
    </div>
  );
}

export default Carousel;
