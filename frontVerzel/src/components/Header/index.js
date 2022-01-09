import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, ButtonContainer, SpanContainer, Button, Nav } from '../Header/styles';
import logo from '../../assets/logo.svg'
import logo2 from '../../assets/logo2.svg'


export default function Header(props) {

  let deviceWidth = window.innerWidth;
  const { setRoute, background, setBackground } = props;
  const profile = useSelector(state => state.user.profile);

  function defineTamanhoTela(tela){
    console.log(tela)
  }

  function defineBackground() {
    background == "escuro" ? setBackground("claro") : setBackground("escuro")
  }

  window.addEventListener('resize',defineTamanhoTela(window.innerWidth))
  return (
    <Container theme={background}>
      {profile == null ?
        <Nav> 
          {background == "escuro" ? <img onClick={() => setRoute("Aula")} width="100px" src={logo} alt="logo" />
            : <img onClick={() => setRoute("Aula")} width="100px" src={logo2} alt="logo" />}
          <SpanContainer>
            <span onClick={() => setRoute("Aula")}>Calendario das aulas</span>
            <span>Para sua empresa</span>
            <span>Contato</span>
            <span>DevStars</span>
          </SpanContainer>
          <ButtonContainer>
            <button><Link to="/login">Entrar</Link></button>
            <button onClick={() => defineBackground()}>{background == "escuro" ?
              "Claro" : "Escuro"}</button>
          </ButtonContainer>
        </Nav>
        : profile.admin == false ?
        <Nav>
          <Link to="/">
          {background == "escuro" ? <img onClick={() => setRoute("Aula")} width="100px" src={logo} alt="logo" />
            : <img onClick={() => setRoute("Aula")} width="100px" src={logo2} alt="logo" />}
          </Link>
          <SpanContainer>
            <span onClick={() => setRoute("Aula")}>Calendario das aulas</span>
            <span>Para sua empresa</span>
            <span>Contato</span>
            <span>DevStars</span>
          </SpanContainer>
          <ButtonContainer>
            <button><Link to="/profile">Perfil</Link></button>
            <button onClick={() => defineBackground()}>{background == "escuro" ?
              "Claro" : "Escuro"}</button>
          </ButtonContainer>
        </Nav>
      :<Nav>
      <Link to="/">
          {background == "escuro" ? <img onClick={() => setRoute("Aula")} width="100px" src={logo} alt="logo" />
            : <img onClick={() => setRoute("Aula")} width="100px" src={logo2} alt="logo" />}
          </Link>
      <SpanContainer>
        <span onClick={() => setRoute("Modulo/Aula")}>Modulos/Aulas</span>
        <span onClick={() => setRoute("CadastraAula")}>Aulas</span>
        <span onClick={() => setRoute("CadastraModulo")}>Modulos</span>
      </SpanContainer>
      <ButtonContainer>
        <button><Link to="/profile">Perfil</Link></button>
        <button onClick={() => defineBackground()}>{background == "escuro" ?
          "Claro" : "Escuro"}</button>
      </ButtonContainer>
    </Nav>}
    </Container>
    
  );

}
