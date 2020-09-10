import {   
    getUsers,
    updatePasswordUser,
    updatePasswordAdmin,
    createUser,
    getUser,
    updateUser
} from '../services/UserService';
import { validationResult } from "express-validator";
import InvalidPasswordError from '../errors/InvalidPasswordError';

module.exports.getUsersAction = async function (req, res) {

    if (!req.user || !req.rbac.isAllowed(req.user.id, "LIST_ROLES_PERMISSION")) {
        return res.status(401).send("No autorizado")
    }

    const users = await getUsers();
    
    if (users) {
        //TODO Refactorizar el json que se envia
        return res.status(200).json(users);
    } else {
        return res.status(400).send([])
    }
}

module.exports.updatePasswordUserAction = async function (req, res) {

    let response = {
        errors: [],
        message: [''],
        data: [],
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        response.errors = errors.array()
        response.message = 'La petición no fue exitosa'
        return res.status(400).json(response) 
    }

    
    //Verifico si el usuario existe en la base de datos
    //TODO ver actualPassword por Current

    try {
        let user = await updatePasswordUser(req.user.id, req.body.currentPassword, req.body.newPassword);

        if (!user) {
            response.errors.push({ param: "id", msg: "El usuario con ese ID no existe" })
            return res.status(400).json(response)
        }
    }
    catch (error) {
        if (error instanceof InvalidPasswordError) {
            response.errors.push({ param: "currentPassword", msg: error.message })
            return res.status(400).json(response)
        }
        response.errors.push({ msg: error.message })
        return res.status(400).json(response)
    }

    response.message = 'Se modifico la contraseña con exito'
    res.status(200).json(response)

}

module.exports.updatePasswordAdminAction = async function (req, res) {

    logRequest(req)

    let response = [{
        errors: [],
        message: [''],
        data: [],
    }]

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        response[0].errors = errors.array()
        response[0].message = 'La petición no fue exitosa'
        return res.status(400).json(response)
    }

    const user = await updatePasswordAdmin(req.params.id, req.body.password);

    if (!user) {
        response[0].message = 'El usuario con ese ID no existe'
        //logger.warn('El usuario con ese ID no esta')
        return res.status(404).json(response)
    }

    response[0].message = 'Se modifico la contraseña con exito'
    //logger.info('La contraseña fue cambiada con exito')
    res.status(200).json(response)
}

module.exports.createUserAction = async function (req, res) {

    logRequest(req)

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const user = await createUser(req.body.name, req.body.username,
        req.body.email, req.body.password, req.body.role);

    const result = await user.save();

    //const jwtToken = user.generateJWT();
    res.status(201).send(user)

}

module.exports.getUserAction = async function (req, res) {

    const user = await getUser(req.params.id);
    if (!user)
        return res.status(404).send('No hemos encontrado un usuario con ese ID');

    res.send(user)

}

module.exports.updateUserAction = async function (req, res) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }

    try{
        const userUpdate = await updateUser(req.params.id, req.body.username,
        req.body.name, req.body.email, req.body.role);
        res.status(200).send(userUpdate)
    }
    catch(error){
        res.status(400).send({ error:error.message }) 
    }

}
