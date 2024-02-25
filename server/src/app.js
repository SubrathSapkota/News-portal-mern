import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { router } from "./router/News.routes.js";
import cors from "cors"

const app = express();
app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Couldn't connect to MongoDB");
  });

app.use("/api/v1/news", router);

app.listen(process.env.PORT, () => {
  console.log(`Server started at port: 3000`);
});
