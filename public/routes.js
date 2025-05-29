const routes = require("express").Router();//nativo do express, caminho que ele será executado em routes
const JogoController = require("./jogoControle");//acessa o controllers


//  routes.get("/",( res) => {

//     res.render("index");
//    });
console.log()
 routes.get('/',JogoController.getAll);


// routes.get("/banheiro",(req, res) => {

//    res.render("banheiro");
//   });



// routes.get("/cozinha",(req, res) => {

//    res.render("cozinha");
//   });



// routes.get("/quarto",(req, res) => {

//    res.render("quarto");
//   });



// routes.get("/quintal",(req, res) => {

//    res.render("quintal");
//   });


// routes.get("/sala",(req, res) => {

//    res.render("sala");
//   });




module.exports = routes;//exporto ela para qualquer caminho 

