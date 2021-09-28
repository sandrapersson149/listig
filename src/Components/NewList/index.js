import React
, { useState } from 'react'
import { Link } from "react-router-dom";
import { FoodData } from '../FoodData/data'

const NewList = () => {

  const [title, setTitle] = useState('')
  const handleClick = () => {
    FoodData.push()
  }

  console.log(title)
  return (
    <div id='newlist'>
      <h2>Skapa inköpslista</h2>
      <p>Skriv in det namn du vill ha på din inköpslista.</p>
      <input onChange={event => setTitle(event.target.value)} />
      <button>Avbryt</button>
      <button onClick={() => handleClick()}>
        <Link to="/list">Skapa</Link>
      </button>
    </div>
  )
}


export default NewList;