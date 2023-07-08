import { Specification } from "../model/Specification";


interface ICreatedSpecificationDto {
  name: string;
  description?: string;
}

interface ISpecificationsRepository {
  findByName({ name }: ICreatedSpecificationDto): Specification;
  create({ name, description }: ICreatedSpecificationDto): void;
}


export { ISpecificationsRepository, ICreatedSpecificationDto };