import { AppError } from '../../../AppError';
import { IBrandsRepository } from '../repositories/IBrandsRepository';

interface IRequest {
  id: string;
  name: string;
}

class UpdateBrandService {
  constructor(private brandsRepository: IBrandsRepository) {}

  execute({ id, name }: IRequest): void {
    const brandExists = this.brandsRepository.findById(id);
    if(!brandExists){
      throw new AppError("Marca não encontrada", 404);
    }

    brandExists.name = name;
    this.brandsRepository.update(brandExists);
  }
}

export { UpdateBrandService };
