import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, Conteudo } from './styles';
import logo from '../../assets/logo.svg';
import logo2 from '../../assets/logo2.svg';
import api from '../../services/api';

const schema = Yup.object().shape({
  nomeModulo: Yup.string()
    .required('O nome do modulo é obrigatório'),
  password: Yup.string().required('A senha é obrigatória').min(6, 'No mínimo 6 caracteres'),
});

export default function CadastraModulo(props) {

  const { background, setRoute } = props;
  const { admin } = useSelector(state => state.user.profile);

  async function cadastraModulo({ nomeModulo }, resetForm ) {
    
    const request = {
      nome: nomeModulo,
      perfilUsuario: admin
    }
    let response = "";
  try{
    response = await api.post('modulos', request)
    toast.success("Modulo cadastrado com sucesso")
    resetForm()
  }catch(err){
    
    toast.error("Erro ao cadastrar modulo: " + nomeModulo)
    toast.error(err.toString())
  }
    
    
  }

  return (

    <Container theme={background}>
      <Conteudo>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          {background == "escuro" ? <img onClick={() => setRoute("Aula")} src={logo} width="300px" alt="devaria" />
            : <img onClick={() => setRoute("Aula")} src={logo2} width="300px" alt="devaria" />}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5vh" }}>
            <span style={background == "escuro" ? { color: "white" } : { color: "black" }}>Cadastre modulo ao lado</span>
          </div>
        </div>
        <Formik
          initialValues={{
            nomeModulo: '',
          }}
          validationSchema={schema}

          onSubmit={() => { }}
        >
          {({
            touched,
            errors,
            values,
            resetForm,
          }) => (
            <Form >
              <Field name="nomeModulo" placeholder="Digite nome do modulo" />
              {errors.nomeModulo && touched.nomeModulo ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.nomeModulo}</div>) : null}
              <button type="button" onClick={() => {
                cadastraModulo(values, resetForm);
              }} >Salvar</button>
            </Form>
          )}
        </Formik>
      </Conteudo>
    </Container>
  );

}
