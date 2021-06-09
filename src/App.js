import './App.css';
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import Carousel from './Carousel'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CaroselSolution from './CaroselSolution'



function App() {
  return (
    <div className="App">
      <CaroselSolution/>
      {/* switch to <Carousel> for orignal solution */}
    </div>
  );
}

export default App;
