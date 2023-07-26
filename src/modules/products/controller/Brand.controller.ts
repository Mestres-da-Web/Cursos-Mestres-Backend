// import { Request, Response } from "express";
// import { createBrandService, deleteBrandService, brandsRepository, updateBrandService } from '../..'
// import { myClassTransformer } from "../../ClassTransformer";

// class BrandController {
//     create(request: Request, response: Response) {
//         const { name } = request.body;

//         createBrandService.execute({name});

//         return response.status(200).send();

//     }

//     list(request: Request, response: Response): Response {

//         const brands = brandsRepository.list();

//         return response.status(200).send(myClassTransformer(brands));
//     }

//     delete(request: Request, response: Response): Response {
//         const { id } = request.params;

//         deleteBrandService.execute({id});


//         return response.status(200).send();
//     }

//     update(request: Request, response: Response): Response {
//         const { id } = request.params;
//         const { name } = request.body;

//         updateBrandService.execute({id, name});


//         return response.status(200).send();
//     }

// }

// export { BrandController };