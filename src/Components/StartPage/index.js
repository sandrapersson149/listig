import React from 'react'
import { Link } from "react-router-dom";
import {
  StartPageContainer,
  BtnContainer,
  Title,
  CreateAccBtn,
  SignInBtn,
  GoogleSignInBtn,
  GoogleIcon
} from './StartPageStyled';

export const StartPage = () => {

  return (
    <StartPageContainer>
      <Title>Listig</Title>
      <h3>Klimatsmarta Inköpslistor</h3>

      <BtnContainer>
        <h4>Välkommen till Listig</h4>
        <h5>Få koll på din klimatpåverkan</h5>
        <CreateAccBtn>Skapa Konto</CreateAccBtn>
        <p>Har du ett konto?
          <SignInBtn>
            <Link to="/signin">Logga in</Link>
          </SignInBtn>
        </p>
        <p>__________ Eller __________</p>
        <GoogleSignInBtn>
          <GoogleIcon />
          <Link to="/signin">Sign in with Google</Link>
        </GoogleSignInBtn>
      </BtnContainer>

    </StartPageContainer>
  )
}

export default StartPage;