import express from "express";
import {
  getAllNews,
  addNews,
  updateNews,
  deleteNews,
} from "../controllers/News.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const newsRouter = express.Router();

newsRouter.route("/").get(getAllNews);
newsRouter.route("/addnews").post(upload.single("newsImage"), addNews);
newsRouter.route("/updatenews/:id").patch(updateNews);
newsRouter.route("/deletenews/:id").delete(deleteNews);

export { newsRouter };
