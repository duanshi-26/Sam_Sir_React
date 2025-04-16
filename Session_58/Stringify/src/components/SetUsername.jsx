import React, { useState } from 'react'

function SetUsername({name}) {
    let [userName, setUsername] = useState(name);
    function handleLogout(){
        console.log("before "+userName);
        setUsername("Anonymous");
        console.log("after "+userName);
    }

  return (
    <>
<h1>{userName}</h1>
<button onClick={handleLogout}>LogOut</button>
    </>
   
  )
}

export default SetUsername