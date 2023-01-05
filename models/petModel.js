const { Schema, model } = require('mongoose');

const petSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Set name for add'],
            default: '',
        },
        family: {
            type: String,
            required: [true, 'Set family for add'],
        },
        category: {
            type: String,
            enum: ['sale', 'inGoodHands', 'lostFound'],
            // default: 'inGoodHands',
            required: [true, 'Set category of add'], // змінити модель тварин для категорій на необов'язкові поля + аргегації для масиву улюбленців для видалення оголошень у всіх користувачів
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
        photo: {
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
            required: true
        },
        favoritesAds: [{
            type: Schema.Types.ObjectId,
            unique: true,
            ref: "user"
        }],
    },
    { versionKey: false, timestamps: true }
);

const Pet = model('pet', petSchema);

module.exports = Pet;
