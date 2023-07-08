import { Router } from 'express';

import { createBrandController } from '../modules/products/useCases/createBrand';
import { listBrandController } from '../modules/products/useCases/listBrands';
import { importBrandController } from '../modules/products/useCases/importBrand';

import multer from 'multer';

const brandsRoutes = Router();
const upload = multer({ dest: './tmp' });


brandsRoutes.post('/', (request, response) => {
  return createBrandController.handle(request, response);
});

brandsRoutes.get('/', (request, response) => {
  return listBrandController.handle(request, response);
});

brandsRoutes.post('/import', upload.single('file'), (request, response) => {
  return importBrandController.handler(request,response);
});

export { brandsRoutes };
