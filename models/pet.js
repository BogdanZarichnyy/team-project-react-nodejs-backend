const { Schema, model } = require('mongoose');

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for add'],
      default: null,
    },
    category: {
      type: String,
      enum: ['sell', 'inGoodHands', 'lost/found'],
      default: 'inGoodHands',
      required: [true, 'Set category of add'],
    },
    breed: {
      type: String,
      default: null,
    },
    birthDate: {
      type: String,
      default: null,
    },
    addTitle: {
      type: String,
      default: null,
      required: [true, 'Set title of add'],
    },
    imgURL: {
      type: String,
      default: null,
    },
    sex: {
      type: String,
      enum: ['male', 'female'],
      default: 'male',
      required: [true, 'Set sex of add'],
    },
    comments: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
      required: [true, 'Set location of add'],
    },
    price: {
      type: Number,
      default: null,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const PetModel = model('pet', petSchema);

module.exports = PetModel;
