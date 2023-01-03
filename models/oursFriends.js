const { Schema, model } = require('mongoose');

const oursFriendsSchema = new Schema({
    name: {
        type: String,
    },
    logo: {
        type: String,
        unique: true,
    },
    workTime: [{
        type: Object,
    }],
    address: {
        type: String,
    },
    url: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
},
{
  versionKey: false,
  timestamps: true
});

const OursFriends = model('ours_friends', oursFriendsSchema);

module.exports = OursFriends;
