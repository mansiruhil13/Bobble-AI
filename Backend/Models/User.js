const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {type: String, unique: true},
    username: String,
    email: String,
    password: String
    });

module.exports = mongoose.model('User', userSchema);