import React from 'react'
import { Link } from "react-router-dom";
import { LandingContainer, ListWrapper, BtnWrapper } from './LandingStyled';
// import { FoodData } from '../FoodData/data'

const Landing = () => {


  return (
    <LandingContainer id='landing'>
      <h1>Gretas Listor</h1>
      <ListWrapper>
        <ul>
          <Link to="/demolist"><li>Mat till Helgen</li></Link>
        </ul>
      </ListWrapper>
      <BtnWrapper>
        <button>
          <Link to="/newlist">Ny Lista +</Link>
        </button>
      </BtnWrapper>
    </LandingContainer>
  )
}

export default Landing;
