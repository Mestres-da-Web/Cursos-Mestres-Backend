import { AppError } from '../../../AppError';
import { IBrandsRepository } from '../repositories/IBrandsRepository';

interface IRequest {
  id: string;
}

class DeleteBrandService {
  constructor(private brandsRepository: IBrandsRepository) {}

  execute({ id }: IRequest): void {
    const brandExists = this.brandsRepository.findById(id);
    if(!brandExists){
      throw new AppError("Marca não encontrado", 404);
    }
    this.brandsRepository.delete(id);
  }
}

export { DeleteBrandService };
