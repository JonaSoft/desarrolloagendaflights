/*jshint esversion: 8 */
const mongoose = require('mongoose');

//const URI = ('mongodb://localhost/codeshare', { useNewUrlParser: true });

mongoose.connect('mongodb://localhost/codeshare', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(db => console.log('Conectado a base de datos'))
    .catch(err => console.log(err))

module.exports = mongoose;