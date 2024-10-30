import mongoose from "mongoose";

const connectToMongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI as string);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

export default connectToMongoose;
