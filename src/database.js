//conexion de la base de datos















//LO REQUIERO Y LO GUARDO EN una const
const mongoose = require('mongoose');

//una ves guardado voy a utilizar su metodo connect, que me permite conectarme a una direccion de internet
mongoose.connect('mongodb://localhost/myfirstdb-sergio',{
    //configuraciones o propiedades para configurarlos, sirve para utilizar mongoose de una manera sencilla, son que nos de error, antes no te pedia pero en las ultimas versiones si nos estan pidiendo
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})



















//una ves se conecte quiero ver un mensaje por consola, entonces ejecutamos una promesa
.then(db => console.log('Db is connected'))
//caso contrario, si ocurrio un error,capturalo y muestralo tambien por consola
.catch(err => console.error(err));