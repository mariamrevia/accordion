import React, { useState } from "react";
import "./questions.css"


const SingleQuestion = ({
    title,info
})=>
{
   const [getInfo ,setGetInfo]=useState(false)
function handleClick () {

  setGetInfo (!getInfo)
}


  

 
return (

        <div className="ctr--qn">
         <header>
            <h2>{title}</h2>
            <button
            onClick={handleClick} 
            className="btn">{!getInfo ? "+" : "-"}</button>
        </header>
         { getInfo && <p>{info}</p>}
        </div>
)






}

export default SingleQuestion