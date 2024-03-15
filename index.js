
import express from 'express'//estoy usando module y no require 
import usuarioRoutes from './routes/usuarioRoutes.js'



const app = express();

//template engine================================
app.set('view engine', 'pug');
app.set('views', './views')  //


app.use('/auth', usuarioRoutes);
const port = 3000;  

app.listen(port, () => {
    console.log(`listen en el puerto ${port}`)
})
