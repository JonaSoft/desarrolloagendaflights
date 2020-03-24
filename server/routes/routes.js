 /*jshint esversion: 8 */
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/flights.controller');
const newFlight = require('../models/flights');


//traer todos los flights
router.get('/',async(req, res) => {
    const flights = await flightModelo.find();
    res.json({
        flights
    })
});

//crear flight
router.post('/flight', async(req, res) => {
    console.log(req.body);
    let body =  req.body
    let flight = new newFlight({
        cliente:	"AM1MEXMAD16/09/2019_16/09/2019",
        market:	"AM",
        flightini:	"1",
        origen:	"MEX",
        destino:	"MAD",
        codope:	"AM",
        fechainit:	"16/09/2019",
        fechaend:	"16/09/2019",
        frecuencia:	"lunes",
        clase:	"**",
        comentario:	"Flight not Codeshare",
        flightope:	"1",
        timedep:	"18:25",
        timearr:	"12:40",
        fechareg:	"16/09/2019"      
    });
    await flight.save((err,flight)=>{
        console.log(flight)
        if(err){
            return res.status(400).json({
                ok:false,
                err
            });
        }
        res.json({
            ok:true,
            usuario: newFlight
        });
    });
})

//buscar un flight
router.get('/:id', controllers.getFlight);

//actualizar un flight
router.put('/:id', controllers.editFlight);

//eliminar un flight
router.delete('/:id', controllers.deleteFlight);


module.exports = router;