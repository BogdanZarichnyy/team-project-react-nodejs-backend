const { Schema, model } = require('mongoose');

const adSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Set name for pet'],
        },
        family: {
            type: String,
            default: '',
            // required: [true, 'Set family for pet'],
        },
        category: {
            type: String,
            enum: ['sale', 'inGoodHands', 'lostFound'],
            default: 'inGoodHands',
            required: [true, 'Set category of ad'],
        },
        breed: {
            type: String,
            required: [true, 'Set breed for ad'],
        },
        birthDate: {
            type: Date,
            required: [true, 'Set birthDate for pet'],
        },
        passport: {
            type: String,
            default: '',
        },
        addTitle: {
            type: String,
            required: [true, 'Set title of ad'],
        },
        photo: {
            type: String,
            default: '',
        },
        sex: {
            type: String,
            enum: ['male', 'female'],
            default: 'male',
            required: [true, 'Set sex of pet'],
        },
        comments: {
            type: String,
            default: '',
        },
        location: {
            type: String,
            required: [true, 'Set location of ad'],
        },
        price: {
            type: String,
            default: '',
        },
        owner: {
            _id: {
                type: Schema.Types.ObjectId,
                ref: 'user',
                required: true
            },
            email: {
                type: Schema.Types.String,
                required: true
            },
            phone: {
                type: Schema.Types.String,
                required: true
            },
        },
        follovers: [{
            type: Schema.Types.ObjectId,
            unique: true,
            ref: "user"
        }], // змінити модель тварин для категорій на необов'язкові поля + аргегації для масиву улюбленців для видалення оголошень у всіх користувачів
    },
    { versionKey: false, timestamps: true }
);

const Ad = model('ads', adSchema);

module.exports = Ad;
