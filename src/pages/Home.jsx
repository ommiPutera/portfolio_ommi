import React, { Component } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { Link } from "react-router-dom";
import { MdCopyright } from "react-icons/md";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodeDotJs,
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiAdobeillustrator,
  SiPostman,
  SiJson,
  SiMysql,
  SiSocketDotIo,
  SiInstagram,
  SiMaterialUi,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import Header from "../component/Header";
import home_2 from "../assets/Home.png";
import prflfront from "../assets/prflfront.JPG";
import Loader from "../component/Loader";
import "./style/Home.css";

class Home extends Component {
  state = {
    isOpen: true,
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
  }

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

  render() {
    return (
      <div>
        {this.state.loading ? <Loader /> : null}
        <Header />
        <div className="home-content">
          <div className="content-1">
            <h5 className="text-2">
              <span>
                Web Development student at Purwadhika Digital Technologhy
                School. Jakarta, Indonesia.
              </span>
            </h5>
            <h1 className="text-1">
              I am a <span className="color-2">Front-end</span> Developer
            </h1>
            <h5 className="text-0">
              After I graduated from college, I decided to further develop
              myself into the digital world which I think is more promising for
              my future career. Previously, I had expertise in graphic design
              such as Adobe Illustrator. After joining the Job Connector Web
              Development program, I have a new skill, namely web programming
              using javascript language, and an interest in the frontend
              developer job position.
            </h5>
            <Link to="/project">
              <button className="button" style={{ borderRadius: "80px" }}>
                Projects
                <FiArrowUpRight className="button-icon-1" />
                <FiArrowRight className="button-icon-1-unlock" />
              </button>
            </Link>
          </div>
        </div>
        <div className="container-pic-front">
          <img className="pic-front" src={prflfront} alt="prflfront" />
        </div>
        <div className="content-3">
          <div className="content-3-left">
            <h1 className="text-3">
              What about the <span className="color-2">skills</span> i am good
              at?
            </h1>
            <h5 className="text-4">
              I have experience building real projects from scratch in class
              projects and personal projects, each project using React.js and
              the Javascript programming language. I am also familiar with
              version management git because every project always uses Github
              for code collaboration with my friends in class.
            </h5>
            <div className="text-4-icon">
              <a
                href="https://github.com/ommiPutera"
                target="_blank"
                rel="noreferrer"
                className="social-media-1"
              >
                <GoMarkGithub className="skills-1 white" />
              </a>
              <a
                href="https://www.instagram.com/omiputera/"
                target="_blank"
                rel="noreferrer"
                className="social-media-1"
              >
                <SiInstagram className="skills-1 white" />
              </a>
              <a
                href="https://linkedin.com/in/ommi-putera-6734a7209"
                target="_blank"
                rel="noreferrer"
                className="social-media-1"
              >
                <FaLinkedin className="skills-1 white" />
              </a>
            </div>
            <Link to="/aboutme">
              <button className="button-2" style={{ borderRadius: "80px" }}>
                About me
                <BsArrowRightShort className="button-icon" />
              </button>
            </Link>
          </div>
          <div className="content-3-right">
            <div className="skills-full">
              <div className="skills-front">
                <h1 className="text-5">
                  <span className="color-2">Front-end</span>
                </h1>
                <p className="list-front">
                  <SiHtml5 className="icon-skills" />
                  HTML 5
                </p>
                <p className="list-front">
                  <SiCss3 className="icon-skills" />
                  CSS 3
                </p>
                <p className="list-front">
                  <SiJavascript className="icon-skills" />
                  Javascript
                </p>
                <p className="list-front">
                  <SiReact className="icon-skills" />
                  React.js
                </p>
                <p className="list-front">
                  <SiRedux className="icon-skills" />
                  Redux
                </p>
                <p className="list-front">
                  <SiBootstrap className="icon-skills" />
                  Bootstarp
                </p>
                <p className="list-front">
                  <SiMaterialUi className="icon-skills" />
                  Material UI
                </p>
                <p className="list-front">
                  <SiReact className="icon-skills" />
                  React Native
                </p>
              </div>
              <div className="skills-front">
                <h1 className="text-5">
                  <span className="color-2">Illustration</span>
                </h1>
                <p className="list-front">
                  <SiAdobeillustrator className="icon-skills" />
                  Adobe Illustration
                </p>
                <p className="list-front">
                  <FiFigma className="icon-skills" />
                  Figma
                </p>
              </div>
              <div className="skills-front">
                <h1 className="text-5">
                  <span className="color-2">Back-end</span>
                </h1>
                <p className="list-front">
                  <SiNodeDotJs className="icon-skills" />
                  Node.js
                </p>
                <p className="list-front">
                  <SiJson className="icon-skills" />
                  JSON
                </p>
                <p className="list-front">
                  <SiMysql className="icon-skills" />
                  MySql
                </p>
                <p className="list-front">
                  <SiPostman className="icon-skills" />
                  Postman
                </p>
                <p className="list-front">
                  <GrMysql className="icon-skills" />
                  Workbench
                </p>
                <p className="list-front">
                  <SiSocketDotIo className="icon-skills" />
                  Socket.io
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-4">
          <div className="content-4-top">
            <div className="content-4-pic">
              <div>
                <img className="pic-2" src={home_2} alt="home_2" />
              </div>
              <a
                href="http://kelompok1.purwadhikafs1.com/"
                target="_blank"
                rel="noreferrer"
                className="link-6"
              >
                <h5 className="link-6-sub">kelompok1.purwadhikafs1.com</h5>
              </a>
            </div>
          </div>
          <div className="text-6">
            <h5 className="text-pic">Final Project</h5>
            <h5 className="text-pic-sub">
              At Bootcamp which consisted of me, Alghi, Willy, and mentors were
              Aldino Rahman and M. Rasyid Hakim we created an end-to-end website
              using the agile method that was applied to this project. This
              project is complicated for us as students because this project has
              an admin page that will process all transactions made by user,
              lots of data exchange between the user and the admin page. What
              makes this project interesting is that if the user orders a
              product at the nearest warehouse but the product's stock is
              currently running out, the admin can request stock from another
              warehouse and can still respond to user requests. My contributions
              to this project are the Register page, Login page, Email
              verification, Admin Transaction, Processing orders, Requesting
              stock, Add new warehouse.
            </h5>
            <div className="link">
              <Link to="/project_1">
                <button className="button-3" style={{ borderRadius: "80px" }}>
                  Preview
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="content-6">
          <h1 className="text-8">
            Would <span className="color-2">you like</span> to see more
            projects?
          </h1>
          <h5 className="text-content-6">
            There are more other projects that might interest you. Please click
            the button below to get to that page.
          </h5>
          <Link to="/project">
            <button className="button-7" style={{ borderRadius: "80px" }}>
              All projects
              <FiArrowUpRight className="button-icon-1" />
              <FiArrowRight className="button-icon-1-unlock" />
            </button>
          </Link>
        </div>
        <div className="content-6-bottom">
          <h1 className="text-8">
            <span className="color-2">Let’s</span> work together!
          </h1>
          <h5 className="text-content-6">
            I am very open to a full-time job or internship, I hope we can talk
            and discuss what I can give and present for the company or project
            you are working on. please contact me if you have any questions and
            job opportunities for me. I would be fortunate if we could
            collaborate.
          </h5>
          <Link to="/contact">
            <button className="button-7" style={{ borderRadius: "80px" }}>
              Contact me!
              <FaPaperPlane className="button-icon-2" />
            </button>
          </Link>
        </div>
        <div className="content-7">
          <h6 className="copyright-home">
            Copyright <MdCopyright className="copyright-icon-home" />
            2021 Ommi Putera
          </h6>
        </div>
      </div>
    );
  }
}

export default Home;
