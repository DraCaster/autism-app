import mongoose from 'mongoose';

const AreaSchema = new mongoose.Schema({
    areaName: {
        type: String, 
        required: true}
})

const AreaModel = mongoose.model('Area', AreaSchema);

module.exports = AreaModel