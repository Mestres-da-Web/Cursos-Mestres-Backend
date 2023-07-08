

import { BrandsRepository } from '../../repositories/implementations/BrandsRepository';
import { ListBrandUseCase } from './ListBrandUseCase';
import { ListBrandController } from './ListBrandController';


const brandsRepository = BrandsRepository.getInstance();

const listBrandUseCase = new ListBrandUseCase(brandsRepository);

const listBrandController = new ListBrandController(listBrandUseCase);

export { listBrandController };