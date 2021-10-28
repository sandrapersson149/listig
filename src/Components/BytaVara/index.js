import React from 'react'
import { useLocation } from 'react-router-dom'
import history from '../../history'
import Avatar from '../../images/avatar.png'
import Checklist from '../../images/checklist.png'
import { FoodData } from '../FoodData/data';
import {
  BytaVaraContainer,
  TopWrapper,
  BackBtn,
  AvatarWrapper,
  AltContainer,
  HeadWrapper,
  AlternativWrapper,
  ProcentContainer,
  BtnWrapper,
  ImgWrapper
} from './BytaVaraStyled'

const BytaVara = () => {

  let location = useLocation()
  let {
    name,
    hallbarhet,
    co2,
    h2o,
    ecoAlt,
    ecoHallbarhet,
    ecoH2o2,
    ecoHallbarhet2,
    ecoCo2,
    ecoH2o,
    miniDesc
  } = location.state.item;

  // const changeItem = FoodData.filter(item => item.name === name)

  function handleGoback() {
    window.history.back()
  }

  return (
    <BytaVaraContainer>

      <TopWrapper>
        <BackBtn onClick={handleGoback}>Back</BackBtn>
        <AvatarWrapper>
          <img src={Avatar} alt='Profile avatar' />
        </AvatarWrapper>
      </TopWrapper>

      <HeadWrapper>
        <h1>{name}</h1>
      </HeadWrapper>

      <AlternativWrapper>
        <h3>Alternativ till {name}</h3>


        <AltContainer>
          <h4>{ecoAlt}</h4>
          <p>{miniDesc}</p>
          <ProcentContainer>
            <h4>{ecoHallbarhet}<span>%</span></h4>
            <h5>hållbarhet</h5>
          </ProcentContainer>
        </AltContainer>

        {/* {
  if (ecoAlt2 !== null){
          <h4>{ecoAlt}</h4>
        } else {
          console.log('something')
        }
        } */}

        {/* <h4>Sojafärs</h4> */}

        {/* <AltContainer>
          <p>Köttliknande produkt av
            sojaprotein som utvinns
            ur sojabönor. Finns i flera
            varumärken.</p>
          <ProcentContainer>
            <h4>85<span>%</span></h4>
            <h5>hållbarhet</h5>
          </ProcentContainer>
        </AltContainer> */}

      </AlternativWrapper>

      <BtnWrapper>
        <button>
          Byt ut varan
        </button>
      </BtnWrapper>

      <ImgWrapper>
        <img src={Checklist} alt='Checklist' />
      </ImgWrapper>

    </BytaVaraContainer>
  )
}

export default BytaVara;
