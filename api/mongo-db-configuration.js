import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
//mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, socketTimeoutMS: 10000,})
    .then(() => console.log('connected to MongoDB'))
    .catch(() => console.log('Error connecting to MongoDB'))
