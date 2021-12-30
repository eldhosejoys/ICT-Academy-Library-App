const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://enhanceme:8XznLPRErB7jZWv@cluster0.mke2a.mongodb.net/Libraryapp?retryWrites=true&w=majority');
//mongoose.connect('mongodb://localhost:27017/library');
//mongoose.connect('mongodb://username:password@host:port/database');

const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    author: String,
    image: String,
    description: String
});

var Authordata = mongoose.model('authordata', AuthorSchema);
module.exports = Authordata;