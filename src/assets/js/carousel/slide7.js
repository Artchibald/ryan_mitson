import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg7 from './../../media/slide7.jpg';
import SlideImg7Mob from './../../media/slide7_mob.jpg';
import Placeholder from './../../media/slide7Placeholder.jpg';

const Slide7 = () => {
  return (
    <React.Fragment>
      <ProgressiveImage
        className="desk"
        src={SlideImg7}
        placeholder={Placeholder}
      />
      <ProgressiveImage
        className="mob"
        src={SlideImg7Mob}
        placeholder={Placeholder}
      />
    </React.Fragment>
  );
};
export default Slide7;
