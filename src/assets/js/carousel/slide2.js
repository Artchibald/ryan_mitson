import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg2 from './../../media/slide2.jpg';
import SlideImg2Mob from './../../media/slide2_mob.jpg';
import Placeholder from './../../media/slide2Placeholder.jpg';

const Slide2 = () => {
  return (
    <React.Fragment>
      <ProgressiveImage
        className="desk"
        src={SlideImg2}
        placeholder={Placeholder}
      />
      <ProgressiveImage
        className="mob"
        src={SlideImg2Mob}
        placeholder={Placeholder}
      />
    </React.Fragment>
  );
};
export default Slide2;
