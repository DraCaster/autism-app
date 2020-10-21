import Observation from "../models/ObservationModel";

export const getObservations = () => {
  return new Promise((resolve, reject) => {
    Observation.find()
      .then((docs) => {
        resolve(docs);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getObservation = (id) => {
  return new Promise((resolve, reject) => {
    Observation.findById(id)
      .then((doc) => {
        resolve(doc);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createObservation = (observationType, description) => {

    return new Promise((resolve, reject) => {

        const newObservation = new Observation({
          observationType,
          description
        })

        newObservation.save()
        .then(doc => 
            resolve(doc))
        .catch(err => {
            reject(err)
        })
    })
   
}

export const updateObservation = (idObservation, observationType, description) => {
    return new Promise((resolve, reject) => {

        Observation.findByIdAndUpdate(idObservation,{
          observationType,
          description
        })
        .then(doc => 
            resolve (doc))
        .catch(err => 
            reject (err))
    })
}

