import React, { useEffect } from 'react'

const Useeffect = () => {
  
  useEffect(()=>{
    console.log("Hello harshit");
  });
  console.log("hye");
  console.log("hye world");


  const function1=()=>{
    
    console.log("dssssd");
  }
  return (

    <div>
      <h1>hcvhjvhcv</h1>   
    <button className="btn" onClick={function1}>button</button>
    </div>
  )
}

export default Useeffect;