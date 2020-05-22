import React from "react";
import "./Landing.scss";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { ContestIntro } from "../Contests/ContestIntro";
import { Terms } from "../Legal/Terms";

export const Landing = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Route path="/" exact component={Home} />
        <Route path="/terms-and-conditions" exact component={Terms} />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ContestIntro />
      <HowItWorks />
      <LatestContest />
      <RulesRegulations />
    </div>
  );
};

export const HeroSection = () => {
  return (
    <div className="hero-height hero-bg">
      <div className="hero-text-holder">
        <div className="hero-text-block">
          <div>
            <span className="hero-value">
              Enter and win <br />
              <span className="bp text-yellow">Beauty Pageants</span>{" "}
            </span>
            <span className="hero-sub italics">From anywhere Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptatum libero. Facere obcaecati consequatur quis</span>
          </div>
          <div>
            <NavLink to="/sign-up">
              <button className="sign-up-button">Sign up now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <div className="hero-height bg-register section-padding">
      <div className="how-to-box text-white">
        <div>
          <h1 className="text-white">How to register</h1>
        </div>
        <div>
          <span className="sub-heading block">Requirements</span>
          <span className="light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto natus quisquam exercitationem aut quo dicta eos, commodi porro inventore voluptatum. Facere ipsum beatae sit voluptate? Praesentium assumenda a, ea ipsam eius, debitis molestiae illum sunt veniam recusandae aliquid officiis, doloribus quis facere commodi eveniet! Molestiae aut magnam asperiores veritatis facere?</span>
        </div>
        <div className="button-grid">
          <div>
            <button className="app-button text-white bg-yellow">Previous</button>
          </div>
          <div>
            <button className="app-button text-white bg-yellow">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LatestContest = () => {
  return (
    <div>
      <h1>Latest contests</h1>
    </div>
  );
};

export const RulesRegulations = () => {
  return (
    <div>
      <h1>Rules and regulations</h1>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="">
      <div className="footer">
        <span>Copyright &copy; {new Date().getFullYear()} 9jaBeauty | All rights reserved</span>
        <span className="">
          <span>
            <NavLink to="/privacy-policy">
              <span>Privacy Policy</span>
            </NavLink>
          </span>
          &nbsp; &nbsp;
          <span>
            <NavLink to="/terms-and-conditions">
              <span>Terms & conditions</span>
            </NavLink>
          </span>
        </span>
      </div>
    </div>
  );
};

export const NavigationBar = () => {
  // const activeStyle = {
  //   color: "#ffab13",
  // };
  return (
    <nav className="navigation-bar">
      <div className="logo">{/* <img src={Logo} height={30} alt="VLA logo" /> */}</div>
      <ul className="menu-list">
        <li className="menu-list-item">
          <NavLink to="/" exact activestyle={{ color: "#ffab13" }}>
            <span>Home</span>
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink to="/home/appointments" activestyle={{ color: "#ffab13" }}>
            <span>How to register</span>
          </NavLink>
        </li>
        <li className="menu-list-item" activestyle={{ color: "#ffab13" }}>
          <NavLink to="/home/jobs">
            <span>Past winners</span>
          </NavLink>
        </li>
        <li className="menu-list-item" activestyle={{ color: "#ffab13" }}>
          <NavLink to="/home/applications">
            <span>Rules & regulations</span>
          </NavLink>
        </li>
      </ul>
      <ul className="action-list">
        <li className="menu-list-item">
          <NavLink to="/terms-and-conditions" activestyle={{ color: "#ffab13" }}>
            <span>Terms & conditions</span>
          </NavLink>
        </li>
        {/* <li className="menu-list-item">
          <NavLink to="/login">
            <button className="app-button">
              <span>Login</span>
            </button>
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};
