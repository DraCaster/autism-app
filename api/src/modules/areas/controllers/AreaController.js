import {
    getAreas,
    getArea,
    createArea,
    updateArea
} from "../services/AreaService"

//ID viene como parametro en la request
//Otros parametros de la request vienen en el body

module.exports.getAreasAction = async function(req,res){

    getAreas()
    .then(res => {
        return res.status(200).json(res)
    })
    .catch(err => {
        return res.status(400).send({"Error"})
    })

}

module.exports.getAreaAction = async function(req,res){

    getArea(req.params.id)
    .then(res => {
        return res.status(200).send(res)
    })
    .catch(err => {
        return res.status(404).send("No se encontro el area")
    })

}

module.exports.createAreaAction = async function(req,res){

    createArea(req.body.areaName)
    .then(res => {
        return res.status(201).send(res)
    })
    .catch(err => {
        return res.status(400).send("Error al crear el area")
    })
}

module.exports.updateAreaAction = async function(req,res){

    updateArea(req.body.areaName)
    .then(res => {
        return res.status(201).send(res)
    })
    .catch(err => {
        return res.status(400).send("Error al actualizar el area")
    })
}
