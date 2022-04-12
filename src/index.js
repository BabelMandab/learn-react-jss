import React from "react";
import ReactDOM from "react-dom";
const name="Mohit";
const currentDate= new Date();
const year=currentDate.getFullYear();
ReactDOM.render(
  <div>
    <h1> React App </h1>
    <p>Created by {name} </p>
    <p>Copyright {year} </p>
  </div>,
  document.getElementById("root")
);
