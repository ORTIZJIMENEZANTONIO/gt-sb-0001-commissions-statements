import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SatSaeClassificationDTO } from './dto/satsae-classification.dto';
export declare class SatsaeClassificationService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllSatSaeClassification(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSatSaeClassificationById(id: number): Promise<import("rxjs").Observable<any>>;
    createSatSaeClassification(satSaeClassficiationDTO: SatSaeClassificationDTO): Promise<import("rxjs").Observable<any>>;
    updateSatSaeClassification(satSaeClassficiationDTO: SatSaeClassificationDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteSatSaeClassification(id: number): Promise<import("rxjs").Observable<any>>;
}
