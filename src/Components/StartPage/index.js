import React from 'react'
import { StartPageContainer, BtnContainer, Title, CreateAccBtn, SignInBtn, GoogleSignInBtn } from './StartPageStyled';
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

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
          <Link to="/signin"><span><FcGoogle /></span>Sign in with Google</Link>
        </GoogleSignInBtn>
      </BtnContainer>

    </StartPageContainer>
  )
}

export default StartPage;