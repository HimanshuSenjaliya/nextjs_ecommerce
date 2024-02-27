import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
  } catch (error) {
    throw new Error("Connection Failed!!");
  }
}

export default dbConnect;
