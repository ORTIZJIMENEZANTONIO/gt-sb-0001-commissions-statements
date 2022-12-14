import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { InstitutionClassificationDTO } from './dto/institution-classification.dto';
import { InstitutionClassificationService } from './institution-classification.service';
export declare class InstitutionClassificationController {
    private institutionClassificationService;
    constructor(institutionClassificationService: InstitutionClassificationService);
    getAllInstitutionClassification(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getInstitutionClassificationById(id: number): Promise<import("rxjs").Observable<any>>;
    createInstitutionClassification(lockerDTO: InstitutionClassificationDTO): Promise<import("rxjs").Observable<any>>;
    updateInstitutionClassification(lockerDTO: InstitutionClassificationDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteInstitutionClassification(id: number): Promise<import("rxjs").Observable<any>>;
}
