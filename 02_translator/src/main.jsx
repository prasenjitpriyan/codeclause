import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { APIContextProvider } from "./apiContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <APIContextProvider>
    <App />
  </APIContextProvider>
);
