//const express = require('express'); //Dependecies, aca estoy usando require pero ahora usare module 
import express from 'express'//estoy usando module y no require 
import usuarioRoutes from './routes/usuarioRoutes.js'//archivos internos requieren el js



const app = express(); //creando la application


//Routing
//app.get('/', usuarioRoutes); //con use ya no es necesario
//app.get('/nosotros', usuarioRoutes); //con use ya no es necesario   
  //usando use en lugar de todos los get
app.use('/', usuarioRoutes);
const port = 3000;  //definiendo el puerto y arrancar el proyecto

app.listen(port, () => {
    console.log(`listen en el puerto ${port}`)
})
