import React from 'react'
import { useLocation } from 'react-router-dom'
import history from '../../history'
import {
  KlimatContainer,
  TopWrapper,
  AvatarWrapper,
  BackBtn,
  HeadWrapper,
  KlimatWrapper,
  StatsWrapper,
  BtnWrapper
} from './KlimatStyled'
import Avatar from '../../images/avatar.png'

const Klimat = () => {

  let location = useLocation()
  let vara = location.state.item;


  const goToAlternativ = (item) => {

    history.push
      ({
        pathname: `/bytavara/${item}`,
        state:
        {
          item: item,
        }
      });

  }


  return (
    <KlimatContainer>

      <TopWrapper>
        <BackBtn>Back</BackBtn>
        <AvatarWrapper>
          <img src={Avatar} alt='Profile avatar' />
        </AvatarWrapper>
      </TopWrapper>

      <HeadWrapper>
        <h1>{vara}</h1>
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
        <button onClick={() => goToAlternativ(vara)}>Se Alternativa Varor</button>
      </BtnWrapper>

    </KlimatContainer>
  )
}

export default Klimat
