
import { AppError } from '../../../AppError';
import { IBrandsRepository } from '../repositories/IBrandsRepository';
import { IProductsRepository } from '../repositories/IProductsRepository';

interface IRequest {
  id: string;
  name: string;
  brand_id?: string;
}

class UpdateProductService {
  constructor(private productsRepository: IProductsRepository, private brandsRepository: IBrandsRepository) {}

  execute({ id, name, brand_id }: IRequest): void {
    const productExists = this.productsRepository.findById(id);
    if(!productExists){
      throw new AppError("Produto não encontrado", 404);
    }

    if(brand_id){
      const newBrand = this.brandsRepository.findById(brand_id);
      if(newBrand){
        const oldBrand = productExists.brand;
        oldBrand.products = oldBrand.products.filter(product => product.id !== productExists.id)
        newBrand.products.push(productExists);
        productExists.brand = newBrand;
      }
    }

    productExists.name = name;
    this.productsRepository.update(productExists);
  }
}

export { UpdateProductService };
