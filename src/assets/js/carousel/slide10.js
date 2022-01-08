import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import Placeholder from './../../media/slide10Placeholder.jpg';
class Slide10 extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/*update image on refresh so artist can replace*/}
        <ProgressiveImage
          className="desk"
          src={`https://archibaldbutler.com/projects/ryan-mitson-drag-img/slide10.jpg?${new Date().getTime()}`}
          placeholder={Placeholder}
        />
        <ProgressiveImage
          className="mob"
          src={`https://archibaldbutler.com/projects/ryan-mitson-drag-img/slide10_mob.jpg?${new Date().getTime()}`}
          placeholder={Placeholder}
        />
      </React.Fragment>
    );
  }
}

export default Slide10;
