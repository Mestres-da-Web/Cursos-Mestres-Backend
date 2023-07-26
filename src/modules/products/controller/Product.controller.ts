import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";
import { IndexProductService } from "../services/IndexProductService";
import {container} from 'tsyringe'
//import { myClassTransformer } from "../../ClassTransformer";

class ProductController {
    create(request: Request, response: Response) {
        const { name } = request.body;
        const { brand_id, specification_id } = request.body;



        const createProductService = container.resolve(CreateProductService);

        createProductService.execute({name, brand_id, specification_id});

        return response.status(200).send();

    }

    async list(request: Request, response: Response): Promise<Response> {

        const indexProductService = container.resolve(IndexProductService);
        const products = await indexProductService.execute();
        return response.status(200).send(products);
    }

    // delete(request: Request, response: Response): Response {
    //     const { id } = request.params;

    //     deleteProductService.execute({id});


    //     return response.status(200).send();
    // }

    // update(request: Request, response: Response): Response {
    //     const { id } = request.params;
    //     const { name } = request.body;
    //     const { brand_id } = request.body;

    //     updateProductService.execute({id, name, brand_id});


    //     return response.status(200).send();
    // }

}

export { ProductController };