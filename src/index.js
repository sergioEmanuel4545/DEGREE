const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');




// initialiazations
const app= express();
       //inicializamos la base de datos
require('./database');
require('./config/passport');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); 
//pone el correcto formato de las direcciones de las carpetas
//
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts') ,
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//Middlewares      configuramos los modulos previamente instalados
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({  //configuraciones basicas de modulo sessions
    secret:'mysecretapp',
    resave: true,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//global varialbes
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.nameU = req.user || null;
    next();
})   

// routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));


// static files
app.use(express.static(path.join(__dirname, 'public')));
//--- desde express voy a empezar a configurar los archivos staticos, carpeta public


// serve is listening
app.listen(app.get('port'));
 console.log('Server on port', app.get('port'));

 console.log("yeah motherfucker erase this");