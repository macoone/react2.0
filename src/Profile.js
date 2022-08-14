import React from 'react'
import './App.css';
var name="Ahmed"
function profile({prof,ar,handalert}) {
  return (
  <div>
    <div className='info'>
        <ul>
            {prof.map((el,i)=>(
            <ul>{el}</ul>
            ))}
        </ul>
        </div>
        <dir className='log'>
        <ul>
            {ar.map((el,i)=>(
            <ul>{el}</ul>
            ))}
        </ul>
        </dir>
        <button className='but' onClick={()=>handalert()}>Cilck me</button>
    </div>
  )
}

export default profile