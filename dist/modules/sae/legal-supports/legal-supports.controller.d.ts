import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { LegalSupportsDTO } from './dto/legal-supports.dto';
import { LegalSupportsService } from './legal-supports.service';
export declare class LegalSupportsController {
    private legalSupportService;
    constructor(legalSupportService: LegalSupportsService);
    getAllLegalSupports(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getLegalSupporstById(id: string): Promise<import("rxjs").Observable<any>>;
    createLegalSupports(legalSupportDTO: LegalSupportsDTO): Promise<import("rxjs").Observable<any>>;
    updateLegalSupports(legalSupportDTO: LegalSupportsDTO, id: string): Promise<import("rxjs").Observable<any>>;
    deleteLegalSupports(id: string): Promise<import("rxjs").Observable<any>>;
}
