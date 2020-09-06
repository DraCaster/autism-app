import './mongo-db-configuration'
import dotenv from 'dotenv'
import express from 'express';
import bodyParser from 'body-parser'
const port = process.env.PORT_BACKEND
dotenv.config()

const app = express()

//Body Parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/status',(req, res)=>{res.send("Server running")})

app.listen(port, () =>console.log('Server started: '+ port));