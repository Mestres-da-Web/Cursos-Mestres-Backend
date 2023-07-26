import { Router } from 'express';

import { ProductController } from '../controller/Product.controller'; 


const productsRouter = Router();

const productController = new ProductController();

productsRouter.post('/', productController.create);

productsRouter.get('/', productController.list);

// productsRouter.delete('/:id', productController.delete);

// productsRouter.put('/:id', productController.update);



export { productsRouter };
