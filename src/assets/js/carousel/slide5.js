import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg5 from './../../media/slide5.jpg';
import Placeholder from './../../media/slide5Placeholder.jpg';

const Slide5 = () => {
  return <ProgressiveImage src={SlideImg5} placeholder={Placeholder} />;
};
export default Slide5;
