let {database} = require("../databases/users")

const getUsers = () =>{
    return database;
}

const getUserById = (idUser) => {

    return database.filter((usuario) => usuario.id === idUser);

    


}

module.exports = {
    getUsers,
    getUserById
}