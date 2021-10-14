import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../images/avatar.png'
import Checklist from '../../images/checklist.png'

import { BytaVaraContainer, TopWrapper, BackBtn, AvatarWrapper, AltContainer, HeadWrapper, AlternativWrapper, ProcentContainer, BtnWrapper, ImgWrapper } from './BytaVaraStyled'

const bytaVara = () => {
  return (
    <BytaVaraContainer>

      <TopWrapper>
        <BackBtn><Link to='/klimat'>Back</Link></BackBtn>
        <AvatarWrapper>
          <img src={Avatar} alt='Profile avatar' />
        </AvatarWrapper>
      </TopWrapper>

      <HeadWrapper>
        <h1>Nötfärs</h1>
      </HeadWrapper>

      <AlternativWrapper>
        <h3>Alternativ till Nötfärs</h3>
        <h4>Quorn</h4>
        <AltContainer>

          <p>Köttliknande produkt som
            görs av ett svampprotein.</p>
          <ProcentContainer>
            <h4>90<span>%</span></h4>
            <h5>hållbarhet</h5>
          </ProcentContainer>
        </AltContainer>
        <h4>Sojafärs</h4>
        <AltContainer>

          <p>Köttliknande produkt av
            sojaprotein som utvinns
            ur sojabönor. Finns i flera
            varumärken.</p>
          <ProcentContainer>
            <h4>85<span>%</span></h4>
            <h5>hållbarhet</h5>
          </ProcentContainer>
        </AltContainer>
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

export default bytaVara
