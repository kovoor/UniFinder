import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(
      // console.log("Connection established")
    )
    .catch((e) => {
      console.log(e);
      process.exit(1);
    });
}

export default dbConnect;
