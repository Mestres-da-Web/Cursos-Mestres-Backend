// import { Request, Response } from "express";
// import { createSpecificationService, specificationsRepository, updateSpecificationService, deleteSpecificationService }  from '../..'
// import { myClassTransformer } from "../../ClassTransformer";

// class SpecificationController {
//     create(request: Request, response: Response) {
//         const { name, description } = request.body;

//         createSpecificationService.execute({name, description});

//         response.status(200).send();

//     }

//     list(request: Request, response: Response): Response {

//         const specifications = specificationsRepository.list();

//         return response.status(200).send(myClassTransformer(specifications));
//     }

//     update(request: Request, response: Response) {
//         const { id } = request.params;
//         const { name, description } = request.body;

//         updateSpecificationService.execute({id, name, description});

//         response.status(200).send();

//     }

//     delete(request: Request, response: Response) {
//         const { id } = request.params;

//         deleteSpecificationService.execute({id});

//         response.status(200).send();

//     }
// }

// export { SpecificationController };