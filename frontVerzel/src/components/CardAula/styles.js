import styled from 'styled-components';
export const Container = styled.div`
width:23vw;
height: 80vh;
display:flex;
flex-direction: column;
align-items:center;
margin-top: 2vh;
background:  ${function (props) {
    let color = ""
    props.theme == "escuro" ? color = "rgb(36, 18, 75)" : color = "white"
    return color
  }};
border-radius: 20px;
border: 2px solid blue
font-family: Arial, Helvetica, sans-serif;
&:hover{
  border: 2px solid green
  };
  @media (max-width:1100px) {
    width:30vw
};
@media (max-width:600px) {
  width:80vw
}
`
export const Conteudo = styled.ul`
width: 23vw;
height: 80vh
display:flex;
flex-direction: column;
align-items:center;
@media (max-width:1100px) {
  width:30vw
  };
@media (max-width:700px) {
    width:80vw
}
`
export const TitleAula = styled.li`
display:flex;
width: 18vw;
height: 5vh;
justify-content:space-between;
align-items:center;
margin: 3vh 4vw 2vh 0;
strong{
  color: blue;
}
span{   
  width: 13vw;
  height: 6vh;
  size:1rem;
  text-align: center;
  border: 3px solid white;
  border-radius: 20px;
  color: white
  @media (max-width:1100px) {
    width:90%
  }
  @media (max-width:700px) {
    width:70%
  }
}
@media (max-width:1100px) {
  width:25vw
  };
@media (max-width:700px) {
  width:70%
}
`
export const VideoAula = styled.li`
display:flex;
justify-content:center;
align-items:center;
width: 18vw;
height: 30vh;
border: 3px solid blue;
border-radius: 20px;
margin: 3vh 4vw 2vh 0;
img{
  width: 5vw
  @media (max-width:700px) {
    width:20%
  }
}
@media (max-width:1100px) {
  width:25vw
};
@media (max-width:700px) {
  width:70%
}
`
export const NomeAula = styled.li`
display:flex;
width: 18vw;
height: 7vh
justify-content:flex-start;
align-items:center;
margin: 3vh 4vw 2vh 0;
h2{
  size: 1.2rem;
  color: green
}
@media (max-width:1100px) {
  width:25vw
}
@media (max-width:700px) {
  width:70%
}
`
export const DescricaoAula = styled.li`
display:flex;
width: 18vw;
height: 8vh;
justify-content:flex-start;
align-items:center;
margin: 3vh 4vw 2vh 0;
h3{
  color: white;
}
@media (max-width:1100px) {
  width:25vw
}
@media (max-width:700px) {
  width:70%
}
`
export const BotaoContainer = styled.div`
display: flex;
justify-content:center;
align-items:center;
width:23vw;
margin: 3vh 3vw 2vh 0;
button{
  width:18vw;
  height: 8vh;
  display: flex;
  justify-content:center;
  align-items:center;
  color: white
  background: blue;
  border-radius: 20px;
}
@media (max-width:1100px) {
  width:25vw
}
@media (max-width:700px) {
  width:70%
}
`