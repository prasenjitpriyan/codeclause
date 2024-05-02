import React from "react";
import "./App.css";
import Headers from "./components/Headers";
import Todo from "./components/Todo";

function App() {
  return (
    <React.Fragment>
      <Headers />
      <Todo />
    </React.Fragment>
  );
}

export default App;
