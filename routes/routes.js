import express from "express";

import {
  addActor,
  addProducer,
  addMovies,
  addUser,
  listMovies,
  getMovies,
  deleteMovie,
  getActor,
} from "../controller/controller.js";
import upload from "../upload.js";
const router = express.Router();
router.get("/listmovies", getMovies);
router.get("/addActor", getActor);
router.post("/listmovies", upload, listMovies);
router.delete("/listmovies/:_id", deleteMovie);

router.post("/register", addUser);
router.post("/addactors", addActor);
router.post("/addproducer", addProducer);
router.post("/addmovies", addMovies);

export default router;
