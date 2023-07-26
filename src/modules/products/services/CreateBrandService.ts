

import { AppError } from '../../../AppError';
import { IBrandsRepository } from '../repositories/IBrandsRepository';

interface IRequest {
  name: string;
}

class CreateBrandService {
  constructor(private brandsRepository: IBrandsRepository) {}

  execute({ name }: IRequest): void {
    const brandAlreadyExists = this.brandsRepository.findByName(name);
    if (brandAlreadyExists) {
      throw new AppError('Marca já existe!', 403);
    }
    this.brandsRepository.create({ name });
  }
}

export { CreateBrandService };
