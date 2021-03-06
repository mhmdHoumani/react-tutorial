import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NavBar from "./Components/Navbar/navbar";
// import { NavBar2 } from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import reportWebVitals from "./reportWebVitals";
import MemeHeader from "./Components/Header/header";
import Meme from "./Components/Meme/meme";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Footer />
    {/* <NavBar2 /> */}
    {/* <MemeHeader />
    <Meme />
    <Footer /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
