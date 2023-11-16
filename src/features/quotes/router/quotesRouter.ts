import { Router } from "express";
import QuotesController from "../controller/QuotesController.js";
import QuotesMongooseRepository from "../repository/QuotesRepository.js";

const quotesRouter = Router();

const quotesRepository = new QuotesMongooseRepository();
const quotesController = new QuotesController(quotesRepository);

quotesRouter.get("/", quotesController.getQuotes);

export default quotesRouter;
