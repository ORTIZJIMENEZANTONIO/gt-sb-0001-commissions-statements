import { ClientProxy } from '@nestjs/microservices';
import { ClarificationDto } from './dto/clarification.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
export declare class ClarificationService {
    private readonly clarificationProxy;
    constructor(clarificationProxy: ClientProxy);
    createClarification(clarification: ClarificationDto): Promise<import("rxjs").Observable<any>>;
    getAllClarifications(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getClarificationById(id: number): Promise<import("rxjs").Observable<any>>;
    updateClarification(idToUpdate: number, clarification: ClarificationDto): Promise<import("rxjs").Observable<any>>;
    deleteClarification(id: number): Promise<import("rxjs").Observable<any>>;
}
