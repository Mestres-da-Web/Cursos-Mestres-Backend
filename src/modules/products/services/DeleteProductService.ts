
import { AppError } from '../../../AppError';
import { IProductsRepository } from '../repositories/IProductsRepository';

interface IRequest {
  id: string;
}

class DeleteProductService {
  constructor(private productsRepository: IProductsRepository) {}

  execute({ id }: IRequest): void {
    const productExists = this.productsRepository.findById(id);
    if(!productExists){
      throw new AppError("Produto não encontrado", 404);
    }
    this.productsRepository.delete(id);
  }
}

export { DeleteProductService };
