import styled from "styled-components";
import natureBg from '../../images/nature.png'
import { FcGoogle } from 'react-icons/fc';

export const StartPageContainer = styled.div`
text-align: center;
background: url(${natureBg}) no-repeat;
background-size: 500px;
background-position: center bottom;
height: 100vh;
background-color: #EAEAEA;
h3 {
  text-transform: uppercase;
  margin-top: -15px;
  font-weight: 900;
  font-size: 15px;
  color: #3E3E3E;
}
`

export const BtnContainer = styled.div`
background: #F7F7F7;
border-radius: 10px;
margin: 50px auto;
padding: 20px 5px;
width: 80%;
h4 {
  margin-bottom: 0;
  font-weight: 800;
  font-size: 17px;
}
h5 {
  margin-top: 10px;
  font-weight: 300;
  font-size: 15px;
}
p {
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 25px;
}
`

export const Title = styled.h1`
font-family: 'Waiting for the Sunrise', cursive;
font-size: 70px;
letter-spacing: 0.09em;
font-weight: 200;
text-transform: uppercase;
color: #3E3E3E;
margin: 0;
padding-top: 100px;
`

export const CreateAccBtn = styled.button`
background-color: #E6E6E6;
border-radius: 10px;
border: none;
padding: 10px;
margin: 20px;
width: 230px;
height: 50px;
font-weight: 900;
text-transform: uppercase;
font-size: 14px;
color: #3E3E3E;
`

export const SignInBtn = styled.span`
a{
  color: #3E3E3E;
  text-transform: underline;
  padding-left: 5px;
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