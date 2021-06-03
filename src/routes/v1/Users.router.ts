import { Router } from 'express';
import { getRepository } from 'typeorm';

import User from '../../models/Users';

import validation from '../../middlewares/validation';

const UserRouter = Router(); 

UserRouter.post('/',validation, async (request, response) => {
    try{
        const { email, senha } = request.body; 
        const repoUser = getRepository(User);
        const user = repoUser.create({email,senha})

        const res = await repoUser.save(user);
        
        return response.status(201).json(res);

    }catch (err){
        response.status(400).json(err);
    }
})

UserRouter.get('/', async (request, response) => {
    try{

        const repoUser = getRepository(User);
        const res = await repoUser.find();
        
        if(res.length === 0){
            response.status(400).json({message: 'Nenhum usuario encontrado'})
        }else{
            response.status(200).json(res);
        }
    } catch(err){
        response.status(400).json(err);
    }
})

UserRouter.get('/:id', async (request, response) => {
    try{
        const { id } = request.params; 
        const repoUser = getRepository(User); 
        
        const res = await repoUser.findOne(id);

        if(res){
            response.status(200).json(res);
        }else{
            response.status(400).json({message: 'Nenhum usuario encontrado'})
        }
    }catch (err){
        response.status(400).json(err);
    }
})

UserRouter.put('/:id',validation, async (request, response) => {
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