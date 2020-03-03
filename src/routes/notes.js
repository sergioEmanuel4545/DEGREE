// urls pra que el usuario puedar crear o midificasr una nueva nota
const express = require('express');
const router = express.Router();

//crear una ruta que ke permita al usu ver un formulario
router.get('/notes/add', (req,res) =>{
    res.render('notes/new-note')
})
router.get('/notes', (req,res) =>{
    res.send('Notes from databse');
})

//creamos una ruta especifica para recibir datos, que envia un formulario
//peticion tipo POST voya recibirlo a una ruta especifica , el post tiene que estar indicado como un metodo en donde envie el formulario
router.post('/notes/new-notes', (req, res) => {
    const {title, description}=req.body;
    const errors = [];
    if(!title){
        errors.push({text: 'Please write a title'});
    }
    if(!description){
        errors.push({text: 'please write a description' });
    }
    if(errors.length > 0){
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    }
    else{
        res.send('ok');
    }
    console.log(req.body);
    
});
module.exports = router;


