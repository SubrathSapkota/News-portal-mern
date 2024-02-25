import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { upload } from "../middlewares/multer.middleware.js";

cloudinary.config({
  cloud_name: "dmxvo0hff",
  api_key: "369358718786321",
  api_secret: "7p5pMIBY7w7-IU40so0mKUbKmak",
});

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export { cloudinary };

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File uploaded successful");
    console.log(response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //removed locally save temp file as upload failed
    return null;
  }
};
