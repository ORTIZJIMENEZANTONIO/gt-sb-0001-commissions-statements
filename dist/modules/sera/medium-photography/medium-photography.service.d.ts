import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { MediumPhotographyDTO } from './dto/medium-photography.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class MediumPhotographyService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllMediumPhotography(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getMediumPhotographyById(id: number): Promise<import("rxjs").Observable<any>>;
    createMediumPhotography(mediumPhotographyDTO: MediumPhotographyDTO): Promise<import("rxjs").Observable<any>>;
    updateMediumPhotography(mediumPhotographyDTO: MediumPhotographyDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteMediumPhotography(id: number): Promise<import("rxjs").Observable<any>>;
}
