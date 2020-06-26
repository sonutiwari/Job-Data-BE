const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    file: {type: String},
    status: {type: String, enum:['Review', 'Matched', 'Phone Screen', 'Onsite'], default: 'Review'},
    source: {type: String}
});
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
