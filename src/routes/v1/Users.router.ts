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

UserRouter.get('/:id', async (request, response) => {
    try{
        const { id } = request.params; 
        const repoUser = getRepository(User); 
        
        const res = await repoUser.findOne(id);

        response.status(200).json(res);
    }catch (err){
        response.status(400).json(err);
    }
})

UserRouter.put('/:id', async (request, response) => {
    try{
        const { id } = request.params;
        const user = new User();
        
        if(request.body.email){
            
            user.email = request.body.email;
        }
        if(request.body.senha){
            
            user.senha = request.body.senha;
        }
        
        const repoUser = getRepository(User);
        const res = await repoUser.update(id, user); 

        response.status(200).json(res);
    }catch (err){
        response.status(400).json(err);
    }
})

UserRouter.delete('/', async (request, response) => {
    try{
        const repoUser = getRepository(User);
        const res = await repoUser.createQueryBuilder('Users').delete().execute();

        response.status(200).json({message:"todos os registros deletados", res});
    }catch(err){
        response.status(400).json(err);
    }
})

UserRouter.delete('/:id', async (request, response) => {
    try{
        const { id } = request.params;

        const repoUser = getRepository(User);
        const res = await repoUser.delete(id);
        
        response.status(200).json(res);
    }catch(err){
        response.status(400).json(err);
    }
})


export default UserRouter