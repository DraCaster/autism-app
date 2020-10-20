import mongoose from 'mongoose';

const EvaluationSchema = new mongoose.Schema({
    evaluationDate: {
        type: Date, 
    },
    abilities:{type: String},
    observations:{type: String}
})

const EvaluationModel = mongoose.model('Evaluation', EvaluationSchema);

module.exports = EvaluationModel