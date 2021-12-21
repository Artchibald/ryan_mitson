import React from 'react';
import './carousel.scss';

import Slide1 from './../../media/slide1.jpg';
import Slide2 from './../../media/slide2.jpg';
import Slide3 from './../../media/slide3.jpg';

const Carousel = () => {
  return (
    <div className="carousel">
      <img src={Slide1} alt="Ryan Mitson Portfolio item" className="slide_1" />
      <img src={Slide2} alt="Ryan Mitson Portfolio item" className="slide_2" />
      <img src={Slide3} alt="Ryan Mitson Portfolio item" className="slide_3" />
    </div>
  );
};
export default Carousel;
