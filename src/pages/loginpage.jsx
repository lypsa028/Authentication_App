import React, { useEffect } from "react";
import "./loginpage.scss";
import mylogo from "../images/mylogo.png";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import useDataStore from "./useDataStore";

export default function Loginpage() {
  const [saveUserName, saveUserEmail, saveUserPic, changeLoginStatus] =
    useDataStore((state) => [
      state.saveUserName,
      state.saveUserEmail,
      state.saveUserPic,
      state.changeLoginStatus,
    ]);

  const clientId =
    "782239294150-39nu17sk486jaaqhucqb4hvt0mbop9pn.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    saveUserName(res.profileObj.name);
    saveUserEmail(res.profileObj.email);
    saveUserPic(res.profileObj.imageUrl);
    changeLoginStatus(true);
    console.log(res);
    navigate("/profilepage");
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register");
  };

  const navigateToProfile = () => {
    navigate("/profilepage");
  };

  return (
    <div className="login-page">
      <div className="leftside">
        <img src={mylogo} alt="" className="mylogo" />
      </div>
      <div className="login-f">
        <h4 className="headings">Welcome to My Authenticator App</h4>
        <form className="login-form">
          <div className="input-group">
            <input
              formControlName="email"
              type="email"
              className="form-control"
              placeholder="Enter Email or Mobile"
              required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div className="input-group">
            <input
              formcontrolname="password"
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <button onClid={navigateToProfile} className="buttonlogin">
                Sign In
              </button>
              <button onClick={navigateToRegister} className="buttonsignup">
                Sign Up
              </button>
            </div>
            <h5 className="subheadings">OR</h5>
            <div className="signingoogle"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
