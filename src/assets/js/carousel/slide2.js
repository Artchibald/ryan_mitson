import React from 'react';
import ProgressiveImage from './progressiveImageTemplate';
import Placeholder from './../../media/slide2Placeholder.jpg';
class Slide2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/*update image on refresh so artist can replace*/}
        <ProgressiveImage
          className="desk"
          src={`http://www.ryanmitson.com/ryan-mitson-drag-img/slide2.jpg?${new Date().getTime()}`}
          placeholder={Placeholder}
        />
        <ProgressiveImage
          className="mob"
          src={`http://www.ryanmitson.com/ryan-mitson-drag-img/slide2_mob.jpg?${new Date().getTime()}`}
          placeholder={Placeholder}
        />
      </React.Fragment>
    );
  }
}

export default Slide2;
