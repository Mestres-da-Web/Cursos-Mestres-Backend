import { Product } from "../model/Product";
import { IProductsRepository, ICreateProductDto } from "./IProductsRepository";
import { getRepository, Repository } from "typeorm";

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  create({ name }: ICreateProductDto): Product {
    const product = this.ormRepository.create({
      name: name,
    })
    return product;
  }
  async save(product: Product): Promise<Product>{
    const savedProduct = this.ormRepository.save(product);
    
    return savedProduct;
  }

  async list(): Promise<Product[]> {
    const products = await this.ormRepository.find({})

    return products;
  }

  // findByName(name: string): Product | undefined {
  //   const product = this.products.find((product) => product.name === name);

  //   return product;
  // }

  // findById(id: string): Product | undefined {
  //   const product = this.products.find((product) => product.id === id);

  //   return product;
  // }

  // delete(id: string): void {
  //   const product = this.products.find((product) => product.id === id);
  //   if (product) {
  //     product.brand.products = product.brand.products.filter(
  //       (product) => product.id !== id
  //     );
  //   }

  //   this.products = this.products.filter((product) => product.id !== id);
  // }

  // update(updateProduct: Product): void {
  //   const product = this.products.find(
  //     (product) => product.id === updateProduct.id
  //   )!;

  //   product.name = updateProduct.name;
  //   product.brand = updateProduct.brand;
  //   product.specification = updateProduct.specification;

  //   if (product.specification) {
  //     product.specification.products.push(product);
  //   }
  // }
}

export { ProductsRepository };
