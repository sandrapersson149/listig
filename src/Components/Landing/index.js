import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { LandingContainer, AvatarWrapper, LandingTitle, ListWrapper, ListIcon, OptionsIcon, BtnWrapper, NewListButton, AddIcon } from './LandingStyled';
import Avatar from '../../images/avatar.png'

const Landing = ({ lists, setLists, }) => {

  useEffect(() => {

    const Demo = {
      title: 'Mat till helgen',
      id: Date.now(),
      varor: ['pasta', 'Spenat'],
    }
    setLists(lists => [...lists, Demo])
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
