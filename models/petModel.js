const { Schema, model } = require('mongoose');

const petSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Set name for add'],
            default: '',
        },
        category: {
            type: String,
            enum: ['sell', 'inGoodHands', 'lost/found'],
            default: 'inGoodHands',
            required: [true, 'Set category of add'],
        },
        breed: {
            type: String,
            default: '',
        },
        birthDate: {
            type: Date,
            default: ''
        },
        addTitle: {
            type: String,
            default: '',
            required: [true, 'Set title of add'],
        },
        imgURL: {
            type: String,
            default: '',
        },
        sex: {
            type: String,
            enum: ['male', 'female'],
            default: 'male',
            required: [true, 'Set sex of add'],
        },
        comments: {
            type: String,
            default: '',
        },
        location: {
            type: String,
            default: '',
            required: [true, 'Set location of add'],
        },
        price: {
            type: Number,
            default: '',
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
            // default: '',
        },
        // status: {
        //     type: String,
        //     enum: ['open', 'close' ],
        //     default: 'open',
        //     required: true
        // }
    },
    { versionKey: false, timestamps: true }
);

const Pet = model('pet', petSchema);

module.exports = Pet;
