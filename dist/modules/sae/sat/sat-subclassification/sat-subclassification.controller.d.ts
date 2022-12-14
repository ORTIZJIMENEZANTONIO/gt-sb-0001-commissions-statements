import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SatSubClassificationDTO } from './dto/sat-classification.dto';
import { SatSubclassificationService } from './sat-subclassification.service';
export declare class SatSubclassificationController {
    private satSubClassificationService;
    constructor(satSubClassificationService: SatSubclassificationService);
    getAllSatSubClassification(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSatSubClassificationById(id: number): Promise<import("rxjs").Observable<any>>;
    createSatSubClassification(satSubClassificationDTO: SatSubClassificationDTO): Promise<import("rxjs").Observable<any>>;
    updateSatSubClassification(satSubClassificationDTO: SatSubClassificationDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteSatSubClassification(id: number): Promise<import("rxjs").Observable<any>>;
}
