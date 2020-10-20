import mongoose from 'mongoose';

const MultimediaSchema = new mongoose.Schema({
    description:{type: String},
    url:{type: String},
    typeMultimedia:{type: String}
})


const MultimediaModel = mongoose.model('Multimedia', MultimediaSchema);

module.exports = MultimediaModel