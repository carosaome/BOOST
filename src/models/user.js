const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  id: ObjectId,
  username: String,
  password: String
}, {
  timestamps: true,
}
);

module.exports = mongoose.model('User', User)