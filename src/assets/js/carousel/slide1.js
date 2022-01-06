import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import SlideImg1Mob from './../../media/slide1_mob.jpg';
import Placeholder from './../../media/slide1Placeholder.jpg';

class Slide1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ProgressiveImage
          className="desk"
          src={`https://archibaldbutler.com/projects/ryan-mitson-drag-img/slide1.jpg?${new Date().getTime()}`}
          placeholder={Placeholder}
        />
        <ProgressiveImage
          className="mob"
          src={SlideImg1Mob}
          placeholder={Placeholder}
        />
      </React.Fragment>
    );
  }
}

export default Slide1;
