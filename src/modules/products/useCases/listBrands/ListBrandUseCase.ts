import { Brand } from "../../model/Brand";
import { IBrandsRepository } from "../../repositories/IBrandsRepository"

class ListBrandUseCase {
  constructor(private brandsRepository: IBrandsRepository) {}

  execute(): Brand[] {
    const all = this.brandsRepository.list();
    
    return all;
  }
}

export { ListBrandUseCase };
