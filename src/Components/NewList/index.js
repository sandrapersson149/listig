import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import history from '../../history'
import List from '../List';


const NewList = ({ title, setTitle }) => {

  const [input, setInput] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    setTitle(input)


    // console.log('rad 32 + ' + lists)
    // titleArr.push(lists)

    // localStorage.setItem("Lists", JSON.stringify(lists));

  }


  return (
    <div id='newlist'>
      <h2>Skapa inköpslista</h2>
      <p>Skriv in det namn du vill ha på din inköpslista</p>
      <form>
        <input type='text' onChange={(e) => setInput(e.target.value)} />
        <button>
          <Link to="/landing">avbryt</Link>
        </button>
        <button type='submit' onClick={handleClick}>
          <Link to="/list">skapa</Link>
        </button>
      </form>
    </div>
  )
}

export default NewList;