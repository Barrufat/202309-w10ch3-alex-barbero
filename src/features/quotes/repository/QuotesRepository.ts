import Quote from "../model/Quote.js";
import { type QuotesRepository, type QuoteStructure } from "../types";

class QuotesMongooseRepository implements QuotesRepository {
  public async getQuotes(): Promise<QuoteStructure[]> {
    const quotes = await Quote.find();

    return quotes;
  }
}

export default QuotesMongooseRepository;
