import { injectable, inject } from "tsyringe"
import { IWashDTO } from "../dto/IWashDTO"
import { IWashRepository } from "../infra/repositories/IWashRepository"


@injectable()
class CreateWashUseCase {
    
    constructor(
        @inject("WashRepository")
        private washRepository: IWashRepository
    ) {}

    async execute( { 
       washType, 
       value,
       start_wash,
       expected_end_wash,
       customer,
       car
        }: IWashDTO): Promise<void> {
        
            const wash = await this.washRepository.create({
                washType,
                value,
                start_wash,
                expected_end_wash,
                customer,
                car
            })

            return wash;
        }
}

export { CreateWashUseCase }