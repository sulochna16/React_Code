import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//using multiplefield in the control componant
function App() {
  const [values,setvalues]=useState({fname:'abc',address:'xyz'})
  const handleEvent=(event)=>
  {
    const name=event.target.name
    const value=event.target.value
    const newValues={...values,[name]:value}
    setvalues (newValues)
  }
   return(
    <div>
      <form>
        User name<input type='text' name="fname" value={values.fname} onchange={handleEvent}></input>
        <br></br>
        address<input type='text' name="address" value={values.address} onchange={handleEvent}></input>
      </form>
      <br></br>
      user name:{values.fname}
      <br></br>
      address:{values.address}
    </div>
   ) 
  
}

export default App;
