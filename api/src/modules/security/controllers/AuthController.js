import jsonwebtoken from "jsonwebtoken";
import validationResult from 'express-validator'
import authService from '../services/AuthService'

module.exports.authAction = async function (req, res) {

    //Ejecuto validaciones
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    
    const authResult = await authService( req.body.username,  req.body.password)

    if(authResult.status === false){
        return res.status(403).send(authResult.msg);
    }
    return res.status(200).json({"token": authResult.token, "user": authResult.user});

}