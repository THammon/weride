import React, {useState, useEffect} from 'react'
import {Route, Routes} from "react-router-dom"
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import Login from './Login'

function App() {

  const [data, setData] = useState([{}])

  useEffect ( () => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element={<LandingPage/>}/>
        <Route path = "/Login" element={<Login/>}/>
      </Routes>
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  )
}

export default App