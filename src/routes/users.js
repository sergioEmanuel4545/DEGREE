// usuario podra acceder donde l se podra autenticar en la aplicacion
const express = require('express');
const router = express.Router();

//creo la ruta donde los usuarios podran ingresar  ala apliacaion y autenticarse

router.get('/users/signin', (req, res) => {
    //res.send('Ingresando a la apliacacion');
    res.render('users/signin');
})
router.get('/users/signup', (req, res) => {
    //res.send('formulario de autenticacion');
    res.render('users/signup');
})


module.exports = router;

