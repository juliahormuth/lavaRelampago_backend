import { Request, Response } from 'express'
import { CreateWashUseCase } from '../domain/create-wash.use-case';
import { container } from 'tsyringe';



class CreateWashController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {washType, value } =  request.body;

        const createWashUseCase = container.resolve(CreateWashUseCase);

        await createWashUseCase.execute({
            washType, value
        });

        return response.status(201).send();
    }

}

export { CreateWashController };