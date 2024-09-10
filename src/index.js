// most common approach to connect to mongoDB suggested
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./env" });
connectDB();
/**
 * 
 *! Approach number 1 
 require("dotenv").config({ path: "./env" }); or import dotenv from "dotenv"; if we import dotenv by using modulejs type then we have to add -r dotenv/config in package.json file
 import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("errror", (error) => {
      console.log("Error not able to connect with app :", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
  }
})();
*/
