const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://enhanceme:8XznLPRErB7jZWv@cluster0.mke2a.mongodb.net/Libraryapp?retryWrites=true&w=majority');
//mongoose.connect('mongodb://localhost:27017/library');
//mongoose.connect('mongodb://username:password@host:port/database');

const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String,
    description: String
});

var Bookdata = mongoose.model('bookdata', BookSchema);
module.exports = Bookdata;