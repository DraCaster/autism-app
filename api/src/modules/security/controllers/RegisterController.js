import {validationResult} from "express-validator"
import registerUserService from '../services/RegisterUserService'
import {emailService} from '../services/EmailService'

export const registerAction = async function(req,res) {

    //Ejecuto validaciones
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    
    const result = await registerUserService(req.body.name,req.body.username,
        req.body.email,req.body.password)

    const sendEmail = await emailService(req.body.username,
        req.body.email)
        
    if(result.state){
        return res.status(201).json({msg: 'Usuario registrado correctamente', sendEmail})
    }
    else{
        return res.status(400).json({msg: 'Error al registrar al usuario'})
    }

}