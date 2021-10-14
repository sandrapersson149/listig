import React, { useEffect } from 'react'
import { SignInContainer, SignInForm, SignInBtn, GoogleSignInBtn, GoogleIcon } from './signInStyled';
import { Link } from "react-router-dom";
import { FoodData } from '../FoodData/data';

const SignIn = ({ lists, setLists, }) => {

  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(lists));

  }, [])

  return (
    <SignInContainer id='signin'>
      <h3>Sign in</h3>
      <SignInForm>
        <h5>greta@stajlplejs.se</h5>
        <h5>********</h5>
        <SignInBtn>
          <Link to="/landing">Logga In</Link>
        </SignInBtn>
        <p>__________ Eller __________</p>
        <GoogleSignInBtn>
          <GoogleIcon />
          <Link to="/signin">Sign in with Google</Link>
        </GoogleSignInBtn>
      </SignInForm>
    </SignInContainer>
  )
}

export default SignIn;
