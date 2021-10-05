import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NewListContainer, BackBtn, Wrapper, AbortBtn, CreateBtn } from './NewListStyled'

const NewList = ({ title, setTitle, userData, setUserData, editMode, setEditMode }) => {




  const formSubmitHandler = (e) => {
    e.preventDefault()
    try {
      setUserData({ title, id: Date.now(), items: [] })
      setEditMode(true)
      window.localStorage.setItem("list", JSON.stringify({ title, id: Date.now(), items: [] }))
      console.log(title)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <NewListContainer id='newlist'>
      <BackBtn>
        <Link to="/landing">Back</Link>
      </BackBtn>
      <Wrapper>
        <h2>Skapa inköpslista</h2>
        <p>Skriv in det namn du vill ha på din inköpslista</p>
        <form >
          <input
            type='Title'
            id='Title'
            placeholder='Namn på listan'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <AbortBtn>
            <Link to="/landing">avbryt</Link>
          </AbortBtn>
          <CreateBtn onClick={formSubmitHandler} type='submit' text='Submit'>
            <Link to="/list">Skapa</Link>
          </CreateBtn>
        </form>
      </Wrapper>
    </NewListContainer>
  )
}

export default NewList;