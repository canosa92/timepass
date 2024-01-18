const {dateMiddleware}= require('./middlewares/horaMiddleware.js')
const {validadHour} = require('./middlewares/validarHora.js')
const index =require('./routes/index.js')
const endroute =require('./routes/endroute.js')
const express =require('express')
const app = express()

app.use(dateMiddleware);

app.use('/', index);

app.use('/endroute', validadHour, endroute);

app.listen(5000, () => {
    console.log(`Servidor escuchando en http://localhost:5000`);
  });