import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NewListContainer, BackBtn, Wrapper, AbortBtn, CreateBtn } from './NewListStyled'

const NewList = ({ setTitle, setLists, }) => {
  const [input, setInput] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    setTitle(input)
    setLists(lists => [...lists, newList])
  }

  const newList = {
    title: input,
    id: Date.now(),
    varor: [],
  };

  return (
    <NewListContainer id='newlist'>
      <BackBtn>
        <Link to="/landing">Back</Link>
      </BackBtn>
      <Wrapper>
        <h2>Skapa inköpslista</h2>
        <p>Skriv in det namn du vill ha på din inköpslista</p>
        <form>
          <input type='text' onChange={(e) => setInput(e.target.value)} />
          <AbortBtn>
            <Link to="/landing">avbryt</Link>
          </AbortBtn>
          <CreateBtn type='submit' onClick={handleClick}>
            <Link to="/list">Skapa</Link>
          </CreateBtn>
        </form>
      </Wrapper>
    </NewListContainer>
  )
}

export default NewList;