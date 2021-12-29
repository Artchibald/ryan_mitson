import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg8 from './../../media/slide8.jpg';
import SlideImg8Mob from './../../media/slide8_mob.jpg';
import Placeholder from './../../media/slide8Placeholder.jpg';

const Slide8 = () => {
  return (
    <React.Fragment>
      <ProgressiveImage
        className="desk"
        src={SlideImg8}
        placeholder={Placeholder}
      />
      <ProgressiveImage
        className="mob"
        src={SlideImg8Mob}
        placeholder={Placeholder}
      />
    </React.Fragment>
  );
};
export default Slide8;
