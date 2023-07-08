import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [selectdValue,setSelctedValue]=useState("Java")
  const handleEvent=(event)=>
  {
    setSelctedValue(event.target.value)
  }
 return(
  <div>
    <form>
      <select value={selectdValue} onChange={handleEvent}>
      <option value="c">C</option>
      <option value="cpp">CPP</option>
       <option value="java">Java</option>
       </select>
    </form>
  
    you selected {selectdValue}
  </div>

 )
    
  
}

export default App;
