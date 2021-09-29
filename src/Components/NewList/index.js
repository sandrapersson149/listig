import React, { useState } from 'react'


const NewList = ({ listName }) => {
  const [input, setInput] = useState('')


  const handleClick = (e) => {
    e.preventDefault();
    listName(input)
  }

  // console.log(title)

  return (
    <div id='newlist'>
      <h2>Skapa inköpslista</h2>
      <p>Skriv in det namn du vill ha på din inköpslista</p>
      <form onSubmit={handleClick}>
        <input type='text' onChange={event => setInput(event.target.value)} />
        <button>Avbryt</button>
        <input type='submit' value='Skapa' />
      </form>
    </div>
  )
}

export default NewList;

// onSubmit={() => handleClick()}
// onClick={() => handleClick()}
