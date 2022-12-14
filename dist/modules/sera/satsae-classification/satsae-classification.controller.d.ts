import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SatSaeClassificationDTO } from './dto/satsae-classification.dto';
import { SatsaeClassificationService } from './satsae-classification.service';
export declare class SatsaeClassificationController {
    private satSaeClassficiationService;
    constructor(satSaeClassficiationService: SatsaeClassificationService);
    getAllSatSaeClassification(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSatSaeClassificationById(id: number): Promise<import("rxjs").Observable<any>>;
    createSatSaeClassification(cityDTO: SatSaeClassificationDTO): Promise<import("rxjs").Observable<any>>;
    updateSatSaeClassification(cityDTO: SatSaeClassificationDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteSatSaeClassification(id: number): Promise<import("rxjs").Observable<any>>;
}
