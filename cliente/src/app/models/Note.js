/*jshint esversion: 8 */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    id: { type:string },
    title: { type: String },
    description: { type: String },
    date: { type: Date, default: Date.now, required:false }
    //guarda en user el id de usuario al momento de grabar nueva nota
    //user: { type: String }
});
module.exports = mongoose.model('Note', NoteSchema)
