import styled from "styled-components";
import { FiCircle, FiCheckCircle, FiInfo } from 'react-icons/fi'
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiLeftArrowAlt } from 'react-icons/bi'

export const ListPageContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`
export const AvatarWrapper = styled.div`
display: flex;
justify-content: end;
img{
  width: 50px;
  margin: 20px;
  margin-bottom: 10px;
}
`
export const BackBtn = styled.button`
border: 1px solid black;
border-radius: 10px;
position: absolute;
left: 20px;
top: 20px;
font-size: 17px;
padding-left: 3px;
a {
  text-decoration: none;
  color: black;
}
`
export const BackIcon = styled(BiLeftArrowAlt)`
height: 17px;
`
export const ListWrapper = styled.div`
margin: 0 20px;
h2 {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
  margin-top: 0;
  text-align: center;
}
p {
  margin: 10px 40px;
  font-weight: normal;
  font-size: 15px;
  text-align: center;
}
h5 {
  font-weight: 300;
  margin: 50px;
}
button {
  width: 90%;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  margin-bottom: 15px;
  bottom: 30px;
}
`
export const Container = styled.div`
margin: 0;
ul{
margin: 20px 0;
padding: 0;
}
li{
  list-style: none;
  text-align: center;
}
h5 {
text-align: center;
}
p {
  text-align: center;
}
`
export const SearchInput = styled.input`
border: 8px solid #E1E1E1;
border-radius: 15px;
filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25));
margin: 10px auto;
padding: 10px 5px;
width: 90%;
`
export const SearchResultContainer = styled.div`
p {
  width: 100px;
  padding: 5px;
  font-size: 16px;
}
`
export const LiWrapper = styled.div`
background-color: #E1E1E1;
filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25));
border-radius: 10px;
`
export const ItemsInList = styled.li`
display: flex;
justify-content: space-between;
list-style: none;
margin: 5px;
padding: 5px 0;
h4 {
width: 130px;
font-size: 15px;
text-align: left;
margin: 0;
padding-top: 10px;
}
.complete {
  text-decoration: line-through;
  color: gray;
}
.listItem {
  text-decoration: none;
}
`
export const UncheckedIcon = styled(FiCircle)`
position: relative;
z-index: 10;
top: 7px;
left: 10px;
width: 20px;
height: 20px;
padding-right: 13px;
`
export const CheckedIcon = styled(FiCheckCircle)`
position: relative;
z-index: 10;
top: 7px;
left: 10px;
width: 20px;
height: 20px;
padding-right: 13px;
`
export const BtnContainer = styled.div`
display: flex;
`
export const PlusMinusContainer = styled.div`
width: 100px;
padding-top: 10px;
font-size: 18px;
color:#5F5F5F;
`
export const MinusIcon = styled(HiMinusCircle)`
padding-right: 5px;
width: 18px;
height: 18px;
color: #5F5F5F;
`
export const PlusIcon = styled(HiPlusCircle)`
padding-left: 5px;
width: 18px;
height: 18px;
color: #5F5F5F;
`
export const InfoIcon = styled(FiInfo)`
padding-top: 10px;
padding-right: 10px;
width: 22px;
height: 22px;
color: #828282;
`
export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 10px;
h3 {
  padding: 0 7px;
  padding-left: 40px;
  margin:5px 0;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  height: 20px;
}
.infoIcon {
  margin: 0;
  padding: 0;
  padding-right: 10px;
  width: 17px;
}
`
export const EditIcon = styled(AiOutlineEdit)`
color: gray;
margin: 0;
padding: 0;
padding-right: 10px;
width: 17px;
`
export const KvittoContainer = styled.div`
height: 70px;
border-radius: 10px;
filter: drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.25));
h1 {
  font-size: 16px;
  padding: 10px 0 0 10px;
}
`
export const Wrapper = styled.div`
.kvittoHeader {
  margin: 0;
  padding: 5px 0 0 10px;
}
.kvittText{
margin: 0;
padding: 10px 10px 5px 0;
font-weight: 400;
text-align: right;
}
.kvittoIcon {
  padding: 0;
  color: black;
  width: 15px;
  margin: 0;
}
`