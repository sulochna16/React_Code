

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {

  const[userinfo,setUserInfo]=useState({ userId: 100, id: 100, title: "", completed: false })
 
  const clickButton=()=>{
      console.log("Button Clicked")
      let mypromise=axios.get('https://jsonplaceholder.typicode.com/todos/1')
      console.log(mypromise)
      mypromise.then((obj)=>{
        console.log("Got data from server")
        console.log(obj.data)
        console.log(obj.data.id)
        console.log(obj.data.title)
        setUserInfo(obj.data)
      })
      mypromise.catch((error)=>{
        console.log(error)
      })
  }

  const clickButton2=()=>{
    console.log("Button Clicked")
    let mypromise=axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(mypromise)
    mypromise.then((obj)=>{
    console.log(obj.data)
    })
    mypromise.catch((error)=>{
      console.log(error)
    })
}

  return (
    <>
    <div>
      <button onClick={clickButton2}>Get Data</button>
      <br></br>
      <ul>
        <li>{userinfo.id}</li>
        <li>{userinfo.userId}</li>
        <li>{userinfo.title}</li>
        <li>{userinfo.completed}</li>
      </ul>
      
      
      
      
    </div>
          </>
  )
}

export default App