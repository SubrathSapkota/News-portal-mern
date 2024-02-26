import { response } from "express";
import { generateToken } from "../middlewares/jwt.middleware.js";
import { User } from "../modules/User.module.js";
import { cloudinary } from "../utils/Cloudinary.js";

export const registerUser = async (req, res) => {
  try {
    const { fullname, email, password, age, address } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    // const profileImage = await cloudinary.uploader.upload(
    //   req.file.path,
    //   function (err, result) {
    //     if (err) {
    //       console.log(err);
    //       return res.status(500).json({
    //         success: false,
    //         message: "ERROR",
    //       });
    //     }
    //   }
    // );

    const newUser = User({
      fullname,
      email,
      password,
      age,
      address,
      // profileImage: profileImage.url,
    });

    const savedUser = await newUser.save();

    const jwtPayload = {
      id: savedUser.id,
      fullname: savedUser.fullname,
    };
    const token = generateToken(jwtPayload);

    res.status(201).json({
      message: "User registered successfully",
      user: savedUser,
      token: token,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(user.password === password)) {
      return res.status(404).json({ error: "User not found" });
    }

    const loginPayload = {
      id: user.id,
      username: user.fullname,
    };

    const token = generateToken(loginPayload);

    res.cookie("token", token);
    res.json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Failed to log in" });
  }
};
