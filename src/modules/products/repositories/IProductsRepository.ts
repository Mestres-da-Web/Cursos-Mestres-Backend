
import { Product } from "../model/Product";


interface ICreateProductDto {
  name: string;
  //brand: Brand;
  //specification?: Specification;
}

interface IProductsRepository {
  create({ name}: ICreateProductDto): Product;
  save(product: Product): Promise<Product>;
  // update(product: Product): void;
  list(): Promise<Product[]>;
  // findByName(name: string): Product | undefined;
  // findById(id: string): Product | undefined;
  // delete(id: string): void;
}

export { IProductsRepository, ICreateProductDto };
