import './App.css'
import Slideshow from './Slideshow.js'
import React, { useState, useEffect } from 'react'

function App() {

  const [data,setData]=useState(null);
  const getData=()=>{
    fetch('film-data.json'
      ,{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson){
          setData(myJson)
        });
    }
  useEffect(() => {
    getData()
  },[])

  return (
    <div className="slides-app">
      <h1>Studio Ghibli Movies</h1>
      {data ? <Slideshow slides={data}/> : <h2>Loading..</h2>}
    </div>
  )
}

export default App
