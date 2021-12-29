import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg4 from './../../media/slide4.jpg';
import SlideImg4Mob from './../../media/slide4_mob.jpg';
import Placeholder from './../../media/slide4Placeholder.jpg';

const Slide4 = () => {
  return (
    <React.Fragment>
      <ProgressiveImage
        className="desk"
        src={SlideImg4}
        placeholder={Placeholder}
      />
      <ProgressiveImage
        className="mob"
        src={SlideImg4Mob}
        placeholder={Placeholder}
      />
    </React.Fragment>
  );
};
export default Slide4;
