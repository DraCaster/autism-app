import dotenv from 'dotenv'
import express from 'express'
import './mongo-db-configuration'

import userRouter from './src/modules/security/routes'
import areaRouter from './src/modules/areas/routes'
import evaluationRouter from './src/modules/evaluations/routes'
import multimediaRouter from './src/modules/multimedia/routes'
import objetiveRouter from './src/modules/objectives/routes'
import observationRouter from './src/modules/observations/routes'

import corsMiddleware from './src/modules/middleware/corsModdleware'
import bodyParser from 'body-parser'
import {jwtAuth, handleAuthError} from './src/modules/security/middleware/auth';
import rbacMiddleware from './src/modules/security/middleware/rbacMiddleware';

const port = process.env.PORT_BACKEND

const app = express()
dotenv.config()

//CORS Middleware
app.use(corsMiddleware)

//Body Parse
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//AUTH Middleware
app.use(jwtAuth)
app.use(handleAuthError)

//RBAC Middleware
app.use(rbacMiddleware)

//Routes
app.use('/',userRouter)
app.use('/',areaRouter)
app.use('/',evaluationRouter)
app.use('/',multimediaRouter)
app.use('/',objetiveRouter)
app.use('/',observationRouter)

app.get('/status',(req, res)=>{res.send("Server running")})

app.listen(port, () =>console.log('Server started: '+ port));