import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AvatarWrapper, BackBtn, ListPageContainer, ListWrapper } from './ListStyled';
import Avatar from '../../images/avatar.png'

const List = ({ title, setTitle, userData, setUserData, editMode, setEditMode }) => {


  useEffect(() => {
    try {
      const user = window.localStorage.getItem("list")
      console.log(user)
      if (!user) {
        setUserData(null)
      } else {
        const parsedData = JSON.parse(user)
        setUserData(parsedData)
        if (parsedData.items.length === 0) {
          setEditMode(true)
        }
      }
    } catch (error) {
      console.log(error)
      setUserData(null)
    }
  }, [])

  return (
    <ListPageContainer>
      <AvatarWrapper>
        <img src={Avatar}></img>
      </AvatarWrapper>
      <BackBtn>
        <Link to="/landing">Back</Link>
      </BackBtn>
      <ListWrapper>
        <h2>{title}</h2>
        <p>Kom igång med handlingslistan genom att klicka på knappen nedan</p>
        <h5>listan är tom</h5>
        <button>Lägg till +</button>
      </ListWrapper>
    </ListPageContainer>
  )
}

export default List;