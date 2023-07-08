import { Request, Response } from "express";
import { CreateBrandUseCase } from "./CreateBrandUseCase";


class CreateBrandController {
  constructor(private createBrandUseCase: CreateBrandUseCase) {};
  handle(request: Request, response: Response): Response {
    const { name } = request.body;

    this.createBrandUseCase.execute({ name });

    return response.status(200).send();
  }
}

export { CreateBrandController };