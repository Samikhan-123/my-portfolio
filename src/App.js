import React from "react";
// import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CurtainAnimation from "./components/Loader";
import RouteNotFound from "./components/RouteNotFound";
import Loader from "./components/Loader";

function App() {

  return (
    <Router>
      <Loader />
      <div className="App animate-top">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/c" element={<CurtainAnimation />} />

          <Route path="*" element={<RouteNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
