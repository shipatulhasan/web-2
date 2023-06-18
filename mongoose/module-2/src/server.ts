import mongoose from "mongoose";
const port = process.env.PORT || 8000;
import app from "./app";

// db connection
const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practicing-mongoose");
    console.log(`Database connected successfully`);
    app.listen(port, () => {
      console.log(`listening from ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

dbConnect();
