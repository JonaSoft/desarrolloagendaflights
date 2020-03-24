/*jshint esversion: 8 */

const flightsController = {};
const flightModelo = require('../models/flights');

//traer todos los flights
flightsController.getFlights = async(req, res) => {
    const flights = await flightModelo.find();
    res.json({
        flights
    })
};
//crear flight
flightsController.createFlight = async(req, res) => {
    console.log(req.body);
    let body =  req.body
    const newFlight = new flightModelo({
        cliente:    body.cliente
       
    });
    console.log('nuevo registro creado', newFlight);
    await newFlight.save((err,newFlight)=>{
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
    //res.json();
};
//buscar un flight
flightsController.getFlight = async(req, res) => {
    console.log(req.params.id);
    const idFlight = await flightModelo.findById(req.params.id);
    res.json(idFlight);

};
//actualizar un flight
flightsController.editFlight = async(req, res) => {
    const { id } = req.params;
    const flightporActualizar = {
        cliente:	body.cliente,
        market:	    body.market,
        flightini:	body.flightini,
        origen:	    body.origen,
        destino:	body.destino,
        codope:	    body.codope,
        fechainit:	body.fechainit,
        fechaend:	body.fechaend,
        frecuencia:	body.frecuencia,
        clase:	    body.clase,
        comentario:	body.comentario,
        flightope:	body.flightope,
        timedep:	body.timedep,
        timearr:	body.timearr,
        fechareg:	body.fechareg
            //market: "AA",
            //flightini: "9998"
    }
    await flightModelo.findByIdAndUpdate(id, { $set: flightporActualizar }, { new: true });
    res.json({
        status: 'Flight Actualizado'
    })
};
flightsController.deleteFlight = async(req, res) => {
    await flightModelo.findByIdAndDelete(req.params.id);
    res.json({
        status: 'Flight eliminado'
    })

};


module.exports = flightsController;