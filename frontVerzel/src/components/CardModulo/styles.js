import styled from 'styled-components';
export const Container = styled.button`
disabled: true;
width:25vw;
height: 30vh;
margin: 10px 0 10px 0;
background:  ${function (props) { 
  let color = ""
  props.theme == "escuro" ? color = "rgb(36, 18, 75)" : color = "white" 
  return color } };
border-radius: 20px;
border: 2px solid rgb(67, 51, 118)
font-family: Arial, Helvetica, sans-serif;
h1{
  text-align:center
  margin-top:2vw;
  margin-left:2vw
}
h2{
  font-size: 1.3rem;
  color: green
}
h3{
  font-size: 1rem;
  color: blue
}
p{
  text-align:center;
  margin-top:2vw;
  margin-left:1vw;
  font-size:2vw
}
&:hover{
  border: 2px solid green
  }
@media (max-width:1100px) {
    width: 35vw;
    height:20vw
}
@media (max-width:700px) {
  width:100%;
  height: 90%;
  margin-top: 10px;
}
`
export const Conteudo = styled.div`
display:flex;
justify-content:space-between;
align-items:flex-start;
padding-top: 3vh
padding-left: 1vw
`