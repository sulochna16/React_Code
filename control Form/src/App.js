import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [fname,setfname]=useState('')
  const handleEvent=(event)=>
  {
    setfname(event.target.value)
  }
  return (
    <div>
      <form>
        <input type='text' name='t1' value={fname} onChange={handleEvent}></input>
      </form>
      {fname}
    </div>
    
  );
}

export default App;
