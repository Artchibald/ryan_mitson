import React, { lazy, Suspense } from 'react';
import './carousel.scss';
import { Grid } from '@material-ui/core';
// import Slide1 from './../../media/slide1.jpg';
// import Slide2 from './../../media/slide2.jpg';
// import Slide3 from './../../media/slide3.jpg';
const Slide1 = lazy(() => import('./slide1.js'));
const Slide2 = lazy(() => import('./slide2.js'));
const Slide3 = lazy(() => import('./slide3.js'));

const Carousel = () => {
  return (
    <Suspense
      fallback={
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{
            minHeight: '100vh',
          }}
        >
          <Grid item xs={3}>
            <svg
              height="27px"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 38.17 30"
            >
              <path d="M38.07,30H32.73s0-12.89,0-18.63c0-3.82-2.93-6.37-6.44-5.76A5.14,5.14,0,0,0,21.9,10.4C21.76,14.9,21.78,30,21.78,30H16.4s-.07-13.28,0-19.33A10.83,10.83,0,0,1,26.78,0c6-.17,11.09,4.16,11.29,9.93C38.29,16.45,38.07,30,38.07,30Z" />
              <path d="M17.28,2.06C13.54-.5,9.54-.59,5.45,1.31V.11H0V30H5.44s0-13,0-18.75c0-3.81,3.12-6.4,6.65-5.56a13.53,13.53,0,0,1,2.48,1.1A13.25,13.25,0,0,1,17.28,2.06Z" />
            </svg>
          </Grid>
        </Grid>
      }
    >
      <div className="carousel">
        <Slide1 />
        <Slide2 />
        <Slide3 />
      </div>
    </Suspense>
  );
};
export default Carousel;
