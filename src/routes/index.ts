import { Router } from 'express';
import UserRouter from './v1/Users.router';

const routes = Router();

routes.use('/api/v1/users', UserRouter);

routes.get('/', (request, response) => {
    response.status(200).json('Início do desafio')
});

export default routes;