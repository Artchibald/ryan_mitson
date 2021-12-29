import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg6 from './../../media/slide6.jpg';
import SlideImg6Mob from './../../media/slide6_mob.jpg';
import Placeholder from './../../media/slide6Placeholder.jpg';

const Slide6 = () => {
  return (
    <React.Fragment>
      <ProgressiveImage
        className="desk"
        src={SlideImg6}
        placeholder={Placeholder}
      />
      <ProgressiveImage
        className="mob"
        src={SlideImg6Mob}
        placeholder={Placeholder}
      />
    </React.Fragment>
  );
};
export default Slide6;
