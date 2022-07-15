import { useState } from "react";
 
import React from 'react'

export default function ınput() {
  const[name, setName]= useState("");
  const[surName, setSurname]= useState("");

  const onChangeName =(event)=> setName(event.target.value);
  const onChangeSurname=(event)=> setSurname(event.target.value);

  return (
    <div> <h1> please enter a Name</h1>
<input value={name} onChange={onChangeName}/>
    <br />
    <br />
    <input value={surName} onChange={onChangeSurname}/>
    <br />
    <br />
    <hr />
            <br></br>
    </div>
  )
}
