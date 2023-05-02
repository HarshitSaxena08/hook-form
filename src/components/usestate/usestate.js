import React, { useState } from 'react';


const Hook1 = () => {


  const [myName,setMyName]=useState("HELLO DEAR !");

  const Click=()=>{
    const variable= myName;
    // if(variable==="HELLO DEAR!"){
    //   setMyName('Ram Ram');
    // }
    // else{
    //   setMyName('HELLO DEAR!');
    // }
  
    // or another Method
    (variable==="HELLO DEAR!")? setMyName('Ram Ram') : setMyName('HELLO DEAR!');
  }

  return (
    <div>
    <h1>Usestate Example </h1>
    <br/>
    <h2>{myName}</h2>
    <button onClick={Click}>click me </button>
    </div>
  )
}

export default Hook1;