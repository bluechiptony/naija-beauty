import React from "react";
import { useForm } from "react-hook-form";
import "./Authentication.scss";
import { NavLink } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import TwitterLogin from "react-twitter-login";

export const Authentication = () => {
  const { register } = useForm();
  return (
    <div className="hero-height hero-bg">
      <div className="film-bg centered-flex">
        <div className="login-box">
          <div className="social-signup">
            <div className="app-form-row">
              <h3 className="text-white center-text">Login with social media</h3>
            </div>
            <div className="app-form-row button-share">
              <FacebookLogin textButton="Facebook Login" />
              <TwitterLogin buttonTheme="dark" />
            </div>
          </div>

          <div className="app-form-row">
            <h3 className="text-white center-text">Or</h3>
          </div>
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
  const responseFacebook = (err, data) => {
    if (!err) {
      console.log(data);
    } else {
      console.log(err);
    }
  };

  const twitterAuthHandler = (err, data) => {
    console.log(err, data);
  };
  return (
    <div className="hero-height hero-bg">
      <div className="film-bg centered-flex">
        <div className="login-box">
          <div className="social-signup">
            <div className="app-form-row">
              <h3 className="text-white center-text">Sign up you with social media account</h3>
            </div>
            <div className="app-form-row button-share">
              <FacebookLogin appId={process.env.REACT_APP_FACEBOOK_APP_ID} textButton="Facebook Login" autoLoad={true} fields="name,email,picture" scope="public_profile,user_friends,user_actions.books" callback={responseFacebook} />
              <TwitterLogin buttonTheme="dark" authCallback={twitterAuthHandler} consumerKey={process.env.REACT_APP_TWITTER_CONSUMER_API_KEY} consumerSecret={process.env.REACT_APP_TWITTER_CONSUMER_SECRET_KEY} callbackUrl={process.env.REACT_APP_TWITTER_CALLBACK_URL} />
            </div>
          </div>

          <div className="app-form-row">
            <h3 className="text-white center-text">Or</h3>
          </div>
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
