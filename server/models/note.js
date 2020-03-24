/*jshint esversion: 8 */
const mongoose = require('mongoose');
let  Schema  = mongoose.Schema;

const NoteSchema = new Schema({
    id:{type:String},
    title: { type: String, required: false },
    description: { type: String, required: false },
    date: { type: Date, default: Date.now, required: false }
    //guarda en user el id de usuario al momento de grabar nueva nota
    //user: { type: String }
});
module.exports = mongoose.model('Note', NoteSchema)
