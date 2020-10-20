import {
  getEvaluations,
  getEvaluation,
  createEvaluation,
  updateEvaluation,
} from "../services/EvaluationService";

module.exports.getEvaluationsAction = async function (req, res) {
  getEvaluations()
    .then((res) => {
      return res.status(200).json(res);
    })
    .catch((err) => {
      return res.status(400).send("Error");
    });
};

module.exports.getEvaluationAction = async function (req, res) {
  getEvaluation(req.params.id)
    .then((res) => {
      return res.status(200).send(res);
    })
    .catch((err) => {
      return res.status(404).send("No se encontro la evaluacion");
    });
};

module.exports.createEvaluation = async function (req, res) {
  
    createEvaluation(
    req.body.evaluationDate,
    req.body.abilities,
    req.body.observations
  )
    .then((res) => {
      return res.status(201).send(res);
    })
    .catch((err) => {
      return res.status(404).send("No se pudo crear la evaluacion");
    });
};

module.exports.updateEvaluation = async function (req, res) {
  updateEvaluation(
    req,body.id,
    req.body.evaluationDate,
    req.body.abilities,
    req.body.observations
  )
    .then((res) => {
      return res.status(201).send(res);
    })
    .catch((err) => {
      return res.status(404).send("No se pudo actualizar la evaluacion");
    });
};
