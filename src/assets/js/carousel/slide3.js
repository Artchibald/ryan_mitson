import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg3 from './../../media/slide3.jpg';
import Placeholder from './../../media/slide3Placeholder.jpg';

const Slide3 = () => {
  return <ProgressiveImage src={SlideImg3} placeholder={Placeholder} />;
};
export default Slide3;
