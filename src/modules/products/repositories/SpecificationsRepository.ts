import { Specification } from '../model/Specification';
import {
  ICreateSpecificationDto,
  ISpecificationsRepository,
} from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[] = [];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDto): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);

    return specification;
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName({ name }: ICreateSpecificationDto): Specification | undefined {
    const specification = this.specifications.find(
      specification => specification.name === name,
    );

    return specification;
  }

  findById(id: string): Specification | undefined {
    const specification = this.specifications.find(spec => spec.id === id);

    return specification;
  }

  update(updateSpecification: Specification): void {
    const specification = this.specifications.find(spec => spec.id === updateSpecification.id)!;

    specification.name = updateSpecification.name;
    specification.description = updateSpecification.description;
  }

  delete(id: string): void {
    this.specifications = this.specifications.filter(spec => spec.id !== id);

  }
  
}

export { SpecificationsRepository };
