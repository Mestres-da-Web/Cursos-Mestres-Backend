import { Specification } from '../../model/Specification';
import {
  ISpecificationsRepository,
  ICreatedSpecificationDto,
} from '../ISpecificationsRepository';


class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreatedSpecificationDto): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName({ name }: ICreatedSpecificationDto): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name,
    );
    return specification;
  }
}

export { SpecificationsRepository };
