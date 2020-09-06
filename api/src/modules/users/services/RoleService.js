import Role from "../models/RoleModel";

export function readRolesService () {
    return Role.find()
        .then(roles => {
            return roles
        })
        .catch(error => {
            return false
        })
}

export function readRolesPermissionService () {
    let result = [
        {
            permissions: []
        }
    ]

    return Role.find()
        .then(response => {
            response.map(function (value) {
                value.permissions.map(function (permission) {
                    if (!result[0].permissions.find(xa => xa == permission)) {
                        result[0].permissions.push(permission)
                    }
                })
            })
            result[0].roles = response
            return result
        })
        .catch(error => {
            console.log(error);
            return []
        })
}

//role: string, permissions: array
export async function createRolesPermissionService (role,permissions) {

    const newRole = new Role({
        name: role,
        permissions: permissions
    })
    newRole.id = newRole._id
    const saveRole = await newRole.save()
    if(saveRole){
        return saveRole
    }
    throw new Error('No se pudo crear el rol')

}

