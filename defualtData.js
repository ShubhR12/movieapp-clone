import { actors } from "./actorData.js";
import { moviedata } from "./data.js";
import { actor, listedMoviess } from "./Schema/schema.js";

export const DefaultData = async () => {
  try {
    // await listedMoviess.deleteMany({});
    await listedMoviess.insertMany(moviedata);

    console.log("data imported succesfully");
  } catch (error) {
    console.log("error while inserting dafault data", error.message);
  }
};
export const DefaultActorData = async () => {
  try {
    // await actor.deleteMany({});
    await actor.insertMany(actors);

    console.log("data imported succesfully");
  } catch (error) {
    0;
    console.log("error while inserting dafault data", error.message);
  }
};
