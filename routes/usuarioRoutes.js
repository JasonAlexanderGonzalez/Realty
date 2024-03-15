import express from "express";
import { formLogin, formRegistration } from "../controllers/usuarioController.js";   //el controlador


const router = express.Router();


  
  router.post('/nosotros', (req, res) =>{
       res.json({msj: 'hola'});
     });

     router.route('/')     
     router.get('/login',formLogin);
     router.get('/registration',formRegistration);

     export default router