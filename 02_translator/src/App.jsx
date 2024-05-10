import React from "react";
import Header from "./components/Header";
import Translator from "./components/Translator";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="flex flex-col justify-center items-center min-h-[90svh] bg-[#c73659]">
        <Translator />
      </div>
    </React.Fragment>
  );
}

export default App;
