import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

// Defining user Mongoose Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true},
    username: {
        type: String, 
        unique: true, 
        required: true, 
        index: true},
    email: {
        type: String,
        unique: true,
        required: true,
        index: true,
        validate: {
            validator: function (value) {
                let r = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                return r.test(value);
            },
            message: "validation.emailFormat"
        }
    },
    password: {
        type: String, 
        required: true},
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true,
    },
    patients:[{type: mongoose.Schema.Types.ObjectId,
        ref: 'Patients',
        required: true,
    }],
}, {timestamps: true});

//UserSchema.set('toJSON', {getters: true});

UserSchema.plugin(uniqueValidator, {message: 'validation.unique'});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel