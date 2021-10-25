import React from 'react'
import { Link } from 'react-router-dom'
import history from '../../history'
import {
  NewListContainer,
  BackBtn,
  Wrapper,
  AbortBtn,
  CreateBtn
} from './NewListStyled'

const NewList = ({ input, setInput, lists, setLists }) => {

  const handleClick = (newtitle) => {
    const newList = {
      title: newtitle,
      id: Date.now(),
      varor: [],
    };
    setLists(lists => [...lists, newList])
    localStorage.setItem("Lists", JSON.stringify(lists));

    history.push
      ({
        pathname: `/list/${newList.id}`,
        state:
        {
          item: newList,
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
          <CreateBtn type='submit' onClick={() => handleClick(input)}>Skapa</CreateBtn>
        </form>
      </Wrapper>
    </NewListContainer>
  )
}

export default NewList;