const mongoose = require('mongoose');
mongoose.connect('mongodb://u32rnsmc4mg8rr3hd9dz:yrysHnzaKAkOJ4SIzPor@bbecwzcrcyjkosq-mongodb.services.clever-cloud.com:27017/bbecwzcrcyjkosq');
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