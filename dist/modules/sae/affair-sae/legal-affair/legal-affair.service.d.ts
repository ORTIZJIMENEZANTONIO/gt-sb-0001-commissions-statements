import { ClientProxy } from '@nestjs/microservices';
import { LegalAffairDto } from './dto/legal-affair.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class LegalAffairService {
    private readonly legalAffairProxy;
    constructor(legalAffairProxy: ClientProxy);
    createLegalAffair(legalAffair: LegalAffairDto): Promise<import("rxjs").Observable<any>>;
    getAllLegalAffairs(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getLegalAffairById(id: number): Promise<import("rxjs").Observable<any>>;
    updateLegalAffair(idToUpdate: number, legalAffair: LegalAffairDto): Promise<import("rxjs").Observable<any>>;
    deleteLegalAffair(id: number): Promise<import("rxjs").Observable<any>>;
}
