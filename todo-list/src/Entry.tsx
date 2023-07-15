import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";


const DATA = [
    { id: "todo-0", name: "Finish reading Jane Eyres ", priority: "low", completed: true },
    { id: "todo-1", name: "Write email to John Doe ", priority: "medium", completed: false },
    { id: "todo-2", name: "Finish assignment in Physics", priority: "high", completed: false }
  ];

function Entry(): JSX.Element {

  return (

      <Routes>
        <Route path="/" element={ <App tasks={DATA} />} />
      </Routes>
    
  );
}

export default Entry;
