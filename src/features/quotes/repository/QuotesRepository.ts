import Quote from "../../model/Quote.js";
import { type QuotesRepository, type QuoteStructure } from "../types.js";

class QuotesMongooseRepository implements QuotesRepository {
  public async getQuotes(): Promise<QuoteStructure[]> {
    const quotes = await Quote.find();

    return quotes;
  }

  public async getQuoteById(quoteId: string): Promise<QuoteStructure> {
    const quote = await Quote.findById(quoteId);

    if (!quote) {
      throw new Error("Thing not found!");
    }

    return quote;
  }
}

export default QuotesMongooseRepository;
