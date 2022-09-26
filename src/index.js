import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contents from "./component/Contents";
import ContentPage from "./component/ContentPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contents" element={<ContentPage />} />
      <Route path="/contents/:title" element={<Contents />} />
    </Routes>
  </BrowserRouter>
);
