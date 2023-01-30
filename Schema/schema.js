import mongoose from "mongoose";
import autoincrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
autoincrement.initialize(mongoose.connection);
userSchema.plugin(autoincrement.plugin, "imdbUsers");

export const user = mongoose.model("imdbUsers", userSchema);

const actorSchema = mongoose.Schema({
  actorname: String,
  gender: String,
  dob: String,
  bio: String,
  photo: String,
});
autoincrement.initialize(mongoose.connection);
actorSchema.plugin(autoincrement.plugin, "Actors");

export const actor = mongoose.model("Actors", actorSchema);

const producerSchema = mongoose.Schema({
  producername: String,
  gender: String,
  dob: String,
  bio: String,
});
autoincrement.initialize(mongoose.connection);
actorSchema.plugin(autoincrement.plugin, "Producers");

export const producer = mongoose.model("Producers", producerSchema);

const movieSchema = mongoose.Schema({
  moviename: String,
  released_year: String,
  plot: String,
  poster: String,
});
autoincrement.initialize(mongoose.connection);
movieSchema.plugin(autoincrement.plugin, "Movies");

export const movie = mongoose.model("Movies", movieSchema);

const listMovieSchema = mongoose.Schema({
  movie: {
    moviename: String,
    released_year: String,
    plot: String,
    poster: String,
  },
  producer: {
    producername: String,
    gender: String,
    dob: String,
    bio: String,
  },
  actor: {
    actorname: String,
    gender: String,
    dob: String,
    bio: String,
  },
});
autoincrement.initialize(mongoose.connection);
listMovieSchema.plugin(autoincrement.plugin, "listedmovies");

export const listedMoviess = mongoose.model("listedmovies", listMovieSchema);
