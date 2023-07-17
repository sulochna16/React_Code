import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
//providing context
function App() {
  const expensiveCalculation=(num)=>{
    console.log("calculating...");
    for (let i=0;i<1000000000;i++){
      num+=1;
    }
    return num
  }
  const fname=useRef(null)
  const[names,setNames]=useState('')
  const [count,setCount]=useState(0)
  const calculation=expensiveCalculation(count)
  const inr=()=>{
    setCount(count+1)
  }
  const addName=()=>{
    setNames(fname.current.value)
  }
  return (
    <div>
      <h1>React demo</h1>
      <br></br>
      <input ref={fname}></input>
      <button onClick={addName}>addName</button>
      <br></br>w2
      <h1>Hello {names}</h1>
      <br></br>
      <button onClick={inr}>+</button>
      <br></br>
      count is:{count}
      <br></br>
      expensiveCalculation is:{calculation}
    </div>
  );
}

export default App;
