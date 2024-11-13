import React from "react";
import image1 from '../src/image/img1.png';
import './App.css';


function App(){

  var object ={
    background:"red"
  }
  var Jack ="kiran";
  var Array =[1,2,4,5,6];

  return(
    <>
    <h1>Hi my name is {Jack} </h1>
    <h1 style={{background:"grey"}}>hello React app here</h1>
    <p id="txt1">kiran gawade here</p>
    <h1>Array values are {Array}</h1>
    {
      Array.map((x)=>(
           <h1>{x}</h1>
      ))
   
    }
    <p style={{backgroundColor:object.background}}>This is scc from object values</p>
    <img src={image1} height={'250px'} width={'auto'}/>
    </>
  )
}

export default App;