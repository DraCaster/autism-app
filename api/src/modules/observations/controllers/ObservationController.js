import {
    getObservations,
    getObservation,
    createObservation,
    updateObservation
} from "../services/ObservationService"

//ID viene como parametro en la request
//Otros parametros de la request vienen en el body

module.exports.getObservationsAction = async function(req,res){

    getObservations()
    .then(res => {
        return res.status(200).json(res)
    })
    .catch(err => {
        return res.status(400).send("Error")
    })
}

module.exports.getObservationAction = async function(req,res){

    getObservation(req.params.id)
    .then(res => {
        return res.status(200).send(res)
    })
    .catch(err => {
        return res.status(404).send("No se encontro el recurso")
    })
}

module.exports.createObservationAction = async function(req,res){

    createObservation(req.body.observationType, req.body.description)
    .then(res => {
        return res.status(201).send(res)
    })
    .catch(err => {
        return res.status(400).send("Error al crear el recurso")
    })
}

module.exports.updateObservationAction = async function(req,res){

    updateObservation(req.body.id, req.body.observationType, req.body.description)
    .then(res => {
        return res.status(201).send(res)
    })
    .catch(err => {
        return res.status(400).send("Error al actualizar el recurso")
    })
}
