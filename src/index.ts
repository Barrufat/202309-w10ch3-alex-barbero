import "dotenv/config";
import express from "express";
import morgan from "morgan";
import connectToDatabase from "./database/index.js";
import app, { startServer } from "./server/app.js";
import PingController from "./features/ping/controller/PingController.js";

const port = process.env.PORT ?? 4000;
const pingController = new PingController();

if (!process.env.MONGODB_URL) {
  console.log("Missing MongoDB Connection String");
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);

startServer(+port);

app.use(express.json());
app.use(morgan("dev"));

app.get("/", pingController.getPong);
