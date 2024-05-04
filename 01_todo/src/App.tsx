import "./App.css";
import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./containers/Todos";

function App() {
  return (
    <React.Fragment>
      <AddTodo />
      <Todos />
    </React.Fragment>
  );
}

export default App;
