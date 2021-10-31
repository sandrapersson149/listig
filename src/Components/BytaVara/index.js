import React from 'react'
import { useLocation } from 'react-router-dom'
import Avatar from '../../images/avatar.png'
import Checklist from '../../images/checklist.png'
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
    ecoAlt,
    ecoHallbarhet,
    miniDesc
  } = location.state.item;

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
