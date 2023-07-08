import { IBrandsRepository } from "../../repositories/IBrandsRepository"

interface IRequest {
  name:string
}

class CreateBrandUseCase {
  constructor(private brandsRepository: IBrandsRepository) {}

  execute({ name }: IRequest): void {
    const brandAlreadyExist = this.brandsRepository.findByName({ name });

    if (brandAlreadyExist) {
      throw new Error('Brand already exist');
    }
    this.brandsRepository.create({ name });
  }
}

export { CreateBrandUseCase };
