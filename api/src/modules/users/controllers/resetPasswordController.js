import { verifyEmail, updatePasswordAdmin } from '../services/UserService'
import {emailServiceResetPassword} from '../services/EmailService'
var jwt = require('jsonwebtoken');

//verifico si existe la password en Recuperar contraseña
module.exports.forgibben_Password = async function (req, res) {

    let response = [{
        errors: [],
        message: [''],
        data: []
    }]

    const userMail = await verifyEmail(req.body.email)

    if (userMail.state){
        const user = req.body.email;
            const token = jwt.sign({
                user
            }, 'process.env.JWT_SECRET', {
                expiresIn: '3600s'
            });
        const sendEmail = await emailServiceResetPassword(userMail.user.username,req.body.email, token)
        response[0].message = userMail.msg
        return res.status(200).json({response,sendEmail})
    }else{
        response[0].message = userMail.msg
        return res.status(400).json(response)
    }
}

//actualizo la contraseña que fue olvidad
module.exports.changeForgibbenPassword = async function(req, res){

    let response = [{
        errors: [],
        message: [''],
        data: []
    }]

    const {token} = req.params

    jwt.verify(token, 'process.env.JWT_SECRET', async (err, data) => {
        if (err) {
            response[0].message = 'El token no es valido'
            return res.status(403).json(response)
        } else {
        const userId = await verifyEmail(data.user)
        const user = await updatePasswordAdmin(userId.user._id, req.body.password);

    if (!user) {
        response[0].message = 'El usuario con ese ID no existe'
        return res.status(404).json(response)
    }

    response[0].message = 'Se modifico la contraseña con exito'
    res.status(200).json(response)
        }
    });    
}



module.exports.getRestorePassword = async function(req,res){

    let response = [{
        errors: [],
        message: [''],
        data: []
    }]

    const {token} = req.params;

    jwt.verify(token, 'process.env.JWT_SECRET', (err, data) => {
        if (err) {
            response[0].message = 'El token no es valido'
            return res.status(403).json(response)
        } else {
        // const sc = {tok: token}
        //     res.render('auth/reset-pass',{sc});
        response[0].message = 'El token es valido'
            return res.status(200).json({response})
        }
    });
}