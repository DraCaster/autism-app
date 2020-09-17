import mongoose from 'mongoose';

// Defining user Mongoose Schema
const AreaSchema = new mongoose.Schema({
    areaName: {
        type: String, 
        required: true}
})

const AreaModel = mongoose.model('Area', AreaSchema);

module.exports = AreaModel