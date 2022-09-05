const express = require("express")
const app = express()
const People = require ("./infrastructure/people")

const connection = require ("./infrastructure/database")

app.set('view engine','ejs')

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

 
var nome = "Full Cycle!!"
People.create({
    name: nome 
})

app.get("/",(req, res) => {
    People.findAll({ raw: true}).then(peoples => {
        res.render("index",{
            peoples: peoples
        });
    });
});


app.listen(5000,()=>{console.log("App rodando!")})