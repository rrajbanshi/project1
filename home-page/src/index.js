import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./home-component/home-component";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
         {/* <Route path="/" element={<App />}></Route> */}
        <Route path="/home" element={<HomeComponent />}></Route>
      </Routes>
    </BrowserRouter> 
    <App />
  </React.StrictMode>
);

reportWebVitals();
