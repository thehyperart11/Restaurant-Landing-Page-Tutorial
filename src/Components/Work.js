import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import AboutBackground from "../Assets/about-background.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Registration",
      text: "",
    },
    {
      image: ChooseMeals,
      title: "Plant Trees",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Mint NFT of the project and earn.",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="Work" style={{color: '#0DFEB6', fontSize: 25, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word'}}>Work</div>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Regen Is A Web3 Project That Aims At Helping Fast 
        Track Tree Reforestation Projects While Creating Employment For Youths
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
