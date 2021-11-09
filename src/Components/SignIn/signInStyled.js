import styled from "styled-components";
import natureBg from '../../images/nature.png'
import { FcGoogle } from 'react-icons/fc';

export const SignInContainer = styled.div`
text-align: center;
background: url(${natureBg}) no-repeat;
background-size: 500px;
background-position: center bottom;
height: 100vh;
background-color: #EAEAEA;
h3 {
  text-transform: uppercase;
  margin: 0;
  padding-top: 100px;
  font-weight: 900;
  font-size: 20px;
  color: #3E3E3E;
}
`
export const SignInForm = styled.div`
background-color: #F7F7F7;
border-radius: 10px;
margin:50px auto;
padding: 20px 5px;
width: 80%;
h5 {
  font-weight: 200;
  font-size: 14px;
  border: none;
  width: 220px;
  padding: 10px 0;
  margin: 20px auto;
  background-color: #E2E2E2;
  border-radius: 10px;
}
`
export const SignInBtn = styled.button`
border: none;
background-color: #FFD449;
border-radius: 10px;
width: 220px;
height: 40px;
  a {
  color: #3E3E3E;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 15px;
}
`
export const GoogleIcon = styled(FcGoogle)`
font-size: 25px;
padding: 7px;
background-color: #fff;
`
export const GoogleSignInBtn = styled.button`
display: flex;
flex-direction: row;
align-items: center;
margin: auto;
background: #346EF1;
border-radius: 2px;
border: none;
width: 195px;
height: 50px;
a {
font-weight: bold;
font-size: 14px;
color: #FFFFFF;
padding-left: 10px;
text-decoration: none;
}
`