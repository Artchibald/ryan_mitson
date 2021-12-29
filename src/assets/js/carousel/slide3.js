import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg3 from './../../media/slide3.jpg';
import SlideImg3Mob from './../../media/slide3_mob.jpg';
import Placeholder from './../../media/slide3Placeholder.jpg';

const Slide3 = () => {
  return (
    <React.Fragment>
      <ProgressiveImage
        className="desk"
        src={SlideImg3}
        placeholder={Placeholder}
      />
      <ProgressiveImage
        className="mob"
        src={SlideImg3Mob}
        placeholder={Placeholder}
      />
    </React.Fragment>
  );
};
export default Slide3;
