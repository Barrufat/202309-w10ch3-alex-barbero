import { type Request, type Response } from "express";
import { type ByQuoteId, type QuotesRepository } from "../types.js";

class QuotesController {
  constructor(private readonly quotesRepository: QuotesRepository) {}

  getQuotes = async (_req: Request, res: Response): Promise<void> => {
    const quotes = await this.quotesRepository.getQuotes();

    res.status(200).json({ quotes });
  };

  getQuoteById = async (req: ByQuoteId, res: Response) => {
    const { quoteId } = req.params;

    try {
      const quote = await this.quotesRepository.getQuoteById(quoteId);
      res.status(200).json({ quote });
    } catch {
      res.status(400).json({ error: "current quote not found" });
    }
  };
}

export default QuotesController;
