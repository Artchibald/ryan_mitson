import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg1 from './../../media/slide1.jpg';
import Placeholder from './../../media/slide1Placeholder.jpg';

const Slide1 = () => {
  return <ProgressiveImage src={SlideImg1} placeholder={Placeholder} />;
};
export default Slide1;
