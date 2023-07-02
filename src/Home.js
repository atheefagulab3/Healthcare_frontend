import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import oi from "./Img/oi.jpg";
import yu from "./Img/yu.png";
import pp from "./Img/pp.png";
import az from "./Img/az.png";
import za from "./Img/za.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <img src={oi} alt="Your Image" className="w-100" style={{ width: "100%", height: "auto" }} />
        </div>
        <br/>
        <h1>Centers of Excellence</h1>
        <img src={yu} alt="New Image" style={{ width: "100%", height: "auto" }} />
        <img src={pp} alt="Image" style={{ width: "100%", height: "auto" }} />
        <img src={az} alt="aImage" style={{ width: "100%", height: "auto" }} />
        <img src={za} alt="zImage" style={{ width: "100%", height: "auto" }} />
        <div style={{ textAlign: "center", margin: "20px" }}>
          &copy; 2023 Your Company. All rights reserved.
        </div>
      </div>
    );
  }
}
