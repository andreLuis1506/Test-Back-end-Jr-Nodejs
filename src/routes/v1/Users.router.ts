import { Router } from 'express';
import { getRepository } from 'typeorm';

import User from '../../models/Users';

const UserRouter = Router(); 

UserRouter.post('/', async (request, response) => {
    try{
        const { email, senha } = request.body; 
        const user = new User();
        
        user.email = email;
        user.senha = senha;

        const repoUser = getRepository(User);
        const res = await repoUser.save(user);

        response.status(201).json(res);

    }catch (err){
        response.status(400).json(err);
    }
})

UserRouter.get('/', async (request, response) => {
    try{

        const repoUser = getRepository(User);
        const res = await repoUser.find();
        
        response.status(200).json(res);
    } catch(err){
        response.status(400).json(err);
    }
})

export default UserRouter