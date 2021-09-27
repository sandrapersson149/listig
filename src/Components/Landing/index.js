import React from 'react'
import { LandingContainer, BtnContainer } from './landingStyled';
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <LandingContainer>
      <h1>Listig</h1>
      <h3>Klimatsmarta Inköpslistor</h3>

      <BtnContainer>
        <h3>Välkommen till Listig</h3>
        <p>Få koll på din klimatpåverkan</p>
        <button>Skapa Konto</button>
        <p>Har du ett konto? <span><Link to="/signin">Logga in</Link></span></p>
        <p>Eller</p>
        <button>
          <Link to="/signin">Sign in with Google</Link>
        </button>
      </BtnContainer>

    </LandingContainer>
  )
}

export default Landing;