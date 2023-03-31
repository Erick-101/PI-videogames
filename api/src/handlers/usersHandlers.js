const getUsersHandler = (req , res)=>{
const {name} = req.query;
if (name) res.send (`quiero buscar todos los videojuegos que se llamen $ {name}`);
else res.send ("quiero enviar todas los videojuegos");
};

    
    const getUserHandler = (req,res)=>{
    const {id} = req.params;
    res.send (`trae la info de los videos juegos ${id}`);
    };
    
    const createUserHandler = (req,res)=>{
        const{name,Descripción,Plataformas,} = req.body;
    res.send (`estoy por crear un videojuego con estos datos :
          name:${name},
          Descripción: ${Descripción},
         Plataformas:${Plataformas},
 `)};
    
    const getUsergenresHandler = (req,res)=>{
    res.send ("trae la info de los videos juegos")
    };
    
    
    
    



module.exports ={
    getUsersHandler,
    getUserHandler,
    createUserHandler,
    getUsergenresHandler,
    
};