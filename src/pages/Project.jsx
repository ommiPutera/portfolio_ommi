import React, { Component } from "react";
import { MdCopyright } from "react-icons/md";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import pro_1 from "./../assets/portofolio-web.png";
import pro_2 from "./../assets/portofolio-web-1.png";
import pro_3 from "./../assets/portofolio-web-2.png";
import pro_4 from "./../assets/portofolio-web-3.png";
import pro_5 from "./../assets/portofolio-web-4.png";
import "./style/Project.css";

class Project extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content-project-top">
          <div className="content-project-1-left">
            <h1 className="text-about-3 text-project-1">
              Project that i've completed
            </h1>
            <h1 className="text-1">Projects:</h1>
            <h1 className="text-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              quidem laborum eveniet nobis, quam, error, reiciendis expedita
              inventore omnis cupiditate iure? Soluta, animi deleniti distinctio
              iusto id expedita officiis obcaecati.
            </h1>
            <div className="content-project-sub">
              <div className="pic-pro-1">
                <img className="pic-pro-sub" src={pro_1} alt="pro" />
                <div className="link link-pic-project">
                  <Link to="/project_1">
                    <button
                      className="button-project"
                      style={{ borderRadius: "80px" }}
                    >
                      View
                      <FiArrowUpRight className="button-icon-1" />
                      <FiArrowRight className="button-icon-1-unlock" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pemisah"></div>
              <div className="pic-pro-2">
                <img className="pic-pro-sub" src={pro_2} alt="pro" />
                <div className="link link-pic-project">
                  <Link to="/under-construction">
                    <button
                      className="button-project"
                      style={{ borderRadius: "80px" }}
                    >
                      View
                      <FiArrowUpRight className="button-icon-1" />
                      <FiArrowRight className="button-icon-1-unlock" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pemisah"></div>
              <div className="pic-pro-3">
                <img className="pic-pro-sub" src={pro_3} alt="pro" />
                <div className="link link-pic-project">
                  <Link to="/under-construction">
                    <button
                      className="button-project"
                      style={{ borderRadius: "80px" }}
                    >
                      View
                      <FiArrowUpRight className="button-icon-1" />
                      <FiArrowRight className="button-icon-1-unlock" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-project-bottom">
          <div className="content-project-2-left">
            <h1 className="text-about-3 text-project-2">
              Project that i've completed
            </h1>
            <h1 className="text-0 text-project-bottom white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              quidem laborum eveniet nobis, quam, error, reiciendis expedita
              inventore omnis cupiditate iure? Soluta, animi deleniti distinctio
              iusto id expedita officiis obcaecati.
            </h1>
            <div className="content-project-sub-2">
              <div className="pic-pro-1">
                <img className="pic-pro-sub" src={pro_4} alt="pro" />
                <div className="link link-pic-project">
                  <Link to="/under-construction">
                    <button
                      className="button-project"
                      style={{ borderRadius: "80px" }}
                    >
                      View
                      <FiArrowUpRight className="button-icon-1" />
                      <FiArrowRight className="button-icon-1-unlock" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pemisah"></div>
              <div className="pic-pro-2">
                <img className="pic-pro-sub" src={pro_5} alt="pro" />
                <div className="link link-pic-project">
                  <Link to="/under-construction">
                    <button
                      className="button-project"
                      style={{ borderRadius: "80px" }}
                    >
                      View
                      <FiArrowUpRight className="button-icon-1" />
                      <FiArrowRight className="button-icon-1-unlock" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pemisah"></div>
              <div className="pic-pro-3">
              </div>
            </div>
          </div>
        </div>
        <h6 className="copyright-project">
          Copyright <MdCopyright className="copyright-icon-home" />
          2021 Ommi Putera
        </h6>
      </div>
    );
  }
}

export default Project;
