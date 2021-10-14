import React, { useEffect, useState } from 'react'
import { useParams, } from "react-router-dom"
import { Link } from "react-router-dom";
import { LandingContainer, AvatarWrapper, LandingTitle, ListWrapper, ListIcon, OptionsIcon, BtnWrapper, NewListButton, AddIcon } from './LandingStyled';
import Avatar from '../../images/avatar.png'
import history from '../../history'

const Landing = ({ lists, clickedList, setClickedList }) => {

  const dataFromLS = JSON.parse(localStorage.getItem("Lists"))

  // useEffect(() => {
  //   localStorage.setItem("Lists", JSON.stringify(lists));

  // }, [])
  // console.log([...new Set(dataFromLS.title)])
  console.log(dataFromLS)

  function handleClickedList(item) {

    // let clickedTitle = item;

    // setClickedList(clickedTitle)
    console.log(item.id)
    history.push
      ({
        pathname: `/list/${item.id}`,
        state:
        {
          item: item,
        }
      });
  }


  return (
    <LandingContainer id='landing'>
      <AvatarWrapper>
        <img src={Avatar} alt='Profile avatar' />
      </AvatarWrapper>
      <LandingTitle>Mina Listor</LandingTitle>
      <ListWrapper>
        <ul>
          {dataFromLS.map(item => (
            <li key={item.id} onClick={() => handleClickedList(item)}>
              <ListIcon />
              <span>{item.title}</span>
              <OptionsIcon />
              <p>antal</p>
            </li>
          ))}
        </ul>
      </ListWrapper>
      <BtnWrapper>
        <NewListButton>
          <Link to="/newlist">
            Ny Lista
            <AddIcon />
          </Link>
        </NewListButton>
      </BtnWrapper>
    </LandingContainer>
  )
}

export default Landing;
