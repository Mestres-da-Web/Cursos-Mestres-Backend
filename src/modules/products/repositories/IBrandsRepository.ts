import { Brand } from '../model/Brand';

interface ICreateBrandDto {
  name: string;
}

// interface IUpdateBrandDto extends ICreateBrandDto {
//   id: string;
// }

interface IBrandsRepository {
  create({ name }: ICreateBrandDto): void;
  update(brand: Brand): void;
  list(): Brand[];
  findByName(name: string): Brand | undefined;
  findById(id: string): Brand | undefined;
  delete(id: string): void;
}

export { IBrandsRepository, ICreateBrandDto };
