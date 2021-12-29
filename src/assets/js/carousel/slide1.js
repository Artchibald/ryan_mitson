import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg1 from './../../media/slide1.jpg';
import SlideImg1Mob from './../../media/slide1_mob.jpg';
import Placeholder from './../../media/slide1Placeholder.jpg';

const Slide1 = () => {
  return (
    <React.Fragment>
      <ProgressiveImage
        className="desk"
        src={SlideImg1}
        placeholder={Placeholder}
      />
      <ProgressiveImage
        className="mob"
        src={SlideImg1Mob}
        placeholder={Placeholder}
      />
    </React.Fragment>
  );
};
export default Slide1;
