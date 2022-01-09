import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import Placeholder from './../../media/slide4Placeholder.jpg';
class Slide4 extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/*update image on refresh so artist can replace*/}
        <ProgressiveImage
          className="desk"
          src={`http://www.ryanmitson.com/ryan-mitson-drag-img/slide4.jpg?${new Date().getTime()}`}
          placeholder={Placeholder}
        />
        <ProgressiveImage
          className="mob"
          src={`http://www.ryanmitson.com/ryan-mitson-drag-img/slide4_mob.jpg?${new Date().getTime()}`}
          placeholder={Placeholder}
        />
      </React.Fragment>
    );
  }
}

export default Slide4;
