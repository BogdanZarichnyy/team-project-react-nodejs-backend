const { Schema, model } = require('mongoose');

const emailRegexp =
  /^([a-z0-9._]{1}[a-z0-9._-]+)+@[a-z0-9._-]+\.([a-z0-9._-]*[a-z0-9._]+)$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Enter your name'],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    avatar: {
      type: String,
      default: '',
    },
    birthday: {
      type: Date,
      default: '',
    },
    phone: {
      type: String,
      required: [true, 'Enter your phone number'],
    },
    city: {
      type: String,
      required: [true, 'Enter the city in which you live'],
    },
    accessToken: {
      type: String,
      default: '',
    },
    refreshToken: {
      type: String,
      default: '',
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = model('user', userSchema);

module.exports = User;
