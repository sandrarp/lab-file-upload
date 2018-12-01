const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = Schema({
  username: String,
  email:    String,
  password: String,
  profileImg: {type: String, default: 'https://res.cloudinary.com/duaxyo2ks/image/upload/v1543655128/tumblr-lab-file/profile-default.png'}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
