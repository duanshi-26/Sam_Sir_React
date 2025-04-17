import React from 'react'
import { useState } from 'react'

function Batching() {

    let [count, setCount] = useState(0);

    function increase(){
        setCount((count)=>{return count+1})
        setCount((count)=>count+1);
        // setCount(count+1);
        setCount((count)=>count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);

    }

  return (
    <>
    <h1>Counter: {count}</h1>
    <button onClick={increase}>Add</button>
    </>
  )
}

export default Batching