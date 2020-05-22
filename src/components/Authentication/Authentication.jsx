import React from "react";
import { useForm } from "react-hook-form";
import "./Authentication.scss";
import { NavLink } from "react-router-dom";

export const Authentication = () => {
  const { register } = useForm();
  return (
    <div className="hero-height hero-bg">
      <div className="film-bg centered-flex">
        <div className="login-box">
          <h3 className="text-white center-text">Please enter your login credentials</h3>
          <form>
            <div className="app-form-row">
              <label htmlFor="emailAddress" className="login-form-prompt">
                Email address
              </label>
              <input type="text" placeholder="e.g jane.doe@gmail.com" className="contrast-input" name="emailAddress" ref={register({ required: true })} />
            </div>
            <div className="app-form-row">
              <label htmlFor="emailAddress" className="login-form-prompt">
                Password
              </label>
              <input type="password" placeholder="Your secret password" className="contrast-input" name="password" ref={register({ required: true })} />
            </div>
            <div className="app-form-row right-text">
              <span className="subtitle text-white">
                Forgot your password? &nbsp;{" "}
                <NavLink to="/forgot-password">
                  <span className="bold text-white">Click Here</span>
                </NavLink>
              </span>
            </div>
            <div className="app-form-row">
              <button className="app-button text-white bg-yellow full-width ">Login</button>
            </div>
            <div className="app-form-row center-text text-white">
              <span className="subtitle">
                New user? &nbsp;{" "}
                <NavLink to="/sign-up">
                  <span className="bold text-white">Create an account</span>
                </NavLink>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const SignUp = () => {
  const { register } = useForm();
  return (
    <div className="hero-height hero-bg">
      <div className="film-bg centered-flex">
        <div className="login-box">
          <h3 className="text-white center-text">Please enter your details</h3>
          <form>
            <div className="app-form-row">
              <label htmlFor="fullName" className="login-form-prompt">
                Full name
              </label>
              <input type="text" className="contrast-input" name="fullName" placeholder="Jane Doe" ref={register({ required: true })} />
            </div>
            <div className="app-form-row">
              <label htmlFor="emailAddress" className="login-form-prompt">
                Email address
              </label>
              <input type="text" className="contrast-input" name="emailAddress" placeholder="e.g jane.dow@gmail.com" ref={register({ required: true })} />
            </div>
            <div className="app-form-row">
              <label htmlFor="phoneNumber" className="login-form-prompt">
                Phone number
              </label>
              <input type="text" className="contrast-input" name="phoneNumber" placeholder="e.g 08023394476" ref={register({ required: true })} />
            </div>
            <div className="app-form-row">
              <button className="app-button text-white bg-yellow full-width ">Sign up</button>
            </div>

            <div className="app-form-row center-text text-white">
              <span className="subtitle">
                Already have an account? &nbsp;{" "}
                <NavLink to="/login">
                  <span className="bold text-white">Login here</span>
                </NavLink>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
