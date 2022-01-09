import React from 'react';
import { BotaoContainer, Container, Conteudo, DescricaoAula, NomeAula, TitleAula, VideoAula } from './styles';
import iconPlay from '../../assets/iconPlay.svg'



export default function CardAula(props) {

  const {aula, background} = props;

  return (
     <Container theme={background}>

      <Conteudo>
       <TitleAula><span>{aula.modulo.nome}</span> <strong>1/1</strong></ TitleAula>
       <VideoAula><img src={iconPlay} alt='icone video' /></VideoAula>
       <NomeAula><h2>{aula.nome}</h2></NomeAula>
       <DescricaoAula><h3>{aula.descricao}</h3></DescricaoAula>
       <BotaoContainer><button>Assistir Aula</button></BotaoContainer>
      </Conteudo>

    </Container>

  );

}