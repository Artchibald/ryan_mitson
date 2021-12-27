import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg10 from './../../media/slide10.jpg';
import Placeholder from './../../media/slide10Placeholder.jpg';

const Slide10 = () => {
  return <ProgressiveImage src={SlideImg10} placeholder={Placeholder} />;
};
export default Slide10;
