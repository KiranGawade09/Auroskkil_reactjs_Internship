import React, { useState } from "react";
import image1 from '../src/image/img1.png';
import './App.css';
import { Link } from "react-router-dom";


function App(props){

  const [tiger,setTiger] = useState('Bengal Tiger');
  const [status,setstatus] = useState('');
  const [color,setColor] = useState('');
  const [radius,setRadius] = useState();
  const [num,setNum] = useState(0);
  const [gstValue,setGstValue]= useState();
  const [ans,setAns] = useState();



  var object ={
    background:"red"
  }
  var Jack ="kiran";
  var Array =[1,2,4,5,6];

  function Mohit(){
    console.log('This is my message')

  }
  Mohit();

function Update(){
  var update =prompt('Enter value for tiger');
  setTiger(update);
}

function SubmitData(){

  console.log(gstValue);
  if (gstValue==''){
    return true;
  }
  else{
  return setAns(gstValue*0.18);
  return ans;
    }
  }


   

  return(
    <>
    <nav>
      <div className="brand-name">
        <Link to={'/'}>t Home Page</Link>
     
      </div>
      <ul>
        <li>
           <div>
            <Link to={'./Mike'}>Mike component</Link>
           </div>
        </li>
        <li>
          <div>
          <Link to={'./Jack'}>Jack component</Link>
            </div>
        </li>
      </ul>
    </nav>
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
    <br/>

    <button onClick={()=>{alert('His this is click event')}}>Click</button>
    <button onClick={()=>{Mohit()}}>Click2</button>
    <hr/>

    <h1>Hi my name is {props.name} and my address is {props.address}</h1>
    <h1>{tiger}</h1>
    <button onClick={()=>{Update()}}>Update var</button>
    <hr/>

    <h1>Check whether the person is inline or offline</h1>
    <div id="circle" style={{backgroundColor:color,borderRadius:radius}}></div><span>{status}</span>
    <br/>

    <button onClick={()=>{setColor('green');setstatus('online');setRadius(0)}}>online status</button>
    <button onClick={()=>{setColor('red');setstatus('offline');setRadius('100')}}>offline status</button>
    <br/>
    <hr/>

    <h1> counter using useState hook</h1>
    <div id="Calculator">
    <h1>{num}</h1> 
    </div>

    <div id="Cal">
    <button onClick={()=>{setNum(num+1)}}>Increment</button>
    <button onClick={()=>{setNum(num+-1)}}>Decrement</button>
    <button onClick={()=>{setNum(num+5)}}>Add 5</button>
    <button onClick={()=>{setNum(num-9)}}>Sub 9</button>
    <button onClick={()=>{setNum(num*12)}}>Multiply 12</button>
    <button onClick={()=>{setNum(Math.floor(num/2))}}>Devide by 2</button>
    <button onClick={()=>{setNum(num*0)}}>0</button>
    </div>

    <div>
      <h1>GST Calculator</h1>
      <input type="number" value={gstValue} onChange={(e)=>{setGstValue(e.target.value)}} placeholder="Enter a vaalue to find gst"/>
      <h1>And your anser is:<span id="ans">{ans}</span></h1>
      <button onClick={()=>{SubmitData()}}>Get ans for 18% GST</button>
    </div>



    </>
  ) 
}

export default App;