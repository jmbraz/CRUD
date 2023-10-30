
const express = require('express')
//Passa a informação do express para a constante express.
const app = express()
//Grupo de funções do express.
const port = 3000
//Define a porta.
app.use(express.json());
//Responsável pela tradução de requisições HTTP para JSON.

let database = [

    {
        id: "1",
        name: "jmbraz"


    },
    {
        id: "2",
        name: "zarbmj"
    }
]
//Banco de dados, contém lista de informações.

app.get('/users', (request, response) => {
  response.json(database);
})

//Obter usúarios do banco de dados.

app.get('/users/:id',  (request, response) => { 
  const idUser = request.params.id;
//Buscar ID da requisição.

const user = database.filter((usuario) => usuario.id === idUser);
response.json(user);
//Buscar o usuário no database.
})

app.post("/users", (request, response) => {
//Responsável por enviar informações.
const body = request.body;
//Pegar o corpo da requisição.
const newUser = {

  id: (database.length+1).toString(),
  name: body.name
}
//Criar um novo objeto a partir desse corpo.
database.push(newUser);
//Adicionar novo objeto no banco.
response.json(database);
//Responder a requisição com o banco completo.

})

app.delete("/users/:id", (request, response) => {
  //Responsável por deletar informações. 
  const idUser = request.params.id;
  //Pegar o id da requisição.
  database = database.filter((usuario) => usuario.id != idUser);
  //Percorrer o banco e buscar por ID da requisição.
  response.json(database);
  //Responder com o banco atualizado.
  })

  app.patch("/users/:id", (request, response)=>{
    //Responsável por atualizar informações.
    const idUser = request.params.id;
    //Pegar o id da requisição.
    const body = request.body;
    //Pegar o corpo da requisição.
    database = database.map((usuario) => {
      if(usuario.id === idUser){
    //Atualizar as informações.
        usuario.name = body.name;
      }
      return usuario
  })
    //Percorrer o banco.
response.json(database);


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//Descobre a porta do app.


