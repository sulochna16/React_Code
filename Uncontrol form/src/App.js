import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
//Uncontrol form
function App() {
  const fname=useRef(null)
  const lname=useRef(null)
  const lang=useRef(null)
  const g1=useRef(null)
  const g2=useRef(null)
  const Submitform=(event)=>
  {
    event.preventDefault()
    const fn=fname.current.value
    const ln=lname.current.value
    const lng=lang.current.value
    let gender=""
    if(g1.current.checked==true)
    {
      gender="male"
    }
     if(g2.current.checked==true)
    {
      gender="female"
    }
    console.log('First Name'+fn)
    console.log('Last Name'+ln)
    console.log('selected lang'+lng)
    console.log('Gender'+gender)
    console.log("Request submitted to server")
  }
  return(
    <div>
      <form onSubmit={Submitform}>
        First Name:<input type='text' name='+1' ref={fname}></input>
        <br></br>
        Last Name:<input type='text'  ref={lname}></input>
        <br></br>
        <br></br>
        select language:
        <select ref={lang}>
          <option value="c">C</option>
           <option value="cpp">CPP</option>
            <option value="java">JAVA</option>
        </select>
        <br></br>
        male<input type='radio' ref={g1} name='g'></input>
        female<input type='radio' ref={g2} name='g'></input>
        <button type='submit'>send to server</button>

      </form>
    </div>
  )
 
   
  
}

export default App;
