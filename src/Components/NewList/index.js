import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NewListContainer, BackBtn, Wrapper, AbortBtn, CreateBtn } from './NewListStyled'

const NewList = ({ setTitle }) => {


  return (
    <NewListContainer id='newlist'>
      <BackBtn>
        <Link to="/landing">Back</Link>
      </BackBtn>
      <Wrapper>
        <h2>Skapa inköpslista</h2>
        <p>Skriv in det namn du vill ha på din inköpslista</p>
        <form>
          <input type='text' />
          <AbortBtn>
            <Link to="/landing">avbryt</Link>
          </AbortBtn>
          <CreateBtn type='submit'>
            <Link to="/list">Skapa</Link>
          </CreateBtn>
        </form>
      </Wrapper>
    </NewListContainer>
  )
}

export default NewList;