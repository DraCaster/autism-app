import express from 'express'
import { authAction } from './controllers/AuthController'
import { readRolesAction, readRolesPermissionAction } from './controllers/RoleController'
import {
    updatePasswordUserAction, 
    updatePasswordAdminAction, 
    createUserAction,
    getUserAction,
    getUsersAction,
    updateUserAction
} from './controllers/UserController'

import { forgibben_Password, changeForgibbenPassword, getRestorePassword } from './controllers/resetPasswordController'

import { registerAction } from './controllers/RegisterController'

import { registerValidations, authValidations, userValidations} from './validations'

const router = express.Router();

//AUTH
router.post('/auth', authValidations,  authAction);

//USER
router.get('/users',  getUsersAction);

router.post('/user-register', registerValidations ,registerAction);

router.put('/user/password', updatePasswordUserAction);

router.put('/user/password/:id' , updatePasswordAdminAction);

//Busca el rol
router.get('/user/roles', readRolesAction);

//Retorna los roles y los permisos
router.get('/user/roles-permissions', readRolesPermissionAction);

//Agregar un usuario
router.post('/user', userValidations ,createUserAction);
//Encontrar un usuario
router.get('/api/users/user/:id', getUserAction);
//Actualizar un usuario
router.put('/api/users/user/:id', updateUserAction);

//MAIL
//verificar mail, post porque va a tener que mandar el link al email
router.post('/forgibben-password/', forgibben_Password);
//actualizar contraseña para recuperarla
router.put('/restore-password/:token', changeForgibbenPassword);
//ventana para recuperar contraseña
router.get('/restore-password/:token', getRestorePassword);


export default router;