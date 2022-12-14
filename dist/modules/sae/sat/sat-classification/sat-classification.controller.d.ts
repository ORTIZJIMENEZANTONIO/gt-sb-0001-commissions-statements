import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SatClassificationDTO } from './dto/sat-classification.dto';
import { SatClassificationService } from './sat-classification.service';
export declare class SatClassificationController {
    private satClassificationService;
    constructor(satClassificationService: SatClassificationService);
    getAllSatClassification(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getSatClassificationById(id: number): Promise<import("rxjs").Observable<any>>;
    createSatClassification(satClassificationDTO: SatClassificationDTO): Promise<import("rxjs").Observable<any>>;
    updateSatClassification(satClassificationDTO: SatClassificationDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteSatClassification(id: number): Promise<import("rxjs").Observable<any>>;
}
