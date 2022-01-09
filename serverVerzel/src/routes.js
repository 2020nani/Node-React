import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SwaggerUi from 'swagger-ui-express';
import SwwagerDocs from '../swagger.json'
import authMiddleware from './app/middlewares/auth';
import AulaController from './app/controllers/AulaController';
import ModuloController from './app/controllers/ModuloController';


const routes = new Router();
routes.use('/api-docs', SwaggerUi.serve)
routes.get('/api-docs', SwaggerUi.setup(SwwagerDocs))
routes.post('/api/v1/login', SessionController.store);
routes.post('/api/v1/users', UserController.store);
routes.get('/api/v1/aulas', AulaController.listaAulas);
routes.get('/api/v1/aulas/:id', AulaController.listaAulaPorModuloId);
routes.get('/api/v1/modulos', ModuloController.listaModulos);
routes.get('/api/v1/modulos/:id', ModuloController.listaModuloPorId);
routes.use(authMiddleware);
/*rotas so serao acessadas com o jwttoken*/
routes.put('/api/v1/users/:user_id', UserController.update);
routes.delete('/api/v1/users/:user_id', UserController.deleteOnlyUser);
routes.delete('/api/v1/users', UserController.deleteAllUsers);
routes.get('/api/v1/users/:user_id', UserController.listOnlyUser);
routes.get('/api/v1/users', UserController.listUsers);
routes.post('/api/v1/aulas', AulaController.store);
routes.put('/api/v1/aulas/:id', AulaController.update);
routes.delete('/api/v1/aulas/:id', AulaController.deleteAula);
routes.post('/api/v1/modulos', ModuloController.store);
routes.put('/api/v1/modulos/:id', ModuloController.update);
routes.delete('/api/v1/modulos/:id', ModuloController.deleteModulo);


module.exports = routes;