import React, { Component } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import {
  RiHome2Line,
  RiContactsBook2Line,
  RiPencilRuler2Line,
  RiUser3Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import test from "./../assets/test.jpg";
import "./style/Header.css";

class Header extends Component {
  state = {
    isOpen: true,
    isTranslate: true,
    isCurrentPage_1: true,
    isCurrentPage_2: true,
    isCurrentPage_3: true,
    isCurrentPage_4: true,
    scrollPosition: null,
    changeColorMenu: false,
  };

  toggleX = () => {
    this.setState({
      isOpen: false,
    });
  };

  toggleY = () => {
    this.setState({
      isOpen: true,
    });
  };

  toggleTranslateX = () => {
    this.setState({
      isTranslate: false,
    });
  };

  toggleTranslateY = () => {
    this.setState({
      isTranslate: true,
    });
  };

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const scrolled = winScroll;
    this.setState({
      scrollPosition: scrolled,
    });
    if (this.state.scrollPosition <= 662) {
      this.setState({
        changeColorMenu: false,
      });
    } else if (this.state.scrollPosition >= 3188) {
      this.setState({
        changeColorMenu: false,
      });
    } else if (this.state.scrollPosition >= 2332) {
      this.setState({
        changeColorMenu: true,
      });
    } else if (this.state.scrollPosition >= 1412) {
      this.setState({
        changeColorMenu: false,
      });
    } else if (this.state.scrollPosition >= 662) {
      this.setState({
        changeColorMenu: true,
      });
    }
    console.log(this.state.scrollPosition);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    if (window.location.href.replace("http://localhost:3000", "") === "/") {
      this.setState({
        isCurrentPage_1: false,
      });
    } else if (
      window.location.href.replace("http://localhost:3000", "") === "/contact"
    ) {
      this.setState({
        isCurrentPage_2: false,
      });
    } else if (
      window.location.href.replace("http://localhost:3000", "") === "/project"
    ) {
      this.setState({
        isCurrentPage_3: false,
      });
    } else if (
      window.location.href.replace("http://localhost:3000", "") === "/aboutme"
    ) {
      this.setState({
        isCurrentPage_4: false,
      });
    }
  }

  render() {
    return (
      <div className="container_header">
        <div className="name_ommi">
          <a href="/" className="button_logoX hover-1">
            OMI<span className='color-2 dot-size'>.</span>
          </a>
        </div>
        <div className="navigation_bar">
          {this.state.isOpen ? (
            <HiMenu
              className={
                this.state.changeColorMenu
                  ? "button_navigationChange"
                  : "button_navigationX"
              }
              onClick={this.toggleX}
            />
          ) : (
            <MdClose
              className="button_navigationY hover"
              onClick={this.toggleY}
            />
          )}
        </div>
        <div className={this.state.isOpen ? "nav-links" : "nav-links-open"}>
          <div className="content">
            
            <div className="left-content">
              <img className="pic-1" src={test} alt="test" />
              <div>
                <h4 className="color-2 text-header">Social Media</h4>
                <a
                  href="https://www.instagram.com/omiputera/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-media hover"
                >
                  <SiInstagram className="skills hover" />
                </a>
                <a
                  href="https://github.com/ommiPutera"
                  target="_blank"
                  rel="noreferrer"
                  className="social-media hover"
                >
                  <GoMarkGithub className="skills hover" />
                </a>
                <a
                  href="https://linkedin.com/in/ommi-putera-6734a7209"
                  target="_blank"
                  rel="noreferrer"
                  className="social-media hover"
                >
                  <FaLinkedin className="skills hover" />
                </a>
              </div>
              <div>
                <h4 className="contact-detail text-header color-2">Contact Details</h4>
                <h6 className="info">+6289508182045</h6>
                <h6 className="info-1">ommiputrakarunia@gmail.com</h6>
              </div>
            </div>
            <div className="right-content">
              <ul className="link-nav">
                <li
                  className={
                    this.state.isCurrentPage_1
                      ? "link-1"
                      : "link-1 link-1-onpage"
                  }
                >
                  <Link to="/">
                    Home
                    <RiHome2Line className="icon-1 hover" />
                  </Link>
                </li>
                <li
                  className={
                    this.state.isCurrentPage_2
                      ? "link-2"
                      : "link-2 link-2-onpage"
                  }
                >
                  <Link to="/contact">
                    Contact
                    <RiContactsBook2Line className="icon-1 hover" />
                  </Link>
                </li>
                <li
                  className={
                    this.state.isCurrentPage_3
                      ? "link-3"
                      : "link-3 link-3-onpage"
                  }
                >
                  <Link to="/project">
                    Project
                    <RiPencilRuler2Line className="icon-1 hover" />
                  </Link>
                </li>
                <li
                  className={
                    this.state.isCurrentPage_4
                      ? "link-4"
                      : "link-4 link-4-onpage"
                  }
                >
                  <Link to="/aboutme">
                    About me
                    <RiUser3Line className="icon-1 hover" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <h6>
              Copyright <MdCopyright className="copyright-icon" />
              2021 Ommi Putera
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
