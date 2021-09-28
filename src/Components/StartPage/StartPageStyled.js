import styled from "styled-components";
import natureBg from '../../images/nature.png'

export const StartPageContainer = styled.div`
text-align: center;
background-color:  #E5E5E5;
background: url(${natureBg}) no-repeat;
height: 100vh;
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

export const GoogleSignInBtn = styled.button`
background: #346EF1;
border-radius: 2px;
border: none;
width: 180px;
height: 50px;
span {
  background-color: #fff; 
}
a {
font-weight: bold;
font-size: 14px;
color: #FFFFFF;
padding: 10px;
text-decoration: none;
}
`