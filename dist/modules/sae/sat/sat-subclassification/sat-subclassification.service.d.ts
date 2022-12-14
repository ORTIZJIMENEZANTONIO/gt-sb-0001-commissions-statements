import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SatSubClassificationDTO } from './dto/sat-classification.dto';
export declare class SatSubclassificationService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllSatSubClassification(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSatSubClassificationById(id: number): Promise<import("rxjs").Observable<any>>;
    createSatSubClassification(satSubClassificationDTO: SatSubClassificationDTO): Promise<import("rxjs").Observable<any>>;
    updateSatSubClassification(satSubClassificationDTO: SatSubClassificationDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteSatSubClassification(id: number): Promise<import("rxjs").Observable<any>>;
}
