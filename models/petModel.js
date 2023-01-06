const { Schema, model } = require('mongoose');

const petSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Set name for pet'],
        },
        family: {
            type: String,
            default: ''
        },
        birthDate: {
            type: Date,
            required: [true, 'Set birthdate for pet'],
        },
        breed: {
            type: String,
            required: [true, 'Set breed for pet'],
        },
        sex: {
            type: String,
            enum: ['male', 'female'],
            default: 'male',
        },
        photo: {
            type: String,
            default: '',
        },
        passport: {
            type: String,
            default: '',
        },
        comments: {
            type: String,
            default: '',
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true
        },
    },
    { versionKey: false, timestamps: true }
);

const Pet = model('pet', petSchema);

module.exports = Pet;
