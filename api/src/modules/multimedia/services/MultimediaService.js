import Multimedia from "../models/MultimediaModel";

export const getMultimedias = () => {

  return new Promise((resolve, reject) => {
    Multimedia.find()
      .then((docs) => {
        resolve(docs);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getMultimedia = (id) => {
  return new Promise((resolve, reject) => {
    Multimedia.findById(id)
      .then((doc) => {
        resolve(doc);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createMultimedia = (description,url, typeMultimedia) => {

    return new Promise((resolve, reject) => {

        const newMultimedia = new Multimedia({
          description,
          url,
          typeMultimedia
        })

        newMultimedia.save()
        .then(doc => 
            resolve(doc))
        .catch(err => {
            reject(err)
        })
    })
   
}

export const updateMultimedia = (idMultimedia,description,url,typeMultimedia) => {

    return new Promise((resolve, reject) => {

      Multimedia.findByIdAndUpdate({id:idMultimedia},{
        description,
        url,
        typeMultimedia
        })
        .then(doc => 
            resolve (doc))
        .catch(err => 
            reject (err))
    })
}

