import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import mongoose from "mongoose";
import cookieParser from "cookie-parser"
import { newsRouter } from "./router/News.routes.js";
import { userRouter } from "./router/User.router.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Couldn't connect to MongoDB");
  });

app.use("/", userRouter);
app.use("/api/v1/news", newsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started at port: 3000`);
});
