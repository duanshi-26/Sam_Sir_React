import React from 'react'
import { memo } from 'react';
import { useState } from 'react'

let Print = memo(function ({name}){
    return(
        <>
        <h1>{name}</h1>
        </>
    )

})
function Memoo() {
    let [name, setName] = useState("JPMC Duanshi");

    function changeName(){
        setName(Math.floor(Math.random()*10));
    }
  return (
    <>
        <Print name={name}></Print>
        <button onClick={changeName}>Click Me</button>
        <Print name="Duanshi"></Print>
        <Print name="Duanshi"></Print>
        <Print name="Duanshi"></Print>
    </>
  )
}

export default Memoo