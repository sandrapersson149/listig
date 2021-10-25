import React from 'react'
import { Link } from "react-router-dom";
import history from '../../history'
import Avatar from '../../images/avatar.png'
import {
  LandingContainer,
  AvatarWrapper,
  LandingTitle,
  ListWrapper,
  ListIcon,
  OptionsIcon,
  BtnWrapper,
  NewListButton,
  AddIcon
} from './LandingStyled';

const Landing = () => {

  const dataFromLS = JSON.parse(localStorage.getItem("Lists"))

  function handleClickedList(item) {

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
              {/* <p>antal</p> */}
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
