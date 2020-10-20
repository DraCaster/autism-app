import Objetive from "../models/ObjetiveModel";


export const getObjetives = () => {

  return new Promise((resolve, reject) => {
    Objetive.find()
      .then((docs) => {
        resolve(docs);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getObjetive = (id) => {
  return new Promise((resolve, reject) => {
    Objetive.findById(id)
      .then((doc) => {
        resolve(doc);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createObjetive = (name, level) => {

    return new Promise((resolve, reject) => {

        const newObjetive = new Objetive({
          name,
          level
        })

        newObjetive.save()
        .then(doc => 
            resolve(doc))
        .catch(err => {
            reject(err)
        })
    })
   
}

export const updateObjetive = (idObjetive, name, level) => {

    return new Promise((resolve, reject) => {

        Objetive.findByIdAndUpdate({id:idObjetive},{
          name,
          level
        })
        .then(doc => 
            resolve (doc))
        .catch(err => 
            reject (err))
    })
}

