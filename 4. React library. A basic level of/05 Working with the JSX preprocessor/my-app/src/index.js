import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const elem = <h2>Hello world!</h2>;

// const elem = React.createElement("h2", null, "Hello world!");
// const elem = React.createElement("h2", { className: "title" }, "Hello world!");

const text = "Hello world!";

const elem = (
  <div>
    <h2 className="title">{text}</h2>
    <input></input>
    <label htmlFor=""></label>
    <button tabIndex={0}>Btn</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elem);
