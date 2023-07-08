import { Request, Response } from "express";
import { ListBrandUseCase } from './ListBrandUseCase';



class ListBrandController {
  constructor(private listBrandUseCase: ListBrandUseCase) {}
  handle(request: Request, response: Response): Response {
     const brandLists = this.listBrandUseCase.execute();
  
    return response.json(brandLists);
  }
}

export { ListBrandController };