import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, ButtonContainer, SpanContainer, MenuContainer, Nav } from '../Header/styles';
import { FaElementor } from "react-icons/fa";
import logo from '../../assets/logo.svg'
import logo2 from '../../assets/logo2.svg'


export default function Header(props) {

  const { setRoute, background, setBackground } = props;
  const profile = useSelector(state => state.user.profile);
  const [width, setWidth ] = useState();
 

  function defineHeader() {
   setWidth(window.innerWidth)
  }

  function defineBackground() {
    background == "escuro" ? setBackground("claro") : setBackground("escuro")
  }

  
  return (
    width > 700 ?
    <Container id='teste' theme={background}>
      {window.addEventListener('resize', defineHeader)}
      
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
    : <MenuContainer theme={background}>
      {window.addEventListener('resize', defineHeader)}
      <div>
      <span>Menu</span> <button><FaElementor color='skyblue' size={"5vw"}/></button>
      </div>
      </MenuContainer>
  );

}
