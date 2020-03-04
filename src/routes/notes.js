// urls pra que el usuario puedar crear o midificasr una nueva nota
const express = require('express');
const router = express.Router();

//crear una ruta que le permita al usu ver un formulario
router.get('/notes/add', (req,res) =>{
    res.render('notes/new-note') //tenemos que crear un formulario(vista) en notes
})
router.get('/notes', (req,res) =>{
    res.send('Notes from database');
})

//toda este procedimiento es par guardar los datos que el usuario me envia a la base de datos
//creamos una ruta especifica para recibir datos, que envia un formulario
//peticion tipo POST voya recibirlo a una ruta especifica , el post tiene que estar indicado como un metodo en donde envie el formulario
router.post('/notes/new-notes', (req, res) => {
    //observamos que es un objeto deJS xq tiene llaves y adentro tiene propiedades, cada uno de los datos que envia el usuario es una propiedad
    //DESCTRUCTURING, poder sacar cada propiedad por separado en una constante o variable a partir de un objeto
    const {title, description}= req.body;//quiero destructurar el title y el descrption, puden estar almacenados dentro una variable o constante, en este caso sera constante 
    //PROCESO DE VALIDACION
    const errors = [];//creamos la constante errors como un arreglo
    if(!title){//si en lo que me envia el usuario esta vacio
        errors.push({text: 'Please write a title'});//insertamos en la const errors, un objeto que tendra como propiedad text: que tendra como valor:..
    }
    if(!description){//si usuario no envia description o si este se encuentra vacio
        errors.push({text: 'please write a description' });
    }
    if(errors.length > 0){//si el arreglo errors contine errores
        res.render('notes/new-note', {//renderizamos nuevamente la vista de la insercion de los formularios, xq ahora la vista tambien mostrara unos mesajes con los errores econtrados
            errors,//aqui mandamos los errores
            title,
            description});
    }
    else{
        res.send('ok');//response para ver algo y no se quede procesando
    }
    console.log(req.body);//req=request body es una propiead de la misma funcion para que reciba los datos, cuadno hagamos click en enviar asdicion
    
    });
    

module.exports = router;


