import express from "express";
import Connection from "./Database/db.js";
import dotenev from "dotenv";
import Routes from "./routes/routes.js";

import cors from "cors";
import { DefaultData } from "./defualtData.js";
import { DefaultActorData } from "./defualtData.js";
const app = express();
dotenev.config();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/", Routes);

const PORT = "8000";
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

app.listen(PORT, () => console.log(`server is runnning on Port ${PORT}`));
DefaultData();
DefaultActorData();
