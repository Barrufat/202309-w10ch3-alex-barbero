import { type Request, type Response } from "express";
import { type QuotesRepository } from "../types.js";
import QuotesController from "./QuotesController";

describe("", () => {
  describe("", () => {
    test("", async () => {
      const quotesRepository: Pick<QuotesRepository, "getQuotes"> = {
        getQuotes: jest.fn(),
      };

      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      const quotesController = new QuotesController(quotesRepository);

      await quotesController.getQuotes(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
