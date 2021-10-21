import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NewListContainer, BackBtn, Wrapper, AbortBtn, CreateBtn } from './NewListStyled'
import history from '../../history'

const NewList = ({ setTitle, lists, setLists, clickedList, setClickedList }) => {
  const [input, setInput] = useState('')



  const handleClick = (newtitle) => {
    // e.preventDefault();
    // setClickedList(input)
    // console.log(e)
    const newList = {
      title: input,
      id: Date.now(),
      varor: [],
    };
    setLists(lists => [...lists, newList])
    localStorage.setItem("Lists", JSON.stringify(lists));


    console.log(newList)

    history.push
      ({
        pathname: `/list/${newtitle}`,
        state:
        {
          item: newtitle,
        }
      });
  }



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
          <CreateBtn type='submit' onClick={() => handleClick(input)}>
            <Link to="/list">Skapa</Link>
          </CreateBtn>
        </form>
      </Wrapper>
    </NewListContainer>
  )
}

export default NewList;