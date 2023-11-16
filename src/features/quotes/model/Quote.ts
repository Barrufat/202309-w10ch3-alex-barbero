import { Schema, model } from "mongoose";
import { type QuoteStructure } from "../types";

const quoteSchema = new Schema<QuoteStructure>({
  quote: {
    type: String,
    required: true,
  },
  quoteCreator: {
    type: String,
    required: true,
  },
});

const Quote = model("Quote", quoteSchema, "quotes");

export default Quote;
