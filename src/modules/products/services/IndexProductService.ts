
import { inject, injectable } from 'tsyringe';
import { Product } from '../model/Product';
import { IProductsRepository } from '../repositories/IProductsRepository';

interface IRequest {

}

@injectable()
class IndexProductService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
    ) {}

  async execute(): Promise<Product[]> {

    const products = await this.productsRepository.list();

    return products;
  }
}

export { IndexProductService };
