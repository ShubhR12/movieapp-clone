import {
  actor,
  movie,
  producer,
  user,
  listedMoviess,
} from "../Schema/schema.js";

export const getMovies = async (req, res) => {
  try {
    let data = await listedMoviess.find();
    res.send(data);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const getActor = async (req, res) => {
  try {
    let data = await actor.find();
    res.send(data);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const listMovies = async (req, res) => {
  const movieList = req.body;
  const listedMovie = new listedMoviess(movieList);

  try {
    await listedMovie.save();
    res.status(201).json(listedMovie);

    console.log(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });

    console.log("error while adding New movie", error);
  }
};
export const deleteMovie = async (req, res) => {
  try {
    const deletedItem = await listedMoviess.findOneAndDelete(req.params.id);
    res.status(201).json(deletedItem);

    console.log("item deleted", deletedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });

    console.log("error while deleting movie", error);
  }
};

export const addUser = async (req, res) => {
  const userdetail = req.body;
  const newUser = new user(userdetail);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("error while adding new actor", error);
  }
};

export const addActor = async (req, res) => {
  const actordetail = req.body;
  const newActor = new actor(actordetail);
  try {
    await newActor.save();
    res.status(201).json(newActor);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("error while adding new actor", error);
  }
};
export const addProducer = async (req, res) => {
  const producerDetails = req.body;
  const newProducer = new producer(producerDetails);
  try {
    await newProducer.save();
    res.status(201).json(newProducer);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("error while adding new actor", error);
  }
};
export const addMovies = async (req, res) => {
  const movieDetails = req.body;
  const newMovie = new movie(movieDetails);
  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("error while adding new actor", error);
  }
};
