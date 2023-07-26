import { Brand } from '../model/Brand';
import { IBrandsRepository, ICreateBrandDto } from './IBrandsRepository';
import { getRepository } from 'typeorm'

class BrandsRepository implements IBrandsRepository {
  private brands: Brand[] = [];

  constructor() {
    this.brands = [];
  }

  create({ name }: ICreateBrandDto): Brand {
    const brand = new Brand();

    Object.assign(brand, {
      name,
      created_at: new Date(),
    });

    this.brands.push(brand);

    return brand;
  }

  list(): Brand[] {
    return this.brands;
  }

  findByName(name: string): Brand | undefined {
    const brand = this.brands.find(brand => brand.name === name);

    return brand;
  }

  findById(id: string): Brand | undefined {
    const brand = this.brands.find(brand => brand.id === id);

    return brand;
  }

  delete(id: string): void {
    this.brands = this.brands.filter(brand => brand.id !== id);
  }

  update(updateBrand: Brand): void {
    const brand = this.brands.find(brand => brand.id === updateBrand.id)!;

    brand.name = updateBrand.name;
  }
  
}

export { BrandsRepository };
