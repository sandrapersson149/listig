import React from 'react'
import { SignInContainer } from './signInStyled';
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <SignInContainer id='signin'>
      <form>
        <p>greta@stajlplejs.se</p>
        <p>********</p>
        <Link to="/landing">Logga In</Link>
        <p>Eller</p>
        <button>Sign in with Google</button>
      </form>
    </SignInContainer>
  )
}

export default SignIn;
