import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies";
import Value from "./components/Value";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative overflow-x-clip">
      <div className="relative bg-black">
        <div className="absolute w-[20rem] h-[20rem] bg-[rgba(255,255,255,0.522)] blur-[100px] rounded-[100px] z-50" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
