import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";

const app = express();

const port = process.env.PORT || 4000;
connectDB();

//middleware
app.use(express.json());
app.use(cors());

//api endpoint
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API WOKRING");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

// gwIHjlfOEu3WGu8b
//zhenghanlun0716
