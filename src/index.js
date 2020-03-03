const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
// initialiazations
const app= express();

//inicializamos la base de datos
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //pone el correcto formato de las direcciones de las carpetas
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
app.use(methodOverride('_method'))
app.use(session({  //configuraciones basicas de modulo sessions
    secret:'mysecretapp',
    resave: true,
    saveUninitialized: true,
}))


//global varialbes


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