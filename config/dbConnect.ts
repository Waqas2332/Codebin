import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("Mongodb is already connected");
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://devwaqas232:devwaqas232@cluster0.rslnq.mongodb.net/");
    connected = true;
    console.log("Mongodb Connected!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
