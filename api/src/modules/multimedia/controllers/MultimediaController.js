import {
    getMultimedias,
    getMultimedia,
    createMultimedia,
    updateMultimedia
} from "../services/MultimediaService"

//ID viene como parametro en la request
//Otros parametros de la request vienen en el body

module.exports.getMultimediasAction = async function(req,res){

    getMultimedias()
    .then(res => {
        return res.status(200).json(res)
    })
    .catch(err => {
        return res.status(400).send("Error")
    })
}

module.exports.getMultimediaAction = async function(req,res){

    getMultimedia(req.params.id)
    .then(res => {
        return res.status(200).send(res)
    })
    .catch(err => {
        return res.status(404).send("No se encontro el recurso")
    })
}


module.exports.createMultimediaAction = async function(req,res){

    createMultimedia(req.body.description,req.body.url, req.body.typeMultimedia)
    .then(res => {
        return res.status(201).send(res)
    })
    .catch(err => {
        return res.status(400).send("Error al crear el recurso")
    })
}

module.exports.updateSkillAction = async function(req,res){

    updateMultimedia(req.body.id, req.body.description,req.body.url, req.body.typeMultimedia)
    .then(res => {
        return res.status(201).send(res)
    })
    .catch(err => {
        return res.status(400).send("Error al actualizar el recurso")
    })
}
