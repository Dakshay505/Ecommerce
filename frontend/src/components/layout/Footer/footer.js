import React from "react";
import appStore from "../../../images/Appstore.png";
import playStore from "../../../images/playstore.png";
import "./footer.css";
const footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4> Download Our App</h4>
        <p>Download our App for Android and IOS Mobile .</p>
        <img src={appStore} alt="appStore" />
        <img src={playStore} alt="playStore" />
      </div>
      <div className="midFooter">
        <h1>Ecomm </h1>
        <p>High quality is our first priority .</p>
        <p>Copyright 2022 &copy; Dakshay Bishnoi</p>
      </div>
      <div className="rightFooter">
        <h4>Follow ME </h4>
        <a href="https://www.instagram.com/dakshay505/">Instagram</a>
        <a href="https://www.instagram.com/dakshay505/">Instagram</a>
        <a href="https://www.instagram.com/dakshay505/">Instagram</a>
      </div>
    </footer>
  );
};

export default footer;
