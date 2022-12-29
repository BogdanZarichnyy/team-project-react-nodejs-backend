const { Schema, model } = require('mongoose');

const petSchema = new Schema({
    name: {
        type: String,
        required: [ true, 'Set name for contact' ]
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    }
});

const Pet = model('pet', petSchema);

module.exports = Pet;
