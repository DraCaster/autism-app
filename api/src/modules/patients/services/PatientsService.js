import Patient from "../models/PatientModel";


export const getPatients = () => {

  return new Promise((resolve, reject) => {
    Patient.find()
      .then((docs) => {
        resolve(docs);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getPatient = (id) => {
  return new Promise((resolve, reject) => {
    Patient.findById(id)
      .then((doc) => {
        resolve(doc);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createPatient = (name,lastname, dateOfBirth, treatmentStartDate, evaluations, coordinator, therapist, observations) => {

    return new Promise((resolve, reject) => {

        const newPatient= new Patient({
          name,
          lastname, 
          dateOfBirth, 
          treatmentStartDate, 
          evaluations, 
          coordinator, 
          therapist, 
          observations
        })

        newPatient.save()
        .then(doc => 
            resolve(doc))
        .catch(err => {
            reject(err)
        })
    })
   
}

export const updatePatient = (idPatient, name,lastname, dateOfBirth, treatmentStartDate, evaluations, coordinator, therapist, observations) => {

    return new Promise((resolve, reject) => {

        Area.findByIdAndUpdate({id:idPatient},{
          name,
          lastname,
          dateOfBirth, 
          treatmentStartDate, 
          evaluations, 
          coordinator, 
          therapist, 
          observations
        })
        .then(doc => 
            resolve (doc))
        .catch(err => 
            reject (err))
    })
}

