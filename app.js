
const express = require('express')
const userService = require("./services/users")
//Passa a informação do express para a constante express.
const app = express()
//Grupo de funções do express.
const port = 3000
//Define a porta.
app.use(express.json());
//Responsável pela tradução de requisições HTTP para JSON.

//Banco de dados, contém lista de informações.

app.get('/users', (request, response) => {
  response.json(userService.getUsers());
})

//Obter usúarios do banco de dados.

app.get('/users/:id',  (request, response) => { 
  const idUser = request.params.id;
//Buscar ID da requisição.
response.json(userService.getUserById(idUser));
//Buscar o usuário no database.
})

app.post("/users", (request, response) => {
//Responsável por enviar informações.
const body = request.body;
//Pegar o corpo da requisição.
response.status(201).json(userService.createUser(body));
//Responder a requisição com o banco completo.

})

app.delete("/users/:id", (request, response) => {
  //Responsável por deletar informações. 
  const idUser = request.params.id;

  //Pegar o id da requisição.
  //Percorrer o banco e buscar por ID da requisição.
  
  response.json("Apagado com sucesso.");
  //response.status(204).json(userRepository.deleteUser(idUser));
  //Responder com o banco atualizado.
  })

  app.patch("/users/:id", (request, response)=>{
    //Responsável por atualizar informações.
    const idUser = request.params.id;
    //Pegar o id da requisição.
    const body = request.body;
    //Pegar o corpo da requisição.
    userService.updateUser(idUser, body);

    //Percorrer o banco.

response.status(200).json("Atualizado com sucesso.")



})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//Descobre a porta do app.