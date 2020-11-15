import React, { useState } from 'react'



function Room() {


    const [islit,setlit]=useState(true);
   let [age,setage] = useState(20);

    const updateLit=() => {
    
        setlit(!islit);
       
    
    }

    // const updateage =()=>{

    //     setage(++age);
    
    // }

  return (
  <div>
    this room is {islit ? "lit":"dark"}
    <br />
    Age : {age}
    <br />
      <button  onClick={updateLit}>click</button>
      <br />
      <button  onClick={() => {setage(++age)}}>click Age</button>
  </div>
  );
}

export default Room;
