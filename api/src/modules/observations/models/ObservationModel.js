import mongoose from 'mongoose';

const ObservationSchema = new mongoose.Schema({
    observationType: {
        type: String, 
    },
    description:{
        type: String
    }
})

const ObservationModel = mongoose.model('Observation', ObservationSchema);

module.exports = ObservationModel
