import {
    getHabilities,
    getSkill,
    createSkill,
    updateSkill
} from "../services/SkillService"

//ID viene como parametro en la request
//Otros parametros de la request vienen en el body

module.exports.getAbilitiesAction = async function(req,res){

    getHabilities()
    .then(res => {
        return res.status(200).json(res)
    })
    .catch(err => {
        return res.status(400).send("Error")
    })
}

module.exports.getSkillAction = async function(req,res){

    getSkill(req.params.id)
    .then(res => {
        return res.status(200).send(res)
    })
    .catch(err => {
        return res.status(404).send("No se encontro la habilidad")
    })
}


module.exports.createSkillAction = async function(req,res){

    createSkill(req.body.numberOfOrder,req.body.description, req.body.observations, req.body.parentsInform, req.body.informant, req.body.code, req.body.area, req.body.level)
    .then(res => {
        return res.status(201).send(res)
    })
    .catch(err => {
        return res.status(400).send("Error al crear la habilidad")
    })
}

module.exports.updateSkillAction = async function(req,res){

    updateSkill(req.body.id, req.body.numberOfOrder,req.body.description, req.body.observations, req.body.parentsInform, req.body.informant, req.body.code, req.body.area, req.body.level)
    .then(res => {
        return res.status(201).send(res)
    })
    .catch(err => {
        return res.status(400).send("Error al actualizar la habilidad")
    })
}
