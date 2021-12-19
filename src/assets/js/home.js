import React from 'react';
import Header from './header/header';
import Carousel from './carousel/carousel';
const Home = () => {
  return (
    <React.Fragment>
      <Carousel />
      <Header />
    </React.Fragment>
  );
};

export default Home;
