import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { PenaltyDTO } from './dto/penalty.dto';
import { PenaltyService } from './penalty.service';
export declare class PenaltyController {
    private penaltyService;
    constructor(penaltyService: PenaltyService);
    getAllPenalty(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getPenaltyById(id: number): Promise<import("rxjs").Observable<any>>;
    createPenalty(penaltyDTO: PenaltyDTO): Promise<import("rxjs").Observable<any>>;
    updatePenalty(penaltyDTO: PenaltyDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deletePenalty(id: number): Promise<import("rxjs").Observable<any>>;
}
