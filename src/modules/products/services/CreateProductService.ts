
import { AppError } from '../../../AppError';
import { Specification } from '../model/Specification';
import { IBrandsRepository } from '../repositories/IBrandsRepository';
import { IProductsRepository } from '../repositories/IProductsRepository';
import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';
import {inject, injectable} from 'tsyringe'

interface IRequest {
  name: string;
  brand_id: string;
  specification_id?: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    //@inject('BrandsRepository')
    //private brandsRepository: IBrandsRepository,
    p//rivate specificationsRepository: ISpecificationsRepository
    ) {}

  execute({ name, brand_id, specification_id }: IRequest): void {
    // const brand = this.brandsRepository.findById(brand_id);

    // if(!brand){
    //   throw new AppError("Marca não encontrado", 404);
    // }

    // let specification: Specification | undefined = undefined;
    
    // if(specification_id){
    //   specification = this.specificationsRepository.findById(specification_id);
    // }

    // const productAlreadyExists = this.productsRepository.findByName(name);
    // if (productAlreadyExists) {
    //   throw new AppError('Produto já existe!', 403);
    // }
    const product = this.productsRepository.create({ name });
    this.productsRepository.save(product);
  }
}

export { CreateProductService };
