import React from "react";
import Loader from "react-loader-spinner";
import './style/loader.css'

function LoaderComp() {
  return (
    <div className="loading">
      <Loader
        type="ThreeDots"
        color="#bd9354"
        height={100}
        width={100}
        timeout={1000}
      />
    </div>
  );
}

export default LoaderComp;