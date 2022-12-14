import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { ClaimConclusionDTO } from './dto/claim-conclusion.dto';
export declare class ClaimConclusionService {
    private readonly clientProxy;
    constructor(clientProxy: ClientProxy);
    getAllClaimConclusion(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getClaimConclusionById(id: number): Promise<import("rxjs").Observable<any>>;
    createClaimConclusion(claimConclusionDTO: ClaimConclusionDTO): Promise<import("rxjs").Observable<any>>;
    updateClaimConclusion(claimConclusionDTO: ClaimConclusionDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteClaimConclusion(id: number): Promise<import("rxjs").Observable<any>>;
}
