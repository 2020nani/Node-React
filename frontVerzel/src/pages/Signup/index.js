import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CheckBox, Container, Conteudo } from './styles'
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import logo2 from '~/assets/logo2.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  nome: Yup.string()
    .required('O e-mail é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  admin: Yup.boolean()
    .required()
});

export default function SignUp() {
  const [background, setBackground] = useState("escuro")
  const dispatch = useDispatch();

  function defineBackground() {
    background == "escuro" ? setBackground("claro") : setBackground("escuro")
  }

  return (
    <Container theme={background}>
      <Conteudo>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Link to="/">
            {background == "escuro" ? <img src={logo} width="300px" alt="devaria" />
              : <img src={logo2} width="300px" alt="devaria" />}
          </Link>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5vh" }}>
            <span style={background == "escuro" ? { color: "white" } : { color: "black" }}>Já tem uma conta?</span>
            <Link to="/login"><span style={{ color: "orange" }}>Faça Login!</span></Link>
          </div>
        </div>
        <div>
          <h1 onClick={() => defineBackground()}>teste</h1>
          <Formik
            initialValues={{
              email: '',
              password: '',
              admin: false
            }}
            validationSchema={schema}

            onSubmit={async (values) => {
              const { nome, email, password, admin } = values;

              dispatch(signUpRequest(nome, email, password, admin));

            }
            }
          >
            {({
              touched,
              errors,
              setFieldValue,
            }) => (
              <Form >
                <Field name="nome" placeholder="Digite seu nome" />
                {errors.nome && touched.nome ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.nome}</div>) : null}

                <Field  name="email" placeholder="Digite seu email" />
                {errors.email && touched.email ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.email}</div>) : null}

                <Field name="password" placeholder="Digite sua senha" />
                {errors.password && touched.password ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.password}</div>) : null}
              <CheckBox>
                <span>Cadastrar como admin </span><Field name="admin" type="checkbox" />
              </CheckBox>

                <button type="submit">{'Cadastrar'}</button>

              </Form>
            )}
          </Formik>
        </div>
      </Conteudo>
    </Container>
  );
}
