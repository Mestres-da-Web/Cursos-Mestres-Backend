

import { AppError } from '../../../AppError';
import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
  id: string;
  name: string;
  description: string;
}

class UpdateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ id, name, description }: IRequest): void {
    const specificationExists = this.specificationsRepository.findById(id);

    if(!specificationExists){
      throw new AppError("Especificação não encontrado", 404);
    }

    specificationExists.name = name;
    specificationExists.description = description;
    this.specificationsRepository.update(specificationExists);
  }
}

export { UpdateSpecificationService };
