import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Habits from "./components/reStudy/Habits";
import { ContextProvider } from "./components/reStudy/Context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Habits />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
