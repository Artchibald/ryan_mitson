import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg10 from './../../media/slide10.jpg';
import SlideImg10Mob from './../../media/slide10_mob.jpg';
import Placeholder from './../../media/slide10Placeholder.jpg';

const Slide10 = () => {
  return (
    <React.Fragment>
      <ProgressiveImage
        className="desk"
        src={SlideImg10}
        placeholder={Placeholder}
      />
      <ProgressiveImage
        className="mob"
        src={SlideImg10Mob}
        placeholder={Placeholder}
      />
    </React.Fragment>
  );
};
export default Slide10;
