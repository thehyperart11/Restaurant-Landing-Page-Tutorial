import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        Découvrez FAKYATI une  délicieuse combinaison de fruits secs premium, soigneusement sélectionnés par les producteurs experts Hicham et Yassine. Notre mélange exquis comprend des amandes croquantes, des raisins secs sucrés, du maïs savoureux, des acajous fondants et des noix riches en saveur. Offrez-vous une expérience gustative unique avec chaque bouchée, et soutenez les talents exceptionnels de Hicham et Yassine en optant pour notre produit de qualité supérieure.        </p>
      
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
