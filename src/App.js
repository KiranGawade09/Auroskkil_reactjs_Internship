import React from "react";
import image1 from '../src/image/img1.png';
import './App.css';


function App(){
  return(
    <>
    <h1>hello React app here</h1>
    <p id="txt1">kiran gawade here</p>
    <img src={image1} height={'250px'} width={'auto'}/>
    </>
  )
}

export default App;