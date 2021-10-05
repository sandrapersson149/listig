import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AvatarWrapper, BackBtn, ListPageContainer, ListWrapper } from './ListStyled';
import Avatar from '../../images/avatar.png'

const List = ({ lists, title }) => {

  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(lists));
    const getLists = localStorage.getItem("Lists")
    console.log(getLists)
  }, [title])

  return (
    <ListPageContainer>
      <AvatarWrapper>
        <img src={Avatar}></img>
      </AvatarWrapper>
      <BackBtn>
        <Link to="/landing">back</Link>
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