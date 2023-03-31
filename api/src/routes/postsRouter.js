const{ Router}= require ("express");
const postsRouter = Router ();

// POST | /videogames
postsRouter.post('/videogames', async (req, res) => {
    const { name, description, released, rating, platforms,imagen, genres } = req.body;
    try {
      const videogame = await videogame.create({
        name,
        description,
        released,
        rating,
        platforms,
        imagen,
      });
      await videogame.addGenres(genres);
      res.status(201).json(videogame);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error post' });
    }
  });






module.exports = postsRouter;