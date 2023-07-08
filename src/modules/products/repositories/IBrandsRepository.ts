import { Brand } from "../model/Brand";


interface ICreatedBrandDto {
  name: string;
}

interface IBrandsRepository {
  findByName({ name }: ICreatedBrandDto): Brand;
  list(): Brand[];
  create({ name }: ICreatedBrandDto): void;
}


export { IBrandsRepository, ICreatedBrandDto };