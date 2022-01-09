import React from 'react';
//content
import './header.scss';
import Button from '@material-ui/core/Button';
import ContactDialog from './../contact-dialog/contact-dialog';
function openPortfolio() {
  const url = 'http://www.ryanmitson.com/RyanMitsonDesignPortfolio.pdf';
  window.open(url, '_blank');
}

const Header = () => {
  return (
    <header>
      <a href="/">
        <svg
          className="logo"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.17 30"
        >
          <path d="M38.07,30H32.73s0-12.89,0-18.63c0-3.82-2.93-6.37-6.44-5.76A5.14,5.14,0,0,0,21.9,10.4C21.76,14.9,21.78,30,21.78,30H16.4s-.07-13.28,0-19.33A10.83,10.83,0,0,1,26.78,0c6-.17,11.09,4.16,11.29,9.93C38.29,16.45,38.07,30,38.07,30Z" />
          <path d="M17.28,2.06C13.54-.5,9.54-.59,5.45,1.31V.11H0V30H5.44s0-13,0-18.75c0-3.81,3.12-6.4,6.65-5.56a13.53,13.53,0,0,1,2.48,1.1A13.25,13.25,0,0,1,17.28,2.06Z" />
        </svg>
      </a>
      <div className="flex_container">
        <div className="flex_child">
          <ContactDialog />

          <Button className="btn_1" onClick={openPortfolio}>
            PDF Portfolio
          </Button>
        </div>
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/ryanmitson/"
      >
        <svg
          className="insta"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.5 18.5"
        >
          <defs>
            <style></style>
          </defs>
          <rect x="0.5" y="0.5" width="17.5" height="17.5" rx="5.2" />
          <circle cx="9.25" cy="9.25" r="4.12" />
          <circle cx="14.23" cy="4.01" r="1.24" />
        </svg>
      </a>
      <a target="_blank" rel="noreferrer" href="https://vimeo.com/533413786">
        <svg
          fill="#000000"
          className="vimeo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.29 17.5"
        >
          <defs></defs>

          <path
            d="M20.34,3.26A2.91,2.91,0,0,0,20,.87c-.73-.92-2.29-1-3.36-.79a7,7,0,0,0-4.8,4.53c1.77-.14,2.7.12,2.53,2.07a7.16,7.16,0,0,1-.95,2.57c-.53,1-1.52,2.93-2.83,1.53S9.46,7.12,9.19,5.51a21,21,0,0,0-.6-2.94A3,3,0,0,0,7,.61a3.11,3.11,0,0,0-2.26.45A40.89,40.89,0,0,0,.13,4.8v.11c.31.29.39.76.84.83,1.05.15,2.05-1,2.75.2a11.61,11.61,0,0,1,.83,2.29,34.55,34.55,0,0,1,.94,3.36c.51,2,1.13,5,2.87,5.78a3.82,3.82,0,0,0,2.91-.53,16.06,16.06,0,0,0,4.49-4.27A29,29,0,0,0,20.34,3.26Z"
            transform="translate(-0.13)"
          />
        </svg>
      </a>
    </header>
  );
};

export default Header;
