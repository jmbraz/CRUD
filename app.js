
const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

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


app.get('/users', (request, response) => {
  response.json(database);
})


app.get('/users/:id',  (request, response) => { 
//Buscar ID da requisição.
  const idUser = request.params.id;


//Buscar o usuário no database.

const user = database.filter((usuario) => usuario.id === idUser);

response.json(user);

})

app.post("/users", (request, response) => {

//Pegar o corpo da requisição.

const body = request.body;

const newUser = {

  id: (database.length+1).toString(),
  name: body.name
}

database.push(newUser);

response.json(database);

//Criar um novo objeto a partir desse corpo.

//Adicionar novo objeto no banco.

//Responder a requisição com o banco completo.

})

app.delete("/users/:id", (request, response) => {

  //Pegar o id da requisição.
  const idUser = request.params.id;
  //Percorrer o banco e buscar por id da requisição.



  database = database.filter((usuario) => usuario.id != idUser);

  response.json(database);
  })

  app.patch("/users/:id", (request, response)=>{

    const idUser = request.params.id;

    const body = request.body;

    database = database.map((usuario) => {

      if(usuario.id === idUser){

        usuario.name = body.name;
      }
      return usuario

  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


