import User from "../models/UserModel";
import Role from "../models/RoleModel";
import bcryptjs from "bcryptjs";
import InvalidPasswordError from '../errors/InvalidPasswordError'

export async function getUsers () {

    let users = User.find().populate('role')
    if(!users){
        throw new Error('Ocurrio un error al obtener los datos de usuario')
    }
    return users

}

export async function updatePasswordUser (id, currentPassword, newPassword) {
    //Consultar avatar de un usuario
    let user = await User.findById(id)
    if(!user){
        throw new Error("No se encontro un usuario con ese ID")
    }
    
    //Valido si la contraseña actual coincide con la almacenada en la DB
    const validPassword = bcryptjs.compareSync(currentPassword, user.password)
    //TODO capturar en controller esta excepcion 
    if (!validPassword) {
        throw new InvalidPasswordError()
    }
    //Encripto la contraseña y la actualizo en la DB
    let salt = bcryptjs.genSaltSync(10);
    let hashPassword = bcryptjs.hashSync(newPassword, salt);

    let userUpdate = await User.findByIdAndUpdate(id, {
        password: hashPassword,
    })
    return userUpdate;
}

export async function verifyEmail (email){

    let userMail = await User.findOne({"email": email})

    if(userMail){

        return { state:true, msg: "El mail es valido", user:userMail}
    }else{
        return { state:false, msg: "El mail no es valido"}
    }
}

export async function updatePasswordAdmin (id, password) {
    let salt = bcryptjs.genSaltSync(10);
    let hashPassword = bcryptjs.hashSync(password, salt);

    const user = await User.findByIdAndUpdate(id,{
        password: hashPassword,
    })

    const userUpdate = await User.findById(id).populate('role')

    return user;
}

export async function createUser (name,username,email,password,role) {

    let salt = bcryptjs.genSaltSync(10);
    let hashPassword = bcryptjs.hashSync(password, salt);
    let newRole = await Role.findOne({"name": role})

    const user = new User({
        name: name,
        username: username,
        email: email,
        password: hashPassword,
        role: newRole
    });
    
    user.id = user._id;
    await user.save()
    return user;
}

export async function getUser (id) {
    
    const user = await User.findById(id)

    if(!user){
        throw new Error('El usuario con ese ID no esta')
    }  

    return user;
}

export async function updateUser (id,username,name,email,role)  {
    
    let newRole = await Role.findOne({"name": role})

    const user = await User.findByIdAndUpdate(id, {
        username: username,
        name: name,
        email: email,
        role: newRole,
    }) 

    if(!user){
       throw new Error('El usuario con ese ID no esta')
    }

    const userUpdate = await User.findById(id).populate('role')

    if(!userUpdate){
        throw new Error('Hubo un error al encontrar al usuario')
    }

    return userUpdate;
}