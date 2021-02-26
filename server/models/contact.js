let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    company: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);