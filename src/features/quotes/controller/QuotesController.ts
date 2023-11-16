import { type Request, type Response } from "express";
import { type QuotesRepository } from "../types.js";

class QuotesController {
  constructor(private readonly quotesRepository: QuotesRepository) {}

  getQuotes = async (_req: Request, res: Response): Promise<void> => {
    const quotes = await this.quotesRepository.getQuotes();

    res.status(200).json({ quotes });
  };
}

export default QuotesController;
