import React, { Component } from "react";
import { GrMysql } from "react-icons/gr";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodeDotJs,
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiMysql,
} from "react-icons/si";
import Header from "../component/Header";
import Loader from "../component/Loader";
import home_1 from "../assets/Home.png";
import test_aja from "../assets/testaja.png";
import "./style/ProjectPage.css";

class Project_1 extends Component {
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
        <div className="project-div">
          <div className="project-1-content-1">
            <h1 className="text-about-3 text-project-1">Final Project:</h1>
            <h1 className="text-1">
              Fournir Ecommerce <span className="color-2">Website.</span>
            </h1>
            <a
              href="http://kelompok1.purwadhikafs1.com/"
              target="_blank"
              rel="noreferrer"
              className="link-6"
            >
              <h5 className="link-6-sub pic-project_1">
                kelompok1.purwadhikafs1.com
              </h5>
            </a>
            <h1 className="text-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              quidem laborum eveniet nobis, quam, error, reiciendis expedita
              inventore omnis cupiditate iure? Soluta, animi deleniti distinctio
              iusto id expedita officiis obcaecati.
            </h1>
            <img className="pic-project" src={home_1} alt="project_1" />
          </div>
        </div>
        <div className="project-div-1">
          <div className="project-text-1">
            <h1 className="text-3 skills-project">
              About the <span className="color-2">E-learning</span> Project
            </h1>
            <h5 className="text-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              veritatis, debitis blanditiis, quos deserunt fuga quae facilis ex
              recusandae non maiores ab officiis nesciunt totam commodi
              necessitatibus beatae tempora? Blanditiis?.
            </h5>
            <div className="container-text-about-4">
              <div className="text-about-4">
                <h1 className="number">10</h1>
                <h1 className="number-text color-2">PAGE</h1>
              </div>
              <div className="text-about-4">
                <h1 className="number">3</h1>
                <h1 className="number-text color-2">DEVELOPER</h1>
              </div>
              <div className="text-about-4">
                <h1 className="number">4</h1>
                <h1 className="number-text color-2">COLOR HEX</h1>
              </div>
            </div>
            <div className="container-text-about-4">
              <div className="color-project-1"></div>
              <div className="color-project-2"></div>
              <div className="color-project-3"></div>
              <div className="color-project-4"></div>
            </div>
          </div>
          <div className="project-text-2">
            <div className="skills-full">
              <div className="skills-front">
                <h1 className="text-5 skills-project">
                  <span className="color-2">
                    Front-end Technologhy & Library
                  </span>
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
              </div>
              <div className="pemisah-skills"></div>
              <div className="skills-front">
                <h1 className="text-5 skills-project">
                  <span className="color-2">
                    Back-end Technologhy & Database
                  </span>
                </h1>
                <p className="list-front">
                  <SiNodeDotJs className="icon-skills" />
                  Node.js
                </p>
                <p className="list-front">
                  <SiMysql className="icon-skills" />
                  MySql
                </p>
                <p className="list-front">
                  <GrMysql className="icon-skills" />
                  Workbench
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="div-project-detail">
          <img className="pic-project" src={test_aja} alt="project_1" />
        </div>
      </div>
    );
  }
}

export default Project_1;
