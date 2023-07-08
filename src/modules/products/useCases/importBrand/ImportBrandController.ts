import { Request, Response } from 'express';
import { ImportBrandUseCase } from './ImportBrandUseCase';

class ImportBrandController {
  constructor(private importBrandUseCase: ImportBrandUseCase) {}
  handler(request: Request, response: Response) {
    const { file } = request;
    this.importBrandUseCase.execute(file);
    response.send();
  }
}


export { ImportBrandController };