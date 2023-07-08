import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//Radio Button
function App() {
  const [gender,setgender]=useState("male")
  const handleEvent1=(event)=> 
  {
    setgender('male')
  }
   const handleEvent2=(event)=> 
  {
    setgender('female')
  }
  
  return(
    <div>
      <form>
        Male:<input type='radio' onChange={handleEvent1} name='g' checked ={gender=='male'}></input>
        <br></br>
        female:<input type='radio' onChange={handleEvent2} name='g' checked ={gender=='female'}></input>
      </form>
    </div>

  )
   
  
}

export default App;
