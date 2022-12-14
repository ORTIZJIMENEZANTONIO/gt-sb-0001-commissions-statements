import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DelegationService } from './delegation.service';
import { DelegationDTO } from './dto/delegation.dto';
export declare class DelegationController {
    private delegationService;
    constructor(delegationService: DelegationService);
    getAllDelegation(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getDelegationById(id: number): Promise<import("rxjs").Observable<any>>;
    createDelegation(delegationDTO: DelegationDTO): Promise<import("rxjs").Observable<any>>;
    updateDelegation(delegationDTO: DelegationDTO, id: number): Promise<import("rxjs").Observable<any>>;
    deleteDelegation(id: number): Promise<import("rxjs").Observable<any>>;
}
