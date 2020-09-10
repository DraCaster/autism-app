import User from "../models/UserModel";
import bcryptjs from 'bcryptjs'
import jsonwebtoken from "jsonwebtoken";

function generateToken(user, roleName){
    let token = jsonwebtoken.sign(
        {
            id: user.id,
            username: user.username,
            name: user.name,
            email: user.email,
            role: {name: roleName},
            phone: user.phone,
            avatar:process.env.URL_BACKEND+'/'+user.avatar
        },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    )
    return token
}

const authService = async function (username, password) {

    const user = await User.findOne({username: username}).populate('role');
    
    if(!user) {
        return {status: false, msg:'El usuario o la contraseña es invalida'};
    }

    if(!user.state){
        return {status: false, msg:'Usuario inhabilitado'};
    }

    const validPassword = bcryptjs.compareSync(password, user.password)

    if (!validPassword) {
        return {status: false, msg:'El usuario o la contraseña es invalida'};
    }
    const token = generateToken(user, user.role.name)


    return {status:true, user: user, token: token, msg: "Se valido el usuario con exito"}

}

export default authService;