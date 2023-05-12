import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"

const DATA = [
  { id: "todo-0", name: "Finish reading Jane Eyres ", dueDate: new Date().toDateString(), completed: true },
  { id: "todo-1", name: "Write email to John Doe ", dueDate: new Date().toDateString(), completed: false },
  { id: "todo-2", name: "Finish assignment in Physics", dueDate: new Date().toDateString(), completed: false }
];
console.log(DATA)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App tasks={DATA} />
  </React.StrictMode>
);