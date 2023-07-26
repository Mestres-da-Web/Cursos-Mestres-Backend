import { Specification } from '../model/Specification';

interface ICreateSpecificationDto {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDto): void;
  findByName({ name }: ICreateSpecificationDto): Specification | undefined;
  findById(id: string): Specification | undefined;
  update(specification: Specification): void;
  delete(id: string): void;
}

export { ISpecificationsRepository, ICreateSpecificationDto };
