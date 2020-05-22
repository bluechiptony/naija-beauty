import React from "react";
import girl from "../../assets/images/model-port.jpg";

export const Contestant = ({ fullName, age, height }) => {
  const getContainerWidth = () => {
    let container = document.getElementById("container-box").getAttribute("width");
    return container;
  };

  return (
    <div className="pointer contestant-box" id="container-box">
      <div className="contestant-image">
        <img src={girl} alt="" />
      </div>
      <div className="contestant-details">
        <span className="contestant-name block">{fullName}</span>
        <div className="detail-spacer">
          <span>
            <span className="contestant-det block">{age}</span>
            <span className="contestant-det block">{height}</span>
          </span>
          <span>
            <span>
              <i class="uil uil-thumbs-up"></i>
            </span>
          </span>
        </div>
      </div>
      <div className="contestant-actions"></div>
      <div className="contestant-actions">
        <button className="app-button bg-yellow text-white full-width">View Profile</button>
      </div>
    </div>
  );
};
