import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg9 from './../../media/slide9.jpg';
import SlideImg9Mob from './../../media/slide9_mob.jpg';
import Placeholder from './../../media/slide9Placeholder.jpg';

const Slide9 = () => {
  return (
    <React.Fragment>
      <ProgressiveImage
        className="desk"
        src={SlideImg9}
        placeholder={Placeholder}
      />
      <ProgressiveImage
        className="mob"
        src={SlideImg9Mob}
        placeholder={Placeholder}
      />
    </React.Fragment>
  );
};
export default Slide9;
