import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg5 from './../../media/slide5.jpg';
import SlideImg5Mob from './../../media/slide5_mob.jpg';
import Placeholder from './../../media/slide5Placeholder.jpg';

const Slide5 = () => {
  return (
    <React.Fragment>
      <ProgressiveImage
        className="desk"
        src={SlideImg5}
        placeholder={Placeholder}
      />
      <ProgressiveImage
        className="mob"
        src={SlideImg5Mob}
        placeholder={Placeholder}
      />
    </React.Fragment>
  );
};
export default Slide5;
