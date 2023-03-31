const { Router } = require('express');

const{
  createUserHandler,
  getUserHandler,
  getUsersHandler,
  getUsergenresHandler,

} = require ("../handlers/usershandlers");


const usersRouter = Router()



// GET | /videogames
usersRouter.get('/videogames',getUsersHandler);

usersRouter.get('/videogames/:idVideogame', getUserHandler);

usersRouter.get('/videogames/name',createUserHandler);

usersRouter.get('/genres', getUsergenresHandler);


  
  

module.exports= usersRouter;


