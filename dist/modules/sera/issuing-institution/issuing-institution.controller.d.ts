import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { IssuingInstitutionDTO } from './dto/issuing-institution.dto';
import { IssuingInstitutionService } from './issuing-institution.service';
export declare class IssuingInstitutionController {
    private issuingInstitutionService;
    constructor(issuingInstitutionService: IssuingInstitutionService);
    getAllIssuingInstitution(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getIssuingInstitutionById(id: number): Promise<import("rxjs").Observable<any>>;
    createIssuingInstitution(issuingInstitutionDTO: IssuingInstitutionDTO): Promise<import("rxjs").Observable<any>>;
    updateIssuingInstitution(issuingInstitutionDTO: IssuingInstitutionDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteIssuingInstitution(id: number): Promise<import("rxjs").Observable<any>>;
}
