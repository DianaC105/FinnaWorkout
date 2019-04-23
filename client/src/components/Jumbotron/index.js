import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundImage:"https://images.pexels.com/photos/669580/pexels-photo-669580.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" }}
      className="jumbotron"
    >
    <h1>FinnaWorkOUT</h1>
      {children}
    </div>
  );
}

export default Jumbotron;
