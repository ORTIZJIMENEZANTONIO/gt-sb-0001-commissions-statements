import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SatClassificationDTO } from './dto/sat-classification.dto';
export declare class SatClassificationService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllSatClassification(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSatClassificationById(id: number): Promise<import("rxjs").Observable<any>>;
    createSatClassification(satClassificationDTO: SatClassificationDTO): Promise<import("rxjs").Observable<any>>;
    updateSatClassification(satClassificationDTO: SatClassificationDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteSatClassification(id: number): Promise<import("rxjs").Observable<any>>;
}
