//conexion de la base de datos


//requiero el modulo moongose para establecer la conexion con la base de datos
const mongoose = require('mongoose');

//una ves guardado voy a utilizar su metodo connect, que me permite conectarme a una direccion de internet, en este caos sera mi direccion local como localhost
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