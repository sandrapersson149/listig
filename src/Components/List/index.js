import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewList from '../NewList';
import { AvatarWrapper, BackBtn, ListPageContainer, ListWrapper } from './ListStyled';
import Avatar from '../../images/avatar.png'

const List = ({ title }) => {

  const [lists, setLists] = useState([]);

  let titleArr = []

  console.log('lists = ' + JSON.stringify(lists))
  const newList = {
    title: title,
    id: Date.now(),
  };

  useEffect((lists) => {
    // const json = JSON.stringify(lists);
    setLists(lists => [...lists, newList]);

    localStorage.setItem("Lists", JSON.stringify(lists));
    console.log('useeffect ran + ' + lists)
  }, [title])


  useEffect(() => {
    setLists(newList)

    console.log('rad 31' + lists)

  }, [])

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