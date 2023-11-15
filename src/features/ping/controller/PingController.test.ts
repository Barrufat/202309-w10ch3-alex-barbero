import { type Request, type Response } from "express";
import PingController from "./PingController";

describe("Given a PingController's GetPong method", () => {
  describe("When it recieves a response", () => {
    const pingController = new PingController();

    const mockStatus = jest.fn().mockReturnValue({ json: jest.fn() });

    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: mockStatus,
      json: jest.fn(),
    };

    pingController.getPong(req as Request, res as Response);

    test("It should call the status method with 200", () => {
      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("It should call the status method with a message 🏓", () => {
      expect(res.status(200).json).toHaveBeenCalledWith({
        message: "🏓",
      });
    });
  });
});
