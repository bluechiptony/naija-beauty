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
            <span className="vote-holder">
              <i className="uil uil-thumbs-up"></i>
            </span>
          </span>
        </div>
      </div>
      {/* <div className="contestant-actions"></div> */}
      <div className="contestant-actions">
        <button className="app-button bg-yellow text-white full-width">View Profile</button>
      </div>
    </div>
  );
};

export const Contestants = ({ competition }) => {
  let contestants = [
    {
      id: "2332",
      fullName: "Cynthia Abel",
      age: "24",
      height: "5'7 ",
      imageUrl: "http://somethin someth",
      intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat quod voluptate nulla distinctio provident esse sapiente",
    },
    {
      id: "0349",
      fullName: "kate Ogoji",
      age: "20",
      height: "5'4 ",
      imageUrl: "http://somethin someth",
      intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat quod voluptate nulla distinctio provident esse sapiente",
    },
    {
      id: "0239",
      fullName: "Cynthia Abel",
      age: "24",
      height: "5'7 ",
      imageUrl: "http://somethin someth",
      intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat quod voluptate nulla distinctio provident esse sapiente",
    },
    {
      id: "02439",
      fullName: "kate Ogoji",
      age: "20",
      height: "5'4 ",
      imageUrl: "http://somethin someth",
      intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat quod voluptate nulla distinctio provident esse sapiente",
    },
    {
      id: "9342",
      fullName: "Cynthia Abel",
      age: "24",
      height: "5'7 ",
      imageUrl: "http://somethin someth",
      intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat quod voluptate nulla distinctio provident esse sapiente",
    },
    {
      id: "9343043",
      fullName: "kate Ogoji",
      age: "20",
      height: "5'4 ",
      imageUrl: "http://somethin someth",
      intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat quod voluptate nulla distinctio provident esse sapiente",
    },
    {
      id: "63647",
      fullName: "Cynthia Abel",
      age: "24",
      height: "5'7 ",
      imageUrl: "http://somethin someth",
      intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat quod voluptate nulla distinctio provident esse sapiente",
    },
    {
      id: "243848",
      fullName: "kate Ogoji",
      age: "20",
      height: "5'4 ",
      imageUrl: "http://somethin someth",
      intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat quod voluptate nulla distinctio provident esse sapiente",
    },
  ];
  return (
    <div className="section-padding">
      <div className="centered-flex">
        <div className="center-intro">
          <span>
            <h1 className="text-yellow">Contestants</h1>
          </span>
          <span className="light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quaerat quod voluptate nulla distinctio provident esse sapiente facere quibusdam natus id molestiae porro beatae molestias eum dignissimos incidunt! Laborum, expedita officiis explicabo</span>
        </div>
      </div>

      <div className="contestants-spacer">
        <div className="contestants-grid">
          {contestants.map((contestant, i) => {
            // if (i > 3) return;
            return <Contestant id={contestant.id} key={contestant.id} fullName={contestant.fullName} age={contestant.age} height={contestant.height} />;
          })}
        </div>
      </div>
      <div className="centered-flex section-padding">
        <button className="sign-up-button">See all contestants</button>
      </div>
    </div>
  );
};
