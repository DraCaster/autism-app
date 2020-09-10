const {check, validationResult} = require('express-validator');
import User from './models/UserModel'

//Length username:min:3 pwd:min:6
module.exports.authValidations = [check('username').isLength({min: 3}),
    check('password').isLength({min: 6})];

//Validaciones al registrarse
module.exports.registerValidations = [
    check('name')
        .isLength({min: 3, max: 50})
        .withMessage('El nombre debe tener como minimo 3 caracteres de longitud'),

    check('username')
        .isLength({min: 3, max: 50})
        .withMessage('El usuario debe tener como minimo 3 caracteres de longitud')
        .isAlphanumeric('es-ES')
        .custom((value, {req}) => {
            return new Promise((resolve, reject) => {
                User.findOne({username:req.body.username}, function(err, user){
                    if(err) {
                        reject(new Error('Error del servidor'))
                    }
                    if(Boolean(user)) {
                        reject(new Error('El usuario ya esta en uso'))
                    }
                    resolve(true)
                });
            });
        }),

    check('email')
        .isLength({min: 5, max: 50})
        .withMessage('El email debe tener como minimo 3 caracteres de longitud')
        .isEmail()
        .withMessage('El formato del email es invalido')
        .custom((value, {req}) => {
            return new Promise((resolve, reject) => {
                User.findOne({email:req.body.email}, function(err, user){
                    if(err) {
                        reject(new Error('Error del servidor'))
                    }
                    if(Boolean(user)) {
                        reject(new Error('El email ya esta en uso'))
                    }
                    resolve(true)
                });
            });
        }),
    check('password').isLength({min: 6, max: 30})
];

//Validaciones del usuario
module.exports.userValidations = [
    check('name')
        .isLength({min: 3, max: 50})
        .withMessage('El nombre debe tener como minimo 3 caracteres de longitud')
        .not()
        .isEmpty()
        .withMessage('El nombre es requerido'),

    check('username')
        .isLength({min: 3, max: 50})
        .withMessage('El usuario debe tener como minimo 3 caracteres de longitud')
        .isAlphanumeric('es-ES')
        .withMessage('Solo se permiten caracteres alfanumericos')
        .not()
        .isEmpty()
        .withMessage('El usuario es requerido')
        .custom((value, {req}) => {
            return new Promise((resolve, reject) => {
                User.findOne({username:req.body.username}, function(err, user){
                    if(err) {
                        reject(new Error('Error del servidor'))
                    }
                    if(Boolean(user)) {
                        reject(new Error('El usuario ya esta en uso'))
                    }
                    resolve(true)
                });
            });
        }),

    check('email')
        .not()
        .isEmpty()
        .withMessage('El email es requerido')
        .isLength({min: 5, max: 50})
        .isEmail()
        .withMessage('No es un email valido')
        .custom((value, {req}) => {
            return new Promise((resolve, reject) => {
                User.findOne({email:req.body.email}, function(err, user){
                    if(err) {
                        reject(new Error('Error del servidor'))
                    }
                    if(Boolean(user)) {
                        reject(new Error('El email ya esta en uso'))
                    }
                    resolve(true)
                });
            });
        }),

    check('password')
        .not()
        .isEmpty()
        .withMessage('La contraseña es requerida')
        .isLength({min: 6, max: 30})
        .withMessage('La contraseña debe tener como minimo 6 caracteres de longitud'),

    check('role').isLength({min:1})
        .withMessage('Seleccione un rol'),
    ];

