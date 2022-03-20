import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URI;

if (!MONGODB_URL) {
  throw new Error("Please add MONGODB_URI to your env to continue");
}

export const connect = async () => {
  const readyState = mongoose.connection.readyState;
  // checking if mongoose is not connected
  if (readyState !== 1) {
    try {
      console.log("connecting to database...");
      return await mongoose.connect(MONGODB_URL);
    } catch (e) {
      throw new Error("Unable to connect to database");
      console.log(e);
    }
  }
};
