import styled from "styled-components";

export const NewListContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`

export const BackBtn = styled.button`
border: none;
margin: 10px;
width: 50px;
`

export const Wrapper = styled.div`
margin: 20px;
h2 {
  font-size: 22px;
  margin-bottom: 0;
}
p {
  font-size: 15px;
  font-weight: 300;
  margin-top: 5px;
}
form {
  display: flex;
  flex-wrap: wrap;
}
input {
  width: 80%;
  margin: 10px auto 30px auto;
  padding: 7px;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: 2px solid #26AE60;
}
`

export const AbortBtn = styled.button`
  width: 110px;
  height: 40px;
  margin: auto;
  border: none;
  border-radius: 10px;
  background-color: #C4C4C4;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: white;
  }
`


export const CreateBtn = styled.button`
  width: 110px;
  height: 40px;
  margin: auto;
  border: none;
  border-radius: 10px;
  background-color: #26AE60;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: white;
  }
`