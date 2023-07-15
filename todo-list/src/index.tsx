import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const DATA = [
  { id: "todo-0", name: "Finish reading Jane Eyres ", priority: "low", completed: true },
  { id: "todo-1", name: "Write email to John Doe ", priority: "medium", completed: false },
  { id: "todo-2", name: "Finish assignment in Physics", priority: "high", completed: false }
];

const root = document.getElementById("root");

if (root) {
  ReactDOM.render(
    <React.StrictMode>
      <App tasks={DATA} />
    </React.StrictMode>,
    root
  );
}
