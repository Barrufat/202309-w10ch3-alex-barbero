import { type Request } from "express";

export interface QuoteStructure {
  id: string;
  quote: string;
  quoteCreator: string;
}

export interface QuotesRepository {
  getQuotes: () => Promise<QuoteStructure[]>;
  getQuoteById: (quoteId: string) => Promise<QuoteStructure>;
}

export type ByQuoteId = Request<{
  quoteId: string;
}>;
