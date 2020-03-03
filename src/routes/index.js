//urls de la pagina principal /about
const express = require('express');
const router = express.Router();


//enrutador crea rutas al servidor
router.get('/', (req, res) => {
//--------'/' cuando visiten la pagina principal de mi servidor vas a manejarlo con una funcion que maneje las peticiones y las respuestas y enviar un mesaje


//res.send('Index esto es un texto bla');})
res.render('index');})
router.get('/about', (req, res) => {
    //res.send('about');
    res.render('about');//si el usu entra a about, renderizale o mandale el archivo about.hbs
})


module.exports = router;
