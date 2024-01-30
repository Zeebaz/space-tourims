import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PagesProvider } from "./context/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PagesProvider>
      <App />
    </PagesProvider>
  </React.StrictMode>
);
