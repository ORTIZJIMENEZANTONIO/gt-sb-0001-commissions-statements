import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ClarificationService } from './clarification.service';
import { ClarificationDto } from './dto/clarification.dto';
export declare class ClarificationController {
    private readonly clarificationService;
    constructor(clarificationService: ClarificationService);
    createClarification(clarificationDto: ClarificationDto): Promise<import("rxjs").Observable<any>>;
    getAllClarifications(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getClarificationById(id: number): Promise<void>;
    updateClarification(idToUpdate: number, data: ClarificationDto): Promise<import("rxjs").Observable<any>>;
    deleteClarification(id: number): Promise<import("rxjs").Observable<any>>;
}
