import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import Header from "../component/Header";
import prfl from "./../assets/prfl.JPG";
import map from "./../assets/map.png";
import "./style/AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-about">
          <div className="left-about">
            <h1 className="text-2 text-about-1">About Me:</h1>
            <h1 className="text-1">
              Hi, I'm <span className="color-2">Ommi</span>
            </h1>
            <h1 className="text-about-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              magni minus, laudantium, quibusdam.
            </h1>
            <h1 className="text-about-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab
              enim nam, eos quod mollitia quidem porro fugiat sunt quia
              necessitatibus itaque, optio id? Aliquam quasi dolorem ipsam natus
              eveniet?
            </h1>
            <div className="container-text-about-4">
              <div className="text-about-4">
                <h1 className="number">5</h1>
                <h1 className="number-text color-2">PROJECTS DEVELOPED</h1>
              </div>
              <div className="text-about-4">
                <h1 className="number">22</h1>
                <h1 className="number-text color-2">YEARS OLD</h1>
              </div>
            </div>
          </div>
          <div className="right-about">
            <img className="pic-about" src={prfl} alt="prfl" />
          </div>
        </div>
        <div className="container-about-2">
          <div className="bottom-about">
            <h1 className="text-2 text-about-1">Where is my location?</h1>
            <h1 className="text-about-5 white">
              Jakarta, <span className="color-2">Indonesia.</span>
            </h1>
            <img className="pic-about-1" src={map} alt="map" />
          </div>
          <div className="bottom-about-2">
            <h1 className="text-2 text-about-1">TIMELINE</h1>
            <h1 className="text-about-5 white">Graphic Design</h1>
            <h1 className="number-text color-2">2015-2019</h1>
            <h1 className="text-about-5-6 white">Bachelor of Economics</h1>
            <h1 className="number-text color-2">2016-2020</h1>
            <h1 className="text-about-5-6 white">Web Developer</h1>
            <h1 className="number-text color-2">2021-PRESENT</h1>
            <Link to="/contact">
              <button
                className="button-7 button-about"
                style={{ borderRadius: "80px" }}
              >
                Contact me!
                <FaPaperPlane className="button-icon-2" />
              </button>
            </Link>
          </div>
        </div>
        <div className="copyright-about">
          <h6 className="copyright-about-1">
            Copyright <MdCopyright className="copyright-icon-home" />
            2021 Ommi Putera
          </h6>
        </div>
      </div>
    );
  }
}

export default AboutMe;
