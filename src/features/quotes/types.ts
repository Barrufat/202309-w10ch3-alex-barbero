export interface QuoteStructure {
  id: string;
  quote: string;
  quoteCreator: string;
}

export interface QuotesRepository {
  getQuotes: () => Promise<QuoteStructure[]>;
}
