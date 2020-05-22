import React from "react";
import "./Contestant.scss";
import { Contestant } from "./Contestant";

export const ContestIntro = () => {
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
            if (i > 3) return;
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
