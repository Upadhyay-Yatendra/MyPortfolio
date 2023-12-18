import React, { useEffect } from "react";
import { logPageView } from "./analytics";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const RootComponent = () => {
  // Log initial pageview
  useEffect(() => {
    logPageView();
  }, []);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

root.render(<RootComponent />);
