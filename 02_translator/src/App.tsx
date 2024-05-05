import React, { FC } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import DownloadApp from "./components/DownloadApp";
import Contact from "./components/Contact";

const App: FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/downloadApp" element={<DownloadApp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
