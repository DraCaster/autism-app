import Skill from "../models/SkillModel";


export const getAbilities = () => {

  return new Promise((resolve, reject) => {
    Skill.find()
      .then((docs) => {
        resolve(docs);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getSkill = (id) => {
  return new Promise((resolve, reject) => {
    Skill.findById(id)
      .then((doc) => {
        resolve(doc);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createSkill = (numberOfOrder,description, observations, parentsInform, informant, code, area, level) => {

    return new Promise((resolve, reject) => {

        const newSkill = new Skill({
          numberOfOrder,
          description, 
          observations, 
          parentsInform, 
          informant, 
          code, 
          area, 
          level
        })

        newSkill.save()
        .then(doc => 
            resolve(doc))
        .catch(err => {
            reject(err)
        })
    })
   
}

export const updateSkill = (idSkill, numberOfOrder,description, observations, parentsInform, informant, code, area, level) => {

    return new Promise((resolve, reject) => {

        Area.findByIdAndUpdate({id:idSkill},{
          numberOfOrder,
          description, 
          observations, 
          parentsInform, 
          informant, 
          code, 
          area, 
          level
        })
        .then(doc => 
            resolve (doc))
        .catch(err => 
            reject (err))
    })
}

