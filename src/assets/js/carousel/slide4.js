import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg4 from './../../media/slide4.jpg';
import Placeholder from './../../media/slide4Placeholder.jpg';

const Slide4 = () => {
  return <ProgressiveImage src={SlideImg4} placeholder={Placeholder} />;
};
export default Slide4;
