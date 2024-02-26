import express from "express";
import { loginUser, registerUser } from "../controllers/User.controller.js";

const userRouter = express.Router();

userRouter.route("/login").get(loginUser);
userRouter.route("/register").post(registerUser);

export { userRouter };
