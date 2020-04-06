// usuario podra acceder donde l se podra autenticar en la aplicacion
const express = require('express');
const router = express.Router();
const User = require('../models/User');

//creo la ruta donde los usuarios podran ingresar  ala apliacaion y autenticarse

router.get('/users/signin', (req, res) => {
    //res.send('Ingresando a la apliacacion');
    res.render('users/signin');
});
router.get('/users/signup', (req, res) => {
    //res.send('formulario de autenticacion');
    res.render('users/signup');
});

router.post('/users/signup', async (req, res) => {
    const { name,email,password,confirm_password } = req.body;
    const errors = [];
    if (name.length <= 0){
        errors.push({text: 'you must insert a name'});
    }
    if (password.length < 4){
        errors.push({text: 'password has to have at least 4 characters'});
    }
    if (password != confirm_password){
        errors.push({text: 'password dont match'});
    }
    if (errors.length > 0){
        res.render('users/signup', {errors, name, email, password, confirm_password});
    } 
    else{
        const emailUser = await User.findOne({email: email});
        if (emailUser) {
            req.flash('error_msg', 'The Email is already in use');
            res.redirect('/users/signup');
        }
        const newUser = new User  ({name, email, password});
       newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'You are registered');
        res.redirect('/users/signin');
    }
});


module.exports = router;

