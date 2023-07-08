import { Brand } from '../../model/Brand';
import { IBrandsRepository, ICreatedBrandDto } from '../IBrandsRepository';


class BrandsRepository implements IBrandsRepository {
  private brands: Brand[];

  private static INSTANCE: BrandsRepository;

  private constructor() {
    this.brands = [];
  }

  public static getInstance(): BrandsRepository{
    if (!BrandsRepository.INSTANCE) {
      BrandsRepository.INSTANCE = new BrandsRepository()
    }
    return BrandsRepository.INSTANCE;
  }

  create({ name }: ICreatedBrandDto): void {
    const brand = new Brand();

    Object.assign(brand, {
      name,
      created_at: new Date(),
    });

    this.brands.push(brand);
  }

  list(): Brand[] {
    return this.brands;
  }

  findByName({ name }: ICreatedBrandDto): Brand {
    const brand = this.brands.find((brand) => brand.name === name);
    return brand;
  }
}

export { BrandsRepository };
