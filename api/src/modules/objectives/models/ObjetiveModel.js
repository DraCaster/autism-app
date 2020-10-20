import mongoose from 'mongoose';

const ObjetiveSchema = new mongoose.Schema({
    name: {
        type: String, 
    },
    level:{type: String},
   
})

const ObjetiveModel = mongoose.model('Objetive', ObjetiveSchema);

module.exports = ObjetiveModel
