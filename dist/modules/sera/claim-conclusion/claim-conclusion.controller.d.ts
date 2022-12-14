import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ClaimConclusionService } from './claim-conclusion.service';
import { ClaimConclusionDTO } from './dto/claim-conclusion.dto';
export declare class ClaimConclusionController {
    private claimConclusionService;
    constructor(claimConclusionService: ClaimConclusionService);
    getAllClaimConclusion(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getClaimConclusionById(id: number): Promise<import("rxjs").Observable<any>>;
    createClaimConclusion(claimConclusionDTO: ClaimConclusionDTO): Promise<import("rxjs").Observable<any>>;
    updateClaimConclusion(claimConclusionDTO: ClaimConclusionDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteClaimConclusion(id: number): Promise<import("rxjs").Observable<any>>;
}
