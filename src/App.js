import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Navbar";
import HowTo from "./pages/HowTo";
import About from "./pages/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App pt-20 pb-20 bg-main-bg bg-cover flex justify-center min-h-screen uppercase">
      <BrowserRouter>
        <div className="flex flex-col bg-[#3CA1FF] rounded-3xl border-4 w-9/12 drop-shadow-bigbox">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/HowTo" element={<HowTo />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
