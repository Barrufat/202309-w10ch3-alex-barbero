import morgan from "morgan";
import express from "express";
import app from "./app.js";

app.use(express.json());
app.use(morgan("dev"));
