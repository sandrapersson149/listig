import React from 'react'
import { KlimatContainer, TopWrapper, AvatarWrapper, BackBtn, HeadWrapper, KlimatWrapper, StatsWrapper, BtnWrapper } from './KlimatStyled'
import { Link } from 'react-router-dom'
import Avatar from '../../images/avatar.png'

const klimat = () => {
  return (
    <KlimatContainer>

      <TopWrapper>
        <BackBtn>Back</BackBtn>
        <AvatarWrapper>
          <img src={Avatar} alt='Profile avatar' />
        </AvatarWrapper>
      </TopWrapper>

      <HeadWrapper>
        <h1>Nötfärs</h1>
        <p>
          Nötkött är det
          köttslag som har högst klimatpåverkan eftersom djuren släpper
          ut metan.</p>
        <p>Nötkött som produceras i intensiva
          uppfödningssystem, där djuren äter spannmål och soja, kan ha negativ miljöpåverkan
          i form av minskad biologisk mångfald och ökad användning av bekämpningsmedel.
        </p>
      </HeadWrapper>

      <KlimatWrapper>
        <h4>8<span>%</span></h4>
        <h5>hållbarhet</h5>
      </KlimatWrapper>

      <StatsWrapper>
        <h5>CO2 utsläpp</h5>
        <p>26 kg</p>
        <h5>Vattenförbrukning</h5>
        <p>6991 L</p>
      </StatsWrapper>

      <BtnWrapper>
        <button><Link to="/bytavara">Se Alternativa Varor</Link></button>
      </BtnWrapper>

    </KlimatContainer>
  )
}

export default klimat
