import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import './App.css';

function App(){
  return(
    <div className="App">
      <Navbar/>
      <Slider/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );

}

export default App;