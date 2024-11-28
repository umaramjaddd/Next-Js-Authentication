import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;

const connection: { isConnected?: number } = {};

async function Connect() :Promise<void> {
  if (connection.isConnected) {
    console.log("Already Connected Brother");
    return;
  }

  try {
    const db = await mongoose.connect(uri!);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected Successfully ");
  } catch (error: any) {
    console.log("Got an error: ", error);
  }
}

export default Connect;