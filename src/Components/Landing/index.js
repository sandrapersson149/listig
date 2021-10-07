import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { LandingContainer, AvatarWrapper, LandingTitle, ListWrapper, ListIcon, OptionsIcon, BtnWrapper, NewListButton, AddIcon } from './LandingStyled';
import Avatar from '../../images/avatar.png'

const Landing = ({ lists }) => {

  const DataFromLS = JSON.parse(localStorage.getItem("Lists"))

  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(lists));

  }, [])


  return (
    <LandingContainer id='landing'>
      <AvatarWrapper>
        <img src={Avatar} alt='Profile avatar' />
      </AvatarWrapper>
      <LandingTitle>Gretas Listor</LandingTitle>
      <ListWrapper>
        <ul>
          {/* <Link to="/demolist"></Link> */}
          {DataFromLS.map(item => (
            <li key={item.id}>
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
