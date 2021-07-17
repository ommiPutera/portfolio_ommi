import React, { Component } from "react";
import { Link } from "react-router-dom";
import construction from "./../assets/sketch.svg";
import "./style/NotFound.css";


class Construction extends Component {
  render() {
    return (
      <div>
        <div className="notfound-page">
          <img src={construction} alt="construction" width="100px" height="100px" />
          <h1 className="text-notfound">Ooops! page under construction..</h1>
          <Link to="/">
            <button className="button-404" style={{ borderRadius: "80px" }}>
              <h1 className="text-home">Back to home</h1>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Construction;
