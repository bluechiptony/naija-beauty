import React from "react";
import girl from "../../assets/images/model-port.jpg";

export const Contestant = ({ fullName, age, height }) => {
  return (
    <div className="pointer">
      <div className="contestant-image">
        <img src={girl} width={200} alt="" srcset="" />
      </div>
      <div className="contestant-details">
        <span className="contestant-name">{fullName}</span>
        <span className="contestant-name">{age}</span>
        <span className="contestant-name">{height}</span>

        {/* <span>{{ imageUrl }}</span> */}
      </div>
      <div className="contestant-actions"></div>
    </div>
  );
};
