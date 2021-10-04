import React from 'react'
import { Link } from "react-router-dom";
import { LandingContainer, AvatarWrapper, LandingTitle, ListWrapper, ListIcon, OptionsIcon, BtnWrapper, NewListButton, AddIcon } from './LandingStyled';
// import { FoodData } from '../FoodData/data'
import Avatar from '../../images/avatar.png'
import { FaListUl } from 'react-icons/fa'

const Landing = () => {


  return (
    <LandingContainer id='landing'>
      <AvatarWrapper>
        <img src={Avatar}></img>
      </AvatarWrapper>
      <LandingTitle>Gretas Listor</LandingTitle>
      <ListWrapper>
        <ul>
          <Link to="/demolist">
            <li>
              <ListIcon />
              <span>Mat till Helgen</span>
              <OptionsIcon />
              <p>10</p>
            </li>
          </Link>
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
