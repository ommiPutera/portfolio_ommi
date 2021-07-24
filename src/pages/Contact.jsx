import React, { Component } from "react";
import { GoMarkGithub } from "react-icons/go";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Header from "../component/Header";
import Loader from "../component/Loader";

import wlpr from "../assets/wlpr.jpg";
import "./style/Contact.css";

class Contact extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
  }

  render() {
    return (
      <div>
        {this.state.loading ? <Loader /> : null}
        <Header />
        <div className="container-contact">
          <div className="left-contact">
            <h1 className="text-1">Contact:</h1>
            <h1 className="text-2 contact-text-3">
              You can contact me through here
            </h1>
            <h6 className="contact-text-1">+6289508182045</h6>
            <h6 className="contact-text-2">ommiputrakarunia@gmail.com</h6>
            <h1 className="text-2 contact-text-4">
              You can find me through here
            </h1>
            <div className="text-4-icon contact-sosmed">
              <a
                href="https://github.com/ommiPutera"
                target="_blank"
                rel="noreferrer"
                className="social-media-1"
              >
                <GoMarkGithub className="skills-1" />
              </a>
              <a
                href="https://www.instagram.com/omiputera/"
                target="_blank"
                rel="noreferrer"
                className="social-media-1"
              >
                <SiInstagram className="skills-1" />
              </a>
              <a
                href="https://linkedin.com/in/ommi-putera-6734a7209"
                target="_blank"
                rel="noreferrer"
                className="social-media-1"
              >
                <FaLinkedin className="skills-1" />
              </a>
            </div>
          </div>
          <div className="right-contact">
            <img className="pic-wlpr" src={wlpr} alt="wlpr" />
            <h1 className="contact-text-5">
              Source: https://unsplash.com/@tandukuda, Location: Raja Ampat, Papua Barat, Indonesia
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
