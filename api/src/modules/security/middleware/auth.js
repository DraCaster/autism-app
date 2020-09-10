import jwt from 'express-jwt'
import dotenv from 'dotenv'

dotenv.config()

// auth middleware
export const jwtAuth = jwt({
    secret: process.env.JWT_SECRET,
    credentialsRequired: false
})

export const handleAuthError = function(err, req, res, next) {
    if(err.name === 'UnauthorizedError') {
        res.status(err.status).send({message:err.message});
        return;
    }
    next();
}
