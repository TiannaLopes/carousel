import './App.css';
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import Carousel from './Carousel'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";



function App() {
  return (
    <div className="App">
      <Carousel/>
    </div>
  );
}

export default App;
