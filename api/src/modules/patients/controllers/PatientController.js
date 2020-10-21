import {
    getPatients,
    getPatient,
    createPatient,
    updatePatient
} from "../services/PatientService"

//ID viene como parametro en la request
//Otros parametros de la request vienen en el body

module.exports.getPatientsAction = async function(req,res){

    getPatients()
    .then(res => {
        return res.status(200).json(res)
    })
    .catch(err => {
        return res.status(400).send("Error")
    })
}

module.exports.getPatientAction = async function(req,res){

    getPatient(req.params.id)
    .then(res => {
        return res.status(200).send(res)
    })
    .catch(err => {
        return res.status(404).send("No se encontro la habilidad")
    })
}


module.exports.createPatientAction = async function(req,res){

    createPatient(req.body.name,req.body.lastname, req.body.dateOfBirth, req.body.treatmentStartDate, req.body.evaluations, req.body.coordinator, req.body.therapist, req.body.observations)
    .then(res => {
        return res.status(201).send(res)
    })
    .catch(err => {
        return res.status(400).send("Error al crear el recurso")
    })
}

module.exports.updatePatientAction = async function(req,res){

    updatePatient(req.body.id, req.body.name,req.body.lastname, req.body.dateOfBirth, req.body.treatmentStartDate, req.body.evaluations, req.body.coordinator, req.body.therapist, req.body.observations)
    .then(res => {
        return res.status(201).send(res)
    })
    .catch(err => {
        return res.status(400).send("Error al actualizar el recurso")
    })
}
