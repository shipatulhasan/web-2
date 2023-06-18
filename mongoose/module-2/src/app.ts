import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send(`bubu from node`);
});
app.get("/user", async (req: Request, res: Response) => {
  interface IUser {
    id: string;
    name: string;
    password: string;
    dateOfBirth?: string;
    email?: string;
    gander: "male" | "female";
  }
  const userSchema = new Schema({
    id: {
      type: String,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
    },
    gander: {
      type: String,
      enum: ["male", "female"],
    },
  });
  const User = model<IUser>("User", userSchema);
  const createUserDB = async () => {
    const user = new User({
      id: "21313131",
      name: "Md. Shipatul hasan shakib",
      password: `1234242412`,
      dateOfBirth: `jan 20`,
      email: `shipatulhasan328@gmail.com`,
      gander: "male",
    });
    await user.save();
    console.log(user);
  };
  await createUserDB();
  res.send("hello world");
});

export default app;
