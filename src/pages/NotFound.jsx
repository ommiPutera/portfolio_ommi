import React, { Component } from "react";
import error from "./../assets/error-404.svg";
import { Link } from "react-router-dom";
import "./style/NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="notfound-page">
          <img src={error} alt="construction" width="200px" height="200px" />
          <h1 className="text-notfound">Error 404. The link you followed may be broken, or the page may have been removed..</h1>
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

export default NotFound;
