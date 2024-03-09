import express from "express";  

const router = express.Router();



  
  router.post('/nosotros', (req, res) =>{
       res.json({msj: 'hola'});
     });

     router.route('/')     
     router.get('/', (req, res) => {
      res.json({msj: 'hola'});;
    });

     export default router