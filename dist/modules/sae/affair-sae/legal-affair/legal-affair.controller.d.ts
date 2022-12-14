import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { LegalAffairService } from './legal-affair.service';
import { LegalAffairDto } from './dto/legal-affair.dto';
export declare class LegalAffairController {
    private readonly legalAffairService;
    constructor(legalAffairService: LegalAffairService);
    createLegalAffair(legalAffairDto: LegalAffairDto): Promise<import("rxjs").Observable<any>>;
    getAllLegalAffairs(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getLegalAffairById(id: number): Promise<import("rxjs").Observable<any>>;
    updateLegalAffair(idToUpdate: number, data: LegalAffairDto): Promise<import("rxjs").Observable<any>>;
    deleteLegalAffair(id: number): Promise<import("rxjs").Observable<any>>;
}
