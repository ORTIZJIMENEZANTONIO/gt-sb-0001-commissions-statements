import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { DelegationStateService } from './delegation-state.service';
import { DelegationStateDto } from './dto/create-delegation-state.dto';
export declare class DelegationStateController {
    private readonly delegationStateService;
    constructor(delegationStateService: DelegationStateService);
    createDelegationState(delegationStateDto: DelegationStateDto): Promise<import("rxjs").Observable<any>>;
    getAllDelegationStates(pagination: PaginationDto): Promise<import("rxjs").Observable<any>>;
    getDelegationStateById(id: number): Promise<import("rxjs").Observable<any>>;
    updateDelegationState(id: number, data: DelegationStateDto): Promise<import("rxjs").Observable<any>>;
    deleteDelegationState(id: number): Promise<import("rxjs").Observable<any>>;
}
