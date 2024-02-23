import express from "express";
import {
  getAllNews,
  addNews,
  updateNews,
  deleteNews,
} from "../controllers/News.controller.js";

const router = express.Router();

router.route("/").get(getAllNews);
router.route("/addnews").post(addNews);
router.route("/updatenews/:id").patch(updateNews);
router.route("/deletenews/:id").delete(deleteNews);

export { router };
