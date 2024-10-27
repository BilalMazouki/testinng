var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    age: Number,
    nurd : Boolean
})
const Users = mongoose.model('Users', UserSchema);
module.exports = Users;