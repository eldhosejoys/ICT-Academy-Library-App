const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;
const BookSchema = new Schema({
    name: String,
    email: String,
    mobile: String,
    password: String
});

var Userdata = mongoose.model('userdata', BookSchema);
module.exports = Userdata;