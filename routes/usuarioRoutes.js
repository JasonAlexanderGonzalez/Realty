import express from "express";  

const router = express.Router();


  
  router.post('/nosotros', (req, res) =>{
       res.json({msj: 'hola'});
     });

     router.route('/')     
     router.get('/login', (req, res) => {
      res.render('auth/login')
    });

     export default router