import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("DB Error:", error);
  }
};

export default connectDB;
