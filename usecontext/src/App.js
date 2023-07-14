import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
//usecontext
function App() {
 const fn=useRef(null)
 const[fname,setfname]=useState('')
 const buttonclick=(event)=>{
  setfname(fn.current.value)
 }
 const Header=({fname})=>{
  return(
    <header>
      <h1>Hello{fname}</h1>
    </header>
  )
 }
 const Footer=({fname})=>{
  return(
    <footer>
      <h2>Byee{fname}</h2>
    </footer>
  )
   
}
const Main=()=>{
  return(
    <div>
      <input ref={fn} placeholder='Enter username'></input>
      <br></br>
      <button onClick={buttonclick}>Ok</button>
      <br></br>
      <br></br>
    </div>
  )
}
return(
  <div>
    <Header fname={fname}></Header>
    <Main></Main>
    <Footer fname={fname}></Footer>
  </div>
  )
}



export default App;
