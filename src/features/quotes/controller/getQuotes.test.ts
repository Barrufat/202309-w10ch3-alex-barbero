import { type Request, type Response } from "express";
import { type QuotesRepository } from "../types.js";
import QuotesController from "./QuotesController.js";

describe("Given a getQuotes of a QuotesController", () => {
  describe("When it recieves a response", () => {
    test("Then it should call the method status of the response with '200' ", async () => {
      const quotesRepository: Pick<QuotesRepository, "getQuotes"> = {
        getQuotes: jest.fn(),
      };

      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      const quotesController = new QuotesController(
        quotesRepository as QuotesRepository,
      );

      await quotesController.getQuotes(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
