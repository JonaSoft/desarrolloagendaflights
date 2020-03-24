/*jshint esversion: 8 */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongose } = require('./database')


//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors('localhost:4200'
    
));

//routes
//app.use(require('../server/routes/routes'))
    /*app.get('/',()=>{

    })*/

//routes

//starting server
app.listen(3000, () => {
    console.log('Server on port ', app.get('port'))
})