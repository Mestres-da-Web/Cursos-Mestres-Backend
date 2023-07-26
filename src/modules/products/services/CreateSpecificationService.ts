
import { AppError } from '../../../AppError';
import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(
      { name },
    );
    if (specificationAlreadyExists) {
      throw new AppError('Especificação já existe!', 403);
    }
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
