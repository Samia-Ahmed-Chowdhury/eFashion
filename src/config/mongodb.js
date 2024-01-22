import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    console.log("MONGODB_URI:",typeof( process.env.MONGODB_URI));
await mongoose.connect(process.env.MONGODB_URI,{
   useNewUrlParser: true 
});

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;