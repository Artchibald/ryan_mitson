import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg2 from './../../media/slide2.jpg';
import Placeholder from './../../media/slide2Placeholder.jpg';

const Slide2 = () => {
  return <ProgressiveImage src={SlideImg2} placeholder={Placeholder} />;
};
export default Slide2;
