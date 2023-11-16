import express from "express";
import morgan from "morgan";
import quotesRouter from "../features/quotes/router/quotesRouter.js";
import app from "./app.js";
import PingController from "../features/ping/controller/PingController.js";

const pingController = new PingController();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", pingController.getPong);
app.use("/quotes", quotesRouter);
