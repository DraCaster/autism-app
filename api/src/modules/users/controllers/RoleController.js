import {readRolesService, 
    readRolesPermissionService} from '../services/RoleService';

module.exports.readRolesAction = async function (req, res) {

    if (!req.user || !req.rbac.isAllowed(req.user.id, "LIST_ROLES_PERMISSION")) res.status(401).send("No autorizado")

    const roles = await readRolesService()

    if (roles) {
        return res.status(200).json(roles);
    } else {
        return res.status(400).send([])
    }
}

module.exports.readRolesPermissionAction = async function (req, res) {

   //Verificamos autenticacion y autorizacion
    if (!req.user || !req.rbac.isAllowed(req.user.id, "LIST_ROLES_PERMISSION")){
        res.status(401).send("No autorizado")
    }

    //Consumo un servicio que me brinda la data que necesitamos, en este caso un objeto con los roles con sus permisos

    const rolesPermission = await readRolesPermissionService()
    
    //Brindo una RESPONSE a la consulta
    if (rolesPermission) {
        return res.status(200).json(rolesPermission);
    } else {
        return res.status(400).send([])
    }
}