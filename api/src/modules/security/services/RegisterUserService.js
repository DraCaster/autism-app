import User from '../models/UserModel'
import Role from "../models/RoleModel"
import bcryptjs from "bcryptjs"

const registerUserService = async function (name, username, email, password) {

    let salt = bcryptjs.genSaltSync(10);
    let hashPassword = bcryptjs.hashSync(password, salt);

    let role = await Role.findOne({"name": "user"})

    const user = new User({
        name: name,
        username: username,
        email: email,
        password: hashPassword,
        phone: null,
        role,
        state: true
    });

    const result = await user.save();
    if(result){
        return {state: true, user: user, msg: "Usuario se registro con exito"}
    }
    else {
        return {state: false, user: user, msg: "Error al crear el usuario"}
    }
}

export default registerUserService;