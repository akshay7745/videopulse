import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MONGO DB connected !! DB host : ${connectionInstance.connection.host}`
    );
    console.log(
      "See what is present in the instance homework",
      connectionInstance
    );
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR : ", error);
    process.exit(1);
  }
};

export default connectDB;
