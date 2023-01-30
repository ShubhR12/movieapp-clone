import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@khareedoe-com.crwotzp.mongodb.net/test`;

  try {
    await mongoose.connect(URL, {
      useunifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("databasre connected");
  } catch (error) {
    console.log("erroe while connecting", error);
  }
};

export default Connection;
