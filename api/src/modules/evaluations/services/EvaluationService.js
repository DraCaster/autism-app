import Evaluation from "../models/EvaluationModel";

export const getEvaluations = () => {
  return new Promise((resolve, reject) => {
    Evaluation.find()
      .then((docs) => {
        resolve(docs);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getEvaluation = (id) => {
  return new Promise((resolve, reject) => {
    Evaluation.findById(id)
      .then((doc) => {
        resolve(doc);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createEvaluation = (evaluationDate, abilities,observations) => {

    return new Promise((resolve, reject) => {

        const newEvaluation = new Evaluation({
            evaluationDate,
            abilities,
            observations
        })

        newEvaluation.save()
        .then(doc => 
            resolve(doc))
        .catch(err => {
            reject(err)
        })
    })
}

export const updateEvaluation = (idEvaluation,evaluationDate, abilities,observations) => {
    
    return new Promise((resolve, reject) => {
        Evaluation.findByIdAndUpdate(idEvaluation,{
            evaluationDate, abilities,observations
        })
        .then(doc => 
            resolve (doc))
        .catch(err => 
            reject (err))
    })
}

