import mongoose from 'mongoose';

//Habilidades de la evaluacion inicial
const SkillSchema = new mongoose.Schema({
    numberOfOrder: {
        type: Number, 
    },
    description:{type: String},
    observations:{type: String},
    parentsInform:{type: String},
    informant:{type: String},
    code:{type: Number},
    area: {type: mongoose.Schema.Types.ObjectId,
           ref: "Area"},
    level: {type: String}
})

const SkillModel = mongoose.model('Skill', SkillSchema);

module.exports = SkillModel