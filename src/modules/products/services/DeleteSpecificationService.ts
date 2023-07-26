import { AppError } from '../../../AppError';
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  id: string;
}

class DeleteSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ id }: IRequest): void {
    const specificationExists = this.specificationsRepository.findById(id);
    if(!specificationExists){
      throw new AppError("Especificação nãso encontrado", 404);
    }
    this.specificationsRepository.delete(id);
  }
}

export { DeleteSpecificationService };
