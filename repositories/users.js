let {database} = require("../databases/users")

const getUsers = () =>{
    return database;
}

const getUserById = (idUser) => {

    return database.filter((usuario) => usuario.id === idUser);

}

const createUser = (body) => {
    const newUser = {
        id: (database.length+1).toString(),
        name: body.name
      }
      database.push(newUser);

      return newUser;
    }

const deleteUser = (idUser) => {

    database = database.filter((usuario) => usuario.id != idUser);
    return null;

}

const updateUser = (idUser, body) => {

    database = database.map((usuario) => {
        if(usuario.id === idUser){

          usuario.name = body.name;
        }
        return usuario
    })

    return database;

}
    
module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
}