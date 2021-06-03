import {Request, Response, NextFunction} from 'express';
import { validate } from 'class-validator';
import User from '../models/Users';

async function validation (request: Request, response: Response, next: NextFunction){
    const user = new User();
        
    if(request.body.email){
        
        user.email = request.body.email;
    }
    if(request.body.senha){
        
        user.senha = request.body.senha;
    }
    
    const errors = await validate(user, {skipMissingProperties: true});

    if(errors.length === 0){
        next();
    }else{
        return response.status(400).json(errors);
    }
}

export default validation; 