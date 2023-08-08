import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Plant a tree and earn program.
          </h1>
          <p className="primary-text">
           Get registered, plant trees , mint NFT's and get carbon tokens which can be converted to cash.
          </p>
          <div className="OrderNowButton" style={{width: '40%', height: '30%', paddingLeft: 55, paddingRight: 55, paddingTop: 30, paddingBottom: 30, background: '#0DFEB6', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
          <div className="GetStarted" style={{color: 'white', fontSize: 25, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word'}}>Get Started </div>
          <div className="MaterialSymbolsArrowRightAltRounded" style={{width: 27, height: 19, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
          </div>
      </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
