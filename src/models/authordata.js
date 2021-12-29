const mongoose = require('mongoose');
mongoose.connect('mongodb://u32rnsmc4mg8rr3hd9dz:yrysHnzaKAkOJ4SIzPor@bbecwzcrcyjkosq-mongodb.services.clever-cloud.com:27017/bbecwzcrcyjkosq');
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