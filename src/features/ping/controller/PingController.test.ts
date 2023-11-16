import { type Request, type Response } from "express";
import PingController from "./PingController";

describe("Given a PingController's GetPong method", () => {
  describe("When it recieves a response", () => {
    const pingController = new PingController();

    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("It should call the status method with 200", () => {
      pingController.getPong(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("It should call the status method with a message 🏓", () => {
      pingController.getPong(req as Request, res as Response);

      expect(res.status(200).json).toHaveBeenCalledWith({
        message: "🏓",
      });
    });
  });
});
