import request from 'supertest';
import app from '../../src/app'

const MOCK_CADASTRO_ADMIN = {
  nome: "teste",
  email: 'modulo@hotmail.com',
  password: '123456',
  admin: true
}

const MOCK_LOGIN = {
  email: "modulo@hotmail.com",
  password: "123456"
}
const MOCK_CADASTRO_MODULO = {
  nome: "Teste",
  perfilUsuario: true
}
const MOCK_CADASTRO_MODULO_NOTPERMISSION = {
  nome: "Teste",
  perfilUsuario: false
}
const MOCK_CADASTRO_FAIL_SCHEMA = {
  nome: "",
}

const MOCK_UPDATE_MODULO = {
  nome: "testeUpdate",
  perfilUsuario: true
}
const MOCK_UPDATE_MODULO_NOTPERMISSION = {
  nome: "testeUpdate",
  perfilUsuario: false
}

let token = ""
let idAdmin = ''
let MOCK_ID = ''

describe('Modulos', () => {
  it('deve ser cadastrado admin', async () => {
    const response = await request(app)
      .post('/api/v1/users')
      .send(MOCK_CADASTRO_ADMIN);
    // pega id do usuario cadastrado e seta variavel id 
    idAdmin = response.body.id;
    expect(response.statusCode).toEqual(200)
  });

  
  it('deve logar se email existir', async () => {
    const response = await request(app)
      .post('/api/v1/login')
      .send(MOCK_LOGIN);
    token = response.body.token

    expect(response.statusCode).toEqual(200)
  });
  it('deve ser cadastrado Modulo', async () => {

    const response = await request(app)
      .post('/api/v1/modulos')
      .set("Authorization", `Bearer ${token}`)
      .send(MOCK_CADASTRO_MODULO);

    MOCK_ID = response.body.id
    //se cadastrou espera que retorne statuscode 200
    expect(response.statusCode).toEqual(200)
  });

  it('nao deve ser cadastrado Modulo se perfil do usuario nao for admin', async () => {

    const response = await request(app)
      .post('/api/v1/modulos')
      .set("Authorization", `Bearer ${token}`)
      .send(MOCK_CADASTRO_MODULO_NOTPERMISSION);

    expect(response.statusCode).toEqual(403)
  });

  it('nao deve cadastrar Modulo se nome vazio', async () => {
    const response = await request(app)
      .post('/api/v1/modulos')
      .set("Authorization", `Bearer ${token}`)
      .send(MOCK_CADASTRO_FAIL_SCHEMA);


    expect(response.body.error).toEqual("Validacao Falhou")
  });


  it('deve listar modulos', async () => {
    const response = await request(app)
      .get('/api/v1/modulos')
      .set("Authorization", `Bearer ${token}`)

    expect(response.statusCode).toEqual(200)
  });


  it('deve atualizar modulo cadastrado', async () => {
    const response = await request(app)
      .put(`/api/v1/modulos/${MOCK_ID}`)
      .set("Authorization", `Bearer ${token}`)
      .send(MOCK_UPDATE_MODULO);

    expect(response.statusCode).toEqual(200)
  });

  it('nao deve ser atualizado Modulo se perfilUsuario nao for admin', async () => {

    const response = await request(app)
      .put(`/api/v1/modulos/${MOCK_ID}`)
      .set("Authorization", `Bearer ${token}`)
      .send(MOCK_UPDATE_MODULO_NOTPERMISSION);

    expect(response.statusCode).toEqual(403)
  });

  it('deve deletar modulo cadastrado', async () => {
    const response = await request(app)
      .delete(`/api/v1/modulos/${MOCK_ID}`)
      .set("Authorization", `Bearer ${token}`)

    //se deletou retorna statuscode 200
    expect(response.status).toBe(200)
  });

  it('deve deletar administrador', async () => {
    const response = await request(app)
      .delete(`/api/v1/users/${idAdmin}`)
      .set("Authorization", `Bearer ${token}`)

    expect(response.statusCode).toEqual(200)
  });

}); 