import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//checkbox
function App() {
  const [ischecked,setIschecked]=useState(false);
  const handlechange=(event)=>
  setIschecked(event.target.checked);
 return(
  <form>
    <input type='checkbox' checked={ischecked} onChange={handlechange}></input>
    {ischecked &&<div>you are selectd blue</div>}
    {!ischecked &&<div>you are selectd blue color</div>}

  </form>

 )
    
  
}

export default App;
