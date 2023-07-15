import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./index.css";
import Entry from "./Entry";


const root = document.getElementById("root");

if (root) {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <Entry/>
      </HashRouter>
    </React.StrictMode>,
    root
  );
}
