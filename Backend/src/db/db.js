import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  const connInstance = await mongoose.connect(
    `${process.env.MONGODB_URI}/${DB_NAME}`
  );

  console.log("MongoDB Connected ! | DB Host : ", connInstance.connection.host);

  try {
  } catch (error) {
    console.log("db.js | MongoDB Connection Error : " + error);
    process.exit(1);
  }
};

export default connectDB;
