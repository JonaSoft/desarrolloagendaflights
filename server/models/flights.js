/*jshint esversion: 8 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let flightData = new Schema({
    cliente: {
        type:String,
        unique:true,
        required:[true,'Es necesario']
    },   
    market:{
        type:String,
        required:[true,'Es necesario']
    },
    flightini: {
        type:String,
        required:[true,'Es necesario']
    },
    
    origen:{
        type:String        
    },
    destino:{
        type:String
    },
    codope:{
        type:String,
        required:[true,'Es necesario']
    },
    fechainit:{
        type:String,
        required:[true,'Es necesario']
    },
    fechaend:{
        type:String,
        required:[true,'Es necesario']
    },
    frecuencia:{
        type:String,
        required:[true,'Es necesario']
    },
    clase:{
        type:String
    },
    comentario:{
        type:String,
        required:[true,'Es necesario']
    },
    flightope:{
        type:String,
        required:[true,'Es necesario']
    },
    timedep:{
        type:String
    },
    timearr:{
        type:String
    },
    fechareg:{
        type:String,
        required:[true,'Es necesario']
    },
    img:{
        type:String
    }
})

module.exports = mongoose.model('flights', flightData);