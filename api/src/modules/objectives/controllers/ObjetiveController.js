import {
    getObjetives,
    getObjetive,
    createObjetive,
    updateObjetive
} from "../services/ObjetiveService"

//ID viene como parametro en la request
//Otros parametros de la request vienen en el body

module.exports.getObjetivesAction = async function(req,res){

    getObjetives()
    .then(res => {
        return res.status(200).json(res)
    })
    .catch(err => {
        return res.status(400).send("Error")
    })
}

module.exports.getObjetiveAction = async function(req,res){

    getObjetive(req.params.id)
    .then(res => {
        return res.status(200).send(res)
    })
    .catch(err => {
        return res.status(404).send("No se encontro el recurso")
    })
}

module.exports.createObjetiveAction = async function(req,res){

    createObjetive(req.body.name,req.body.level)
    .then(res => {
        return res.status(201).send(res)
    })
    .catch(err => {
        return res.status(400).send("Error al crear el recurso")
    })
}

module.exports.updateObjetiveAction = async function(req,res){

    updateObjetive(req.body.id, req.body.name,req.body.level)
    .then(res => {
        return res.status(201).send(res)
    })
    .catch(err => {
        return res.status(400).send("Error al actualizar el recurso")
    })
}
