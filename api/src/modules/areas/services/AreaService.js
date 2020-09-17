import Area from "../models/AreaModel";


export const getAreas = () => {
  return new Promise((resolve, reject) => {
    Area.find()
      .then((docs) => {
        resolve(docs);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getArea = (id) => {
  return new Promise((resolve, reject) => {
    Area.findById(id)
      .then((doc) => {
        resolve(doc);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createArea = nameArea => {

    return new Promise((resolve, reject) => {

        const newArea = new Area({
            areaName: nameArea
        })

        newArea.save()
        .then(doc => 
            resolve(doc))
        .catch(err => {
            reject(err)
        })
    })
   
}

export const updateArea = (idArea, nameArea) => {
    return new Promise((resolve, reject) => {

        Area.findByIdAndUpdate(idArea,{
            areaName: nameArea
        })
        .then(doc => 
            resolve (doc))
        .catch(err => 
            reject (err))
    })
}

